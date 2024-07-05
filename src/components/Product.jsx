function Product({ product }) {
  return (
    <>
      <div>
        <div className="product-item-img shadow">
          <span className="view-more-badge proxima-nova-regular">View more</span>
          <img
            src={`${import.meta.env.VITE_IMAGES_URL}plants/${product.image}`}
            alt={product.name}
          />
        </div>
        <h4 className="darkgreen proxima-nova-bold mt-3">{product.name.split("(")[0]}</h4>
      </div>
      <div className="product-buttons mt-2">
        <span className="proxima-nova-regular">$ {product.price}</span>
        <a href="" className="btn-buy text-center">
          Add <i className="bi bi-cart"></i>
        </a>
      </div>
    </>
  );
}

export default Product;
