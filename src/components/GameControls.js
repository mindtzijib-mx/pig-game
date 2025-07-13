import React from "react";
import "./GameControls.css";

const GameControls = ({ onNewGame, onRollDice, onHold, playing }) => {
  return (
    <>
      <button className="btn btn--new" onClick={onNewGame}>
        🔄 New game
      </button>
      <button
        className="btn btn--roll"
        onClick={onRollDice}
        disabled={!playing}
      >
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={onHold} disabled={!playing}>
        📥 Hold
      </button>
    </>
  );
};

export default GameControls;
