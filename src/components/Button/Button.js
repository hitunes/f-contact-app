import "./Button.css";
import React from "react";

export const Button = ({ children, onClick, ...props }) => {
  return (
    <div className="button__wrapper">
      <button className="button__button">
        <div onClick={onClick} className="button__title">
          <div>{children}</div>
        </div>
      </button>
    </div>
  );
};
