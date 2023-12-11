import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <p>© 2023 AVEJI</p>
      <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
      <p>Политика конфеденциальности / Оплата и доставка</p>
      <p>ВКОНТАКТЕ</p>
      <p>ТЕЛЕГРАМ</p>
      <p>Политика конфеденциальности</p>
      <p>Оплата и доставка</p>
    </div>
  );
};

export default Footer;
