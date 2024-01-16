import React from "react";
import classes from "./Attach.module.css";

const Attach = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.circle}>
          <div className={classes.plus}>+</div>
        </div>
        <p>Прикрепить работы (.jpeg / .png)</p>
      </div>
    </div>
  );
};

export default Attach;
