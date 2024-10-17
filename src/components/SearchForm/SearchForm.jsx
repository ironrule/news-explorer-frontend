import "./SearchForm.css";

function SearchForm(handleSubmit) {
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
          // onSubmit={handleSubmit}
          className="searchform__search"
          name="search-form"
          id="search-form"
        >
          <div className="searchform__bar">
            <input
              type="text"
              className="searchform__textbar"
              placeholder="Enter topic"
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
