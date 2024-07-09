import React from "react";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Cart.css";
import CartItem from "./CartItem";

function Cart({ show, handleClose }) {
  const [count, setCount] = useState(0);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);

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
          {cart.map((product) => (
            <div key={product.id}>
              <CartItem product={product} />
            </div>
          ))}
        </div>
        <button type="button" className="cart-button">
          Go to checkout
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
