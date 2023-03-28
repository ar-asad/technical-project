import { FaHome, FaTools } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import React from 'react';
import img from '../../images/player-1.png'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid >
                <Navbar.Brand href="#">DEEP <span className='text-primary fw-bold' >THOUGHT</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#action1" className='p-3 ms-2 bg-primary rounded-circle text-white'><FaHome /></Nav.Link>
                        <Nav.Link href="#action2" className='mx-2 p-3 bg-primary rounded-circle text-white'><FaTools /></Nav.Link>
                        <Nav.Link href="#action2" className='mx-2 p-3 bg-primary rounded-circle text-white'><IoNotifications /></Nav.Link>
                        <Nav.Link href="#action2"><img style={{ width: '50px' }} src={img} alt="" /></Nav.Link>
                        <Nav.Link href="#" disabled>
                            <BsThreeDotsVertical />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;








// import React from 'react';
// import { Button } from 'react-bootstrap';

// const ProtectMange = () => {
//     return (
//         <div className='container d-flex justify-content-between my-4'>
//             <h3 className='text-primary fw-bold'>Technical Project Management</h3>
//             <Button variant="primary">Submit task</Button>{' '}
//         </div>
//     );
// };

// export default ProtectMange;