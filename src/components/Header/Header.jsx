import logo from "../../assets/logowhite.svg";
import logoutImage from "../../assets/logout.svg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Header({ handleLoginClick }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const firstName = currentUser.name.split(" ").slice(0, -1);

  return (
    <header className="header">
      <Link to="/">
        <img
          src={logo}
          alt="NewsExplorer Logo Image"
          className="header__logo"
        />
      </Link>
      <div className="header__right">
        {isLoggedIn ? (
          <>
            <Link to="/">
              <button
                type="button"
                className="header__text-btn header__text-btn-home"
              >
                Home
              </button>
            </Link>
            <button
              type="button"
              className="header__text-btn header__text-btn-articles"
            >
              Saved articles
            </button>
            <button
              type="button"
              className="header__text-btn header__text-btn-user"
            >
              {firstName}{" "}
              <img
                src={logoutImage}
                alt="Logout button"
                className="header__logout"
              />
            </button>
          </>
        ) : (
          <>
            <Link to="/">
              <button
                type="button"
                className="header__text-btn header__text-btn-home"
              >
                Home
              </button>
            </Link>
            <button
              onClick={handleLoginClick}
              type="button"
              className="header__text-btn"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
