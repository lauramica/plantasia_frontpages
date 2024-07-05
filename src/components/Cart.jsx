import React from "react";
import { useState } from "react";

import "../css/Cart.css";
import CartItem from "./CartItem";

function Cart() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <>
      <div
        className="modal fade right modal-lg"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="cart-title">
              <button
                type="button"
                className="btn-close cart-closebutton"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <h2 className="modal-title">Hi!</h2>
              <h2>This is your shopping cart</h2>
            </div>
            <div className="modal-body">
              <CartItem />
              <CartItem />
              <CartItem />
            </div>

            <button type="button" className="cart-button">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
