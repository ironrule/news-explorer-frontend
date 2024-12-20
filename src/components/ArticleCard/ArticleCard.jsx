import "./ArticleCard.css";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ArticleContext } from "../../contexts/ArticleContext";

function ArticleCard({ item, handleLoginClick }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { savedArticles, setSavedArticles, articles, setArticles } =
    useContext(ArticleContext);
  const [showTooltip, setShowTooltip] = useState(false);
  let path = useLocation().pathname.slice(1);

  const handleDeleteArticle = (id, e) => {
    e.stopPropagation();
    setSavedArticles((items) => items.filter((item) => item.keyId !== id));
  };

  const handleBookmarkArticle = (id, e) => {
    e.stopPropagation();
    const articleToBookmark = articles.find((article) => article.keyId === id);
    if (articleToBookmark && !savedArticles.some((item) => item.keyId === id)) {
      setSavedArticles((items) => [...items, articleToBookmark]);
    } else {
      handleDeleteArticle(item.keyId, e);
    }
  };

  return (
    <li className="card">
      <div className="card__container">
        <img
          className="card__image"
          src={item.urlToImage}
          alt={`Picture showing ${item.title}`}
        />

        {path === "saved-news" ? (
          <div className="card__keyword">{item.keyword}</div>
        ) : (
          <></>
        )}

        <button
          type="button"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={
            path === "saved-news"
              ? "card__trash"
              : !savedArticles.some((existing) => existing.keyId === item.keyId)
              ? "card__bookmark"
              : "card__bookmarked"
          }
          onClick={
            path === "saved-news"
              ? (e) => {
                  handleDeleteArticle(item.keyId, e);
                }
              : (e) => {
                  isLoggedIn
                    ? handleBookmarkArticle(item.keyId, e)
                    : handleLoginClick();
                }
          }
        />
        {showTooltip && (
          <div
            className={
              path === "saved-news"
                ? "card__trash-tooltip"
                : "card__bookmark-tooltip"
            }
          >
            {path === "saved-news"
              ? "Remove from saved"
              : isLoggedIn
              ? !savedArticles.some((existing) => existing.keyId === item.keyId)
                ? "Add to saved"
                : "Already saved"
              : "Sign in to save articles"}
          </div>
        )}
        <div className="card__text-section">
          <p className="card__date">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(item.publishedAt))}
          </p>
          <p className="card__name">{item.title}</p>
          <p className="card__description">{item.description}</p>
          <p className="card__source-name">{item.source.name}</p>
        </div>
      </div>
    </li>
  );
}

export default ArticleCard;
