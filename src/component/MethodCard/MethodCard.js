import React from 'react';
import { Accordion, Button, Card, Col, Form, InputGroup } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

const MethodCard = () => {
    return (
        <Card className='shadow'>
            <Card.Header as="h5" className='d-flex justify-content-center bg-dark text-white'>
                <h5>4SA Method</h5>
                <div className='position-absolute end-0 me-4'>
                    <FaInfoCircle />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <span className='fw-bold'>Description: </span> To Explore more read more
                </Card.Text>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Introduction</Accordion.Header>
                        <Accordion.Body>
                            The 4SA Method, How to bring a idea into progress?
                            <div className='d-flex justify-content-end'>
                                <Button variant="white">See More</Button>{' '}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className='mt-4' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Thread A</Accordion.Header>
                        <Accordion.Body>
                            How are you going to devlop your stratergy ? Which method are you going to use to devlop a stratergy ? What if the project is lengthy?
                            <div className='d-flex justify-content-end'>
                                <Button variant="white">See More</Button>{' '}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <InputGroup className='mt-4'>
                    <Form.Control as="textarea" aria-label="With textarea" placeholder='Example 1' />
                </InputGroup>
                <p>You have a concept. How will put into progress?</p>
            </Card.Body>
        </Card>
    );
};

export default MethodCard;