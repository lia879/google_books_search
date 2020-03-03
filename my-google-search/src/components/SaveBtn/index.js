// need useState to maintain state in functional component
import React, { useState } from "react";
// used for saving book modal
import { Modal, Button } from "react-bootstrap";

// Using React Hooks here to maintain state in a functional component
// Destructuring the type, className, children and onClick props, applying them to the button element
function SaveBtn({ type = "default", className, children, onClick }) {

    const [show, setShow] = useState(false);

    // handles closing of modal
    const handleClose = () => setShow(false);
    // handles showing of modal
    const handleShow = () => setShow(true);

    // saves book to db and shows modal
    const click = () => {
        handleShow()
        onClick()
    };

    return (
        <>
            <button onClick={click} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
                {children}
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You're book has been saved!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can view your saved books in the Saved tab!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        OK
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SaveBtn;