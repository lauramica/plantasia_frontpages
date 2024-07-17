import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import "../css/Cart.css";
import CartItem from "./CartItem";

function Cart({ show, handleClose }) {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const handleCheckOut = () => {
    handleClose();
    return navigate("/cart");
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      className="right-slide-modal"
    >
      <div className="modal-content">
        <div className="cart-title pb-0">
          <button
            type="button"
            className="btn-close cart-closebutton"
            onClick={handleClose}
            aria-label="Close"
          ></button>
          <h2 className="modal-title mediumgreen">Hi!</h2>
          <h2 className="modal-title mediumgreen">This is your shopping cart</h2>
        </div>
        <div className="modal-body pt-0">
          {cart.length < 1 ? (
            <div className="text-center my-5">
              <h5 className="proxima-nova-regular lightgreen pb-3">
                ... and is empty <i className="bi bi-emoji-frown"></i>
              </h5>
              <Link to="/products" onClick={handleClose} className="cart-link text-decoration-none">
                Add Products!
              </Link>
            </div>
          ) : (
            <div className="d-flex flex-column">
              {cart.map((product) => (
                <div key={product.id}>
                  <CartItem product={product} />
                </div>
              ))}
              <div className="mx-3 w-100">
                <button className="cart-button my-2" onClick={handleCheckOut}>
                  Go to checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
