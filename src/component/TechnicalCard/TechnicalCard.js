import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaInfoCircle } from "react-icons/fa";

const TechnicalCard = () => {
    return (
        <Card className='shadow' >
            <Card.Header as="h5" className='d-flex justify-content-center bg-dark text-white'>
                <h5>Technical Project Management</h5>
                <div className='position-absolute end-0 me-4'>
                    <FaInfoCircle />
                </div>
            </Card.Header>
            <Card.Body>
                <p><span className='fw-bold'>Description: </span> Story of Alignment Scope of Agility Specific Accountable Staggering Approach</p>
                <div>
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/Xc6JIstj8GY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </Card.Body>
        </Card>

    );
};

export default TechnicalCard;