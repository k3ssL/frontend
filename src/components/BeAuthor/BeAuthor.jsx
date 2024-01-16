import React from "react";
import classes from "./BeAuthor.module.css";
import Attach from "./UI/Attach/Attach";
import PlaceABetButton from "../../shared/UI/PlaceABetButton/PlaceABetButton";
import Input from "./UI/Input/Input";

const BeAuthor = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Стать автором</h1>
      <h2 className={classes.subtitle}>
        Если ты художник или стремишься им стать — добро пожаловать к нам!
      </h2>
      <p className={classes.paragraph}>
        Отправь нам от трёх до пяти своих работ и напиши свой ник в телеграмме.
        Если наши кураторы решат, что нам по пути, то мы обязательно свяжемся с
        тобой и обговорим условия сотрудничества! <b>Удачи!</b>
      </p>
      <img src={"/img/Frame 31.svg"} alt={""} />
      <img src={"/img/Group 1247.svg"} alt={""} />
      <Attach />
      <Input placeholder={"@telegram_nickname"} />
      <PlaceABetButton> Отправить </PlaceABetButton>
    </div>
  );
};

export default BeAuthor;
