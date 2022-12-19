import github from "../../assets/icons/github.svg";
import facebook from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer__container"> */}
      <p className="footer__copyrights">@2021 Supersite, Powered by News API</p>
      <div className="footer__link-wrapper">
        <ul className="footer__nav">
          <Link to="/" className="footer__nav-link">
            Home
          </Link>
          <a
            href="https://practicum.com"
            className="footer__nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Practicum
          </a>
        </ul>
        <ul className="footer__social-links">
          <li>
            <a
              href="https://github.com/shimritz/news-explorer-frontend"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                alt="github icon"
                className="footer__social-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={facebook}
                alt="facebook icon"
                className="footer__social-icon"
              />
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
