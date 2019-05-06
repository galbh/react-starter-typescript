import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import i18n from '../i18n';
import { ROUTES } from './constants';
import { myTheme } from '../assets/themes/default';

import HomePage from '../features/pages/home/home.page';
import AboutPage from '../features/pages/about/about.page';
import PageNotFound from '../features/pages/not-found/not-found.page';
import DefaultLayout from '../features/pages/default-layout/default-layout.page';
import App from '../features/pages/app/app.page';

const Root = ({ store }: any): any => ({
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ThemeProvider theme={myTheme}>
            <Router>
              <App>
                <Switch>
                  <DefaultLayout path={ROUTES.home} component={HomePage} />
                  <DefaultLayout path={ROUTES.about} component={AboutPage} />

                  {/* Keep at bottom */}
                  <DefaultLayout path="*" component={PageNotFound} />
                </Switch>
              </App>
            </Router>
          </ThemeProvider>
        </Provider>
      </I18nextProvider>
    );
  }
});

export default Root;
