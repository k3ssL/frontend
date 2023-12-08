import React from "react";
import classes from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={"/img/2.png"} alt={''} />
        <h1>
          “Join a community of industry leading professionals. Join a community
          of industry leading professionals.“
        </h1>
        <h3>Laura Paula</h3>
        <p>Director @Company</p>
        <img src={"/img/3.png"} alt={''}/>
      </div>
    </div>
  );
};

export default Quote;
