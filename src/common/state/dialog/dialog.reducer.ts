import { Reducer } from 'redux';
import dialogInitialState, { DialogState } from './dialog.state';
import { DialogActionTypes } from './dialog.actions';

const dialogReducer: Reducer<DialogState> = (
  state = dialogInitialState,
  action: any
) => {
  switch (action.type) {
    case DialogActionTypes.OPEN_DIALOG:
      return {
        ...state,
        ...action.payload,
        isRender: true
      };

    case DialogActionTypes.CLOSE_DIALOG:
      return { ...state, isRender: false };

    default:
      return state;
  }
};

export default dialogReducer;
