import "./Preloader.css";
import loadingImage from "../../assets/loading.png";

function Preloader({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className="preloader">
          <img
            src={loadingImage}
            className="preloader__loading-image"
            alt="Image indicating the site is loading search results"
          />
          <p className="preloader__loading-text">Searching for news...</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Preloader;
