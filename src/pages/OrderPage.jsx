import React, { useEffect, useState } from "react";
import "../css/Order.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function OrderPage() {
  const params = useParams();
  const [order, setOrder] = useState(null);
  const loggedCustomer = useSelector((state) => state.customer);

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}`,
        method: "GET",
        headers: { Authorization: `Bearer ${loggedCustomer.token}` },
      });
      const orders = response.data.customer.orders;
      const currentOrder = orders.find((o) => o.id === Number(params.id));
      setOrder(currentOrder);
    };
    getOrder();
  }, []);

  return (
    order && (
      <>
        <div className="container p-sm-0 order-container">
          <Link
            to={"/orders"}
            className="text-decoration-none mediumgreen d-flex justify-content-left align-items-center"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to orders
          </Link>
          <h1 className="order_container_title galadali-bold">
            Order <span className="galadali-regular">#{order.order_id}</span>
          </h1>
          <div className="order-list">
            <div className="order-page-table flex-grow-1">
              <table className="table">
                <thead>
                  <tr>
                    <th>Products</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product) => (
                    <tr key={`${product.id}${order.id}`}>
                      <td>
                        <div className="product_img_name">
                          <img
                            src={`${import.meta.env.VITE_IMAGES_URL}products/${product.image}`}
                            alt={product.name}
                            className="product-img"
                          />
                          <span className="product_name">{product.name}</span>
                        </div>
                      </td>
                      <td className="text-center">$ {product.price}</td>
                      <td className="text-center">{product.quantity}</td>
                      <td className="text-center">
                        $ {(product.quantity * product.price).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="col" colSpan={4}>
                      Total Price: $ {order.total_price}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="order_address">
              <h2>Shipping Address:</h2>
              <p>
                {order.order_address.city}, {order.order_address.state},{" "}
                {order.order_address.address}, {order.order_address.country},{" "}
                {order.order_address.postalcode}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default OrderPage;
