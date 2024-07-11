import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
import Cart from "./Cart";

function CustomNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" bg="white" variant="light" sticky="top" className="navbar-plantasia">
        <Container className="p-sm-0">
          <Navbar.Brand as={Link} to="/" className="text-warning">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_green.svg`}
              alt="Plantasia logo"
              className="navbar-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" className="navbar-hamburger" />
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
              <Nav.Link as={Link} to="/profile" className="d-lg-none">
                Profile
              </Nav.Link>
              <Nav.Link href="#" className="d-lg-none">
                Favorites
              </Nav.Link>
              <Nav.Link href="#" className="d-lg-none" onClick={handleShow}>
                Cart
              </Nav.Link>
            </Nav>
            <Nav className="d-flex d-none d-lg-flex">
              <Nav.Link as={Link} to="/profile" className="me-3 ms-auto navbar-anchor">
                <i className="bi bi-person-fill"></i>
              </Nav.Link>
              <Nav.Link className="me-3 navbar-anchor">
                <i className="bi bi-suit-heart-fill"></i>
              </Nav.Link>
              <Nav.Link href="#" className="navbar-anchor" onClick={handleShow}>
                <i className="bi bi-cart-fill"></i>
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
