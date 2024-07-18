import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { increaseProduct, decreaseProduct, removeProduct } from "../redux/cartSlice";

function CheckOutItem({ product }) {
  const dispatch = useDispatch();

  const { id, name, image, price, stock, quantity } = product;
  const subtotal = (price * quantity).toFixed(2);

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

  return (
    <>
      <td>
        <div className="checkout-product-img-name">
          <img
            src={`${import.meta.env.VITE_IMAGES_URL}products/${image}`}
            className="checkout-product-img rounded-corner shadow"
            alt={name}
          />
          <div>
            <p className="proxima-nova-bold darkgreen checkout-product-name">{name}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center quantity mb-1">
          <i className="bi bi-dash-circle-fill" onClick={handleDecrement}></i>
          <p className="m-0 mx-1 darkgreen mx-md-2 mx-lg-3">{quantity}</p>
          <i className="bi bi-plus-circle-fill" onClick={handleIncrement}></i>
        </div>
        {stock < 10 ? (
          <small className="proxima-nova-bold terracotta">{`Only ${stock} left in stock!`}</small>
        ) : (
          <></>
        )}
      </td>
      <td>
        <p className="m-0 darkgreen mb-1">${subtotal}</p>
        <small className="proxima-nova-regular almond text-nowrap text-start">1x ${price} </small>
      </td>
    </>
  );
}

export default CheckOutItem;
