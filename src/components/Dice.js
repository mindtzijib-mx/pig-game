import React from "react";
import "./Dice.css";

const Dice = ({ value, show }) => {
  if (!show || !value) return null;

  return (
    <img
      src={`/dice-${value}.png`}
      alt={`Dice showing ${value}`}
      className="dice"
    />
  );
};

export default Dice;
