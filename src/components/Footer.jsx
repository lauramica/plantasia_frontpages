import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/Footer.css";

function Footer() {
  const handleUnderDevelopment = () => {
    return toast.warning("This function is under development");
  };

  return (
    <footer className="footer">
      <nav className="footer__nav-bar container px-sm-0">
        <figure className="footer__logo-wrapper">
          <img
            className="footer__logo"
            src={`${import.meta.env.VITE_IMAGES_URL}Plantasia_white.svg`}
            alt="Plantasia logo"
          />
        </figure>

        <ul className="footer__links-wrapper">
          <li className="footer__links-wrapper-title">Shop</li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              Houseplants
            </Link>
          </li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              Accessories
            </Link>
          </li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              Care
            </Link>
          </li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              Pots
            </Link>
          </li>
        </ul>

        <ul className="footer__links-wrapper">
          <li className="footer__links-wrapper-title">Customer service</li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              Frequently asked questions
            </Link>
          </li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              Contact
            </Link>
          </li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              Payments
            </Link>
          </li>
        </ul>

        <ul className="footer__links-wrapper">
          <li className="footer__links-wrapper-title">About PLNTS</li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              Giftcards
            </Link>
          </li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              About us
            </Link>
          </li>
          <li className="footer__links-wrapper-item">
            <Link className="footer__links-wrapper-item-link" onClick={handleUnderDevelopment}>
              Sustainability
            </Link>
          </li>
        </ul>
        <Link className="footer__log-in-link" href="/login">
          Log in
        </Link>
        <ul className="footer__social-media-links-wrapper">
          <li className="footer__social-media-links-wrapper-item">
            <Link
              className="footer__social-media-links-wrapper-link"
              onClick={handleUnderDevelopment}
            >
              <i className="footer__social-media-links-wrapper-icon bi bi-instagram"></i>
            </Link>
          </li>
          <li className="footer__social-media-links-wrapper-item">
            <Link
              className="footer__social-media-links-wrapper-link"
              onClick={handleUnderDevelopment}
            >
              <i className="footer__social-media-links-wrapper-icon bi bi-facebook"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
