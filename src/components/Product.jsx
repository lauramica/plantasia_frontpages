import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <>
      <div>
        <Link to={`/products/${product.id}`}>
          <div className="product-item-img shadow">
            <span className="view-more-badge proxima-nova-regular">View more</span>
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}plants/${product.image}`}
              alt={product.name}
            />
          </div>
        </Link>
        <h4 className="darkgreen proxima-nova-bold mt-3">{product.name.split("(")[0]}</h4>
      </div>
      <div className="product-buttons mt-2">
        <span className="proxima-nova-regular">$ {product.price}</span>
        <button className="btn-buy text-center">
          Add <i className="bi bi-cart"></i>
        </button>
      </div>
    </>
  );
}

export default Product;
