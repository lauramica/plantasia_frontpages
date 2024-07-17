import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
import Cart from "./Cart";
import { useSelector } from "react-redux";

function CustomNavbar({ navBarCollapse, handleNavbarCollapse }) {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);
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
        <Container className="p-sm-0 d-flex">
          <Navbar.Brand as={Link} to="/" className="text-warning">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_green.svg`}
              alt="Plantasia logo"
              className="navbar-logo"
            />
          </Navbar.Brand>
          <div className="d-flex navbar-content">
            <Navbar.Toggle
              aria-controls="navbarNav"
              className="navbar-hamburger"
              onClick={handleNavbarCollapse}
            />
            <div className="">
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
                </Nav>
              </Navbar.Collapse>
            </div>
            <div className="d-flex align-items-center ms-auto">
              {loggedCustomer.token ? (
                <Nav.Link
                  as={Link}
                  to="/profile"
                  className="navbar-anchor d-flex align-items-center me-2"
                >
                  <p className="proxima-nova-bold m-0 me-2 d-none d-lg-block welcome-text">
                    Welcome plant lover!
                  </p>
                  <i className="bi bi-person"></i>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="me-2 navbar-anchor">
                    <p className="proxima-nova-regular m-0">Log In</p>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register" className="me-1 navbar-anchor">
                    <p className="proxima-nova-regular m-0">Sign Up</p>
                  </Nav.Link>
                </>
              )}
              <Nav.Link className="navbar-anchor" onClick={handleShow}>
                <i className="bi bi-cart">
                  {cart.length > 0 ? (
                    <span className="cart-quantity rounded-circle position-absolute top-0 left-0 text-white">
                      {cart.reduce((acc, product) => acc + product.quantity, 0)}
                    </span>
                  ) : (
                    <></>
                  )}
                </i>
              </Nav.Link>
            </div>
          </div>
        </Container>
      </Navbar>
      <Cart show={show} handleClose={handleClose} />
    </>
  );
}

export default CustomNavbar;
