import React from "react";
import "./Button.scss";

const Button = ({ onClick, children }) => {
  return (
    <a
      href="/"
      className="button"
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      role="button"
    >
      <p>{children || "Записаться"}</p>
    </a>
  );
};

export default Button;
