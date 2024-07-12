import "../css/FormsPages.css";
import { Link } from "react-router-dom";

function PasswordReset() {
  return (
    <>
      <div className="window-box">
        <div className="container bg-form m-3">
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
                import.meta.env.VITE_IMAGES_URL
              }/home/home_banner.png)`,
            }}
            className="desktop-form-container"
          >
            <h2 className="title-welcome proxima-nova-regular">Trouble signing in?</h2>
            <img
              className="forms-logo"
              src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_white.svg`}
              alt="Plantasia-logo"
            />
          </div>
          <div className="form-container">
            <h2 className="title-forms text-center galadali-bold">Reset Your Password</h2>
            <p className="text-center">
              In order to get instructions to reset your password, please enter your email address
              associated with Plantasia account
            </p>
            <form className="proxima-nova-regular">
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
              <button className="btn-forms form-control rounded-pill my-4">Send</button>
            </form>
            <p className="text-center darkgreen">
              or Go back to
              <Link to="/login" className="forms-link proxima-nova-bold text-decoration-none ms-1">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordReset;
