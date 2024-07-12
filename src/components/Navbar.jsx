import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
import Cart from "./Cart";
import { useSelector } from "react-redux";

function CustomNavbar({ navBarCollapse, handleNavbarCollapse }) {
  const [show, setShow] = useState(false);
  const loggedCustomer = useSelector((state) => state.customer);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        expanded={navBarCollapse}
        expand="lg"
        bg="white"
        variant="light"
        sticky="top"
        className="navbar-plantasia"
      >
        <Container className="p-sm-0">
          <Navbar.Brand as={Link} to="/" className="text-warning">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_green.svg`}
              alt="Plantasia logo"
              className="navbar-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNav"
            className="navbar-hamburger"
            onClick={handleNavbarCollapse}
          />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/about-this-project">
                About this project
              </Nav.Link>
              {loggedCustomer.token ? (
                <Nav.Link as={Link} to="/profile" className="d-lg-none">
                  Profile
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login" className="d-lg-none">
                  LogIn
                </Nav.Link>
              )}
              <Nav.Link href="#" className="d-lg-none" onClick={handleShow}>
                Cart
              </Nav.Link>
            </Nav>
            <Nav className="d-flex d-none d-lg-flex">
              {loggedCustomer.token ? (
                <Nav.Link as={Link} to="/profile" className="ms-auto navbar-anchor d-flex pe-1">
                  <p className="proxima-nova-bold m-0 me-1">Welcome plant lover! </p>
                  <i className="bi bi-person"></i>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="me-1 ms-auto navbar-anchor">
                    <p className="proxima-nova-regular m-0">Log In</p>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register" className="me-1 ms-auto navbar-anchor">
                    <p className="proxima-nova-regular m-0">Sign Up</p>
                  </Nav.Link>
                </>
              )}
              <Nav.Link className="navbar-anchor" onClick={handleShow}>
                <i className="bi bi-cart"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={show} handleClose={handleClose} />
    </>
  );
}

export default CustomNavbar;
