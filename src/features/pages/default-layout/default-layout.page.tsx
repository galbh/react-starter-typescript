import React, { useEffect, useState } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import HeaderComponent from '../../components/header/header.component';
import { Container, GlobalStyle } from './styles';
import { bindActionCreators, Dispatch } from 'redux';
import User from '../../../common/state/auth/auth.models';
import urlTitleDictionary from '../../../common/state/general/url-title-dictionary';
import { DirectionContext } from '../../../common/contexts';
import {
  ActionCreator,
  AsyncAction,
  RootState,
  StringMap
} from '../../../common/models';
import { RouteChildrenProps } from 'react-router';
import {
  CloseDrawerAction,
  DrawerAction,
  OpenDrawerAction
} from '../../../common/state/drawer/drawer.actions';
import {
  CloseDialogAction,
  DialogAction,
  DialogProps,
  OpenDialogAction
} from '../../../common/state/dialog/dialog.actions';
import { FetchLoggedInUserAction } from '../../../common/state/auth/auth.actions';
import {
  ChangeLanguageAction,
  GeneralAction,
  GetDirectionAction,
  OnScreenResizeAction,
  StartLoaderAction,
  StopLoaderAction
} from '../../../common/state/general/general.actions';
import SpinnerComponent from '../../components/spinner/spinner.component';
import DrawerComponent from '../../components/drawer/drawer.component';
import DialogComponent from '../../components/dialog/dialog.component';
import { Directions } from '../../../common/state/general/general.state';

interface AppProps {
  path: string;
  component: React.FC<RouteChildrenProps>;
  user?: User;
  isDialogRender: boolean;
  dialogTitle?: string;
  dialogContent?: React.ReactElement | string;
  loading: boolean;
  isDrawerRender: boolean;
  language: string;
  languages: StringMap;
  isMobile: boolean;
}

interface DispatchProps {
  startLoader: () => void;
  stopLoader: () => void;
  fetchUser: () => Promise<User>;
  openDialog: (payload: DialogProps) => void;
  closeDialog: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  changeLanguage: (args0: string) => void;
  getDirection: ActionCreator;
  onScreenResize: () => void;
}

const DefaultLayout: React.FC<AppProps & DispatchProps> = ({ ...props }) => {
  const [t] = useTranslation();
  const { startLoader, fetchUser, openDialog, stopLoader, path, user } = props;
  const title = path && !Array.isArray(path) ? urlTitleDictionary[path] : '';
  const Component = props.component;
  const [direction, setDirection] = useState();

  useEffect(() => {
    window.addEventListener('resize', props.onScreenResize);

    return () => {
      window.removeEventListener('resize', props.onScreenResize);
    };
  });

  useEffect(() => {
    setDirection(props.getDirection());
  }, [props.language]);

  useEffect(() => {
    startLoader();
    fetchUser()
      .then(() => openDialog({ title: t('WELCOME'), content: t('MESSAGE') }))
      .then(() => stopLoader());
  }, [startLoader, stopLoader, fetchUser, openDialog]);

  return (
    <DirectionContext.Provider value={direction}>
      <Route
        path={path}
        render={(matchProps: RouteChildrenProps) => (
          <div dir={direction}>
            <HeaderComponent
              openDrawer={props.openDrawer}
              loggedInUser={user}
              title={title}
            />

            <Container>
              <GlobalStyle />

              {props.loading && <SpinnerComponent />}

              <DrawerComponent
                languages={props.languages}
                language={props.language}
                open={props.isDrawerRender}
                closeDrawer={props.closeDrawer}
                onChangeLanguage={props.changeLanguage}
                isRtl={direction === Directions.RTL}
              />

              {user && <Component {...matchProps} />}

              <DialogComponent
                title={props.dialogTitle}
                content={props.dialogContent}
                open={props.isDialogRender}
                onClose={props.closeDialog}
                isMobile={props.isMobile}
              />
            </Container>
          </div>
        )}
      />
    </DirectionContext.Provider>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<GeneralAction | AsyncAction | DrawerAction | DialogAction>
) => {
  return {
    openDialog: bindActionCreators(OpenDialogAction, dispatch),
    closeDialog: bindActionCreators(CloseDialogAction, dispatch),
    startLoader: bindActionCreators(StartLoaderAction, dispatch),
    stopLoader: bindActionCreators(StopLoaderAction, dispatch),
    openDrawer: bindActionCreators(OpenDrawerAction, dispatch),
    closeDrawer: bindActionCreators(CloseDrawerAction, dispatch),
    fetchUser: bindActionCreators(FetchLoggedInUserAction, dispatch),
    changeLanguage: bindActionCreators(ChangeLanguageAction, dispatch),
    getDirection: bindActionCreators(GetDirectionAction, dispatch),
    onScreenResize: bindActionCreators(OnScreenResizeAction, dispatch)
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
    languages: general.languages,
    isMobile: general.isMobile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
