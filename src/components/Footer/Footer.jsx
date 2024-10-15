import "./Footer.css";
import fblogo from "../../assets/facebook.svg";
import ghlogo from "../../assets/github.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        &copy; 2024 Brandon King, Powered by News API
      </div>
      <div className="footer__right">
        <Link to="/">
          <button className="footer__btn">Home</button>
        </Link>
        <button className="footer__btn">TripleTen</button>
        <button className="footer__btn-icon">
          <img src={ghlogo} alt="GitHub Logo" />
        </button>
        <button className="footer__btn-icon">
          <img src={fblogo} alt="Facebook Logo" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
