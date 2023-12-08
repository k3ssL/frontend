import React from "react";
import classes from "./Banner.module.css";
import Button from "../../shared/UI/Button/Button";

const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>Blanko template</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris
          porttitor amet volutpat.
        </p>
        <div className={classes.row}>
          <Button
            bgColor={"#000000"}
            textColor={"#FFFFFF"}
            width={226}
            height={64}
          >
            Purchase template
          </Button>
          <Button bgColor={"#FFFFFF"} height={64}>
            Other template
          </Button>
        </div>
      </div>
      <img src={"/img/IMAGE.png"} alt={''}/>
    </div>
  );
};

export default Banner;
