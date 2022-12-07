import github from "../../assets/icons/github.svg";
import facebook from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyrights">
          @2021 Supersite, Powered by News API
        </p>
        <div className="footer__link-wrapper">
          <ul className="footer__nav">
            <li className="footer__nav-link">Home</li>
            <li className="footer__nav-link">Practicum</li>
          </ul>
          <ul className="footer__social-links">
            <li>
              <Link to="#" className="footer__social-link">
                <img
                  src={github}
                  alt="github icon"
                  className="footer__social-icon"
                />
              </Link>
            </li>
            <li>
              <Link to="#" className="footer__social-link">
                <img
                  src={facebook}
                  alt="facebook icon"
                  className="footer__social-icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
