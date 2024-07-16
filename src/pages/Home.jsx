import { Link } from "react-router-dom";
import "../css/Home.css";
import "../css/HomeSectionTwo.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [careProducts, setCareProducts] = useState(null);
  const [plants, setPlants] = useState(null);

  useEffect(() => {
    const getPlants = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "GET",
        params: { limit: 3, type: 1 },
      });
      setPlants(response.data.products);
    };
    getPlants();
    const getCareProducts = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "GET",
        params: { limit: 3, type: 3 },
      });
      setCareProducts(response.data.products);
    };
    getCareProducts();
  }, []);

  return (
    careProducts &&
    plants && (
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
        <section className="home-section-2">
          <div className="container cards-container p-sm-0">
            <Link
              className="home-section-2-cards card-one shadow"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(32, 9, 3, 0.6) 0%, rgba(0, 0, 0, 0) 100%),
    url(${import.meta.env.VITE_IMAGES_URL}home/photo_plants.png)`,
              }}
              to="/products/1"
            >
              <span className="card-title galadali-regular">Plants</span>
              <span className="btn button-see-all proxima-nova-regular">See all</span>
            </Link>
            <Link
              className="home-section-2-cards card-two"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(32, 9, 3, 0.6) 0%, rgba(0, 0, 0, 0) 100%),
        url(${import.meta.env.VITE_IMAGES_URL}home/photo_pots.png)`,
              }}
              to="/products/2"
            >
              <span className="card-title galadali-regular">Pots</span>
              <span className="btn button-see-all proxima-nova-regular">See all</span>
            </Link>
            <Link
              className="home-section-2-cards card-three"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(32, 9, 3, 0.6) 0%, rgba(0, 0, 0, 0) 100%),
    url(${import.meta.env.VITE_IMAGES_URL}home/photo_care.png)`,
              }}
              to="/products/3"
            >
              <span className="card-title galadali-regular">Care</span>
              <span className="btn button-see-all proxima-nova-regular">See all</span>
            </Link>
            <Link
              className="home-section-2-cards card-four"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(32, 9, 3, 0.6) 0%, rgba(0, 0, 0, 0) 100%),
    url(${import.meta.env.VITE_IMAGES_URL}home/photo_accessories.png)`,
              }}
              to="/products/4"
            >
              <span className="card-title galadali-regular">Accesories</span>
              <span className="btn button-see-all proxima-nova-regular">See all</span>
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
                {plants.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    className="home-plant-product"
                    key={`sectionPlants${product.id}`}
                  >
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}products/${product.image}`}
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
        <section className="home-section-3">
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
                {careProducts.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    className="home-care-product"
                    key={`sectionCare${product.id}`}
                  >
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}products/${product.image}`}
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
        <section className="home-section-4">
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
