import React from "react";
import classes from "./Stepitem.module.css";
const StepItem = ({ stepTitle, stepText }) => {
  return (
    <div className={classes.container}>
      <h3>{stepTitle}</h3>
      <p>{stepText}</p>
      <hr />
    </div>
  );
};

export default StepItem;
