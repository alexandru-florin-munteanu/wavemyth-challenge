import React from "react";
import "./style.scss";

const MainButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="main-btn">
      {children}
    </button>
  );
};

export default MainButton;
