import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import Thred from '../Thread/Thred';
import ThreadSelect from '../ThreadSelect/ThreadSelect';

const ThreadCard = () => {
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
                    <p className='mb-4'><span className='fw-bold'>Description: </span>Watch the vedio and threadbuild, and jot out key threads while watching the vedio</p>
                    <hr />
                    <Thred></Thred>
                    <ThreadSelect></ThreadSelect>
                    <Button className='my-4' variant="primary">+ Sub-thread</Button>{' '}
                    <Card className='shadow' border="light" >
                        <Card.Header>Summary for Thread A</Card.Header>
                        <Card.Body>
                            <div className="form-floating  ">
                                <textarea className="form-control border-0" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Enter Text Here</label>
                            </div>
                        </Card.Body>
                    </Card>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ThreadCard;