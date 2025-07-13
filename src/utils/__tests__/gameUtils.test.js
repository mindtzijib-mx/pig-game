import {
  rollDice,
  hasWon,
  calculateNewCurrentScore,
  switchPlayer,
} from "../gameUtils";

describe("Game Utilities", () => {
  describe("rollDice", () => {
    test("returns a number between 1 and 6", () => {
      const result = rollDice();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(6);
      expect(Number.isInteger(result)).toBe(true);
    });

    test("returns different values on multiple calls", () => {
      const results = new Set();
      for (let i = 0; i < 100; i++) {
        results.add(rollDice());
      }
      // Should have multiple different values
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe("hasWon", () => {
    test("returns true when score reaches winning threshold", () => {
      expect(hasWon(100)).toBe(true);
      expect(hasWon(150)).toBe(true);
    });

    test("returns false when score is below winning threshold", () => {
      expect(hasWon(99)).toBe(false);
      expect(hasWon(50)).toBe(false);
      expect(hasWon(0)).toBe(false);
    });

    test("works with custom winning score", () => {
      expect(hasWon(50, 50)).toBe(true);
      expect(hasWon(49, 50)).toBe(false);
    });
  });

  describe("calculateNewCurrentScore", () => {
    test("returns 0 when dice value is 1", () => {
      expect(calculateNewCurrentScore(10, 1)).toBe(0);
      expect(calculateNewCurrentScore(0, 1)).toBe(0);
      expect(calculateNewCurrentScore(50, 1)).toBe(0);
    });

    test("adds dice value to current score when not 1", () => {
      expect(calculateNewCurrentScore(10, 3)).toBe(13);
      expect(calculateNewCurrentScore(0, 6)).toBe(6);
      expect(calculateNewCurrentScore(25, 4)).toBe(29);
    });

    test("handles edge cases", () => {
      expect(calculateNewCurrentScore(0, 2)).toBe(2);
      expect(calculateNewCurrentScore(99, 6)).toBe(105);
    });
  });

  describe("switchPlayer", () => {
    test("switches from player 0 to player 1", () => {
      expect(switchPlayer(0)).toBe(1);
    });

    test("switches from player 1 to player 0", () => {
      expect(switchPlayer(1)).toBe(0);
    });

    test("handles multiple switches", () => {
      expect(switchPlayer(switchPlayer(0))).toBe(0);
      expect(switchPlayer(switchPlayer(1))).toBe(1);
    });
  });
});
