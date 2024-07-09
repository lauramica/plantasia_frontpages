import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "../css/Cart.css";
import { increaseProduct, decreaseProduct, removeProduct } from "../redux/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseProduct({ productId: product.id, productQty: 1 }));
  };
  const handleDecrement = () => {
    product.quantity > 1
      ? dispatch(decreaseProduct(product.id))
      : dispatch(removeProduct(product.id));
  };

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <>
      <div className="cart-items d-flex position-relative">
        <div className="cart-items-photo">
          <img
            src={`${import.meta.env.VITE_IMAGES_URL}plants/${product.image}`}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="d-flex flex-column justify-content-between cart-items-text">
          <div className="cart-items-text">
            <h3>{product.name.split("(")[0]}</h3>
          </div>
          <div className="counter-container text-center mt-2">
            <button className="counter-container-counterbutton1" onClick={handleDecrement}>
              <i className="bi bi-dash-lg"></i>
            </button>
            <span className="counter-value">{product.quantity}</span>
            <button className="counter-container-counterbutton1" onClick={handleIncrement}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
        <div className="cart-price-icon-container position-absolute">
          <i className="bi bi-trash-fill cart-trash-icon" onClick={handleRemove}></i>
          <p className="cart-item-price">{product.price}</p>
        </div>
      </div>
    </>
  );
}

export default CartItem;
