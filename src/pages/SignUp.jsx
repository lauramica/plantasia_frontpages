import "../css/FormsPages.css";

function SignUp() {
  return (
    <>
      <div className="window-box">
        <div className="container bg-form m-3">
          <div className="desktop-form-container">
            <h2 className="title-welcome proxima-nova-regular">Become a plant lover</h2>
            <img
              className="forms-logo"
              src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_white.svg`}
              alt="Plantasia-logo"
            />
          </div>
          <div className="form-container">
            <h2 className="title-forms text-center galadali-bold">Sign Up</h2>
            <form action="" className="proxima-nova-regular">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="forms-input form-control rounded-pill"
                  aria-describedby="firstname"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="forms-input form-control rounded-pill"
                  aria-describedby="lastname"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="forms-input form-control rounded-pill"
                  aria-describedby="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="forms-input form-control rounded-pill"
                  aria-describedby="password"
                  placeholder="Password"
                />
              </div>
              <button className="btn-forms form-control rounded-pill my-4">Sign Up</button>
            </form>
            <p className="proxima-nova-regular darkgreen text-center">
              Already have an account?
              <a href="#" className="forms-link proxima-nova-bold text-decoration-none ms-1">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
