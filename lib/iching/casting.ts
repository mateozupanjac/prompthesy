// Three-coin method: each coin is heads (3, yang) or tails (2, yin).
// The sum of three coins gives the line value:
//   6 = old yin (moving → yang), 7 = young yang,
//   8 = young yin,               9 = old yang (moving → yin)
// Probabilities: 6 = 1/8, 7 = 3/8, 8 = 3/8, 9 = 1/8.

import { hexagramByBinary } from "./canonical";

export type Coin = 2 | 3;
export type LineValue = 6 | 7 | 8 | 9;

export type CastLine = {
  position: number; // 1 (bottom) .. 6 (top)
  value: LineValue;
  coins: [Coin, Coin, Coin] | null; // null when the line was entered manually
};

export type Cast = {
  lines: CastLine[]; // bottom → top
  movingLines: number[];
  baseBinary: string;
  resultBinary: string;
  baseHexagramId: number;
  resultHexagramId: number; // same as base when there are no moving lines
};

export const LINE_VALUES: readonly LineValue[] = [6, 7, 8, 9];

export const isYang = (value: LineValue) => value === 7 || value === 9;
export const isMoving = (value: LineValue) => value === 6 || value === 9;

export function isLineValue(value: unknown): value is LineValue {
  return LINE_VALUES.includes(value as LineValue);
}

/** Builds a cast from six line values (bottom → top). */
export function castFromLines(
  values: readonly LineValue[],
  coins?: readonly [Coin, Coin, Coin][],
): Cast {
  if (values.length !== 6 || !values.every(isLineValue)) {
    throw new Error("A cast needs exactly six line values (6, 7, 8 or 9)");
  }

  const lines = values.map((value, i) => ({
    position: i + 1,
    value,
    coins: coins?.[i] ?? null,
  }));
  const baseBinary = values.map((v) => (isYang(v) ? "1" : "0")).join("");
  const resultBinary = values
    .map((v) => (isYang(v) !== isMoving(v) ? "1" : "0"))
    .join("");

  return {
    lines,
    movingLines: lines.filter((l) => isMoving(l.value)).map((l) => l.position),
    baseBinary,
    resultBinary,
    baseHexagramId: hexagramByBinary(baseBinary).id,
    resultHexagramId: hexagramByBinary(resultBinary).id,
  };
}

export function tossCoins(random: () => number): [Coin, Coin, Coin] {
  const toss = (): Coin => (random() < 0.5 ? 3 : 2);

  return [toss(), toss(), toss()];
}

/** Casts a full hexagram with the three-coin method, bottom line first. */
export function castWithCoins(random: () => number): Cast {
  const coins = Array.from({ length: 6 }, () => tossCoins(random));
  const values = coins.map((c) => (c[0] + c[1] + c[2]) as LineValue);

  return castFromLines(values, coins);
}

/** Random hex seed from the platform CSPRNG (Node 20+ and browsers). */
export function randomSeed(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));

  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Deterministic PRNG (cyrb128 hash → sfc32) so a stored seed reproduces
 * exactly the same coin tosses.
 */
export function seededRandom(seed: string): () => number {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;

  for (let i = 0; i < seed.length; i++) {
    const k = seed.charCodeAt(i);

    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);

  h1 ^= h2 ^ h3 ^ h4;
  h2 ^= h1;
  h3 ^= h1;
  h4 ^= h1;

  let a = h1 >>> 0;
  let b = h2 >>> 0;
  let c = h3 >>> 0;
  let d = h4 >>> 0;

  return () => {
    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;
    const t = (((a + b) | 0) + d) | 0;

    d = (d + 1) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    c = (c + t) | 0;

    return (t >>> 0) / 4294967296;
  };
}
