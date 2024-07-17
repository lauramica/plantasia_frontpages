import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import "../css/Cart.css";
import { increaseProduct, decreaseProduct, removeProduct } from "../redux/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const { id, image, name, price, stock, quantity } = product;

  const handleIncrement = () => {
    if (quantity < stock) {
      dispatch(increaseProduct({ productId: id, productQty: 1 }));
      return;
    }
    return toast.warning("There's not enough stock to add more");
  };

  const handleDecrement = () => {
    quantity > 1 ? dispatch(decreaseProduct(id)) : dispatch(removeProduct(id));
  };

  const handleRemove = () => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="cart-items d-flex position-relative p-3 m-0">
      <div className="d-flex">
        <div className="cart-items-photo">
          <img src={`${import.meta.env.VITE_IMAGES_URL}products/${image}`} alt={name} />
        </div>
        <div className="d-flex flex-column justify-content-between align-items-start ms-3">
          <div className="cart-items-text">
            <h4 className="p-0">{name.split("(")[0]}</h4>
          </div>
          <div className="counter-container text-center">
            <button className="counter-container-counterbutton1" onClick={handleDecrement}>
              <i className="bi bi-dash-lg"></i>
            </button>
            <span className="counter-value">{quantity}</span>
            <button className="counter-container-counterbutton1" onClick={handleIncrement}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="cart-price-icon-container ms-auto text-nowrap">
        <i className="bi bi-trash-fill cart-trash-icon" onClick={handleRemove}></i>
        <p className="cart-item-price m-0">1 x ${price}</p>
      </div>
    </div>
  );
}

export default CartItem;
