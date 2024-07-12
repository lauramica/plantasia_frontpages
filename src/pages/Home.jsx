import { Link } from "react-router-dom";
import "../css/Home.css";
import "../css/HomeSectionTwo.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const products = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "GET",
        params: { limit: 3 },
      });
      setProducts(response.data.products);
    };
    products();
  }, []);

  return (
    products && (
      <>
        <section
          className="home-banner d-flex align-items-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.37) 100%, rgba(29, 0, 0, 0.329) 100%), url(${
              import.meta.env.VITE_IMAGES_URL
            }home/home_banner.png)`,
          }}
        >
          <div className="container home-banner-container d-flex flex-wrap flex-column justify-content-center p-sm-0">
            <h1 className="galadali-regular p-0">Growing Happiness </h1>
            <p className="proxima-nova-regular p-0 m-0">
              Welcome plant lover! We are Plantasia, your new favorite online plant shop.
            </p>
            <p className="proxima-nova-regular">
              Here you will find all plant's related goodness, and lots of tips to become the best
              plant parent. And if you aren't one yet, please let us introduce you to our childs!
            </p>
            <Link to="/products" className="home-banner-button">
              SHOP NOW
            </Link>
          </div>
        </section>
        <section className="home-section-2 mt-3">
          <div className="container cards-container p-sm-0">
            <Link className="home-section-2-cards card-one shadow" to="/products/1">
              <span className="card-title galadali-regular">Plants</span>
              <Link className="btn button-see-all proxima-nova-regular" to="/products/1">
                See all
              </Link>
            </Link>
            <Link className="home-section-2-cards card-two" to="/products/2">
              <span className="card-title galadali-regular">Pots</span>
              <Link className="btn button-see-all proxima-nova-regular" to="/products/2">
                See all
              </Link>
            </Link>
            <Link className="home-section-2-cards card-three" to="/products/3">
              <span className="card-title galadali-regular">Care</span>
              <Link className="btn button-see-all proxima-nova-regular" to="/products/3">
                See all
              </Link>
            </Link>
            <Link className="home-section-2-cards card-four" to="/products/4">
              <span className="card-title galadali-regular">Accesories</span>
              <Link className="btn button-see-all proxima-nova-regular" to="/products/4">
                See all
              </Link>
            </Link>
          </div>
          <div className="container d-flex flex-column flex-md-row p-sm-0 mt-3">
            <div className="home-section-2-img order-md-2">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}home/fullgreen_section2.png`}
                alt="Person watering plant"
                className="object-fit-cover w-100 shadow"
              />
            </div>
            <div className="d-flex flex-column justify-content-between home-section-2-box">
              <h4 className="galadali-bold">Find the one for you</h4>
              <p className="proxima-nova">
                Are you looking for someone to spend time outdoors with? Or some company to watch
                your favorite series? Maybe you're just looking for someone who gets along with your
                pet. In any case, we have the one for you!
              </p>
              <div className="mb-1 home-section-2-link">
                <Link to="/products/1" className="home-section-2-link">
                  Discover our plants
                </Link>
              </div>
              <div className="home-section-2-plants">
                {products.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    className="home-plant-product"
                    key={`sectionPlants${product.id}`}
                  >
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${
                        product.image
                      }`}
                      alt={product.name}
                      className="object-fit-cover w-100 shadow"
                    />
                    <span className="ms-1 home-span-start">{product.name.split("(")[0]}</span>
                    <span className="text-end me-1 home-span-end">See product ⭢</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-section-3 mt-3">
          <div className="container d-flex flex-column flex-md-row p-sm-0">
            <div className="home-section-3-img">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}home/photo_accessories.png`}
                alt="Person watering plant"
                className="object-fit-cover w-100 shadow"
              />
            </div>

            <div className="d-flex flex-column justify-content-between home-section-3-box">
              <h4 className="galadali-bold">Because love is not enough...</h4>
              <p className="proxima-nova">
                We now that taking care of a plant is not an easy task, but don't worry! We have all
                you need to make that relationship last even through winter.
              </p>
              <div className="mb-1 home-section-3-link text-end">
                <Link to="/products/3" className="home-section-3-link">
                  Take care of her
                </Link>
              </div>
              <div className="home-section-3-care-products">
                {products.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    className="home-care-product"
                    key={`sectionCare${product.id}`}
                  >
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}${product.type.name}/${
                        product.image
                      }`}
                      alt={product.name}
                      className="object-fit-cover w-100 shadow"
                    />
                    <span className="ms-1 home-span-start">{product.name.split("(")[0]}</span>
                    <span className="text-end me-1 home-span-end">See product ⭢</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-section-4 mb-2 mt-3">
          <div className="d-flex justify-content-between">
            <div className="home-carrousel">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}carrousell/carrousell_1.png`}
                alt="House with plants"
                className="object-fit-cover w-100"
              />
            </div>
            <div className="home-carrousel">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}carrousell/carrousell_2.png`}
                alt="House with plants"
                className="object-fit-cover w-100"
              />
            </div>
            <div className="home-carrousel">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}carrousell/carrousell_3.png`}
                alt="House with plants"
                className="object-fit-cover w-100"
              />
            </div>
            <div className="home-carrousel">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}carrousell/carrousell_4.png`}
                alt="Home with plants"
                className="object-fit-cover w-100"
              />
            </div>
            <div className="home-carrousel">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}carrousell/carrousell_5.png`}
                alt="Home with plants"
                className="object-fit-cover w-100"
              />
            </div>
          </div>
        </section>
      </>
    )
  );
}

export default Home;
