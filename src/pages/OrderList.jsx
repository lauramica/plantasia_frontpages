import "../css/OrderList.css";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function OrderList() {
  const [orders, setOrders] = useState(null);
  const loggedCustomer = useSelector((state) => state.customer);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}`,
        method: "GET",
        headers: { Authorization: `Bearer ${loggedCustomer.token}` },
      });
      setOrders(response.data.customer.orders);
    };
    getOrders();
  }, []);

  return (
    orders && (
      <div className="container p-sm-0">
        <h1 className="galadali-bold mediumgreen my-3">Your Orders</h1>
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
                <p>{order.total_price}</p>
              </div>
              <div className="order-card-header-status">
                <p className="order-card-header-title">Status</p>
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
                  <a href="/product" className="text-decoration-none darkgreen proxima-nova-bold">
                    {product.name}
                  </a>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <div className="order-card-item-buttons">
                  <a href="/product" className="order-card-item-btn">
                    View product
                  </a>
                  <a href="/cart " className="order-card-item-btn">
                    <i className="bi bi-cart-plus me-1"></i>Buy again
                  </a>
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
