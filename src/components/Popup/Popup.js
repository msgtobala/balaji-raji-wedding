import React from 'react';

import { Dialog, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const Popup = (props) => {
  const { show, handleClose, maxWidth, onBless } = props;

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <i className="ti-close"></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      className="modalWrapper quickview-dialog"
      maxWidth={maxWidth}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Bless Us
      </DialogTitle>
      <button onClick={onBless}>Bless Us</button>
      <Grid className="modalBody modal-body">
        <Grid className="modalBody modal-body">Bala Raji</Grid>
      </Grid>
    </Dialog>
  );
};

export default Popup;
