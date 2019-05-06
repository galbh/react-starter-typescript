import sharedState from './shared.state';
import {
  LOADING_START,
  LOADING_DONE,
  CHANGE_LANGUAGE,
  ON_SCREEN_RESIZE
} from './shared.actions';
import { MOBILE_MAX_WIDTH } from '../../constants';

function sharedReducer(state = sharedState, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };

    case LOADING_DONE:
      return { ...state, loading: false };

    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };

    case ON_SCREEN_RESIZE:
      return { ...state, isMobile: window.innerWidth <= MOBILE_MAX_WIDTH };

    default:
      return state;
  }
}

export default sharedReducer;
