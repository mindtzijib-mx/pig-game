import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameControls from "../GameControls";

describe("GameControls Component", () => {
  const mockProps = {
    onNewGame: jest.fn(),
    onRollDice: jest.fn(),
    onHold: jest.fn(),
    playing: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all game control buttons", () => {
    render(<GameControls {...mockProps} />);

    expect(screen.getByText("🔄 New game")).toBeInTheDocument();
    expect(screen.getByText("🎲 Roll dice")).toBeInTheDocument();
    expect(screen.getByText("📥 Hold")).toBeInTheDocument();
  });

  test("calls onNewGame when new game button is clicked", () => {
    render(<GameControls {...mockProps} />);

    fireEvent.click(screen.getByText("🔄 New game"));
    expect(mockProps.onNewGame).toHaveBeenCalledTimes(1);
  });

  test("calls onRollDice when roll dice button is clicked", () => {
    render(<GameControls {...mockProps} />);

    fireEvent.click(screen.getByText("🎲 Roll dice"));
    expect(mockProps.onRollDice).toHaveBeenCalledTimes(1);
  });

  test("calls onHold when hold button is clicked", () => {
    render(<GameControls {...mockProps} />);

    fireEvent.click(screen.getByText("📥 Hold"));
    expect(mockProps.onHold).toHaveBeenCalledTimes(1);
  });

  test("disables roll and hold buttons when game is not playing", () => {
    render(<GameControls {...mockProps} playing={false} />);

    const rollButton = screen.getByText("🎲 Roll dice");
    const holdButton = screen.getByText("📥 Hold");

    expect(rollButton).toBeDisabled();
    expect(holdButton).toBeDisabled();
  });

  test("enables roll and hold buttons when game is playing", () => {
    render(<GameControls {...mockProps} playing={true} />);

    const rollButton = screen.getByText("🎲 Roll dice");
    const holdButton = screen.getByText("📥 Hold");

    expect(rollButton).not.toBeDisabled();
    expect(holdButton).not.toBeDisabled();
  });

  test("new game button is always enabled", () => {
    render(<GameControls {...mockProps} playing={false} />);

    const newGameButton = screen.getByText("🔄 New game");
    expect(newGameButton).not.toBeDisabled();
  });
});
