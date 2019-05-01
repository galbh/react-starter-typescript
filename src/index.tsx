import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import Root from './common/routes';
import rootReducer from './common/reducers';
import * as serviceWorker from './serviceWorker';

let middlewares;

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
  middlewares = applyMiddleware(thunk);
} else {
  middlewares = applyMiddleware(thunk, logger);
}

const store = createStore(rootReducer, middlewares);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
