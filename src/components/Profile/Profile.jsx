import "./Profile.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile() {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  return (
    <div className="profile">
      <div className="profile__title">Saved articles</div>
      <div className="profile__text">
        {currentUser.username.split(/(?<=^\S+)\s/)[0]}, you have {} saved
        articles
      </div>
      <div className="profile__keywords-title">
        By keywords:{" "}
        <span className="profile__keywords">
          Nature, Yellowstone, and 2 other
        </span>
      </div>
    </div>
  );
}

export default Profile;
