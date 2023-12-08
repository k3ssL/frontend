import React from "react";
import classes from "./QualityCard.module.css";

const QualityCard = ({ cardImg, cardTitle, cardText }) => {
  return (
    <div className={classes.container}>
      <img src={cardImg} alt={""} />
      <h1>{cardTitle}</h1>
      <p>{cardText}</p>
    </div>
  );
};

export default QualityCard;
