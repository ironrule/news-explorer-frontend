import "./About.css";
import aboutImage from "../../assets/brandon.jpg";

function About() {
  return (
    <>
      <section className="about">
        <img
          src={aboutImage}
          alt="Image of Site Author"
          className="about__logo"
        />
        <section className="about__text">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Brandon King is a full-stack software engineer located in
            Louisville, Kentucky. He enjoys developing applications, websites,
            and tools using React, Javascript, HTML, CSS, MongoDB, Express.js,
            Node.js, Electron.js, Git, GitHub, and is constantly learning other
            new technologies.
          </p>
          <p className="about__description">
            He began his software engineering career by attending a bootcamp
            with TripleTen. There, he experienced developing full websites and
            applications from start to finish, and highly recommends this to
            others.
          </p>
        </section>
      </section>
    </>
  );
}

export default About;
