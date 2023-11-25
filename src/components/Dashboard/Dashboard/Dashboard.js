import React from 'react';
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css';


const Dashboard = () => {

    const { user, logOut,admin } = useAuth();
    const { displayName, photoURL } = user;
    
    return (
        <div className="dashboard-bg">
            

            <Row className="g-0  ">
                <Col md={2} className="custom-dashboard-link" >
                    
                    <Nav className="flex-column pb-3">
                        <Link to="/home"> <span><i className="fas fa-house-user me-2"></i></span> Home</Link>
                        
                            {!admin && <><p className='text-white'>Customer Dashboard</p>
                            <Link to=""> <span><i className="fas fa-shopping-bag me-2"></i></span>Dashboard</Link>
                            
                            <Link to={`/dashboard/myOrders`}> <span><i className="fab fa-cc-amazon-pay me-2"></i></span> My Orders</Link>
                            <Link to={`/dashboard/payment`}> <span><i className="fab fa-cc-amazon-pay me-2"></i></span> Payment</Link>
                            <Link to={`/dashboard/review`}> <span><i className="fas fa-star-half-alt me-2"></i></span> Review</Link></>}
                       
                           {admin && <> <p className="text-white">Admin Dashboard</p>
                                <Link to={`/dashboard/allOrders`}> <span><i className="fas fa-shopping-cart me-2"></i></span> All Orders</Link>
                                <Link to={`/dashboard/addProduct`}> <span><i className="fas fa-plus me-2"></i></span>Add Product</Link>
                                <Link to={`/dashboard/makeAdmin`}> <span><i className="fas fa-user-cog me-2"></i></span> Make Admin </Link>
                                <Link to={`/dashboard/manageProducts`}> <span><i className="fab fa-product-hunt me-2"></i></span>Manage Products</Link></>}
                            
                        

                    </Nav>
                </Col>
                <Col md={10} className="dashboard-contain-bg">

                    <Row className="g-0 dashboard-header py-3">
                       
                           
                                
                               
                               
                                    <Nav className="">
                                        <span className=" px-3"> <Image className="dash-img" src={photoURL} roundedCircle /> {displayName}</span>
                                        <Button onClick={logOut}  className="text-white customer-btn">Log Out </Button>

                                    </Nav>
                               
                           
                        
                        
                    </Row>
                    <Outlet></Outlet>
                    
                </Col>
            </Row>

            
       

        </div >
    );

    // ms-auto pe-5
    // pt-2 fs-5 px-2
    // fw-light fs-2
    // fw-lighter 
    // <i className="fas fa-sign-out-alt ps-2"></i></i>






    
    
};

export default Dashboard;