import React, { useContext } from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { Dialog, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { DialogTypes } from '../../../common/state/dialog/dialog.state';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { DirectionContext } from '../../../common/contexts';

interface DialogProps {
  open: boolean;
  title?: string;
  content?: React.ReactElement | string;
  onClose: () => void;
  type?: DialogTypes;
}

function Transition(props: TransitionProps) {
  return <Slide direction="up" {...props} />;
}

const DialogComponent = ({
  open,
  title,
  content,
  onClose,
  type
}: DialogProps) => (
  <Dialog
    dir={useContext(DirectionContext)}
    open={open}
    TransitionComponent={Transition}
    onClose={onClose}
    fullScreen={type === DialogTypes.FULL}
  >
    <MuiDialogTitle>
      {title}
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
    <DialogContent>{content}</DialogContent>
  </Dialog>
);

export default DialogComponent;
