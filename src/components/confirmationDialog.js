import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationDialog(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Dialog
        open={props.visible}
        onClose={e => props.closeAction()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.titulo}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.texto}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={e => props.closeAction()} color="primary">
            Cancelar
          </Button>
          <Button onClick={e => props.confirmAction()} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
