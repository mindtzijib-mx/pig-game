# Testing Documentation - Pig Game React

This document describes the testing strategy and test coverage for the Pig Game React application.

## 🧪 Test Structure

### Component Tests

- **Player.test.js**: Tests for the Player component
- **Dice.test.js**: Tests for the Dice component
- **GameControls.test.js**: Tests for the GameControls component

### Integration Tests

- **App.test.js**: End-to-end game logic tests

### Unit Tests

- **gameUtils.test.js**: Tests for utility functions

## 🎯 Test Coverage

### Player Component Tests

- ✅ Renders player information correctly
- ✅ Applies active player styles
- ✅ Applies winner styles
- ✅ Shows correct player number class
- ✅ Displays zero current score when not active

### Dice Component Tests

- ✅ Renders dice when show is true and value is provided
- ✅ Does not render when show is false
- ✅ Does not render when value is null
- ✅ Renders with correct dice image for different values

### GameControls Component Tests

- ✅ Renders all game control buttons
- ✅ Calls correct functions when buttons are clicked
- ✅ Disables roll and hold buttons when game is not playing
- ✅ Enables buttons when game is playing
- ✅ New game button is always enabled

### App Integration Tests

- ✅ Renders game with initial state
- ✅ Rolls dice and updates current score
- ✅ Switches player when rolling 1
- ✅ Holds score and switches player
- ✅ Wins game when player reaches 100 points
- ✅ Resets game when new game button is clicked
- ✅ Cannot roll dice when game is over

### Utility Function Tests

- ✅ rollDice returns values between 1-6
- ✅ hasWon correctly identifies winners
- ✅ calculateNewCurrentScore handles dice values correctly
- ✅ switchPlayer alternates between players

## 🚀 Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm test -- --watch
```

### Run Tests with Coverage

```bash
npm test -- --coverage
```

### Run Specific Test File

```bash
npm test -- Player.test.js
```

## 🛠️ Testing Tools Used

- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React components
- **@testing-library/jest-dom**: Custom Jest matchers for DOM testing
- **@testing-library/user-event**: Simulating user interactions

## 📋 Testing Best Practices

### Component Testing

- Test component rendering
- Test prop changes
- Test user interactions
- Test conditional rendering
- Test accessibility features

### Integration Testing

- Test complete user workflows
- Test state changes
- Test component interactions
- Test game logic flow

### Unit Testing

- Test pure functions
- Test edge cases
- Test error conditions
- Test utility functions

## 🎲 Game Logic Testing

### Dice Rolling

- Tests verify dice values are between 1-6
- Tests check that rolling 1 switches players
- Tests verify current score accumulation

### Player Switching

- Tests confirm players alternate correctly
- Tests verify current score resets on switch
- Tests check active player styling

### Win Conditions

- Tests verify 100-point win threshold
- Tests check winner styling
- Tests confirm game ends when won

### Game Reset

- Tests verify all scores reset to 0
- Tests confirm active player resets to Player 1
- Tests check game state returns to initial

## 🔧 Mocking Strategy

### Math.random Mocking

- Used to control dice rolls in tests
- Allows predictable test outcomes
- Enables testing specific game scenarios

### Component Mocking

- Minimal mocking approach
- Focus on testing actual behavior
- Use real component interactions

## 📊 Test Metrics

- **Total Tests**: 25+ tests
- **Coverage Areas**: Components, Integration, Utilities
- **Test Types**: Unit, Integration, Component
- **Mocking**: Math.random, DOM APIs

## 🚨 Common Test Issues

### Multiple Elements with Same Text

- Use `getAllByText()` for multiple matches
- Use `getByTestId()` for specific elements
- Use more specific selectors

### Async Operations

- Use `waitFor()` for async operations
- Mock timers when needed
- Handle component updates properly

### DOM Queries

- Prefer `getByRole()` over `getByText()`
- Use `getByTestId()` for specific elements
- Avoid direct DOM manipulation

## 🎯 Future Test Improvements

- Add E2E tests with Cypress
- Add performance tests
- Add accessibility tests
- Add visual regression tests
- Add mobile responsiveness tests
