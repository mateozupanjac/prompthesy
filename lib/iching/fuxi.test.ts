import { describe, expect, it } from "vitest";

import { HEXAGRAMS, hexagramBinary } from "./canonical";
import { fuxiAngle } from "./fuxi";

const STEP = Math.PI / 32;
const complement = (b: string) =>
  b.replace(/[01]/g, (c) => (c === "1" ? "0" : "1"));

describe("fuxiAngle", () => {
  it("places 乾 and 姤 either side of the top, 復 and 坤 either side of the bottom", () => {
    expect(fuxiAngle("111111")).toBeCloseTo(0.5 * STEP); // 乾
    expect(fuxiAngle("011111")).toBeCloseTo(-0.5 * STEP); // 姤
    expect(fuxiAngle("100000")).toBeCloseTo(31.5 * STEP); // 復
    expect(fuxiAngle("000000")).toBeCloseTo(-31.5 * STEP); // 坤
  });

  it("gives all 64 hexagrams distinct positions", () => {
    const angles = HEXAGRAMS.map((h) =>
      fuxiAngle(hexagramBinary(h)).toFixed(6),
    );

    expect(new Set(angles).size).toBe(64);
  });

  it("puts every hexagram opposite its complement", () => {
    for (const h of HEXAGRAMS) {
      const binary = hexagramBinary(h);
      const diff = Math.abs(fuxiAngle(binary) - fuxiAngle(complement(binary)));

      expect(diff).toBeCloseTo(Math.PI);
    }
  });

  it("follows the classic sequence 乾 夬 大有 大壯 … 泰 down the left half", () => {
    const leftHalf = HEXAGRAMS.filter((h) => fuxiAngle(hexagramBinary(h)) > 0)
      .sort(
        (a, b) => fuxiAngle(hexagramBinary(a)) - fuxiAngle(hexagramBinary(b)),
      )
      .slice(0, 8)
      .map((h) => h.id);

    expect(leftHalf).toEqual([1, 43, 14, 34, 9, 5, 26, 11]);
  });
});
