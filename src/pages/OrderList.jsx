import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";
import axios from "axios";

import "../css/OrderList.css";
import { increaseProduct, addProduct } from "../redux/cartSlice";

function OrderList() {
  const dispatch = useDispatch();

  const loggedCustomer = useSelector((state) => state.customer);
  const cart = useSelector((state) => state.cart);

  const [orders, setOrders] = useState(null);

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

  const handleAddProduct = (product) => {
    const cartProduct = cart.find((p) => p.id === product.id);
    if (cartProduct) {
      if (cartProduct.quantity < product.stock) {
        dispatch(increaseProduct({ productId: product.id, productQty: 1 }));
        return toast.success("Product Added to the Cart!");
      }
    } else {
      if (product.stock > 0) {
        dispatch(addProduct({ ...product, quantity: 1 }));
        return toast.success("Product Added to the Cart!");
      }
    }
    return toast.warning("There's not enough stock to add more");
  };

  return (
    orders && (
      <div className="container p-sm-0">
        <div className="d-flex">
          <Link
            to={"/profile"}
            className="text-decoration-none mediumgreen d-flex align-items-center mt-2 me-auto"
          >
            <i className="bi bi-arrow-left me-2"></i>Back to profile
          </Link>
          <div></div>
        </div>
        <h1 className="galadali-bold mediumgreen my-3">Your Orders</h1>
        {orders.length > 0 ? (
          orders.map(({ id, order_id, createdAt, total_price, state, products }) => (
            <div className="order-card mb-3" key={id}>
              <div className="order-card-header p-3">
                <div className="order-card-header-items">
                  <p className="order-card-header-title">Order id</p>
                  <p>{order_id}</p>
                </div>
                <div className="order-card-header-items">
                  <p className="order-card-header-title">Date</p>
                  <p>{format(createdAt, "dd/MM/yyyy")}</p>
                </div>
                <div className="order-card-header-items">
                  <p className="order-card-header-title">Total</p>
                  <p>$ {total_price}</p>
                </div>
                <div className="order-card-header-status">
                  <p className="order-card-header-title">State</p>
                  <p>
                    {state === "pending" ? (
                      <span>
                        <i className="bi bi-hourglass me-1"></i>Pending
                      </span>
                    ) : state === "processing" ? (
                      <span>
                        <i className="bi bi-arrow-repeat me-1"></i>Processing
                      </span>
                    ) : state === "in transit" ? (
                      <span>
                        <i className="bi bi-truck me-1"></i>In Transit
                      </span>
                    ) : state === "delivered" ? (
                      <span>
                        <i className="bi bi-check-circle me-1"></i>Delivered
                      </span>
                    ) : (
                      <span>
                        <i className="bi bi-x-circle me-1"></i>Canceled
                      </span>
                    )}
                  </p>
                </div>
                <Link to={`/order/${order_id}`} className="order-card-header-btn shadow">
                  Order details
                </Link>
              </div>
              {products.map((product) => (
                <div className="order-card-item p-3" key={`${id}${product.id}`}>
                  <Link to={`/product/${product.id}`}>
                    <img
                      className="order-card-item-img"
                      src={`${import.meta.env.VITE_IMAGES_URL}products/${product.image}`}
                      alt={product.image}
                    />
                  </Link>
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
          ))
        ) : (
          <div>
            <p className="proxima-nova-regular">
              You have no orders yet,{" "}
              <Link to="/products" className="text-decoration-none darkgreen proxima-nova-bold">
                let's make some shopping!
              </Link>
            </p>
          </div>
        )}
      </div>
    )
  );
}

export default OrderList;
