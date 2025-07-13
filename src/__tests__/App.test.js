import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Mock Math.random to control dice rolls
const mockMath = Object.create(global.Math);
global.Math = mockMath;

describe("App Component - Game Integration", () => {
  beforeEach(() => {
    // Reset to default state
    mockMath.random = () => 0.5; // This will give us dice value of 4 (0.5 * 6 + 1 = 4)
  });

  test("renders game with initial state", () => {
    render(<App />);

    expect(screen.getByText("Player 1")).toBeInTheDocument();
    expect(screen.getByText("Player 2")).toBeInTheDocument();
    expect(screen.getByText("🔄 New game")).toBeInTheDocument();
    expect(screen.getByText("🎲 Roll dice")).toBeInTheDocument();
    expect(screen.getByText("📥 Hold")).toBeInTheDocument();

    // Check that both players have initial scores of 0
    const scores = screen.getAllByText("0");
    expect(scores).toHaveLength(4); // 2 total scores + 2 current scores
  });

  test("rolls dice and updates current score", () => {
    mockMath.random = () => 0.5; // Dice value 4
    render(<App />);

    fireEvent.click(screen.getByText("🎲 Roll dice"));

    // Should show dice image
    expect(screen.getByAltText("Dice showing 4")).toBeInTheDocument();
    // Should update current score for active player (Player 1)
    expect(screen.getByTestId("player-0")).toHaveTextContent("4");
  });

  test("switches player when rolling 1", () => {
    mockMath.random = () => 0; // Dice value 1
    render(<App />);

    fireEvent.click(screen.getByText("🎲 Roll dice"));

    // Player 2 should become active
    expect(screen.getByTestId("player-1")).toHaveClass("player--active");
    expect(screen.getByTestId("player-0")).not.toHaveClass("player--active");
  });

  test("holds score and switches player", () => {
    mockMath.random = () => 0.5; // Dice value 4
    render(<App />);

    // Roll dice first
    fireEvent.click(screen.getByText("🎲 Roll dice"));

    // Hold the score
    fireEvent.click(screen.getByText("📥 Hold"));

    // Player 1 should have score 4, Player 2 should be active
    expect(screen.getByTestId("player-0")).toHaveTextContent("4");
    expect(screen.getByTestId("player-1")).toHaveClass("player--active");
  });

  test("wins game when player reaches 100 points", () => {
    mockMath.random = () => 0.5; // Dice value 4
    render(<App />);

    // Simulate Player 1 getting close to 100
    // We need to roll multiple times to accumulate points
    for (let i = 0; i < 25; i++) {
      // 25 * 4 = 100
      fireEvent.click(screen.getByText("🎲 Roll dice"));
      fireEvent.click(screen.getByText("📥 Hold"));
    }

    // Player 1 should be winner
    expect(screen.getByTestId("player-0")).toHaveClass("player--winner");
    // Game should be over (buttons disabled)
    expect(screen.getByText("🎲 Roll dice")).toBeDisabled();
    expect(screen.getByText("📥 Hold")).toBeDisabled();
  });

  test("resets game when new game button is clicked", () => {
    mockMath.random = () => 0.5; // Dice value 4
    render(<App />);

    // Play a bit
    fireEvent.click(screen.getByText("🎲 Roll dice"));
    fireEvent.click(screen.getByText("📥 Hold"));

    // Start new game
    fireEvent.click(screen.getByText("🔄 New game"));

    // Should be back to initial state
    expect(screen.getByTestId("player-0")).toHaveClass("player--active");
    expect(screen.getByTestId("player-1")).not.toHaveClass("player--active");

    // Check that scores are reset
    const scores = screen.getAllByText("0");
    expect(scores).toHaveLength(4); // 2 total scores + 2 current scores
  });

  test("cannot roll dice when game is over", () => {
    mockMath.random = () => 0.5; // Dice value 4
    render(<App />);

    // Win the game
    for (let i = 0; i < 25; i++) {
      fireEvent.click(screen.getByText("🎲 Roll dice"));
      fireEvent.click(screen.getByText("📥 Hold"));
    }

    // Try to roll dice - should not work
    const rollButton = screen.getByText("🎲 Roll dice");
    expect(rollButton).toBeDisabled();

    // Dice should not be visible
    expect(screen.queryByAltText(/Dice showing/)).not.toBeInTheDocument();
  });
});
