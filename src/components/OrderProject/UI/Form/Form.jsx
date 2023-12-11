import React from "react";
import classes from "./Form.module.css";
import Input from "../Input/Input";

const Form = () => {
  return (
    <div className={classes.container}>
      <Input placeholder={"Имя"} />
      <Input placeholder={"E-mail"} />
      <Input placeholder={"Телефон"} />
      <button>Отправить заявку</button>
    </div>
  );
};

export default Form;
