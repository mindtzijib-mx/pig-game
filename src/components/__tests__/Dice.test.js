import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dice from "../Dice";

describe("Dice Component", () => {
  test("renders dice when show is true and value is provided", () => {
    render(<Dice value={5} show={true} />);

    const diceImage = screen.getByAltText("Dice showing 5");
    expect(diceImage).toBeInTheDocument();
    expect(diceImage).toHaveAttribute("src", "/dice-5.png");
    expect(diceImage).toHaveClass("dice");
  });

  test("does not render when show is false", () => {
    render(<Dice value={3} show={false} />);

    expect(screen.queryByAltText("Dice showing 3")).not.toBeInTheDocument();
  });

  test("does not render when value is null", () => {
    render(<Dice value={null} show={true} />);

    expect(screen.queryByAltText(/Dice showing/)).not.toBeInTheDocument();
  });

  test("renders with correct dice image for different values", () => {
    const { rerender } = render(<Dice value={1} show={true} />);

    expect(screen.getByAltText("Dice showing 1")).toHaveAttribute(
      "src",
      "/dice-1.png"
    );

    rerender(<Dice value={6} show={true} />);
    expect(screen.getByAltText("Dice showing 6")).toHaveAttribute(
      "src",
      "/dice-6.png"
    );
  });
});
