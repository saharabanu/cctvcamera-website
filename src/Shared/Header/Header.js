import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';


const Header = () => {
    const {user,logOut} = useAuth()
    
    const activeStyle = {
        fontWeight: "bold",
        color: "#0DCAF0"
    }
    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fs-4">

                    CCTV Camera
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="fs-4 pt-1" activeStyle={activeStyle}>
                            Home
                        </NavLink>
                        <NavLink to="/addProduct" className="fs-4 pt-1" activeStyle={activeStyle}>
                            AddProduct
                        </NavLink>
                        <NavLink to="/login" className="fs-4 pt-1" activeStyle={activeStyle}>
                            Login
                        </NavLink>
                         {/* <NavLink to="/cycles" className="fs-4 pt-1" activeStyle={activeStyle}>
                            Explore
                        </NavLink> */}
                        {user.email && <NavLink to="/dashboard" className="fs-4 pt-1" activeStyle={activeStyle}>
                            Dashboard
                        </NavLink>
                        }


                         {user?.email &&  
                            <Button variant="warning" onClick={logOut} className="m-1 text-white">Log Out </Button>
                         }
                       

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header;