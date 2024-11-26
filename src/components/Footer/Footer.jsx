import "./Footer.css";
import fblogo from "../../assets/facebook.svg";
import ghlogo from "../../assets/github.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024 Brandon King, Powered by News API
      </p>
      <nav className="footer__nav">
        <div className="footer__text-btns">
          <Link to="/">
            <button type="button" className="footer__btn">
              Home
            </button>
          </Link>
          <a
            href="https://www.tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="footer__btn">
              TripleTen
            </button>
          </a>
        </div>
        <div className="footer__btns">
          <a
            href="https://www.github.com/ironrule"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="footer__btn-icon">
              <img src={ghlogo} alt="GitHub Logo" />
            </button>
          </a>
          <a
            href="https://www.facebook.com/brandonking25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="footer__btn-icon">
              <img src={fblogo} alt="Facebook Logo" />
            </button>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
