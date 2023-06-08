import React from "react";

const Home = () => {
  return (
    <section className="home" id="Accueil">
      <div className="home-content">
        <div className="home-text">
          <h2>
            Développeur front <br /> Javascript React
          </h2>
          <p>
            Je suis Faustin GARDETTE, jeune développeur. Pris de passion pour le
            code, j'ai choisi d'en faire mon métier !
          </p>
          <ul>
            <a
              href="https://www.linkedin.com/in/faustin-gardette-443ab6175/"
              target="blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Faustin-Gardette" target="blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </ul>
        </div>
        <div className="home-img">
          <img src="./assets/profil.png" alt="" />
        </div>
      </div>

      <div className="home-tech-content">
        <div className="home-tech">
          <h6>Technos :</h6>
          <ul>
            <li>
              <img src="./assets/html.svg" alt="" />
            </li>
            <li>
              <img src="./assets/css.svg" alt="" />
            </li>
            <li>
              <img src="./assets/scss.svg" alt="" />
            </li>
            <li>
              <img src="./assets/js.svg" alt="" />
            </li>
            <li>
              <img src="./assets/react.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
