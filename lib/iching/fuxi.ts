// Fu Xi (Shao Yong) circular arrangement of the 64 hexagrams.
// Reading the binary bottom → top as a number (bottom line = most significant bit):
// 乾 (63) sits just left of the top and the values fall counter-clockwise down the
// left half to 復 (32); 姤 (31) sits just right of the top and the values fall
// clockwise down the right half to 坤 (0). Opposite hexagrams are complements.

const STEP = Math.PI / 32;

/** Angle in radians from the top of the circle, counter-clockwise positive. */
export function fuxiAngle(binary: string): number {
  const value = parseInt(binary, 2);

  return value >= 32 ? (63 - value + 0.5) * STEP : -(31 - value + 0.5) * STEP;
}

/** Binary prefix (bottom → top) of the lines cast so far. */
export function matchesPrefix(binary: string, prefix: string): boolean {
  return binary.startsWith(prefix);
}
