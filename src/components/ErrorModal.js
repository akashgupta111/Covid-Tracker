import React,{useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import {Button} from '@material-ui/core';
import './error-modal.css'

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
});
const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6" style={{fontWeight:'bold'}}>{children}</Typography>
        </MuiDialogTitle>
    );
});

const ErrorModal = () =>{
    const [open,setOpen] = useState(true)

    const handleClose = (e) => {
        setOpen(false);
    };
    return(
        <Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={open}
        onClose={handleClose}>
        <DialogTitle id="alert-dialog-title" onClose={handleClose}>Note</DialogTitle>
        <Divider light />
        <DialogContent>
            <Typography gutterBottom> Apis has been deprecated. Stay tune until new apis has been implemented.</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
        </Dialog>
    )
}

export default ErrorModal