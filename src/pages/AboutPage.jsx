import "../css/AboutPage.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section
        className="about-banner d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.37) 100%, rgba(29, 0, 0, 0.329) 100%), url(${
            import.meta.env.VITE_IMAGES_URL
          }about/banner_about.png)`,
        }}
      >
        <div className="container about-banner-container d-flex flex-wrap flex-column justify-content-center p-sm-0">
          <h1 className="galadali-regular p-0">Sobre este proyecto...</h1>
          <p className="d-none d-md-block">
            Este sitio web fue construido en el marco del Bootcamp de desarollo web de Hack Academy,
            como nuestro proyecto final.
          </p>
        </div>
      </section>

      <section className="about-section-2 mt-3">
        <div className="container p-sm-0 d-flex flex-column flex-md-row">
          <div className="about-introduction proxima-nova-regular darkgreen mb-4 mt-4">
            <p className="me-md-2 mb-0">
              El{" "}
              <Link
                to="https://ha.dev/cursos/bootcamp-desarrollo-web"
                target="_blank"
                className="proxima-nova-bold darkgreen text-decoration-none"
              >
                bootcamp
              </Link>{" "}
              fue un curso intensivo, práctico y de dedicación full time, con una duración total de
              13 semanas y una carga horaria total de +40 horas semanales.
            </p>
            <p className="d-md-none mt-3">
            Este sitio web fue construido en el marco del Bootcamp de desarollo web de Hack Academy,
            como nuestro proyecto final.
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
              <h5 className="galadali-regular mediumgreen fs-4">Duración</h5>
              <span className="proxima-nova-regular darkgreen">
                El proyecto se desarrolló en 3 semanas, entre junio y julio de 2024.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-3 mt-2">
        <div className="container p-sm-0 d-flex">
          <div className="planning mb-2 d-flex flex-column flex-md-row justify-content-between align-items-md-end w-100">
            <div className="about-planning-text">
              <h4>Planificación</h4>
              <p>
                En la gestión del proyecto aplicamos la metodología Scrumban para dividir las tareas
                en “sprints” semanales y ordenarlas en un tablero según su estado.
              </p>
              <p>Elegimos Miro, Trello y GitHub como herramientas digitales de planificación.</p>
            </div>
            <div className="about-icons-planning">
              <div>
                <div className="about-logo-box">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}about/miro.png`}
                    alt="Miro_logo"
                    className="object-fit-contain h-100 about-logo"
                  />
                </div>
                <p className="text-center m-0">Miro</p>
              </div>
              <div>
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
            <h4>Tecnologías</h4>
            <p>
              Desde el inicio del proyecto se utilizó Git y Github, lo que permitió respaldar
              nuestro trabajo y gestionar las versiones, facilitando así la colaboración simultánea.
            </p>
            <p>
              Para el Front-End del sitio desarrollamos una aplicación en React con Vite y Redux.
              También aplicamos Bootstrap como librería de preferencia.
            </p>
            <p>
              Respecto al Back-End, construimos una REST API mediante Node.js, Express y mySQL.
              Elegimos Insomnia para testear el funcionamiento de las rutas.
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
                      className="object-fit-cover h-100 about-logo"
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
                      className="object-fit-cover h-100 about-logo"
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
                      className="object-fit-cover h-100 about-logo"
                    />
                    <p className="text-center m-0">Insomnia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-section-3-box me-1">
            <div className="design d-flex flex-column justify-content-between mb-2">
              <h4>Diseño</h4>
              <p>
                El diseño del Front-End y del Back-End fue realizado de forma simultánea y
                colaborativa mediante Drawio y Figma.
              </p>
              <div className="about-icons-design">
                <div>
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/drawio.png`}
                      alt="Drawio_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">Drawio</p>
                </div>
                <div>
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
              <h4>Almacenamiento y Deployment</h4>
              <p>
                Nuestra base de datos está almacenada en Supabase y las aplicaciones están
                deployadas en Vercel.
              </p>

              <div className="about-icons-db-deployment">
                <div>
                  <div className="about-logo-box">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}about/supabase.png`}
                      alt="Supabase_logo"
                      className="object-fit-contain h-100 about-logo"
                    />
                  </div>
                  <p className="text-center m-0">Supabase</p>
                </div>
                <div>
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
        <div className="container p-sm-0 d-flex">
          <div className="back-end">
            <h4>Estructura del proyecto y Back-End</h4>
            <p>
              El proyecto se estructuró en tres aplicaciones independientes: el sitio web “público”, el backoffice (al que únicamente acceden los administradores) y
              la API (REST) con la que se comunican las dos primeras. En relación al Back-End, si bien inicialmente definimos más entidades y relaciones (categorías y subcategorías), el tiempo disponible y la complejidad de su desarrollo nos obligó a simplicar la estructura.
            </p>
          </div>
          <div className="mer-diagram me-3">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/plantasiaMer.drawio.png`}
              alt="Plantasia Mer"
              className="object-fit-contain w-100"
            />
          </div>
        </div>
      </section>

      <section className="about-section-5 mt5">
        <div className="container p-sm-0">
          <div className="front-end">
            <div className="front-end-description">
              <h4>Estética de la aplicación</h4>
              <p>
                El diseño del Front-End se inspiró en una página web existente del mismo rubro. Por
                su parte, el nombre se inspiró en el album{" "}
                <Link
                  to="https://youtu.be/SZkR3PyHTs0"
                  target="_blank"
                  className="proxima-nova-bold darkgreen"
                >
                  Mother Earth's Plantasia
                </Link>{" "}
                de Mort Garson.
              </p>
              <p>
                En nuestra aplicación optamos por una estética simple donde destaquen los productos,
                y textos simpáticos que capten la atención de los usuarios.
              </p>
              <p>
                Las imágenes y la información de los productos fue obtenida de la referida página
                web, y en armonía con ello definimos una paleta de colores, fuentes y los logos
                utilzamos.
              </p>
            </div>
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/MortGarson_MotherEarthsPlantasia.png`}
              alt="MortGarson_MotherEarthsPlantasia_Album"
            />
          </div>
          <div className="about-logos">
            <h4>Logo</h4>
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}/Plantasia_green.svg`}
              alt="logos_plantasia"
              className="img-fluid w-50"
            />
            <h4>Logotipos alternativos</h4>
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/logos_about.svg`}
              alt="logos_plantasia"
              className="img-fluid w-50 "
            />
          </div>
          <div className="about-colors-fonts">
            <h4>Paleta de colores</h4>
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/colores.svg`}
              alt="paleta_colores_plantasia"
              className="img-fluid w-50 "
            />
            <h4>Fuentes en uso</h4>
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/fuentes.svg`}
              alt="fonts_plantasia"
              className="img-fluid w-50 "
            />
          </div>
          <div className="mer-diagram me-3"></div>
        </div>
      </section>

      <section className="aboutus-team container">
        <div className="container p-sm-0 d-flex flex-column align-items-center">
          <h1>
            <b>Team</b>
          </h1>
          <p className="aboutus-team-subtitle">
            Estos somos nosotros. Seis estudiantes de Hack Academy que trabajaron en conjunto para
            llevar a cabo este proyecto de e-commerce
          </p>
        </div>
        <div className="row gx-5 aboutus-team-memberscontainer ">
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}man_user_color_icon.svg`}
                alt="Dammiel Profile Picture"
              />
            </div>
            <h3>
              <b>Dammiel</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}man_user_color_icon.svg`}
                alt="Dammiel Profile Picture"
              />
            </div>
            <h3>
              <b>Federica</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}man_user_color_icon.svg`}
                alt="Dammiel Profile Picture"
              />
            </div>
            <h3>
              <b>Dennisse</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}man_user_color_icon.svg`}
                alt="Dammiel Profile Picture"
              />
            </div>
            <h3>
              <b>Laura</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}man_user_color_icon.svg`}
                alt="Dammiel Profile Picture"
              />
            </div>
            <h3>
              <b>Ivan</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}man_user_color_icon.svg`}
                alt="Dammiel Profile Picture"
              />
            </div>
            <h3>
              <b>Nicole</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
