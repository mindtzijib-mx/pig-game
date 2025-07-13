// Utility functions for the pig game

/**
 * Generates a random dice roll (1-6)
 * @returns {number} Random dice value between 1 and 6
 */
export const rollDice = () => {
  return Math.trunc(Math.random() * 6) + 1;
};

/**
 * Checks if a player has won the game
 * @param {number} score - Player's total score
 * @param {number} winningScore - Score needed to win (default: 100)
 * @returns {boolean} True if player has won
 */
export const hasWon = (score, winningScore = 100) => {
  return score >= winningScore;
};

/**
 * Calculates the new current score after rolling dice
 * @param {number} currentScore - Current accumulated score
 * @param {number} diceValue - Value rolled on dice
 * @returns {number} New current score (0 if rolled 1, otherwise current + dice)
 */
export const calculateNewCurrentScore = (currentScore, diceValue) => {
  if (diceValue === 1) {
    return 0;
  }
  return currentScore + diceValue;
};

/**
 * Switches to the next player
 * @param {number} currentPlayer - Current player index (0 or 1)
 * @returns {number} Next player index
 */
export const switchPlayer = (currentPlayer) => {
  return currentPlayer === 0 ? 1 : 0;
};
