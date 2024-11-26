import "./Navigation.css";
import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logoutWhite from "../../assets/logoutWhite.svg";
import logoWhite from "../../assets/logowhite.svg";

function Navigation({ handleLoginClick, isOpen, handleClose, handleLogout }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <nav
      className={`${isOpen ? "nav__opened" : "nav"}`}
      onClick={handleOverlay}
    >
      {isOpen ? (
        <div className={`nav__menu ${isOpen && "nav__opened"}`}>
          {isLoggedIn ? (
            <>
              <div className="nav__top">
                <Link to="/">
                  <img
                    src={logoWhite}
                    alt="NewsExplorer Logo Image"
                    className="nav__logo"
                    onClick={handleClose}
                  />
                </Link>
              </div>
              <Link to="/">
                <button
                  type="button"
                  className="nav__text-btn"
                  onClick={handleClose}
                >
                  Home
                </button>
              </Link>
              <Link to="/saved-news">
                <button
                  type="button"
                  className="nav__text-btn"
                  onClick={handleClose}
                >
                  Saved articles
                </button>
              </Link>
              <button
                type="button"
                className="nav__text-btn nav__text-btn-user"
              >
                <Link
                  to="/saved-news"
                  className="header__username-link"
                  onClick={handleClose}
                >
                  {currentUser.username.split(/(?<=^\S+)\s/)[0]}
                </Link>
                <img
                  onClick={handleLogout}
                  src={logoutWhite}
                  alt="Logout button"
                  className="nav__logout"
                />
              </button>
            </>
          ) : (
            <>
              <div className="nav__top">
                <Link to="/" onClick={handleClose}>
                  <img
                    src={logoWhite}
                    alt="NewsExplorer Logo Image"
                    className="nav__logo"
                  />
                </Link>
              </div>
              <Link to="/" onClick={handleClose}>
                <button type="button" className="nav__text-btn">
                  Home
                </button>
              </Link>
              <button
                onClick={handleLoginClick}
                type="button"
                className="nav__text-btn"
              >
                Sign In
              </button>
            </>
          )}
          <div className="nav__close" onClick={handleClose}>
            <div
              className={`nav__bar nav__bar1 ${isOpen ? "active" : ""}`}
            ></div>
            <div
              className={`nav__bar nav__bar2 ${isOpen ? "active" : ""}`}
            ></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navigation;
