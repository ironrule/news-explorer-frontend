import "./Main.css";
import { useContext } from "react";

function Main({ weatherData, handleCardClick }) {
  return (
    <main>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
