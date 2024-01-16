import React from "react";
import classes from "./PlaceABetButton.module.css";

const PlaceABetButton = ({ children }) => {
  return (
    <button className={classes.container}>
      <p className={classes.text}>{children}</p>
    </button>
  );
};

export default PlaceABetButton;
