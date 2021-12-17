import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';


const Header = () => {
    const {user,logOut} = useAuth();
    return (
        
        <div className="header-container bg-dark ">
            <div className="header container">
                <div className="row">
                    <div className="col-md-2">
                        <div>
                            <h3>CCTV Camera</h3>
                            </div>
                        
                    </div>
                    <div className="col-md-10">
                        <div className="menu-items">
                            <div className="d-flex justify-content-end align-items-end ">
                                <div>
                                <NavLink className="header-items"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Home
                                </NavLink>
                                
                                
                                
                                {user?.email ? <>
                                    <NavLink className="header-items"
                                to="/dashboard"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Dashboard
                                </NavLink>
                                
                                <button onClick={logOut}>Logout</button>
                                </>
                                :<NavLink className="header-items"
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Login
                                </NavLink>}
                                <h4>{ user?.displayName}</h4>
                               
                                
           
            
            
                                   
                                </div>
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
                
        </div>
    );
















    // const {user,logOut} = useAuth()
    
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "#0DCAF0"
    // }
    // return (
    //     <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    //         <Container>
    //             <Navbar.Brand as={NavLink} to="/" className="fs-4">

    //                 CCTV Camera
    //             </Navbar.Brand>

    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="ms-auto">
    //                     <NavLink to="/home" className="fs-4 pt-1" activeStyle={activeStyle}>
    //                         Home
    //                     </NavLink>
    //                     <NavLink to="/addProduct" className="fs-4 pt-1" activeStyle={activeStyle}>
    //                         AddProduct
    //                     </NavLink>
    //                     {/* <NavLink to="/login" className="fs-4 pt-1" activeStyle={activeStyle}>
    //                         Login
    //                     </NavLink> */}
    //                      {/* <NavLink to="/cycles" className="fs-4 pt-1" activeStyle={activeStyle}>
    //                         Explore
    //                     </NavLink> */}
    //                     {user.email && <NavLink to="/dashboard" className="fs-4 pt-1" activeStyle={activeStyle}>
    //                         Dashboard
    //                     </NavLink>
    //                     }


    //                      {user?.email ?  <>
    //                      <p className="text-white">Hi! {user?.displayName }</p>
    //                         <Button variant="warning" onClick={logOut} className=" text-white">Log Out </Button></>
    //                         :
    //                         <NavLink to="/login" className="fs-4 pt-1" activeStyle={activeStyle}>
    //                         Login
    //                     </NavLink>
    //                      }
                       

    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Container>
    //     </Navbar>
    // );
};


export default Header;