import HttpService from '../../services/http.service';
import ApiService from '../../services/api.service';
import createAsyncAction from '../../../utils/createAsyncAction';
import User from './auth.models';

export enum AuthActionTypes {
  FETCH_LOGGED_IN_USER = '@@auth/FETCH_LOGGED_IN_USER'
}

export const FetchLoggedInUserAction = createAsyncAction(
  AuthActionTypes.FETCH_LOGGED_IN_USER,
  () => {
    const options = ApiService.getOptions('fetchLoggedInUser');
    return HttpService.fetch(options);
  }
);

export interface ActionType {
  type: AuthActionTypes.FETCH_LOGGED_IN_USER;
  payload?: User;
}
