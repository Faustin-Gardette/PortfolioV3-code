import React from "react";
import dataProjects from "../data/dataProjects.json";

const Projects = () => {
  return (
    <section className="section-box" id="Projets">
      <h4>Projets</h4>
      <div className="box-content">
        {dataProjects &&
          dataProjects.map((data) => {
            return (
              <div className="box" key={data.id}>
                <div className="box-img">
                  <a href={data.link} target="blank">
                    <img src={data.img} alt="" />
                  </a>
                </div>
                <div className="box-text">
                  <h3> {data.title} </h3>
                  <p> {data.infos} </p>
                  <div className="stacks">
                    <p> {data.languages[0]} </p>
                    <p> {data.languages[1]} </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Projects;
