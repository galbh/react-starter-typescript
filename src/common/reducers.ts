import { combineReducers } from 'redux';
import authReducer from './state/auth/auth.reducer';
// import sharedReducer from './state/shared/shared.reducer';
// import dialogReducer from './state/dialog/dialog.reducer';
// import drawerReducer from './state/drawer/drawer.reducer';
import { AuthState } from './state/auth/auth.state';

export interface RootState {
  auth: AuthState;
}

const rootReducer = combineReducers<RootState>({
  auth: authReducer
  // shared: sharedReducer,
  // dialog: dialogReducer,
  // drawer: drawerReducer
});

export default rootReducer;
