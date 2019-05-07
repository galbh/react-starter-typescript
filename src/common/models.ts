import { StateType } from 'typesafe-actions';
import rootReducer from './reducers';

export interface StringMap {
  [s: string]: string;
}

export type RootState = StateType<typeof rootReducer>;
