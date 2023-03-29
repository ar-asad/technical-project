import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './JourneyBorad.css';

const JourneyBorad = () => {
    const [translate, setTarnslate] = useState(false);

    return (
        <div className='dashboard'>
            <Card onClick={() => setTarnslate(!translate)} style={translate === false ? { height: '800px', zIndex: '1', left: '-245px', transition: 'all 0.5s' } : { height: '800px', zIndex: '1', left: '0', transition: 'all 0.5s' }} className='shadow position-absolute  '  >
                <Card.Header as="h5" className=' bg-dark text-white'>
                    <h5>journey Board</h5>
                </Card.Header>
                <Card.Body>
                    <ul>
                        <li className='fw-bold mb-3'>Explore the world of management</li>
                        <li>Technical Project Management</li>
                        <li>Threadbuild</li>
                        <li>Structure your pointers</li>
                        <li>4SA Method</li>
                    </ul>
                </Card.Body>

            </Card>
        </div>
    );
};

export default JourneyBorad;