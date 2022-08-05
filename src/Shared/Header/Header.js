import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header-container bg-dark ">
      <div className="header container">
        <div className="row">
          <div className="col-md-3 pt-3">
            <div>
              <h3>CCTV Camera</h3>
            </div>
          </div>
          <div className="col-md-9 pt-3">
            <div className="menu-items">
              <div className="d-flex justify-content-end align-items-end ">
                <div className="nav-items">
                  <NavLink
                    className="header-items"
                    to="/home"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="header-items"
                    to="/dashboard/review"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    Review
                  </NavLink>
                  <NavLink
                    className="header-items"
                    to="/aboutUs"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    About Us
                  </NavLink>
                  <Nav.Link
                    className="header-items-hash"
                    as={HashLink}
                    to="/home#contactUs"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    ContactUs
                  </Nav.Link>
                  <Nav.Link
                    className="header-items-hash"
                    as={HashLink}
                    to="/home#products"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    Products
                  </Nav.Link>
                  <Nav.Link
                    className="header-items-hash"
                    as={HashLink}
                    to="/home#blogs"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    Blogs
                  </Nav.Link>

                  {user?.email ? (
                    <>
                      <NavLink
                        className="header-items"
                        to="/dashboard"
                        activeStyle={{
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        Dashboard
                      </NavLink>

                      <button onClick={logOut}>Logout</button>
                    </>
                  ) : (
                    <NavLink
                      className="header-items"
                      to="/login"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Login
                    </NavLink>
                  )}
                  <h4>{user?.displayName}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
