import { FaHome, FaTools } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import React from 'react';
import img from '../../images/player-1.png'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='shadow'>
            <Container fluid >
                <Navbar.Brand href="#"><img src="https://deepthought.education/assets/images/logo/logo.svg" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto  my-lg-0 d-flex gap-2 align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link style={{ width: "40px", height: '40px' }} href="#action1" className=' bg-primary rounded-circle text-white d-flex justify-content-center align-items-center'><FaHome style={{ width: "22px", height: '22px' }} /></Nav.Link>
                        <Nav.Link style={{ width: "40px", height: '40px' }} href="#action2" className=' bg-primary rounded-circle text-white d-flex justify-content-center align-items-center'><FaTools /></Nav.Link>
                        <Nav.Link style={{ width: "40px", height: '40px' }} href="#action2" className=' bg-primary rounded-circle text-white d-flex justify-content-center align-items-center'><IoNotifications /></Nav.Link>
                        <Nav.Link href="#action2"><img style={{ width: '40px', height: '40px' }} src={img} alt="" /></Nav.Link>
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






