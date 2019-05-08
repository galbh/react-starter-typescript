import React from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { Dialog, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import propTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const DialogComponent = ({ open, title, content, onClose, type }) => (
  <div>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onExit={onClose}
      onClose={onClose}
      fullScreen={type === 'full'}
    >
      <MuiDialogTitle>
        {title}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  </div>
);

DialogComponent.propTypes = {
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  title: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired,
  type: propTypes.string,
  content: propTypes.oneOfType([propTypes.element, propTypes.string]),
  onRequestClose: propTypes.func
};

DialogComponent.defaultProps = {
  type: null,
  component: null
};

export default DialogComponent;
