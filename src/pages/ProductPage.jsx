import "../css/ProductPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";

function ProductPage() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(null);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);

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
          <section className="product-body mt-5">
            <a className="product-body-goback" href="products">
              <i className="bi bi-arrow-left"></i> Back to products
            </a>
            <div className="d-flex product-body-content w-100">
              <div className="photo-product w-100">
                <img
                  src={`${import.meta.emv.VITE_IMAGES_URL}plants/paradoxa_minor.png`}
                  alt="Product"
                  className="object-fit-cover w-100 h-100"
                />
              </div>
              <div className="product-body-content-text w-100 d-flex flex-column justify-content-between">
                <div className="d-flex flex-column">
                  <h1>Paradoxa Minor</h1>
                  <h3>Rhipsalis, Fishbone cactus</h3>
                  <p className="description-pharagraph proxima-nova-regular border-bottom w-100">
                    The Rhipsalis Paradoxa Minor has a very distinctive look. She has long stems
                    that can be thick, thin, straight or slightly curled. These cool stems hang from
                    her pot, giving her a very noteworthy look! So if you are looking for a cool
                    houseplant with an uncommon appearance, you have found your match! Buy Rhipsalis
                    Paradoxa Minor online.
                  </p>
                </div>
                <div className="product-body-content-text-icons border-bottom pb-3">
                  <i className="bi bi-droplet"></i>
                  <i className="bi bi-feather"></i>
                  <i className="bi bi-tree"></i>
                  <i className="bi bi-brightness-high"></i>
                </div>
                <h2 className="mt-3">$500</h2>
                <div className="buttons-div text-center mb-1">
                  <div className="counter-container">
                    <button className="counter-container-counterbutton" onClick={handleDecrement}>
                      -
                    </button>
                    <span className="counter-value">{count}</span>
                    <button className="counter-container-counterbutton" onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                  <button className="product-submitbutton">
                    Add to cart <i className="bi bi-cart-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="recomended">
            <h1 className="recomended-title galadali-bold mb-4">Recommended for you</h1>
            <div className="product-list">
              {products.map((product) => (
                <div key={product.id} className="product-item ">
                  <Product product={product} />
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
