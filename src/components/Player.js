import React from "react";
import "./Player.css";

const Player = ({
  playerNumber,
  name,
  score,
  currentScore,
  isActive,
  isWinner,
}) => {
  const playerClass = `player player--${playerNumber} ${
    isActive ? "player--active" : ""
  } ${isWinner ? "player--winner" : ""}`;

  return (
    <section className={playerClass} data-testid={`player-${playerNumber}`}>
      <h2 className="name">{name}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{currentScore}</p>
      </div>
    </section>
  );
};

export default Player;
