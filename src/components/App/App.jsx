import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import NewsPage from "../NewsPage/NewsPage";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    name: "",
    email: "",
    avatar: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return;
  //   }
  //   getUserInfo(token)
  //     .then((user) => {
  //       setCurrentUser(user);
  //       setIsLoggedIn(true);
  //     })
  //     .catch(console.error);
  // }, [isLoggedIn]);

  const handleCardClick = (card) => {
    setActiveModal("item-modal");
    setSelectedCard(card);
  };

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
      <div className="page">
        <div className="page__content">
          <Header
            handleRegisterClick={handleRegisterClick}
            handleLoginClick={handleLoginClick}
          />
          <SearchForm handleSubmit={handleSubmit} />
          <Routes>
            <Route
              path="/"
              element={<Main handleCardClick={handleCardClick} />}
            />
            <Route
              path="/news"
              element={
                <NewsPage
                  handleCardClick={handleCardClick}
                  handleLogout={handleLogout}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
        <LoginModal
          isOpen={activeModal === "login-modal"}
          handleClose={closeActiveModal}
          onRegisterClick={handleRegisterClick}
          buttonText={isLoading ? "Logging In..." : "Log In"}
          handleSubmit={handleSubmit}
        />
        <RegisterModal
          isOpen={activeModal === "register-modal"}
          handleClose={closeActiveModal}
          onLoginClick={handleLoginClick}
          buttonText={isLoading ? "Wait..." : "Next"}
          handleSubmit={handleSubmit}
        />
        <EditProfileModal
          isOpen={activeModal === "edit-profile-modal"}
          handleClose={closeActiveModal}
          buttonText={isLoading ? "Wait..." : "Save changes"}
          handleSubmit={handleSubmit}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
