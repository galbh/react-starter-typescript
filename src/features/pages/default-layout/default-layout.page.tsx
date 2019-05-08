import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect, Matching } from 'react-redux';
import HeaderComponent from '../../components/header/header.component';
import { Container, GlobalStyle } from './styles';
import { bindActionCreators, Dispatch } from 'redux';
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
import urlTitleDictionary from '../../../common/state/general/url-title-dictionary';
import { DirectionContext } from '../../../common/contexts';
import { RootState, StringMap } from '../../../common/models';
import { RouteChildrenProps } from 'react-router';
import {
  CloseDrawerAction,
  OpenDrawerAction
} from '../../../common/state/drawer/drawer.actions';
import DialogComponent from '../../components/dialog/dialog.component';
import {
  DialogState,
  DialogTypes
} from '../../../common/state/dialog/dialog.state';
import {
  CloseDialogAction,
  OpenDialogAction
} from '../../../common/state/dialog/dialog.actions';
import { FetchLoggedInUserAction } from '../../../common/state/auth/auth.actions';
import {
  ChangeLanguageAction,
  StartLoaderAction,
  StopLoaderAction
} from '../../../common/state/general/general.actions';
import SpinnerComponent from '../../components/spinner/spinner.component';
import DrawerComponent from '../../components/drawer/drawer.component';

interface AppProps {
  user: User;
  startLoader: () => void;
  stopLoader: () => void;
  fetchUser: () => Promise<User>;
  isDialogRender: boolean;
  path: string;
  component: React.FC<RouteChildrenProps>;
  openDialog: (payload: DialogState) => void;
  closeDialog: () => void;
  dialogTitle?: string;
  dialogContent?: string;
  loading: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  changeLanguage: (args0: string) => void;
  isDrawerRender: boolean;
  languages: StringMap;
  language: string;
}

const DefaultLayout: React.FC<Matching<AppProps, any>> = ({
  user,
  fetchUser,
  path,
  isDialogRender,
  component: Component,
  openDialog,
  closeDialog,
  dialogTitle,
  dialogContent,
  loading,
  startLoader,
  stopLoader,
  openDrawer,
  closeDrawer,
  changeLanguage,
  isDrawerRender,
  languages,
  language
}) => {
  useEffect(() => {
    startLoader();
    fetchUser()
      .then(() => openDialog({ title: 'Welcome', content: 'content' }))
      .then(() => stopLoader());
  }, [startLoader, stopLoader, fetchUser, openDialog]);

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

              {loading && <SpinnerComponent />}

              <DrawerComponent
                languages={languages}
                language={language}
                open={isDrawerRender}
                closeDrawer={closeDrawer}
                onChangeLanguage={changeLanguage}
                isRtl={false}
              />

              {user && <Component {...matchProps} />}

              {isDialogRender && (
                <DialogComponent
                  title={dialogTitle}
                  content={dialogContent}
                  open={isDialogRender}
                  onClose={closeDialog}
                />
              )}
            </Container>
          </div>
        )}
      />
    </DirectionContext.Provider>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    openDialog: bindActionCreators(OpenDialogAction, dispatch),
    closeDialog: bindActionCreators(CloseDialogAction, dispatch),
    startLoader: bindActionCreators(StartLoaderAction, dispatch),
    stopLoader: bindActionCreators(StopLoaderAction, dispatch),
    openDrawer: bindActionCreators(OpenDrawerAction, dispatch),
    closeDrawer: bindActionCreators(CloseDrawerAction, dispatch),
    fetchUser: bindActionCreators(FetchLoggedInUserAction, dispatch),
    changeLanguage: bindActionCreators(ChangeLanguageAction, dispatch)
  };
};

const mapStateToProps = (state: RootState) => {
  const { general, dialog, drawer } = state.view;
  const { auth } = state.app;
  return {
    user: auth.loggedInUser,
    isDialogRender: dialog.isRender,
    dialogTitle: dialog.title,
    dialogContent: dialog.content,
    loading: general.loading,
    isDrawerRender: drawer.isRender,
    language: general.language,
    languages: general.languages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
