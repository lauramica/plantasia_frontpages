import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import "../css/ProductPage.css";
import Product from "../components/Product";
import { addProduct, increaseProduct } from "../redux/cartSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const cart = useSelector((state) => state.cart);
  const loggedCustomer = useSelector((state) => state.customer);

  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

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

  const handleIncrement = () => {
    if (count < product.stock) setCount(count + 1);
  };
  const handleDecrement = () => setCount(count > 1 ? count - 1 : 1);

  const handleAddProduct = () => {
    const cartProduct = cart.find((p) => p.id === product.id);
    if (cartProduct) {
      if (cartProduct.quantity + count <= cartProduct.stock) {
        dispatch(increaseProduct({ productId: product.id, productQty: count }));
        return toast.success("Product Added to the Cart!");
      }
    } else {
      dispatch(addProduct({ ...product, quantity: count }));
      return toast.success("Product Added to the Cart!");
    }
    return toast.warning("There's not enough stock to add more");
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products/${params.id}`,
        method: "GET",
      });
      response.data.product ? setProduct(response.data.product) : navigate("/error");
    };
    getProduct();
  }, [params.id]);

  useEffect(() => {
    if (product) {
      const getProducts = async () => {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/products`,
          method: "GET",
          params: { typeId: product.type.id, limit: 4 },
        });
        setProducts(response.data.products);
      };
      getProducts();
    }
  }, [product]);

  return (
    products &&
    product && (
      <div className="container p-sm-0 mt-4 mt-lg-5">
        <Link
          className="text-decoration-none mediumgreen proxima-nova-regular d-flex align-items-center my-2"
          to="/products"
        >
          <i className="bi bi-arrow-left me-2"></i> Back to products
        </Link>
        <section className="product-body">
          <div className="d-flex product-body-content">
            <div className="photo-product">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}products/${product.image}`}
                alt="Product"
                className="object-fit-cover w-100 h-100"
              />
            </div>
            <div className="product-body-content-text w-100 d-flex flex-column justify-content-between">
              <div className="d-flex flex-md-column">
                <div className="d-flex flex-column content-text">
                  <h1 className="mediumgreen pb-2 productpage-productname">{product.name}</h1>
                  <p className="description-pharagraph proxima-nova-regular w-100 p-0 d-none d-md-block">
                    {product.description}
                  </p>
                </div>
                <div className="product-body-content-text-icons border-bottom border-top py-3 d-none d-md-block">
                  <i className="bi bi-droplet me-md-5"></i>
                  <i className="bi bi-feather ms-lg-5 me-lg-5"></i>
                  <i className="bi bi-tree ms-md-5 me-lg-5"></i>
                  <i className="bi bi-brightness-high ms-md-5"></i>
                </div>
                <h2 className="my-3 text-center text-nowrap mt-1 mt-md-4 productpage-productprice">$ {product.price}</h2>
              </div>
              <div className="buttons-div text-center mb-1">
                <div className="counter-container">
                  <button
                    className="counter-container-counterbutton darkgreen"
                    onClick={handleDecrement}
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                  <span className="counter-value">{count}</span>
                  <button
                    className="counter-container-counterbutton darkgreen"
                    onClick={handleIncrement}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
                <button className="product-submitbutton mt-3" onClick={handleAddProduct}>
                  Add to cart <i className="bi bi-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="recomended">
          <h2 className="recomended-title galadali-regular lightgreen mb-4">Recommended for you</h2>
          <div className="product-list mb-3">
            {products.map((p) => (
              <div key={p.id} className="product-item">
                <Product product={p} />
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  );
}

export default ProductPage;
