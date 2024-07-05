import React from "react";
import "../css/Navbar.css";
import Cart from "./Cart";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 position-sticky">
        <div className="container p-sm-0">
          <a className="navbar-brand text-warning" href="/">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_green.svg`}
              alt="Plantasia logo"
              className="navbar-logo"
            />
          </a>
          <button
            className="navbar-toggler navbar-hamburger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav me-auto">
              <a className="navbar-text nav-link me-3" href="/">
                Home
              </a>
              <a className="navbar-text nav-link me-3" href="/products">
                Products
              </a>
              <a className="navbar-text nav-link me-3" href="/about-this-project">
                About this project
              </a>
              <a className="navbar-text nav-link me-3 d-lg-none" href="#">
                Profile
              </a>
              <a className="navbar-text nav-link me-3 d-lg-none" href="#">
                Favorites
              </a>
              <button
                type="button"
                className="navbar-text nav-link me-3 d-lg-none "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Cart
              </button>
            </div>
            <div className="d-flex d-none d-lg-flex">
              <a className="nav-link me-3 ms-auto navbar-anchor" href="#">
                <i className="bi bi-person-fill"></i>
              </a>
              <a className="nav-link me-3 navbar-anchor" href="#">
                <i className="bi bi-suit-heart-fill"></i>
              </a>
              <button
                type="button"
                className="navbar-anchor"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi bi-cart-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Cart />
    </>
  );
}

export default Navbar;
