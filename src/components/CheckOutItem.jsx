import { useDispatch, useSelector } from "react-redux";
import { increaseProduct, decreaseProduct, removeProduct } from "../redux/cartSlice";
import { useEffect } from "react";
import axios from "axios";

function CheckOutItem({ product }) {
  const dispatch = useDispatch();
  const subtotal = (product.price * product.quantity).toFixed(2);
  const cart = useSelector((state) => state.cart);
  const loggedCustomer = useSelector((state) => state.customer);

  const handleIncrement = () => {
    if (product.stock >= product.quantity + 1) {
      dispatch(increaseProduct({ productId: product.id, productQty: 1 }));
    }
  };

  const handleDecrement = () => {
    product.quantity > 1
      ? dispatch(decreaseProduct(product.id))
      : dispatch(removeProduct(product.id));
  };

  useEffect(() => {
    const saveCart = async () => {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/customers/${loggedCustomer.id}`,
        method: "POST",
        data: { cart: cart },
        headers: { Authorization: `Bearer ${loggedCustomer.token}` },
      });
    };
    saveCart();
  }, [cart]);

  return (
    <>
      <td>
        <div className="d-flex flex-wrap">
          <img
            src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${product.image}`}
            className="img-fluid me-3 mb-3 mb-lg-0 product-img rounded-corner shadow"
            alt={product.name}
          />
          <div>
            <p className="proxima-nova-bold m-0 darkgreen">{product.name}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center quantity mb-1">
          <i className="bi bi-dash-circle-fill" onClick={handleDecrement}></i>
          <p className="m-0 mx-1 darkgreen mx-md-2 mx-lg-3">{product.quantity}</p>
          <i className="bi bi-plus-circle-fill" onClick={handleIncrement}></i>
        </div>
        {product.stock < 10 ? (
          <small className="proxima-nova-bold terracotta">
            {`Only ${product.stock} left in stock!`}
          </small>
        ) : (
          <></>
        )}
      </td>
      <td>
        <p className="m-0 darkgreen mb-1">${subtotal}</p>
        <small className="proxima-nova-regular almond text-nowrap text-start">
          1x ${product.price}{" "}
        </small>
      </td>
    </>
  );
}

export default CheckOutItem;
