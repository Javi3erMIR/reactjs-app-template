import React from "react";
import "../styles/HomeStyles.css";

const greenButton = ({ action }) => {
  const onPressAction = () => {
    action();
  };
  return (
    <div onClick={onPressAction} className="green-button">
      <p>Press Me</p>
    </div>
  );
};

export default greenButton;
