import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

const StructureCard = () => {
    return (
        <div className='col'>
            <Card>
                <Card.Header as="h5" className='d-flex justify-content-center bg-dark text-white'>
                    <h5>Technical Project Management</h5>
                    <div className='position-absolute end-0 me-4'>
                        <FaInfoCircle />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default StructureCard;