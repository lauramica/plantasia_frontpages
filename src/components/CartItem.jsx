import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/Cart.css";
import { increaseProduct, decreaseProduct, removeProduct } from "../redux/cartSlice";
import axios from "axios";

function CartItem({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const loggedCustomer = useSelector((state) => state.customer);

  const handleIncrement = () => {
    if (product.stock >= product.quantity + 1)
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

  useEffect(() => {
    const saveCart = async () => {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}`,
        method: "POST",
        data: { cart: cart },
        headers: { Authorization: `Bearer ${loggedCustomer.token}` },
      });
    };
    saveCart();
  }, [cart]);

  return (
    <>
      <div className="cart-items d-flex position-relative p-3 m-0">
        <div className="d-flex">
          <div className="cart-items-photo">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${product.image}`}
              alt={product.name}
            />
          </div>
          <div className="d-flex flex-column justify-content-between align-items-start ms-3">
            <div className="cart-items-text">
              <h4 className="p-0">{product.name.split("(")[0]}</h4>
            </div>
            <div className="counter-container text-center">
              <button className="counter-container-counterbutton1" onClick={handleDecrement}>
                <i className="bi bi-dash-lg"></i>
              </button>
              <span className="counter-value">{product.quantity}</span>
              <button className="counter-container-counterbutton1" onClick={handleIncrement}>
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-price-icon-container ms-auto text-nowrap">
          <i className="bi bi-trash-fill cart-trash-icon" onClick={handleRemove}></i>
          <p className="cart-item-price m-0">1 x ${product.price}</p>
        </div>
      </div>
    </>
  );
}

export default CartItem;
