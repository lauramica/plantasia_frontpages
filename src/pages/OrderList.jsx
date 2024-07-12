import "../css/OrderList.css";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { increaseProduct, addProduct } from "../redux/cartSlice";

function OrderList() {
  const [orders, setOrders] = useState(null);
  const loggedCustomer = useSelector((state) => state.customer);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}`,
        method: "GET",
        headers: { Authorization: `Bearer ${loggedCustomer.token}` },
      });
      setOrders(response.data.customer.orders);
      console.log(response.data.customer.orders);
    };
    getOrders();
  }, []);

  const handleAddProduct = (product) => {
    const cartProduct = cart.find((p) => p.id === product.id);
    if (cartProduct) {
      if (cartProduct.stock >= cartProduct.quantity + 1)
        dispatch(increaseProduct({ productId: product.id, productQty: 1 }));
    } else {
      dispatch(addProduct({ ...product, quantity: 1 }));
    }
  };

  return (
    orders && (
      <div className="container p-sm-0">
        <h1 className="galadali-bold mediumgreen my-3">Your Orders</h1>
        <Link to={"/profile"} className="mediumgreen mb-3">
          <i className="bi bi-arrow-left"></i> Back to profile
        </Link>
        {orders.map((order) => (
          <div className="order-card mb-3" key={order.id}>
            <div className="order-card-header p-3">
              <div className="order-card-header-items">
                <p className="order-card-header-title">Order id</p>
                <p>{order.id}</p>
              </div>
              <div className="order-card-header-items">
                <p className="order-card-header-title">Date</p>
                <p>{order.createdAt}</p>
              </div>
              <div className="order-card-header-items">
                <p className="order-card-header-title">Total</p>
                <p>$ {order.total_price}</p>
              </div>
              <div className="order-card-header-status">
                <p className="order-card-header-title">State</p>
                <p>{order.state}</p>
              </div>
              <Link to={`/order/${order.id}`} className="order-card-header-btn">
                Order details
              </Link>
            </div>
            {order.products.map((product) => (
              <div className="order-card-item p-3" key={`${order.id}${product.id}`}>
                <img
                  className="order-card-item-img"
                  src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${product.image}`}
                  alt={product.image}
                />
                <div className="order-card-item-details">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none darkgreen proxima-nova-bold"
                  >
                    {product.name}
                  </Link>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <div className="order-card-item-buttons">
                  <Link to={`/product/${product.id}`} className="order-card-item-btn">
                    View product
                  </Link>
                  <button
                    className="order-card-item-btn border border-0"
                    onClick={() => handleAddProduct(product)}
                  >
                    <i className="bi bi-cart-plus me-1"></i>Buy again
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  );
}

export default OrderList;
