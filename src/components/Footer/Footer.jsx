import React from "react";
import classes from "./Footer.module.css";
import Button from "../../shared/UI/Button/Button";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={"/img/IMAGE.svg"} alt={""} />
        <nav>
          <p>Showcase</p>
          <p>Landing one</p>
          <p>Sign up</p>
          <p>Other templates</p>
        </nav>
        <hr />
        <img src={"/img/132213.png"} alt={""} />
        <img src={"/img/21.png"} alt={""} />
        <Button>Get on Webflow</Button>
        <div>
          <img src={"/img/11.png"} alt={""} />
          <img src={"/img/12.png"} alt={""} />
          <img src={"/img/13.png"} alt={""} />
        </div>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Footer;
