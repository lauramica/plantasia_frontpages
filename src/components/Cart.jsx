import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import "../css/Cart.css";
import CartItem from "./CartItem";

function Cart({ show, handleClose }) {
  const cart = useSelector((state) => state.cart);
  const customer = useSelector((state) => state.customer);

  const navigate = useNavigate();

  const handleCheckOut = () => {
    handleClose();
    if (customer.token) {
      if (cart.length < 1) {
        return navigate("/products");
      }
      return navigate("/cart");
    }
    return navigate("/login");
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      className="right-slide-modal"
    >
      <div className="modal-content">
        <div className="cart-title">
          <button
            type="button"
            className="btn-close cart-closebutton"
            onClick={handleClose}
            aria-label="Close"
          ></button>
          <h2 className="modal-title">Hi!</h2>
          <h2>This is your shopping cart</h2>
        </div>
        <div className="modal-body">
          {cart.length < 1 ? (
            <div className="text-center my-5">
              <h2 className="proxima-nova-bold lightgreen pb-3">Your Cart Is Empty</h2>
              <Link
                to="/products"
                onClick={handleClose}
                className="cart-button cart-link text-decoration-none"
              >
                Add Products
              </Link>
            </div>
          ) : (
            cart.map((product) => (
              <div key={product.id}>
                <CartItem product={product} />
              </div>
            ))
          )}
        </div>
        <button className="cart-button" onClick={handleCheckOut}>
          Go to checkout
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
