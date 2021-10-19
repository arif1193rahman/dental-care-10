import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand to="/home">Dental clinic</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-start nav-text">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/services#service">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
                    <Navbar.Collapse className="justify-content-end">
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Log Out</Button>
                            : <Nav.Link as={Link} to="/registration">Log In</Nav.Link>}
                        <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <Link to="/logIn">{user?.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;

