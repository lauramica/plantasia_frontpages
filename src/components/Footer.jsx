import "../css/Footer.css";

function Footer() {
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
            <a className="footer__links-wrapper-item-link" href="#">
              Houseplants
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Accessories
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Care
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Pots
            </a>
          </li>
        </ul>

        <ul className="footer__links-wrapper">
          <li className="footer__links-wrapper-title">Customer service</li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Frequently asked questions
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Contact
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Payments
            </a>
          </li>
        </ul>

        <ul className="footer__links-wrapper">
          <li className="footer__links-wrapper-title">About PLNTS</li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Giftcards
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              About us
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Sustainability
            </a>
          </li>
        </ul>
        <a className="footer__log-in-link" href="/login">
          Log in
        </a>
        <ul className="footer__social-media-links-wrapper">
          <li className="footer__social-media-links-wrapper-item">
            <a className="footer__social-media-links-wrapper-link" href="#">
              <i className="footer__social-media-links-wrapper-icon bi bi-instagram"></i>
            </a>
          </li>
          <li className="footer__social-media-links-wrapper-item">
            <a className="footer__social-media-links-wrapper-link" href="#">
              <i className="footer__social-media-links-wrapper-icon bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
