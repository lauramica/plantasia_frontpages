import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

import "../css/ProductList.css";
import Product from "../components/Product";
import { setProducts } from "../redux/productsSlice";

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();
  const { pathname } = useLocation();

  const products = useSelector((state) => state.products);

  const handleUnderDevelopment = () => {
    return toast.warning("This function is under development");
  };

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "GET",
        params: { typeId: category },
      });
      dispatch(setProducts(data.products));
    };
    getProducts();
  }, [pathname]);

  return (
    products && (
      <>
        <div className="container p-sm-0">
          <h1 className="galadali-bold mediumgreen my-3">All products</h1>
        </div>
        <div className="filter-container">
          <div className="container filter-container">
            <div className="product-list-filter">
              <select
                name="categories"
                id="categories"
                defaultValue={category}
                className="select-filter me-2"
                onChange={(e) =>
                  navigate(`/products${e.target.value !== "0" ? `/${e.target.value}` : ""}`, {
                    replace: true,
                  })
                }
              >
                <option value="0">All Categories</option>
                <option value="1">Plants</option>
                <option value="2">Pots</option>
                <option value="3">Care</option>
                <option value="4">Accessories</option>
              </select>
              <select
                name="sort-by"
                id="sort-by"
                className="select-filter"
                onChange={handleUnderDevelopment}
              >
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
