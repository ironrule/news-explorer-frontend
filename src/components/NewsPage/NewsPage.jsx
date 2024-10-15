import "./NewsPage.css";
import { useContext } from "react";

function NewsPage({ handleCardClick }) {
  return (
    <main>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default NewsPage;
