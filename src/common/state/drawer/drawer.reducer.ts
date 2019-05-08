import drawerInitialState from './drawer.state';
import { DrawerActionTypes } from './drawer.actions';

const drawerReducer = (state = drawerInitialState, action: any) => {
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
