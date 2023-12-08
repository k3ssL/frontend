import React from "react";
import classes from "./Header.module.css";
import Button from "../../shared/UI/Button/Button";
import MenuBurger from "../../shared/UI/MenuBurger/MenuBurger";

const Header = () => {
  return (
    <header>
      <div className={classes.content}>
        <div className={classes.logotype}>
          <img src={"/img/IMAGE.svg"} alt={''} />
          <MenuBurger />
          <div>
            <p>mail@blanko.com</p>
          </div>
        </div>

        <nav>
          <p>Landing</p>
          <p>All pages</p>
          <p>Template</p>
          <Button bgColor={"#FF7143"} textColor={"#000000"}>
            Purchase template
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
