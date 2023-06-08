import React from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <div className="nav-content">
            <div className="nav-left">
              <h1>Portfolio</h1>
            </div>
            <div className="nav-right">
              <ul>
                <Link to="#Accueil" smooth>
                  <li>Accueil</li>
                </Link>
                <Link to="#Projets" smooth>
                  <li>Projets</li>
                </Link>
                <Link to="#Contact" smooth>
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <Home />
        <Projects />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
