import React from 'react';
import head from '/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { FaBeer, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container>
            <div className='text-center mt-3 '>
                <img src={head} alt="" />
                <p className=''>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                <div className='d-flex'>
                    <Button className='bg-danger'>Latest</Button>
                    <Marquee speed={70}>
                        <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    </Marquee>
                </div>

            </div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="white" className='rounded mt-3'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-white">
                            <Nav.Link href="#features">Career</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Profile</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle></Nav.Link>
                            <Link to="/login"><Button variant='success'>Login</Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;