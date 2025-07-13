# Pig Game - React Version

This is a React conversion of the original JavaScript Pig Game. The game maintains the same functionality and visual design as the original, but is now built using React components and hooks.

## Game Rules

- Two players take turns rolling a dice
- Each roll adds to the current player's current score
- If a player rolls a 1, they lose their current score and the turn passes to the other player
- Players can choose to "Hold" their current score, adding it to their total score
- The first player to reach 100 points wins

## Features

- **Modern React Architecture**: Built with functional components and React hooks
- **State Management**: Uses useState for game state management
- **Component-Based Design**: Modular components for Player, Dice, and Game Controls
- **Responsive Design**: Maintains the original beautiful UI design
- **Accessibility**: Proper button states and disabled functionality

## Components

- **App.js**: Main game logic and state management
- **Player.js**: Individual player display component
- **Dice.js**: Dice image display component
- **GameControls.js**: Game control buttons component

## How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Game Controls

- **🔄 New game**: Resets the game to initial state
- **🎲 Roll dice**: Rolls the dice and adds to current score (unless 1 is rolled)
- **📥 Hold**: Adds current score to total score and switches players

## Original vs React Version

The React version maintains 100% feature parity with the original JavaScript version while providing:

- Better code organization with component separation
- Improved maintainability with React hooks
- Enhanced user experience with proper button states
- Modern development practices

## Technologies Used

- React 19.1.0
- CSS3 with modern styling
- HTML5 semantic elements
- JavaScript ES6+ features
