import React, { useState } from "react";
import classes from "./Project.module.css";

const Project = ({ projectImg, projectText }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  const handleDontHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={handleHover}
      onMouseLeave={handleDontHover}
    >
      <img src={projectImg} alt={""} />
      {isHover && (
        <div className={classes.link}>
          <p>Тумба под телевизор</p>
          <img src={"/img/3.png"} alt={""} />
        </div>
      )}
    </div>
  );
};

export default Project;
