import { Link } from "react-router-dom";
import "../css/ErrorPage.css";

function ErrorPage() {
  return (
    <>
      <div
        className="error-background"
        style={{ backgroundImage: `url("${import.meta.env.VITE_IMAGES_URL}error_bg.png")` }}
      >
        <div className="container px-2 p-md-0">
          <div className="h-75 d-flex flex-column justify-content-center">
            <p className="error-sorry galadali-regular">Sorry,</p>
            <p className="error-text proxima-nova-regular">We couldn't find that page</p>
            <Link
              to="/"
              className="btn-error-page shadow proxima-nova-regular text-center text-decoration-none"
            >
              Return to home
            </Link>
          </div>
          <div className="mt-auto w-50 h-25">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_green.svg`}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
