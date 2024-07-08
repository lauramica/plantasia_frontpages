import React, { useState } from "react";
import "../css/Order.css";
import product1Img from "/backup_images/plants/bby_florida_ghost.png";
import product2Img from "/backup_images/plants/aquatica.png";

function OrderPage() {
  const initialProducts = [
    { id: "product1", name: "Product 1", price: 100, quantity: 2, img: product1Img },
    { id: "product2", name: "Product 2", price: 50, quantity: 3, img: product2Img },
  ];

  const initialOrder = {
    orderId: "12345",
    products: initialProducts.map((product) => ({
      ...product,
      totalPrice: product.price * product.quantity,
    })),
    shippingAddress: "123 Main St, Anytown, Anystate, United States Of America",
    billingAddress: "456 Main St, Anytown, Anystate, United States Of America",
    totalPrice: initialProducts.reduce((acc, product) => acc + product.price * product.quantity, 0),
  };

  const [order, setOrder] = useState(initialOrder);

  return (
    <>
      <div className="container order-container">
        <h1 className="oreder_container_title">Order #{order.orderId}</h1>
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
                      <p>
                        <img src={product.img} alt={product.name} className="product-img" />
                        <p className="product_name">{product.name}</p>
                      </p>
                    </td>
                    <td></td>
                    <td>
                      <p>${product.price}</p>
                    </td>
                    <td className="product_quantity">
                      <p>{product.quantity}</p>
                    </td>
                    <td>
                      <p>${product.totalPrice}</p>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <p className="totalprice">Total Price: ${order.totalPrice}</p>
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
              <p>{order.shippingAddress}</p>
            </div>
            <div>
              <h2>Billing Address:</h2>
              <p>{order.billingAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
