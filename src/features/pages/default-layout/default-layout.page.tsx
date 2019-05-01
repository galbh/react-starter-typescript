import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/header/header.component';
import Container from './styles';
import { bindActionCreators } from 'redux';
import { StartLoaderAction, StopLoaderAction } from '../../../common/state/shared/shared.actions.js';
import { FetchLoggedInUserAction } from '../../../common/state/auth/auth.actions.js';
import Iuser from '../../../common/state/auth/auth.models';
import SpinnerComponent from '../../components/spinner/spinner.component.jsx';

interface Iprops {
  user: Iuser,
  startLoader: Function,
  stopLoader: Function,
  fetchUser: Function,
  path: string,
  component: React.FC<any>,
  openDrawer: React.EventHandler<any>,
  title: string,
  loading: boolean
}

const DefaultLayout: React.FC<Iprops> = ({
  user, path, component: Component, openDrawer, title, startLoader, fetchUser, stopLoader, loading
}) => {

  useEffect(() => {
    startLoader();
    fetchUser().then(() => stopLoader())
  }, [startLoader, fetchUser, stopLoader]);

  return (
    <Route
      path={path}
      render={matchProps => (
        <div>
          <HeaderComponent openDrawer={openDrawer} loggedInUser={user} title={title} />
          <Container>
            {loading && <SpinnerComponent />}
            {user && <Component {...matchProps} />}
          </Container>
        </div>
      )}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    startLoader: bindActionCreators(StartLoaderAction, dispatch),
    stopLoader: bindActionCreators(StopLoaderAction, dispatch),
    fetchUser: bindActionCreators(FetchLoggedInUserAction, dispatch)
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.loggedInUser,
    loading: state.shared.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
