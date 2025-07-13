import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Player from "../Player";

describe("Player Component", () => {
  const defaultProps = {
    playerNumber: 0,
    name: "Player 1",
    score: 25,
    currentScore: 10,
    isActive: true,
    isWinner: false,
  };

  test("renders player information correctly", () => {
    render(<Player {...defaultProps} />);

    expect(screen.getByText("Player 1")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("Current")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("applies active player styles when isActive is true", () => {
    render(<Player {...defaultProps} isActive={true} />);

    const playerSection = screen.getByTestId("player-0");
    expect(playerSection).toHaveClass("player--active");
  });

  test("applies winner styles when isWinner is true", () => {
    render(<Player {...defaultProps} isWinner={true} />);

    const playerSection = screen.getByTestId("player-0");
    expect(playerSection).toHaveClass("player--winner");
  });

  test("shows correct player number class", () => {
    render(<Player {...defaultProps} playerNumber={1} />);

    const playerSection = screen.getByTestId("player-1");
    expect(playerSection).toHaveClass("player--1");
  });

  test("displays zero current score when not active", () => {
    render(<Player {...defaultProps} isActive={false} currentScore={0} />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
