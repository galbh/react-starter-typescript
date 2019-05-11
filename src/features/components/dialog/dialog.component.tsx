import React, { useContext } from 'react';
import { DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { DialogTypes } from '../../../common/state/dialog/dialog.state';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { DirectionContext } from '../../../common/contexts';
import { DialogContainer as Dialog, DialogTitle } from './styles';

interface DialogProps {
  open: boolean;
  title?: string;
  content?: React.ReactElement | string;
  onClose: () => void;
  type?: DialogTypes;
  isMobile?: boolean;
}

function Transition(props: TransitionProps) {
  return <Slide direction="up" {...props} />;
}

const DialogComponent = ({ ...props }: DialogProps) => (
  <Dialog
    dir={useContext(DirectionContext)}
    open={props.open}
    TransitionComponent={Transition}
    onClose={props.onClose}
    fullScreen={props.type === DialogTypes.FULL || props.isMobile}
  >
    <DialogTitle>
      <div>{props.title}</div>
      <IconButton onClick={props.onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>

    <DialogContent>{props.content}</DialogContent>
  </Dialog>
);

export default DialogComponent;
