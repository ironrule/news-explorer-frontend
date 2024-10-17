import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsResults from "../NewsResults/NewsResults";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ArticleContext } from "../../contexts/ArticleContext";
import { getToken, removeToken } from "../../utils/token.js";
import * as auth from "../../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    username: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const path = useLocation().pathname.slice(1);

  const handleLoginClick = () => {
    setActiveModal("login-modal");
  };

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    navigate("/");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegisterClick = () => {
    setActiveModal("register-modal");
  };

  const handleCardClick = (card) => {
    setActiveModal("item-modal");
    setSelectedCard(card);
  };

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    auth
      .getUserInfo(token)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  /**============================================
   *          Universal Submit Handler
   *=============================================**/
  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(closeActiveModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }
  /*==================== End ====================*/

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, isLoggedIn, setIsLoggedIn, setCurrentUser }}
    >
      <div className={path === "profile" ? "page page-dark" : "page"}>
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    theme=""
                    handleLoginClick={handleLoginClick}
                    handleLogout={handleLogout}
                  />
                  <SearchForm handleSubmit={handleSubmit} />
                  <NewsResults />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Header
                    theme="profile"
                    handleLoginClick={handleLoginClick}
                    handleLogout={handleLogout}
                  />
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <LoginModal
        isOpen={activeModal === "login-modal"}
        handleClose={closeActiveModal}
        onRegisterClick={handleRegisterClick}
        buttonText={isLoading ? "Signing in..." : "Sign in"}
        handleSubmit={handleSubmit}
      />
      <RegisterModal
        isOpen={activeModal === "register-modal"}
        handleClose={closeActiveModal}
        onLoginClick={handleLoginClick}
        buttonText={isLoading ? "Wait..." : "Sign up"}
        handleSubmit={handleSubmit}
      />
      <RegisterSuccessModal
        isOpen={activeModal === "register-success-modal"}
        handleClose={closeActiveModal}
        onLoginClick={handleLoginClick}
      />
      <EditProfileModal
        isOpen={activeModal === "edit-profile-modal"}
        handleClose={closeActiveModal}
        buttonText={isLoading ? "Wait..." : "Save changes"}
        handleSubmit={handleSubmit}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
