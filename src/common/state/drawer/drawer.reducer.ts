import drawerInitialState from './drawer.state';
import { DrawerActionTypes } from './drawer.actions';
import { Action } from 'typesafe-actions';

const drawerReducer = (state = drawerInitialState, action: Action) => {
  switch (action.type) {
    case DrawerActionTypes.OPEN_DRAWER:
      return { ...state, isRender: true };

    case DrawerActionTypes.CLOSE_DRAWER:
      return { ...state, isRender: false };

    default:
      return state;
  }
};

export default drawerReducer;
