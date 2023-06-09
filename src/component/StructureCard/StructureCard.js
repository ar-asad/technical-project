import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { BsArrow90DegLeft, BsArrow90DegRight, BsArrowsFullscreen, BsThreeDots } from "react-icons/bs";
import { Card, Col, Form, Row } from 'react-bootstrap';

const StructureCard = ({ data }) => {
    const { asset_title, asset_description } = data;
    return (
        <Card className='shadow'>
            <Card.Header as="h5" className='d-flex justify-content-center bg-dark text-white'>
                {asset_title}
                <div className='position-absolute end-0 me-4'>
                    <FaInfoCircle />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <span className='fw-bold'>Description: </span> {asset_description}
                </Card.Text>
                <hr />
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='fw-bold'>Title</Form.Label>
                        <Form.Control className='border-0 shadow' as="textarea" rows={2} />
                    </Form.Group>
                </Form>
                <div className='mt-4 '>
                    <h5 className='mb-3'>Content</h5>
                    <div style={{ height: '200px' }} className='shadow p-4 '>
                        <Row className='  gap-3'>
                            <Col><p>File</p></Col>
                            <Col><p>File</p></Col>
                            <Col><p>File</p></Col>
                            <Col><p>File</p></Col>
                            <Col><p>File</p></Col>
                            <Col><p>File</p></Col>
                            <Col><p>File</p></Col>
                            <Col><p>File</p></Col>
                            {/* <p>Edit</p>
                            <p>View</p>
                            <p>Insert</p>
                            <p>Format</p>
                            <p>Tools</p>
                            <p>Table</p>
                            <p>Help</p> */}
                        </Row>
                        <div className='d-flex gap-3 align-items-center'>
                            <BsArrow90DegLeft />
                            <BsArrow90DegRight />
                            <BsArrowsFullscreen />
                            <p>Paragraph</p>
                            <BsThreeDots />
                        </div>
                        <hr />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StructureCard;