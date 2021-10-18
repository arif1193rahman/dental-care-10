import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand to="/home">Dental clinic</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-start nav-text">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/features">Features</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/logIn">Sign In</Nav.Link>
                        <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <Link to="/logIn">Mark Otto</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;

