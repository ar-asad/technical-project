import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

const ThreadCard = () => {
    return (
        <div className='col'>
            <Card h-100>
                <Card.Header as="h5" className='d-flex justify-content-center bg-dark text-white'>
                    <h5>Technical Project Management</h5>
                    <div className='position-absolute end-0 me-4'>
                        <FaInfoCircle />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p><span className='fw-bold'>Description: </span>Watch the vedio and threadbuild, and jot out key threads while watching the vedio</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ThreadCard;