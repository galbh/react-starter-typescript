import React from 'react';
import { Route } from 'react-router-dom';
import { connect, Matching } from 'react-redux';
import HeaderComponent from '../../components/header/header.component';
import { Container, GlobalStyle } from './styles';
import { Dispatch } from 'redux';
// import {
//   StartLoaderAction,
//   StopLoaderAction,
//   ChangeLanguageAction
// } from '../../../common/state/shared/shared.actions';
// import { FetchLoggedInUserAction } from '../../../common/state/auth/auth.actions';
import User from '../../../common/state/auth/auth.models';
// import SpinnerComponent from '../../components/spinner/spinner.component';
// import DrawerComponent from '../../components/drawer/drawer.component';
// import {
//   OpenDrawerAction,
//   CloseDrawerAction
// } from '../../../common/state/drawer/drawer.actions';
import urlTitleDictionary from '../../../common/state/shared/url-title-dictionary';
import { DirectionContext } from '../../../common/contexts';
import { RootState } from '../../../common/models';
import { RouteChildrenProps } from 'react-router';
import { ActionCreator } from 'typesafe-actions';

interface AppProps {
  user: User;
  // startLoader: () => void;
  // stopLoader: () => void;
  // fetchUser: () => Promise<User>;
  path: string;
  component: React.FC<RouteChildrenProps>;
  // openDrawer: () => void;
  // closeDrawer: () => void;
  // changeLanguage: (args0: string) => void;
  // loading: boolean;
  // isDrawerRender: boolean;
  // isRtl: boolean;
  // languages: StringMap;
  // language: string;
}

const DefaultLayout: React.FC<Matching<AppProps, any>> = ({
  user,
  path,
  component: Component
  // openDrawer,
  // closeDrawer,
  // changeLanguage,
  // startLoader,
  // fetchUser
  // stopLoader,
  // loading,
  // isDrawerRender,
  // languages,
  // language,
  // isRtl
}) => {
  // useEffect(() => {
  // startLoader();
  // fetchUser();
  // .then(() => stopLoader());
  // }, [fetchUser]); //[startLoader, fetchUser, stopLoader]);

  const title: string = urlTitleDictionary[path];
  // const direction: string = isRtl ? 'rtl' : 'ltr';

  return (
    <DirectionContext.Provider value={'ltr'}>
      <Route
        path={path}
        render={(matchProps: RouteChildrenProps) => (
          // dir={direction}
          <div>
            <HeaderComponent
              openDrawer={() => {}} //openDrawer
              loggedInUser={user}
              title={title}
            />

            <Container>
              <GlobalStyle />

              {/*{loading && <SpinnerComponent />}*/}

              {/*<DrawerComponent*/}
              {/*  languages={languages}*/}
              {/*  language={language}*/}
              {/*  open={isDrawerRender}*/}
              {/*  closeDrawer={closeDrawer}*/}
              {/*  onChangeLanguage={changeLanguage}*/}
              {/*  isRtl={isRtl}*/}
              {/*/>*/}

              {user && <Component {...matchProps} />}
            </Container>
          </div>
        )}
      />
    </DirectionContext.Provider>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ActionCreator<any>>) => {
  return {
    // startLoader: bindActionCreators(StartLoaderAction, dispatch),
    // stopLoader: bindActionCreators(StopLoaderAction, dispatch),
    // openDrawer: bindActionCreators(OpenDrawerAction, dispatch),
    // closeDrawer: bindActionCreators(CloseDrawerAction, dispatch),
    // fetchUser: bindActionCreators(FetchLoggedInUserAction, dispatch)
    // changeLanguage: bindActionCreators(ChangeLanguageAction, dispatch)
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    // isRtl: state.shared.isRtl(),
    user: state.auth.loggedInUser
    // loading: state.shared.loading,
    // isDrawerRender: state.drawer.isRender,
    // language: state.shared.language,
    // languages: state.shared.supportedLanguages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
