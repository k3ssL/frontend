import React from "react";
import classes from "./Exclusive.module.css";

const Exclusive = () => {
  return (
    <div className={classes.container}>
      <h1>ЭКСКЛЮЗИВНАЯ И НЕСТАНДАРТНАЯ МЕБЕЛЬ ДЛЯ ДОМА</h1>
      <p>
        Мы можем произвести любую мебель для вашего проекта и найти
        производственное решение любой задумки.
      </p>
      <img src={"/img/1.png"} alt={""} />
      <h4>ЗАКАЗАТЬ ПРОЕКТ</h4>
      <img src={"/img/2.png"} alt={""} />
      <img src={"/img/45.png"} alt={""} />
    </div>
  );
};

export default Exclusive;
