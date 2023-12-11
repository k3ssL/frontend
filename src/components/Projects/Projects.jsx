import React from "react";
import classes from "./Projects.module.css";
import Project from "./UI/Project/Project";

const Projects = () => {
  return (
    <div className={classes.container}>
      <h2>Проекты</h2>
      <div className={classes.projects}>
        <Project projectImg={"/img/4.png"} />

        <Project projectImg={"/img/5.png"} />

        <Project projectImg={"/img/6.png"} />

        <Project projectImg={"/img/7.png"} />

        <Project projectImg={"/img/8.png"} />

        <Project projectImg={"/img/10.png"} />
      </div>
    </div>
  );
};

export default Projects;
