import logo from "../../assets/logowhite.svg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Header({ handleLoginClick }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const noAvatar = Array.from(currentUser.name)[0];
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
            <Link to="/profile">
              <div className="header__user-container">
                <p className="header__username">{currentUser?.name}</p>
                {currentUser.avatar ? (
                  <img
                    src={currentUser?.avatar}
                    alt={currentUser?.name}
                    className="header__avatar"
                  />
                ) : (
                  <p className="header__no-avatar">{noAvatar}</p>
                )}
              </div>
            </Link>
          </>
        ) : (
          <>
            <button type="button" className="header__text-btn">
              Home
            </button>
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
