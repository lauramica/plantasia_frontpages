import "../css/AboutPage.css";

function About() {
  return (
    <>
      <section className="aboutus-banner d-flex align-items-end justify-content-center ">
        <div className="container banner-title d-flex flex-column p-0">
          <span className="galadali-bold">About</span>
          <span className="galadali-bold">This Project</span>
        </div>
      </section>

      <section className="aboutus-description container">
        <div className="container">
          <p className="aboutus-description-pharagraph">
            Este sitio web fue realizado en el marco del Bootcamp de desarollo web de Hack Academy,
            como proyecto final de este grupo de estudiantes. El bootcamp es un curso intensivo,
            práctico y de dedicación full time, con una duración total de 13 semanas y una carga
            horaria total de +580 horas.
          </p>
          <p>Breve descripción de la inspo para la página</p>
        </div>
      </section>

      <section className="aboutus-mainbody container">
        <div className="row g-5">
          <div className="col-xl-8 col-lg-12">
            <div className="aboutus-mainbody-section1">
              <h2>Technology</h2>
              <p>Logos de las tecnologías, nombres y links.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 d-flex flex-column">
            <div className="aboutus-mainbody-section">
              <h2>Proyect Duration</h2>
              <p>
                El proyecto se desarrolló en 3 semanas, entre los meses de junio y julio de 2024.
                Cada semana correspondió a un sprint (metodología Scrum).
              </p>
            </div>
            <div className="aboutus-mainbody-section">
              <h2>Planning</h2>
              <p>
                La metodología Scrum* (exlicar enlgún lado qué es) fue la elegida por los docentes
                para determinar el desarrollo del proyecto, que constó de 3 sprints con sus
                correspondientes dmeos. Por otra parte, el equipo utilizó herramientas como Miro,
                Trello, Figma y GitHub para panificar el proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container tecnologies-container">
          <h4>Acerca de las tecnologías</h4>
          <p>Breve descripción de cada tecnología?</p>
        </div>
      </section>

      <section>
        <div className="container tecnologies-container">
          <h4>Otras habilidades y herramientas</h4>
          <p>Breve descripción de cada una</p>
        </div>
      </section>

      <section>
        <div className="container d-flex">
          <div className="mer-explained">
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

      <section>
        <div className="container">
          <div className="frontend-container">
            <h4>Frontend - Estética de la página</h4>
            <p>Breve descripción de cada una</p>
          </div>
          <div className="mer-diagram me-3">
            Figma? La plantilla que armó denisse con la planeta y otras cosas
          </div>
        </div>
      </section>

      <section className="aboutus-team container p-0">
        <div className="d-flex flex-column align-items-center">
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
