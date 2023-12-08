import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, bgColor, textColor, width, height }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        width: width,
        height: height,
      }}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
