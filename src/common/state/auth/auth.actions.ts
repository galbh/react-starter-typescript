import HttpService from '../../services/http.service';
import ApiService from '../../services/api.service';
import createAsyncAction from '../../../utils/createAsyncAction';

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
