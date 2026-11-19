import { describe, expect, it } from "vitest";

import {
  castFromLines,
  castWithCoins,
  randomSeed,
  seededRandom,
  type LineValue,
} from "./casting";

describe("castFromLines", () => {
  it("keeps the hexagram unchanged when no line moves", () => {
    const cast = castFromLines([7, 7, 7, 7, 7, 7]);

    expect(cast.baseHexagramId).toBe(1);
    expect(cast.resultHexagramId).toBe(1);
    expect(cast.movingLines).toEqual([]);
  });

  it("flips moving lines: 9 → yin, 6 → yang", () => {
    const cast = castFromLines([9, 8, 7, 6, 8, 7]);

    expect(cast.baseBinary).toBe("101001");
    expect(cast.resultBinary).toBe("001101");
    expect(cast.movingLines).toEqual([1, 4]);
  });

  it("turns The Creative into The Receptive when all lines move", () => {
    const cast = castFromLines([9, 9, 9, 9, 9, 9]);

    expect(cast.baseHexagramId).toBe(1);
    expect(cast.resultHexagramId).toBe(2);
    expect(cast.movingLines).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("rejects invalid input", () => {
    expect(() => castFromLines([7, 7, 7] as LineValue[])).toThrow();
    expect(() => castFromLines([7, 7, 7, 7, 7, 5] as LineValue[])).toThrow();
  });
});

describe("castWithCoins", () => {
  it("is reproducible from a seed", () => {
    const a = castWithCoins(seededRandom("prompthesy"));
    const b = castWithCoins(seededRandom("prompthesy"));

    expect(a).toEqual(b);
  });

  it("stores coins that sum to each line value", () => {
    const cast = castWithCoins(seededRandom(randomSeed()));

    expect(cast.lines).toHaveLength(6);
    for (const line of cast.lines) {
      expect(line.coins).toHaveLength(3);
      expect(line.coins!.reduce((a, b) => a + b, 0)).toBe(line.value);
    }
  });

  it("follows the three-coin probabilities (1/8, 3/8, 3/8, 1/8)", () => {
    const random = seededRandom("distribution");
    const counts = { 6: 0, 7: 0, 8: 0, 9: 0 };
    const casts = 20_000;

    for (let i = 0; i < casts; i++) {
      for (const line of castWithCoins(random).lines) counts[line.value]++;
    }
    const total = casts * 6;

    expect(counts[6] / total).toBeCloseTo(1 / 8, 2);
    expect(counts[7] / total).toBeCloseTo(3 / 8, 2);
    expect(counts[8] / total).toBeCloseTo(3 / 8, 2);
    expect(counts[9] / total).toBeCloseTo(1 / 8, 2);
  });
});
