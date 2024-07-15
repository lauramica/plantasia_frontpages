import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "../css/ProductPage.css";
import Product from "../components/Product";
import { addProduct, increaseProduct } from "../redux/cartSlice";

function ProductPage() {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const cart = useSelector((state) => state.cart);

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
      if (cartProduct.stock >= cartProduct.quantity + count) {
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
      setProduct(response.data.product);
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
      <>
        <div className="container p-sm-0">
          <section className="product-body mt-4 mt-lg-5">
            <Link className="product-body-goback" to="/products">
              <i className="bi bi-arrow-left"></i> Back to products
            </Link>
            <div className="d-flex product-body-content">
              {/*               <div className="side-images d-flex flex-column justify-content-between me-3 d-none d-lg-block">
                <div className="side-image-item">
                  {" "}
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${product.image}`}
                    alt="Product"
                    className="object-fit-cover w-100"
                  />
                </div>
                <div className="side-image-item my-3">
                  {" "}
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${product.image}`}
                    alt="Product"
                    className="object-fit-cover w-100"
                  />
                </div>
                <div className="side-image-item">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${product.image}`}
                    alt="Product"
                    className="object-fit-cover w-100"
                  />
                </div>
              </div> */}
              <div className="photo-product">
                <img
                  src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${product.image}`}
                  alt="Product"
                  className="object-fit-cover w-100 h-100"
                />
              </div>
              <div className="product-body-content-text w-100 d-flex flex-column justify-content-between">
                <div className="d-flex flex-column content-text">
                  <h1 className="mediumgreen pb-2">{product.name}</h1>
                  <p className="description-pharagraph proxima-nova-regular w-100 p-0">
                    {product.description}
                  </p>
                </div>
                <div className="product-body-content-text-icons border-bottom border-top py-3">
                  <i className="bi bi-droplet"></i>
                  <i className="bi bi-feather"></i>
                  <i className="bi bi-tree"></i>
                  <i className="bi bi-brightness-high"></i>
                </div>
                <h2 className="my-3 text-center">$ {product.price}</h2>
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
            <h2 className="recomended-title galadali-regular lightgreen mb-4">
              Recommended for you
            </h2>
            <div className="product-list mb-3">
              {products.map((p) => (
                <div key={p.id} className="product-item">
                  <Product product={p} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    )
  );
}

export default ProductPage;
