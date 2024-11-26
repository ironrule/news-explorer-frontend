import logoWhite from "../../assets/logowhite.svg";
import logoBlack from "../../assets/logoblack.svg";
import logoutWhite from "../../assets/logoutWhite.svg";
import logoutBlack from "../../assets/logoutBlack.svg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Header({
  handleLoginClick,
  handleLogout,
  theme,
  handleMobileMenuOpen,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <header className={theme === "profile" ? "header header-dark" : "header"}>
      <Link to="/">
        <img
          src={theme === "profile" ? logoBlack : logoWhite}
          alt="NewsExplorer Logo Image"
          className="header__logo"
        />
      </Link>
      <nav className="header__nav">
        {isLoggedIn ? (
          <>
            <Link to="/">
              <button
                type="button"
                className={
                  theme === "profile"
                    ? "header__text-btn header__text-btn-home header__text-btn-home-dark header__text-btn-dark"
                    : "header__text-btn header__text-btn-home"
                }
              >
                Home
              </button>
            </Link>
            <Link to="/saved-news">
              <button
                type="button"
                className={
                  theme === "profile"
                    ? "header__text-btn header__text-btn-dark header__text-btn-articles header__text-btn-articles-dark"
                    : "header__text-btn header__text-btn-articles"
                }
              >
                Saved articles
              </button>
            </Link>
            <button
              type="button"
              className={
                theme === "profile"
                  ? "header__text-btn header__text-btn-dark header__text-btn-user"
                  : "header__text-btn header__text-btn-user"
              }
            >
              <Link
                to="/saved-news"
                className={
                  theme === "profile"
                    ? "header__username-link-dark"
                    : "header__username-link"
                }
              >
                {currentUser.username.split(/(?<=^\S+)\s/)[0]}
              </Link>
              <img
                onClick={handleLogout}
                src={theme === "profile" ? logoutBlack : logoutWhite}
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
      </nav>
      <nav className="header__mobile-menu" onClick={handleMobileMenuOpen}>
        <div
          className={
            theme === "profile"
              ? "header__mobile-bar-dark"
              : "header__mobile-bar"
          }
        ></div>
        <div
          className={
            theme === "profile"
              ? "header__mobile-bar-dark"
              : "header__mobile-bar"
          }
        ></div>
      </nav>
    </header>
  );
}

export default Header;
