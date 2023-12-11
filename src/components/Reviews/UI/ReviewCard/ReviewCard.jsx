import React from "react";
import classes from "./ReviewCard.module.css";

const ReviewCard = ({ reviewName, reviewText }) => {
  return (
    <div className={classes.container}>
      <img src={"/img/icon.png"} alt={""} />
      <h2>{reviewName}</h2>
      <p>{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
