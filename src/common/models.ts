import { Action, StateType } from 'typesafe-actions';
import rootReducer from './reducers';
import { Dispatch } from 'redux';
import { ActionType } from './state/auth/auth.actions';

export interface StringMap {
  [s: string]: string;
}

export type RootState = StateType<typeof rootReducer>;

export interface Endpoint {
  url: string;
  method?: string;
  contentType?: string;
  body?: any;
}

export type AsyncAction = (
  args?: any
) => (
  dispatch: Dispatch<Action>,
  getState: () => RootState
) => Promise<ActionType>;

