import React, { useEffect, useState } from "react";
import "../css/Order.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function OrderPage() {
  const params = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/orders/${params.id}`,
        method: "GET",
      });
      setOrder(response.data.order);
    };
    getOrder();
  }, []);

  return (
    order && (
      <>
        <div className="container order-container">
          <h1 className="oreder_container_title">Order #{order.id}</h1>
          <div className="row g-6">
            <div className="order_list col-12 col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <p>item</p>
                    </th>
                    <th scope="col"></th>
                    <th scope="col">
                      <p>Price</p>
                    </th>
                    <th scope="col">
                      <p>Quantity</p>
                    </th>
                    <th scope="col">
                      <p>Total</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div>
                          <img
                            src={`${import.meta.env.VITE_IMAGES_URL}${product.type}/${
                              product.image
                            }`}
                            alt={product.name}
                            className="product-img"
                          />
                          <p className="product_name">{product.name}</p>
                        </div>
                      </td>
                      <td></td>
                      <td>
                        <p>${product.price}</p>
                      </td>
                      <td className="product_quantity">
                        <p>{product.quantity}</p>
                      </td>
                      <td>
                        <p>${(product.quantity * product.price).toFixed(2)}</p>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <p className="totalprice">Total Price: ${order.total_price}</p>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="order_addresses col-12 col-md-4">
              <div>
                <h2>Shipping Address:</h2>
                <p>
                  {order.order_address.city}, {order.order_address.state},{" "}
                  {order.order_address.address}, {order.order_address.country},{" "}
                  {order.order_address.postalcode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default OrderPage;
