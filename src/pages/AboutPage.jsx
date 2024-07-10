import "../css/AboutPage.css";

function About() {
  return (
    <>
      <section
        className="about-banner d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.37) 100%, rgba(29, 0, 0, 0.329) 100%), url(${
            import.meta.env.VITE_IMAGES_URL
          }home/home_banner.png)`,
        }}
      >
        <div className="container about-banner-container d-flex flex-wrap flex-column justify-content-center p-sm-0">
          <h1 className="galadali-bold p-0">About this project...</h1>
          <p>
            Este sitio web fue construido en el marco del Bootcamp de desarollo web de Hack Academy,
            como proyecto final de este grupo de estudiantes.
          </p>
          <p>
            El bootcamp fue un curso intensivo, práctico y de dedicación full time, con una duración
            total de 13 semanas y una carga horaria total de +40 horas semanales.
          </p>
        </div>
      </section>

      <section className="about-section-2 mt-5">
        <div className="container p-sm-0 d-flex">
          <div className="duration">
            {/*             <img src={`${import.meta.env.VITE_IMAGES_URL}about/calendar.svg`} alt="" className="object-fit-cover w-100"/> */}
            <h5>Duración</h5>
            <span>El proyecto se desarrolló en 3 semanas, entre junio y julio de 2024.</span>
          </div>
        </div>
      </section>

      <section className="about-section-3 mt-5">
        <div className="container p-sm-0 d-flex">
          <div className="about-section-3-box me-1">
            <div className="planning mb-2">
              <h4>Planificación</h4>
              <p>
                En la gestión del proyecto aplicamos la metodología Scrumban para dividir las tareas
                en “sprints” semanales y ordenarlas en un tablero según su estado.
              </p>
              <p>Elegimos Miro, Trello y GitHub como herramientas digitales de planificación.</p>
            </div>
            <div className="design">
              <h4>Diseño</h4>
              <p>
                El diseño del Front-End y del Back-End fue realizado de forma simultánea y
                colaborativa mediante Drawio y Figma.
              </p>
            </div>
          </div>
          <div className="tecnologies ms-1">
            <h4>Tecnologías</h4>
            <p>
              Desde el inicio del proyecto se utilizó Git y Github, lo que permitió respaldar
              nuestro trabajo y gestionar las versiones, facilitando así la colaboración simultánea.
            </p>
            <p>
              Para el Front-End del sitio desarrollamos una aplicación en React con Vite y Redux.
              También aplicamos Bootstrap como librería de preferencia.
            </p>
            <p>
              Respecto al Back-End, construimos una REST API mediante Node.js, Express y mySQL.
              Elegimos Insomnia para testear el funcionamiento de las rutas.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section-4 mt-5">
        <div className="container p-sm-0 d-flex">
          <div className="back-end">
            <h4>Backend - Explicación del MER</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eos voluptas corrupti
              quos veniam esse assumenda harum quod maiores sed impedit dolorem magnam modi tenetur
              inventore veritatis non doloremque debitis voluptatem perspiciatis ad, atque explicabo
              id. Quod non numquam incidunt tenetur enim soluta quis debitis nostrum explicabo.
              Ullam sed repellat, cum vel at sit natus officiis laboriosam, adipisci in nulla quae
              rem enim similique! Magnam quas nihil vel saepe veritatis ea hic, nemo incidunt,
              tempore, dolore corporis excepturi. Hic, est.
            </p>
          </div>
          <div className="mer-diagram me-3">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}about/plantasiaMer.drawio.png`}
              alt="Plantasia Mer"
              className="object-fit-cover w-100"
            />
          </div>
        </div>
      </section>

      <section className="about-section-5 mt5">
        <div className="container p-sm-0">
          <div className="front-end">
            <h4>Frontend - Estética de la página</h4>
            <p>Breve descripción de cada una</p>
          </div>
          <div className="mer-diagram me-3">
            Figma? La plantilla que armó denisse con la planeta y otras cosas
          </div>
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
