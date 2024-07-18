import { Link } from "react-router-dom";

import "../css/AboutPage.css";

function About() {
  return (
    <div className="about-page">
      <section
        className="about-banner d-flex flex-column align-items-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.37) 100%, rgba(29, 0, 0, 0.329) 100%), url(${
            import.meta.env.VITE_IMAGES_URL
          }about/banner_about.png)`,
        }}
      >
        <span className="change-lenguage align-self-start">
          <Link to={"/about-this-project/es"} className="text-decoration-none change-lenguage-link">
            Switch to Spanish <i className="bi bi-arrow-right"></i>
          </Link>
        </span>
        <div className="container about-banner-container d-flex flex-wrap flex-column justify-content-center p-sm-0">
          <h1 className="galadali-regular p-0">About This Project</h1>
          <p className="d-none d-md-block">
            This website was built as the final project of Hack Academy’s Web Development Bootcamp.
            The objective was to apply the tools and knowledge that were acquired throughout it.
          </p>
        </div>
        <p className="text-center d-md-none">
          <i className="bi bi-arrow-down"></i>
        </p>
      </section>
      <section className="about-section-2 mt-3">
        <div className="container p-sm-0 d-flex flex-column flex-md-row">
          <div className="about-introduction proxima-nova-regular darkgreen mb-4 mt-4">
            <p className="me-md-2 mb-0">
              The{" "}
              <Link
                to="https://ha.dev/cursos/bootcamp-desarrollo-web"
                target="_blank"
                className="proxima-nova-bold lightgreen text-decoration-none"
              >
                Bootcamp
              </Link>{" "}
              is a full time, practical, intensive course. For 13 weeks, students submerge on 40+
              hour weeks of web developing.
            </p>
            <p className="d-md-none mt-3">
              This website was built as the final project of Hack Academy’s Web Development
              Bootcamp.
            </p>
          </div>
          <div className="duration d-flex justify-content-between justify-content-md-end mt-md-4 mt-0 mb-4">
            <div className="duration-calendar me-2">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}about/calendar.png`}
                alt="calendar"
                className="about-calendar h-100 object-fit-contain"
              />
            </div>
            <div className="duration-text">
              <h5 className="galadali-regular mediumgreen fs-4">Duration of the project</h5>
              <span className="proxima-nova-regular darkgreen">
                This project was developed throughout the last 3 weeks of the Bootcamp, during the
                months of June and July.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-3 h-100 mt-2">
        <div className="container p-sm-0 d-flex">
          <div className="planning mb-2 d-flex flex-column flex-md-row justify-content-between align-items-md-end w-100">
            <div className="about-planning-text">
              <h4>Planning</h4>
              <p className="planning-description">
                To manage this project, we applied the Scrumban methodology. We divided tasks into
                weekly sprints, which we separated into tables according to their state.
              </p>
              <p>We used Miro, Trello and GitHub as our digital planning tools.</p>
            </div>
            <div className="about-icons-planning">
              <div className="about-icons-planning-box">
                <div className="about-logo-box">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}about/miro.png`}
                    alt="Miro_logo"
                    className="object-fit-contain h-100 about-logo"
                  />
                </div>
                <p className="text-center m-0">Miro</p>
              </div>
              <div className="about-icons-planning-box">
                <div className="about-logo-box">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}about/trello.png`}
                    alt="Trello_logo"
                    className="object-fit-contain h-100 about-logo"
                  />
                </div>
                <p className="text-center m-0">Trello</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-sm-0 d-flex flex-column flex-md-row">
          <div className="technologies ms-0 ms-md-1 d-flex flex-column justify-content-between order-md-2 mb-2 mb-md-0">
            <h4>Technologies</h4>
            <p className="mb-2">
              From the very beginning, we worked with Git and GitHub. This allowed us to back up our
              work and manage the different versions of the project. Thanks to this, the team was
              able to collaborate remotely, and work on the project simultaneously.
            </p>
            <p className="mb-2">
              For the Front-End of this website, we developed an application with React + Vite and
              Redux. We also chose React Bootstrap as our preferred library.
            </p>
            <p>
              For the Back-End of this project, we built a REST API with Node.js, Express and mySQL.
              We chose Insomnia to test the correct functioning of the routes.
            </p>
            <div className="container about-icons-technologies">
              <div className="row">
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/html.png`}
                      alt="HTML_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">HTML</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/css.png`}
                      alt="CSS_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">CSS</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/javascript.png`}
                      alt="JavaScript_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">JavaScript</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/node.png`}
                      alt="Node_js_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                    <p className="text-center m-0">Node.js</p>
                  </div>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/express.png`}
                      alt="Express_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">Express</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/mysql.png`}
                      alt="MySQL_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">MySQL</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="col-3 about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/bootstrap.png`}
                      alt="Bootstrap_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">Bootstrap</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/redux.png`}
                      alt="Redux_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">Redux</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/react.png`}
                      alt="React_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">React</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/git.png`}
                      alt="Git_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">Git</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/github.png`}
                      alt="GitHub_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">GitHub</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center mt-3">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/insomnia.png`}
                      alt="Insomnia_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                    <p className="text-center m-0">Insomnia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-section-3-box me-1">
            <div className="design d-flex flex-column justify-content-between mb-2">
              <div>
                <h4>Design</h4>
                <p className="technologies-description">
                  Both the Front-End and Back-end design were created simultaneously, and
                  collaboratively with Drawio and Figma.
                </p>
              </div>
              <div className="about-icons-design mb-2 d-flex">
                <div className="about-icons-design-box">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/drawio.png`}
                      alt="Drawio_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">Drawio</p>
                </div>
                <div className="about-icons-design-box">
                  <div>
                    <div className="about-logo-box">
                      <img
                        src={`${import.meta.env.VITE_IMAGES_URL}about/figma.png`}
                        alt="Figma_logo"
                        className="object-fit-contain h-100 about-logo"
                      />
                    </div>
                    <p className="text-center m-0">Figma</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="db-deployment d-flex flex-column justify-content-between">
              <h4>Data Storage and Deployment</h4>
              <p className="technologies-description">
                Our data is stored using Supabase, and the applications are deployed with Vercel.
              </p>
              <div className="about-icons-db-deployment">
                <div className="about-icons-db-deployment-box">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/supabase.png`}
                      alt="Supabase_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">Supabase</p>
                </div>
                <div className="about-icons-db-deployment-box">
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/vercel.png`}
                      alt="Vercel_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">Vercel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-4 mt-5">
        <div className="container p-sm-0">
          <h4 className="mb-3">Application Aesthetics</h4>
          <div className="front-end d-flex">
            <div className="front-end-description me-md-4">
              <p>
                Our Front-End design was inspired by an existing website{" "}
                <Link
                  to="https://plnts.com/en"
                  target="_blank"
                  className="proxima-nova-bold lightgreen text-decoration-none"
                >
                  Plnts
                </Link>
                .The name Plantasia was inspired by Mort Garson’s album{" "}
                <Link
                  to="https://youtu.be/SZkR3PyHTs0"
                  target="_blank"
                  className="proxima-nova-bold lightgreen text-decoration-none"
                >
                  Mother Earth's Plantasia
                </Link>{" "}
              </p>
              <p>
                We chose clean and simple lines for the application, which allows for the product
                stand out. Our titles and texts are written in a friendly, personal way, to
                captivate our customers. The photos and product information were obtained from our
                reference website. We chose a colour palette that will harmonize with it, and also
                translates the warmth that plants bring to homes. We also created our personalized
                logo.
              </p>
            </div>
            <div className="plantasia-album d-none d-md-block">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}about/MortGarson_MotherEarthsPlantasia.png`}
                alt="MortGarson_MotherEarthsPlantasia_Album"
                className="object-fit-contain w-100"
              />
            </div>
          </div>
          <div>
            <div className="about-logos d-flex flex-column flex-md-row justify-content-evenly align-items-center mb-5">
              <div className="frontend-main-logo mb-5 mb-md-0">
                <h5>Logo</h5>
                <img
                  src={`${import.meta.env.VITE_IMAGES_URL}/Plantasia_green.svg`}
                  alt="logos_plantasia"
                  className="img-fluid"
                />
              </div>
              <div className="frontend-secondary-logos">
                <h5>Alternative Logos</h5>
                <img
                  src={`${import.meta.env.VITE_IMAGES_URL}about/logos_about.svg`}
                  alt="logos_plantasia"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="about-colors-fonts d-flex flex-column flex-md-row justify-content-evenly align-items-center align-items-md-start mb-5">
              <div className="frontend-colors-palette  mb-5 mb-md-0">
                <h5>Colour Palette</h5>
                <img
                  src={`${import.meta.env.VITE_IMAGES_URL}about/colores.svg`}
                  alt="paleta_colores_plantasia"
                  className="img-fluid"
                />
              </div>
              <div className="frontend-fonts">
                <h5>Fonts</h5>
                <img
                  src={`${import.meta.env.VITE_IMAGES_URL}about/fuentes.svg`}
                  alt="fonts_plantasia"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="mer-diagram me-3"></div>
        </div>
      </section>
      <section className="about-section-5 mt-5">
        <div className="container p-sm-0 d-flex flex-column">
          <h4 className="about-section-5-title mb-3">Project structure and Back-End</h4>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="about-section-5-text">
              <p>
                There are three different applications which compose our project: the public view of
                the website, the back office or control panels (for admins only), and the API
                (REST). The latter enables the communication amongst the public view and back
                office.
              </p>
              <p>
                The Back-End started more complex than how it actually ended. We decided to reduce
                the amount of entities and relations (and categories and subcategories) due to the
                time available to complete the project.
              </p>
              <div className="about-models d-flex flex-wrap justify-content-between mt-5 order-md-3 mb-5 mb-md-0">
                <div className="about-model mb-3">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}about/admin.png`}
                    alt="Admin model"
                    className="object-fit-contain w-100"
                  />
                </div>
                <div className="about-model mb-3">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}about/customer.png`}
                    alt="Customer model"
                    className="object-fit-contain w-100"
                  />
                </div>
                <div className="about-model mb-3">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}about/product.png`}
                    alt="Product model"
                    className="object-fit-contain w-100"
                  />
                </div>
                <div className="about-model mb-3">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}about/order.png`}
                    alt="Order model"
                    className="object-fit-contain w-100"
                  />
                </div>
                <div className="about-model mb-3">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}about/type.png`}
                    alt="Plantasia Diagram 2"
                    className="object-fit-contain w-100"
                  />
                </div>
              </div>
            </div>
            <div className="diagram-1 ms-md-5 mb-3 align-self-center align-self-md-start">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}about/mer.png`}
                alt="Plantasia Diagram 1"
                className="object-fit-contain w-100"
              />
            </div>
          </div>
          <div className="about-diagrams"></div>
        </div>
      </section>
      <section className="container about-team-container p-sm-0 border-top">
        <h4 className="text-center my-3">The team</h4>
        <div className="about-team">
          <div className="about-team-card mb-sm-4">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/dammiel.png`}
              alt="dammiel_profile"
              className="shadow"
            />
            <div className="about-team-card-text">
              <p>Dámmiel</p>
              <span>Full Stack Developer Jr.</span>
            </div>
            <div className="about-team-card-icons">
              <Link to={"https://www.linkedin.com/"} target="_blank">
                {" "}
                <i className="bi bi-linkedin me-2"></i>
              </Link>
              <Link to={"https://github.com/gurix-hue"} target="_blank">
                {" "}
                <i className="bi bi-github"></i>
              </Link>
            </div>
          </div>
          <div className="about-team-card">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/denisse.png`}
              alt="denisse_profile"
              className="shadow"
            />
            <div className="about-team-card-text">
              <p>Denisse</p>
              <span>Full Stack Developer Jr.</span>
            </div>
            <div className="about-team-card-icons">
              <Link to={"https://www.linkedin.com/in/denissemajul"} target="_blank">
                {" "}
                <i className="bi bi-linkedin me-2"></i>
              </Link>
              <Link to={"https://github.com/denisse2911"} target="_blank">
                {" "}
                <i className="bi bi-github"></i>
              </Link>
            </div>
          </div>
          <div className="about-team-card">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/federica.png`}
              alt="federica_profile"
              className="shadow"
            />
            <div className="about-team-card-text">
              <p>Federica</p>
              <span>Full Stack Developer Jr.</span>
            </div>
            <div className="about-team-card-icons">
              <Link
                to={"https://www.linkedin.com/in/federica-rodriguez-64881817b/"}
                target="_blank"
              >
                {" "}
                <i className="bi bi-linkedin me-2"></i>
              </Link>
              <Link to={"https://github.com/Feder17"} target="_blank">
                {" "}
                <i className="bi bi-github"></i>
              </Link>
            </div>
          </div>
          <div className="about-team-card">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/ivan.png`}
              alt="ivan_profile"
              className="shadow"
            />
            <div className="about-team-card-text">
              <p>Iván</p>
              <span>Full Stack Developer Jr.</span>
            </div>
            <div className="about-team-card-icons">
              <Link to={"https://www.linkedin.com/in/iván-de-león-lino-1a85b5225/"} target="_blank">
                {" "}
                <i className="bi bi-linkedin me-2"></i>
              </Link>
              <Link to={"https://github.com/Lino-OTM"} target="_blank">
                {" "}
                <i className="bi bi-github"></i>
              </Link>
            </div>
          </div>
          <div className="about-team-card">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/laura.png`}
              alt="laura_profile"
              className="shadow"
            />
            <div className="about-team-card-text">
              <p>Laura</p>
              <span>Full Stack Developer Jr.</span>
            </div>
            <div className="about-team-card-icons">
              <Link to={"https://www.linkedin.com/in/lauraperezbetarte"} target="_blank">
                {" "}
                <i className="bi bi-linkedin me-2"></i>
              </Link>
              <Link to={"https://github.com/lauramica"} target="_blank">
                {" "}
                <i className="bi bi-github"></i>
              </Link>
            </div>
          </div>
          <div className="about-team-card">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/niki.png`}
              alt="niki_profile"
              className="shadow"
            />
            <div className="about-team-card-text">
              <p>Niki</p>
              <span>Full Stack Developer Jr.</span>
            </div>
            <div className="about-team-card-icons">
              <Link
                to={"https://www.linkedin.com/in/nicolás-buela-san-martín-1ba6a71ba/"}
                target="_blank"
              >
                {" "}
                <i className="bi bi-linkedin me-2"></i>
              </Link>
              <Link to={"https://github.com/NikuzoKO"} target="_blank">
                {" "}
                <i className="bi bi-github"></i>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center galadali-bold lightgreen fs-3 mt-5 mb-5">
          Thank you for your time!
        </p>
      </section>
    </div>
  );
}

export default About;
