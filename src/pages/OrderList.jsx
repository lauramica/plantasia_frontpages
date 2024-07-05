import "../css/OrderList.css";

function OrderList() {
  return (
    <div className="container">
      <h1>Your Orders</h1>
      <div className="order-card">
        <div className="order-card-header">
          <div>
            <p>Order id</p>
            <p>order.id</p>
          </div>
          <div>
            <p>Date</p>
            <p>order.createdAt</p>
          </div>
          <div>
            <p>Total</p>
            <p>order.total</p>
          </div>
          <div>
            <p>Status</p>
            <p>order.id</p>
          </div>
          <a href="#">Order details</a>
        </div>
        <div className="order-card-item">
          <img
            src="https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fk%2Fb%2Fkb.002-1-1006_2.jpg&w=384&q=80"
            alt="product-name"
          />
          <div className="order-card-item-details">
            <a href="">Product_name</a>
            <p>Quantity</p>
            <p>Price?</p>
          </div>
          <div className="order-card-item-buttons">
            <a href="">View product</a>
            <button>Buy again</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
