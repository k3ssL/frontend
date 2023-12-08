import React from "react";
import classes from "./Quality.module.css";
import QualityCard from "./UI/QualityCard/QualityCard";

const Quality = () => {
  return (
    <div className={classes.container}>
      <QualityCard
        cardImg={"/img/Frame.png"}
        cardTitle={"Speed"}
        cardText={"Open a commercial-grade current account from anywhere"}
      />
      <QualityCard
        cardImg={"/img/Frame (1).png"}
        cardTitle={"Design"}
        cardText={"Open a commercial-grade current account from anywhere"}
      />
      <QualityCard
        cardImg={"/img/Frame (2).png"}
        cardTitle={"Modularity"}
        cardText={"Open a commercial-grade current account from anywhere"}
      />
    </div>
  );
};

export default Quality;
