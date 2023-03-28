import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaInfoCircle } from "react-icons/fa";

const TechnicalCard = () => {
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
                        <p><span className='fw-bold'>Description: </span> Story of Alignment Scope of Agility Specific Accountable Staggering Approach</p>
                    </Card.Text>
                    <div>
                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/Xc6JIstj8GY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TechnicalCard;