import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import useFirebase from "../../../hooks/useFirebase";
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
      <Navbar  variant="dark" sticky="top" collapseOnSelect expand="lg" className="bg-color p-2" >
                <Container>
                    <Navbar.Brand as={Link} to="/home" style={{ fontSize: '40px', color: 'white'}}>CampingBD</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" style={{ fontSize: '17px', color: 'white'}}>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#offerings" style={{ fontSize: '17px', color: 'white'}}>Our Offerings</Nav.Link>

                        {user?.email ?
                        <Nav.Link as={Link} to="/myorders" style={{ fontSize: '17px', color: 'white'}}>My Bookings</Nav.Link>: ""}

                        {user?.email ?
                        <Nav.Link as={Link} to="/AddOfferings" style={{ fontSize: '17px', color: 'white'}}>Add offerings</Nav.Link>: ""}
                         
                         {user?.email ?
                        <Nav.Link as={Link} to="/manageBooking" style={{ fontSize: '17px', color: 'white'}}>Manage All Bookings</Nav.Link>: ""}
                        
                        {user?.email ?
                            <Button onClick={logOut} variant="primary" className="me-2">Logout</Button> :
                            <Nav.Link as={Link} to="/login" style={{ fontSize: '20px'}}>Login</Nav.Link>}
                        
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      
    </>
    );
};

export default Header;