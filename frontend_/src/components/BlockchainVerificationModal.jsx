import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

function BlockchainVerificationModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Verification Status
            </Button>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Blockchain Verification Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Fields</th>
                                <th>Values</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Timestamp</td>
                                <td>{props.info.timestamp}</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>{props.info.height}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BlockchainVerificationModal;