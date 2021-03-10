import React from 'react'
import { closeSnackbar } from '../../actions/systemAction'
import { connect } from 'react-redux';
import {Modal} from "react-bootstrap"


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

const DialogNotif = (props) => {
    const { system, _closeSnackbar } = props
    const status = system.snackbarStatus
    const message = system.snackbarMsg
    const handleClose = () => {
        _closeSnackbar()
    }
    if (status === "error") {

        return (
            <Modal show={status === "error"} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
              </Button>
                </Modal.Footer> */}
            </Modal>
        )
    }
    else {
        return (
            <Modal show={status === "success"} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
              </Button>
                </Modal.Footer> */}
            </Modal>
        )
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(DialogNotif)