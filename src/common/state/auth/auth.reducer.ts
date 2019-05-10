import authInitialState, { AuthState } from './auth.state';
import { ActionType, AuthActionTypes } from './auth.actions';
import { SUCCESS_SUFFIX } from '../../constants';
import { Reducer } from 'redux';

const authReducer: Reducer<AuthState> = (
  state = authInitialState,
  action: ActionType
) => {
  switch (action.type) {
    case `${AuthActionTypes.FETCH_LOGGED_IN_USER}${SUCCESS_SUFFIX}`:
      return { ...state, loggedInUser: action.payload };

    default:
      return state;
  }
};

export default authReducer;
