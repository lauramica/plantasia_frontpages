import React from "react";
import { useState } from "react";
import "../css/Cart.css";

function CartItem() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <>
      <div className="cart-items d-flex position-relative">
        <div className="cart-items-photo">
          <img src="backup_images/recomended_product.svg" alt="" />
        </div>
        <div className="d-flex flex-column justify-content-between cart-items-text">
          <div className="cart-items-text">
            <h3>Planta</h3>
            <b>Familia</b>
          </div>
          <div className="counter-container text-center mt-2">
            <button className="counter-container-counterbutton1" onClick={handleDecrement}>
              <i className="bi bi-dash-lg"></i>
            </button>
            <span className="counter-value">{count}</span>
            <button className="counter-container-counterbutton1" onClick={handleIncrement}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
        <div className="cart-price-icon-container position-absolute">
          <i className="bi bi-trash-fill cart-trash-icon"></i>
          <p className="cart-item-price">$4.95</p>
        </div>
      </div>
    </>
  );
}

export default CartItem;
