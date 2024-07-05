import "../css/ProductList.css";
import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const products = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "GET",
      });
      setProducts(response.data.products);
    };
    products();
  }, []);

  return (
    products && (
      <>
        <div className="container p-sm-0">
          <h1 className="galadali-bold mediumgreen my-3">All products</h1>
        </div>
        <div className="filter-container">
          <div className="container p-sm-0 filter-container">
            <div className="product-list-filter">
              <button className="btn-filter me-2">
                Filter <i className="bi bi-filter"></i>
              </button>
              <select name="sort-by" id="sort-by" className="select-filter">
                <option defaultValue="sort-by">Sort by</option>
                <option value="name-asc">Name: ascending</option>
                <option value="name-desc">Name: descending</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="relevance-asc">Relevance: ascending</option>
                <option value="relevance-desc">Relevance: descending</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container product-list-container mb-5">
          <div className="filter-results lightgreen mb-2">
            <small>1-20 of 500 results</small>
          </div>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item ">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
}

export default ProductList;
