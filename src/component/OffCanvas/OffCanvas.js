import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const OffCanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='position-absolute ' style={{ left: '23px', top: '97px', zIndex: '1' }}>
            <Button variant="primary" onClick={handleShow}>
                Launch

            </Button>

            <div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    );
};

export default OffCanvas;