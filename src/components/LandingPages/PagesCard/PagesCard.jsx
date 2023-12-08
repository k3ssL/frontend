import React from "react";
import classes from "./PagesCard.module.css";

const PagesCard = ({ pagesImg, pagesTitle }) => {
  return (
    <div>
      <div className={classes.top_part_card}>
        <img src={pagesImg} alt={''} />
      </div>
      <div className={classes.bottom_part_card}>
        <h1>{pagesTitle}</h1>
      </div>
    </div>
  );
};

export default PagesCard;
