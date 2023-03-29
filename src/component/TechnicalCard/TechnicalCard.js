import React from 'react';
import { Card } from 'react-bootstrap';
import { FaInfoCircle } from "react-icons/fa";

const TechnicalCard = ({ data }) => {
    const { asset_title, asset_description, asset_content } = data;
    return (
        <Card className='shadow' >
            <Card.Header as="h5" className='d-flex justify-content-center bg-dark text-white'>
                {asset_title}
                <div className='position-absolute end-0 me-4'>
                    <FaInfoCircle />
                </div>
            </Card.Header>
            <Card.Body>
                <p><span className='fw-bold mt-4'>Description: </span>{asset_description}</p>
                <div>
                    <iframe width="100%" height="350" src={asset_content} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </Card.Body>
        </Card>

    );
};

export default TechnicalCard;