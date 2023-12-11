import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <img src={"./img/logo.png"} alt={""} />
      <img src={"./img/burger.png"} alt={""} />
      <nav>
        <p>О нас</p>
        <p>Проекты</p>
        <p>Материалы</p>
        <p>Отзывы</p>
      </nav>
      <p>+7 999 999 99 99</p>
    </header>
  );
};

export default Header;
