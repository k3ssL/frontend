import React from "react";
import classes from "./LandingPages.module.css";
import PagesCard from "./PagesCard/PagesCard";

const LandingPages = () => {
  return (
    <div className={classes.container}>
      <h1>Landing pages</h1>
      <div className={classes.content}>
        <PagesCard pagesImg={"/img/41.png"} pagesTitle={"Landing one"} />
        <PagesCard pagesImg={"/img/4.png"} pagesTitle={"Landing two"} />
        <PagesCard pagesImg={"/img/5.png"} pagesTitle={"Landing three"} />
        <PagesCard pagesImg={"/img/6.png"} pagesTitle={"Landing four"} />
      </div>
    </div>
  );
};

export default LandingPages;
