import React, { useContext } from "react";
import "./SearchForm.css";
import { useForm } from "../../hooks/useForm";
import * as api from "../../utils/api.js";
import * as NewsApi from "../../utils/NewsApi.js";
import { ArticleContext } from "../../contexts/ArticleContext.js";

function SearchForm({ handleSubmit }) {
  const handleMouseHover = (e) => {
    e.currentTarget.classList.add("searchform__btn-hover");
  };
  const handleMouseDown = (e) => {
    e.currentTarget.classList.remove("searchform__btn-hover");
    e.currentTarget.classList.add("searchform__btn-click");
  };
  const handleMouseUp = (e) => {
    e.currentTarget.classList.add("searchform__btn-hover");
    e.currentTarget.classList.remove("searchform__btn-click");
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove("searchform__btn-hover");
    e.currentTarget.classList.remove("searchform__btn-click");
  };

  const { setArticles, setSearchPerformed } = useContext(ArticleContext);
  const initialFormValues = {
    search: "",
  };
  const { formValues, handleFormChange, setFormValues } =
    useForm(initialFormValues);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchPerformed(true);
    const makeRequest = () => {
      return NewsApi.getArticles(formValues.search).then((data) => {
        const updatedArticles = data.articles.map((article, index) => {
          const keyId = `${Date.now()}-${index}-${article.title || "default"}`;
          return {
            ...article,
            keyword: formValues.search,
            keyId,
          };
        });
        setArticles(updatedArticles);
      });
    };
    handleSubmit(makeRequest);
    setFormValues(initialFormValues);
  };

  return (
    <>
      <div className="searchform">
        <div className="searchform__header">
          <p className="searchform__text">What's going on in the world?</p>
        </div>
        <p className="searchform__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form
          onSubmit={handleSearchSubmit}
          className="searchform__search"
          name="search-form"
          id="search-form"
        >
          <div className="searchform__bar">
            <input
              type="text"
              className="searchform__textbar"
              name="search"
              id="search-input"
              placeholder="Enter topic"
              required
              minLength="1"
              maxLength="100"
              value={formValues.search}
              onChange={handleFormChange}
            />
            <button
              type="submit"
              className="searchform__btn"
              id="searchform__btn"
              onMouseOver={handleMouseHover}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchForm;
