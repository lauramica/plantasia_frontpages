import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { increaseProduct, addProduct } from "../redux/cartSlice";

function Product({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddProduct = () => {
    const cartProduct = cart.find((p) => p.id === product.id);
    if (cartProduct) {
      if (cartProduct.stock >= cartProduct.quantity + 1)
        dispatch(increaseProduct({ productId: product.id, productQty: 1 }));
    } else {
      dispatch(addProduct({ ...product, quantity: 1 }));
    }
  };

  return (
    <>
      <div>
        <Link to={`/products/${product.id}`}>
          <div className="product-item-img shadow">
            <span className="view-more-badge proxima-nova-regular">View more</span>
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${product.image}`}
              alt={product.name}
            />
          </div>
        </Link>
        <h4 className="darkgreen proxima-nova-bold mt-3">{product.name.split("(")[0]}</h4>
      </div>
      <div className="product-buttons mt-2">
        <span className="proxima-nova-regular">$ {product.price}</span>
        <button className="btn-buy text-center" onClick={handleAddProduct}>
          Add <i className="bi bi-cart"></i>
        </button>
      </div>
    </>
  );
}

export default Product;
