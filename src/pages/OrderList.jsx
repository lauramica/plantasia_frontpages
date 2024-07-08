import "../css/OrderList.css";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

function OrderList() {
  return (
    <div className="container p-sm-0">
      <h1 className="galadali-bold mediumgreen my-3">Your Orders</h1>
      <div className="order-card mb-3">
        <div className="order-card-header p-3">
          <div className="order-card-header-items">
            <p className="order-card-header-title">Order id</p>
            <p>order.id</p>
          </div>
          <div className="order-card-header-items">
            <p className="order-card-header-title">Date</p>
            <p>order.createdAt</p>
          </div>
          <div className="order-card-header-items">
            <p className="order-card-header-title">Total</p>
            <p>order.total</p>
          </div>
          <div className="order-card-header-status">
            <p className="order-card-header-title">Status</p>
            <p>order.status</p>
          </div>
          <a href="#" className="order-card-header-btn">
            Order details
          </a>
        </div>
        <div className="order-card-item p-3">
          <img
            className="order-card-item-img"
            src="https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fk%2Fb%2Fkb.002-1-1006_2.jpg&w=384&q=80"
            alt="product-name"
          />
          <div className="order-card-item-details">
            <a href="/product" className="text-decoration-none darkgreen proxima-nova-bold">
              Product_name
            </a>
            <p>Quantity: 1</p>
          </div>
          <div className="order-card-item-buttons">
            <a href="/product" className="order-card-item-btn">
              View product
            </a>
            <a href="/cart " className="order-card-item-btn">
              <i class="bi bi-cart-plus me-1"></i>Buy again
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
