import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Success from '@material-ui/icons/Check'
import Error from '@material-ui/icons/ErrorRounded'
import { closeSnackbar } from '../../actions/systemAction'
import { connect } from 'react-redux';


const MapStateToProps = state => {
    return {
        system: state.system
    }
}
const MapDispatchToProps = dispatch => {
    return {
        _closeSnackbar: () => {
            dispatch(closeSnackbar())
        }
    }
}

const styles = (theme) => ({
    rootForm: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: '25ch',
        },
    },
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
    asterisk: {
        color: 'red'
    },
    addButton: {
        color: 'white'
    }
});


const DialogTitle = withStyles(styles)(props => {
    const { children, onClose, classes, ...other } = props

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant='h3'>{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
})


const DialogNotif = props => {
    const { system, _closeSnackbar } = props
    const status = system.snackbarStatus
    const message = system.snackbarMsg
    const handleClose = () => {
        _closeSnackbar()
    }
    if (status === 'error') {
        return (
            <Dialog
                open={status === 'error'}
                onClose={handleClose}
                maxWidth='xs'
                fullWidth
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    id="max-width-dialog-title"
                    onClose={handleClose}
                >
                    {'Error Message'}
                </DialogTitle>
                <DialogContent dividers>
                    <Grid item xs={12} align='center'>
                        <Error style={{ color: '#ec5858', fontSize: '80px' }} />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <DialogContentText id="alert-dialog-description" style={{
                            textAlign: 'center',
                            fontFamily: 'sans-serif', fontSize: '20px', paddingBottom: 20, paddingTop: 10
                        }}>
                            {message}
                        </DialogContentText>
                    </Grid>
                </DialogContent>
                {/* <DialogActions>
                    <Grid container justify='center'>
                        <Button onClick={handleClose} color="primary" style={{ fontSize: '16px' }} variant='contained'>
                            Ok
                        </Button>
                    </Grid>
                </DialogActions> */}
            </Dialog>
        )
    }
    else if (status === 'success') {
        return (
            <Dialog
                open={status === 'success'}
                onClose={handleClose}
                maxWidth='xs'
                fullWidth
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    id="max-width-dialog-title"
                    onClose={handleClose}
                    style={{ fontSize: 30 }}
                >
                    {'Success Message'}
                </DialogTitle>
                <DialogContent dividers>
                    <Grid item xs={12} align='center'>
                        <Success style={{ color: '#28df99', fontSize: '80px' }} />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <DialogContentText id="alert-dialog-description" style={{
                            textAlign: 'center',
                            fontFamily: 'sans-serif', fontSize: '20px', paddingBottom: 20, paddingTop: 10
                        }}>
                            {message}
                        </DialogContentText>
                    </Grid>
                </DialogContent>
                {/* <DialogActions>
                    <Grid container justify='center'>
                        <Button onClick={handleClose} color="primary" style={{ fontSize: '16px' }} variant='contained'>
                            Ok
                        </Button>
                    </Grid>
                </DialogActions> */}
            </Dialog>
        )
    }
    else {
        return (<div></div>)
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(DialogNotif)
