import React from 'react';
export enum DialogTypes {
  DEFAULT = 'default',
  FULL = 'full'
}

export interface DialogState {
  isRender: boolean;
  title: string;
  type: DialogTypes;
  content: React.ReactElement | string;
}

const dialogInitialState: DialogState = {
  isRender: false,
  title: '',
  type: DialogTypes.DEFAULT,
  content: ''
};

export default dialogInitialState;
