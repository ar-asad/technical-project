import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const Thred = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Thread A</Accordion.Header>
                    <Accordion.Body>
                        How are you going to devlop your stratergy ? Which method are you going to use to devlop a stratergy ? What if the project is lengthy?
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className=' row row-cols-1 row-cols-md-2 g-5 mt-2'>
                <div className='col'>
                    <Card className='shadow' border="light" >
                        <Card.Header>Sub thread 1</Card.Header>
                        <Card.Body>
                            <div className="form-floating  ">
                                <textarea className="form-control border-0" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Enter Text here</label>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col'>
                    <Card className='shadow' border="light" >
                        <Card.Header>Sub Interpretion 1</Card.Header>
                        <Card.Body>
                            <div className="form-floating ">
                                <textarea className="form-control border-0" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Enter Text here</label>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );
};

export default Thred;