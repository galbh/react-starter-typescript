import React from 'react';
import { DialogTypes } from './dialog.state';

export enum DialogActionTypes {
  OPEN_DIALOG = '@@dialog/OPEN_DIALOG',
  CLOSE_DIALOG = '@@dialog/CLOSE_DIALOG'
}

interface DialogProps {
  title: string;
  content: React.ReactElement | string;
  type?: DialogTypes;
}
export const OpenDialogAction = (payload: DialogProps) => {
  return {
    type: DialogActionTypes.OPEN_DIALOG,
    payload
  };
};

export const CloseDialogAction = () => {
  return {
    type: DialogActionTypes.CLOSE_DIALOG
  };
};
