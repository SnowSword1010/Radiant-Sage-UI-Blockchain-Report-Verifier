import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

function MoreInfoModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                More Info
            </Button>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Report Information</Modal.Title>
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
                                <td>Report ID</td>
                                <td>{props.info.queuemsgsid}</td>
                            </tr>
                            <tr>
                                <td>Message Date</td>
                                <td>{props.info.messagedate}</td>
                            </tr>
                            <tr>
                                <td>Message Title</td>
                                <td>{props.info.title}</td>
                            </tr>
                            <tr>
                                <td>Message Details</td>
                                <td>{JSON.stringify(props.info.message, null, 2)}</td>
                            </tr>
                            <tr>
                                <td>Message Status</td>
                                <td>{props.info.messagestatus}</td>
                            </tr>
                            <tr>
                                <td>Operation</td>
                                <td>{props.info.operation}</td>
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

export default MoreInfoModal;