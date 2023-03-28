import React from 'react';
import { Button } from 'react-bootstrap';

const TechnicMange = () => {
    return (
        <div className='container d-flex justify-content-between my-4'>
            <h3 className='text-primary fw-bold'>Technical Project Management</h3>
            <Button variant="primary">Submit task</Button>{' '}
        </div>
    );
};

export default TechnicMange;