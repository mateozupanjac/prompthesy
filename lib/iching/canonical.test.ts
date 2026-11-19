import { describe, expect, it } from "vitest";

import { hexSlice } from "../../prisma/hex_en_slice";

import {
  HEXAGRAMS,
  TRIGRAMS,
  hexagramBinary,
  hexagramByBinary,
  hexagramSymbol,
  trigramSymbol,
} from "./canonical";

describe("canonical data", () => {
  it("has 8 trigrams with unique 3-line binaries", () => {
    expect(TRIGRAMS).toHaveLength(8);
    expect(new Set(TRIGRAMS.map((t) => t.binary)).size).toBe(8);
    expect(TRIGRAMS.every((t) => /^[01]{3}$/.test(t.binary))).toBe(true);
  });

  it("covers all 64 hexagrams in King Wen order with unique binaries", () => {
    expect(HEXAGRAMS.map((h) => h.id)).toEqual(
      Array.from({ length: 64 }, (_, i) => i + 1),
    );
    expect(new Set(HEXAGRAMS.map(hexagramBinary)).size).toBe(64);
  });

  it("matches the trigrams used by the English content slice", () => {
    for (const entry of hexSlice) {
      const canonical = HEXAGRAMS.find((h) => h.id === entry.id);

      expect([canonical?.upper, canonical?.lower]).toEqual([
        entry.upper,
        entry.lower,
      ]);
    }
  });

  it("encodes well-known hexagrams correctly (bottom → top)", () => {
    expect(hexagramByBinary("111111").id).toBe(1); // The Creative
    expect(hexagramByBinary("000000").id).toBe(2); // The Receptive
    expect(hexagramByBinary("100010").id).toBe(3); // Difficulty at the Beginning
    expect(hexagramByBinary("111000").id).toBe(11); // Peace: heaven below earth
    expect(hexagramByBinary("000111").id).toBe(12); // Standstill
    expect(hexagramByBinary("101010").id).toBe(63); // After Completion
    expect(hexagramByBinary("010101").id).toBe(64); // Before Completion
  });

  it("maps to Unicode symbols", () => {
    expect(hexagramSymbol(1)).toBe("䷀");
    expect(hexagramSymbol(64)).toBe("䷿");
    expect(trigramSymbol("111")).toBe("☰");
    expect(trigramSymbol("100")).toBe("☳");
    expect(trigramSymbol("000")).toBe("☷");
    expect(() => hexagramSymbol(0)).toThrow();
    expect(() => hexagramSymbol(65)).toThrow();
    expect(() => trigramSymbol("1")).toThrow();
  });
});
