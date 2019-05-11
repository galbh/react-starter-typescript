import { Action, StateType } from 'typesafe-actions';
import rootReducer from './reducers';
import { AnyAction, Dispatch } from 'redux';

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

export type AsyncAction = (type: string, fn: () => Promise<any>) => any;

export type ActionCreator = (
  args?: any
) => (
  dispatch: Dispatch<Action>,
  getState: () => RootState
) => any;
