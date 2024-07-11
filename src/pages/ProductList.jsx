import "../css/ProductList.css";
import Product from "../components/Product";
import { setProducts } from "../redux/productsSlice";

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [filterValue, setFilterValue] = useState(null);
  const [productsToShow, setProductsToShow] = useState(null);
  /*   const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(null); */

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "GET",
        // params: { page: page },
      });
      dispatch(setProducts(response.data.products));
      setProductsToShow(response.data.products);
    };
    getProducts();
    // }, [page]);
  }, []);

  useEffect(() => {
    const getProductsPerType = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/types/${filterValue}`,
        method: "GET",
        // params: { page: page },
      });
      setProductsToShow(response.data.type.products);
      // setPageLimit(response.data.totalPages);
    };
    filterValue ? getProductsPerType() : setProductsToShow(products);
  }, [filterValue]);

  return (
    productsToShow && (
      <>
        <div className="container p-sm-0">
          <h1 className="galadali-bold mediumgreen my-3">All products</h1>
        </div>
        <div className="filter-container">
          <div className="container p-sm-0 filter-container">
            <div className="product-list-filter">
              <select
                name="categories"
                id="categories"
                className="select-filter me-2"
                onChange={(e) => setFilterValue(e.target.value)}
              >
                <option defaultValue="Categories">Categories</option>
                <option value="1">Plants</option>
                <option value="2">Pots</option>
                <option value="3">Care</option>
                <option value="4">Accessories</option>
              </select>
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
            {productsToShow.map((product) => (
              <div key={product.id} className="product-item ">
                <Product product={product} />
              </div>
            ))}
          </div>
          {/*           <div className="d-flex justify-content-around">
            <button onClick={() => setPage(page > 1 ? page - 1 : page)}>Previous</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
          </div> */}
        </div>
      </>
    )
  );
}

export default ProductList;
