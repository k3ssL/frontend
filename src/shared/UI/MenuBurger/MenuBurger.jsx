import React, { useState } from "react";
import classes from "./MenuBurger.module.css";
import Button from "../Button/Button";

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img src={"/img/asd.png"} onClick={handleClick} alt={""} />
      {isOpen && (
        <div className={classes.menu}>
          <div>
            <p> mail@blanko.com </p>
          </div>
          <nav>
            <p>Landing</p>
            <p>All Pages</p>
            <p>Template</p>
          </nav>
          <Button bgColor={"#FF7143"} textColor={"#000000"} width={207}>
            Purchase template
          </Button>
        </div>
      )}
    </div>
  );
};

export default MenuBurger;
