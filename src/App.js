import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import Dice from './components/Dice';
import GameControls from './components/GameControls';

function App() {
  const [scores, setScores] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [diceValue, setDiceValue] = useState(null);
  const [showDice, setShowDice] = useState(false);

  const switchPlayer = () => {
    setCurrentScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  const rollDice = () => {
    if (!playing) return;

    const dice = Math.trunc(Math.random() * 6) + 1;
    setDiceValue(dice);
    setShowDice(true);

    if (dice !== 1) {
      setCurrentScore(currentScore + dice);
    } else {
      switchPlayer();
    }
  };

  const holdScore = () => {
    if (!playing) return;

    const newScores = [...scores];
    newScores[activePlayer] += currentScore;
    setScores(newScores);

    if (newScores[activePlayer] >= 100) {
      setPlaying(false);
      setShowDice(false);
    } else {
      switchPlayer();
    }
  };

  const newGame = () => {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setPlaying(true);
    setDiceValue(null);
    setShowDice(false);
  };

  return (
    <div className="app">
      <main className="game">
        <Player
          playerNumber={0}
          name="Player 1"
          score={scores[0]}
          currentScore={activePlayer === 0 ? currentScore : 0}
          isActive={activePlayer === 0 && playing}
          isWinner={!playing && scores[0] >= 100}
        />
        <Player
          playerNumber={1}
          name="Player 2"
          score={scores[1]}
          currentScore={activePlayer === 1 ? currentScore : 0}
          isActive={activePlayer === 1 && playing}
          isWinner={!playing && scores[1] >= 100}
        />

        <Dice 
          value={diceValue} 
          show={showDice} 
        />

        <GameControls
          onNewGame={newGame}
          onRollDice={rollDice}
          onHold={holdScore}
          playing={playing}
        />
      </main>
    </div>
  );
}

export default App;
