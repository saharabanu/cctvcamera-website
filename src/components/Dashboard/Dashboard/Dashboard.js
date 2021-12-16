import React from 'react';
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css';


const Dashboard = () => {

    const { user, logOut,admin } = useAuth();
    const { displayName, photoURL } = user;
    
    return (
        <div className="dashboard-bg">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
            </Helmet>

            <Row className="g-0  ">
                <Col md={2} className="custom-dashboard-link" >
                    <h1 className="title-dashboard ">CCTV <br /> Camera
                    </h1>
                    <hr className="custom-hr" />
                    <Nav className="flex-column pb-3">
                        <Link to="/home"> <span><i className="fas fa-house-user me-2"></i></span> Home</Link>
                        {!admin ? <>

                            <Link to="/dashboard"> <span><i className="fas fa-shopping-bag me-2"></i></span> My Orders</Link>
                            {/* <Link to={`/dashboard/myOrders`}> <span><i className="fas fa-shopping-bag me-2"></i></span> My Orders</Link> */}
                            <Link to={`/dashboard/payment`}> <span><i className="fab fa-cc-amazon-pay me-2"></i></span> Payment</Link>
                            <Link to={`/dashboard/review`}> <span><i className="fas fa-star-half-alt me-2"></i></span> Review</Link>
                        </>
                            :
                            <>
                                <Link to={`/dashboard/allOrders`}> <span><i className="fas fa-shopping-cart me-2"></i></span> All Orders</Link>
                                <Link to={`/dashboard/addProduct`}> <span><i className="fas fa-plus me-2"></i></span>Add Product</Link>
                                <Link to={`/dashboard/makeAdmin`}> <span><i className="fas fa-user-cog me-2"></i></span> Make Admin </Link>
                                <Link to={`/dashboard/manageProducts`}> <span><i className="fab fa-product-hunt me-2"></i></span>Manage Products</Link>
                            </>
                        }

                    </Nav>
                </Col>
                <Col md={10} className="dashboard-contain-bg">

                    <Row className="g-0 dashboard-header ">
                        <Navbar bg="white" expand="md">
                            <Container>
                                <h3 className="fw-light fs-2">Dashboard</h3>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto pe-5">

                                        <span className=" pt-2 fs-5 px-2 fw-lighter "> <Image className="user-picture" src={photoURL} roundedCircle /> {displayName}</span>
                                        <Button variant="warning" onClick={logOut} className="m-1 text-white">Log Out <i className="fas fa-sign-out-alt ps-2"></i></Button>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Row>
                    <Outlet></Outlet>
                    
                </Col>
            </Row>

            
       

        </div >
    );








    
    
};

export default Dashboard;