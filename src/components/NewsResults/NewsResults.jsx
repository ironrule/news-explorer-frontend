import "./NewsResults.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useContext, useState } from "react";
import { ArticleContext } from "../../contexts/ArticleContext";
import notFoundImage from "../../assets/notfound.png";

function NewsResults({ handleBookmarkArticle, handleLoginClick }) {
  const { articles, searchPerformed } = useContext(ArticleContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLoadClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 3);
  };

  const displayedArticles = articles.slice(0, currentIndex + 3);

  return (
    <>
      {searchPerformed && articles.length === 0 ? (
        <div className="newsresults__not-found">
          <img
            src={notFoundImage}
            className="newsresults__not-found-image"
            alt="Image indicating the search produced no results"
          />
          <p className="newsresults__not-found-title">Nothing found</p>
          <p className="newsresults__not-found-text">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      ) : (
        searchPerformed &&
        articles.length > 0 && (
          <div className="newsresults__page">
            <section className="newsresults">
              <div className="newsresults__text">Search Results</div>

              <ul className="newsresults__cards-list">
                {displayedArticles.map((item) => {
                  return (
                    <ArticleCard
                      key={item.source.id}
                      item={item}
                      handleBookmarkArticle={handleBookmarkArticle}
                      handleLoginClick={handleLoginClick}
                    />
                  );
                })}
              </ul>
              {currentIndex + 3 < articles.length && (
                <div className="newsresults__load-container">
                  <button
                    className="newsresults__load-btn"
                    onClick={handleLoadClick}
                  >
                    Show more
                  </button>
                </div>
              )}
            </section>
          </div>
        )
      )}
    </>
  );
}

export default NewsResults;
