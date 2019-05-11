import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Root from './common/routes';
import rootReducer, { RootState } from './common/reducers';
import * as serviceWorker from './serviceWorker';

let middlewares;

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
  middlewares = applyMiddleware(thunk);
} else {
  middlewares = applyMiddleware(thunk, logger);
}

const store: Store<RootState> = createStore(rootReducer, middlewares);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
