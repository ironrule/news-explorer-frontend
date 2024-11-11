import "./SavedNews.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ArticleContext } from "../../contexts/ArticleContext";
import ArticleCard from "../ArticleCard/ArticleCard";

function SavedNews({ handleDeleteArticle }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const { savedArticles, setSavedArticles } = useContext(ArticleContext);
  const getFormattedKeywords = (articles) => {
    const keywords = articles.map((article) => article.keyword);
    const uniqueKeywords = [...new Set(keywords)];

    if (uniqueKeywords.length > 3) {
      const displayedKeywords = uniqueKeywords.slice(0, 2).join(", ");
      const remainingCount = uniqueKeywords.length - 2;
      return `${displayedKeywords}, and ${remainingCount} others`;
    }
    return uniqueKeywords.join(", ");
  };
  const keywordsToDisplay = getFormattedKeywords(savedArticles);

  return (
    <>
      <div className="saved-news">
        <div className="saved-news__title">Saved articles</div>
        <div className="saved-news__text">
          {currentUser.username.split(/(?<=^\S+)\s/)[0]}, you have{" "}
          {savedArticles.length} saved articles
        </div>
        <div className="saved-news__keywords-title">
          By keywords:
          <span className="saved-news__keywords">
            &nbsp;{keywordsToDisplay || "None available"}
          </span>
        </div>
      </div>
      <div className="saved-news__articles-section">
        <ul className="saved-news__cards-list">
          {savedArticles.map((item) => {
            return (
              <ArticleCard
                key={item.source.id}
                item={item}
                handleDeleteArticle={handleDeleteArticle}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SavedNews;
