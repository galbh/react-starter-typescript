import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/header/header.component';
import Container from './styles';
import { bindActionCreators } from 'redux';
import { StartLoaderAction, StopLoaderAction, ChangeLanguageAction } from '../../../common/state/shared/shared.actions.js';
import { FetchLoggedInUserAction } from '../../../common/state/auth/auth.actions.js';
import Iuser from '../../../common/state/auth/auth.models';
import SpinnerComponent from '../../components/spinner/spinner.component.jsx';
import DrawerComponent from '../../components/drawer/drawer.component';
import { OpenDrawerAction, CloseDrawerAction } from '../../../common/state/drawer/drawer.actions';
import urlTitleDictionary from '../../../common/state/shared/url-title-dictionary';

interface Iprops {
  user: Iuser,
  startLoader: Function,
  stopLoader: Function,
  fetchUser: Function,
  path: string,
  component: React.FC<any>,
  openDrawer: React.EventHandler<any>,
  closeDrawer: React.EventHandler<any>,
  changeLanguage: React.EventHandler<any>,
  loading: boolean,
  isDrawerRender: boolean,
  isRtl: boolean,
  languages: Array<string>,
  language: string
}

const DefaultLayout: React.FC<Iprops> = ({
  user, path, component: Component, openDrawer, closeDrawer, changeLanguage,
  startLoader, fetchUser, stopLoader, loading, isDrawerRender, languages, language, isRtl
}) => {

  useEffect(() => {
    startLoader();
    fetchUser().then(() => stopLoader())
  }, [startLoader, fetchUser, stopLoader]);

  const title: string = urlTitleDictionary[path];

  return (
    <Route
      path={path}
      render={matchProps => (
        <div dir={isRtl ? 'rtl' : 'ltr'}>
          <HeaderComponent openDrawer={openDrawer} loggedInUser={user} title={title} />
          <Container>

            {loading && <SpinnerComponent />}

            <DrawerComponent
              languages={languages}
              language={language}
              open={isDrawerRender}
              closeDrawer={closeDrawer}
              onChangeLanguage={changeLanguage}
              isRtl={isRtl}
            />

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
    openDrawer: bindActionCreators(OpenDrawerAction, dispatch),
    closeDrawer: bindActionCreators(CloseDrawerAction, dispatch),
    fetchUser: bindActionCreators(FetchLoggedInUserAction, dispatch),
    changeLanguage: bindActionCreators(ChangeLanguageAction, dispatch),
  }
}

const mapStateToProps = (state: any) => {
  return {
    isRtl: state.shared.isRtl(),
    user: state.auth.loggedInUser,
    loading: state.shared.loading,
    isDrawerRender: state.drawer.isRender,
    language: state.shared.language,
    languages: state.shared.supportedLanguages,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
