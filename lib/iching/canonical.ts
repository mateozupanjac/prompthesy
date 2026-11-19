// Language-neutral canonical I Ching data.
// Binary strings are read bottom → top: "1" = yang (solid), "0" = yin (broken).

export type TrigramKey =
  | "QIAN"
  | "KUN"
  | "ZHEN"
  | "KAN"
  | "GEN"
  | "XUN"
  | "LI"
  | "DUI";

export type CanonicalTrigram = {
  id: number;
  key: TrigramKey;
  binary: string;
  hanzi: string;
  pinyin: string;
};

export const TRIGRAMS: readonly CanonicalTrigram[] = [
  { id: 1, key: "QIAN", binary: "111", hanzi: "乾", pinyin: "qián" },
  { id: 2, key: "KUN", binary: "000", hanzi: "坤", pinyin: "kūn" },
  { id: 3, key: "ZHEN", binary: "100", hanzi: "震", pinyin: "zhèn" },
  { id: 4, key: "KAN", binary: "010", hanzi: "坎", pinyin: "kǎn" },
  { id: 5, key: "GEN", binary: "001", hanzi: "艮", pinyin: "gèn" },
  { id: 6, key: "XUN", binary: "011", hanzi: "巽", pinyin: "xùn" },
  { id: 7, key: "LI", binary: "101", hanzi: "離", pinyin: "lí" },
  { id: 8, key: "DUI", binary: "110", hanzi: "兌", pinyin: "duì" },
];

export type CanonicalHexagram = {
  id: number; // King Wen number
  upper: TrigramKey;
  lower: TrigramKey;
  hanzi: string; // traditional characters
  pinyin: string;
};

export const HEXAGRAMS: readonly CanonicalHexagram[] = [
  { id: 1, upper: "QIAN", lower: "QIAN", hanzi: "乾", pinyin: "qián" },
  { id: 2, upper: "KUN", lower: "KUN", hanzi: "坤", pinyin: "kūn" },
  { id: 3, upper: "KAN", lower: "ZHEN", hanzi: "屯", pinyin: "zhūn" },
  { id: 4, upper: "GEN", lower: "KAN", hanzi: "蒙", pinyin: "méng" },
  { id: 5, upper: "KAN", lower: "QIAN", hanzi: "需", pinyin: "xū" },
  { id: 6, upper: "QIAN", lower: "KAN", hanzi: "訟", pinyin: "sòng" },
  { id: 7, upper: "KUN", lower: "KAN", hanzi: "師", pinyin: "shī" },
  { id: 8, upper: "KAN", lower: "KUN", hanzi: "比", pinyin: "bǐ" },
  { id: 9, upper: "XUN", lower: "QIAN", hanzi: "小畜", pinyin: "xiǎo chù" },
  { id: 10, upper: "QIAN", lower: "DUI", hanzi: "履", pinyin: "lǚ" },
  { id: 11, upper: "KUN", lower: "QIAN", hanzi: "泰", pinyin: "tài" },
  { id: 12, upper: "QIAN", lower: "KUN", hanzi: "否", pinyin: "pǐ" },
  { id: 13, upper: "QIAN", lower: "LI", hanzi: "同人", pinyin: "tóng rén" },
  { id: 14, upper: "LI", lower: "QIAN", hanzi: "大有", pinyin: "dà yǒu" },
  { id: 15, upper: "KUN", lower: "GEN", hanzi: "謙", pinyin: "qiān" },
  { id: 16, upper: "ZHEN", lower: "KUN", hanzi: "豫", pinyin: "yù" },
  { id: 17, upper: "DUI", lower: "ZHEN", hanzi: "隨", pinyin: "suí" },
  { id: 18, upper: "GEN", lower: "XUN", hanzi: "蠱", pinyin: "gǔ" },
  { id: 19, upper: "KUN", lower: "DUI", hanzi: "臨", pinyin: "lín" },
  { id: 20, upper: "XUN", lower: "KUN", hanzi: "觀", pinyin: "guān" },
  { id: 21, upper: "LI", lower: "ZHEN", hanzi: "噬嗑", pinyin: "shì kè" },
  { id: 22, upper: "GEN", lower: "LI", hanzi: "賁", pinyin: "bì" },
  { id: 23, upper: "GEN", lower: "KUN", hanzi: "剝", pinyin: "bō" },
  { id: 24, upper: "KUN", lower: "ZHEN", hanzi: "復", pinyin: "fù" },
  { id: 25, upper: "QIAN", lower: "ZHEN", hanzi: "無妄", pinyin: "wú wàng" },
  { id: 26, upper: "GEN", lower: "QIAN", hanzi: "大畜", pinyin: "dà chù" },
  { id: 27, upper: "GEN", lower: "ZHEN", hanzi: "頤", pinyin: "yí" },
  { id: 28, upper: "DUI", lower: "XUN", hanzi: "大過", pinyin: "dà guò" },
  { id: 29, upper: "KAN", lower: "KAN", hanzi: "坎", pinyin: "kǎn" },
  { id: 30, upper: "LI", lower: "LI", hanzi: "離", pinyin: "lí" },
  { id: 31, upper: "DUI", lower: "GEN", hanzi: "咸", pinyin: "xián" },
  { id: 32, upper: "ZHEN", lower: "XUN", hanzi: "恆", pinyin: "héng" },
  { id: 33, upper: "QIAN", lower: "GEN", hanzi: "遯", pinyin: "dùn" },
  { id: 34, upper: "ZHEN", lower: "QIAN", hanzi: "大壯", pinyin: "dà zhuàng" },
  { id: 35, upper: "LI", lower: "KUN", hanzi: "晉", pinyin: "jìn" },
  { id: 36, upper: "KUN", lower: "LI", hanzi: "明夷", pinyin: "míng yí" },
  { id: 37, upper: "XUN", lower: "LI", hanzi: "家人", pinyin: "jiā rén" },
  { id: 38, upper: "LI", lower: "DUI", hanzi: "睽", pinyin: "kuí" },
  { id: 39, upper: "KAN", lower: "GEN", hanzi: "蹇", pinyin: "jiǎn" },
  { id: 40, upper: "ZHEN", lower: "KAN", hanzi: "解", pinyin: "xiè" },
  { id: 41, upper: "GEN", lower: "DUI", hanzi: "損", pinyin: "sǔn" },
  { id: 42, upper: "XUN", lower: "ZHEN", hanzi: "益", pinyin: "yì" },
  { id: 43, upper: "DUI", lower: "QIAN", hanzi: "夬", pinyin: "guài" },
  { id: 44, upper: "QIAN", lower: "XUN", hanzi: "姤", pinyin: "gòu" },
  { id: 45, upper: "DUI", lower: "KUN", hanzi: "萃", pinyin: "cuì" },
  { id: 46, upper: "KUN", lower: "XUN", hanzi: "升", pinyin: "shēng" },
  { id: 47, upper: "DUI", lower: "KAN", hanzi: "困", pinyin: "kùn" },
  { id: 48, upper: "KAN", lower: "XUN", hanzi: "井", pinyin: "jǐng" },
  { id: 49, upper: "DUI", lower: "LI", hanzi: "革", pinyin: "gé" },
  { id: 50, upper: "LI", lower: "XUN", hanzi: "鼎", pinyin: "dǐng" },
  { id: 51, upper: "ZHEN", lower: "ZHEN", hanzi: "震", pinyin: "zhèn" },
  { id: 52, upper: "GEN", lower: "GEN", hanzi: "艮", pinyin: "gèn" },
  { id: 53, upper: "XUN", lower: "GEN", hanzi: "漸", pinyin: "jiàn" },
  { id: 54, upper: "ZHEN", lower: "DUI", hanzi: "歸妹", pinyin: "guī mèi" },
  { id: 55, upper: "ZHEN", lower: "LI", hanzi: "豐", pinyin: "fēng" },
  { id: 56, upper: "LI", lower: "GEN", hanzi: "旅", pinyin: "lǚ" },
  { id: 57, upper: "XUN", lower: "XUN", hanzi: "巽", pinyin: "xùn" },
  { id: 58, upper: "DUI", lower: "DUI", hanzi: "兌", pinyin: "duì" },
  { id: 59, upper: "XUN", lower: "KAN", hanzi: "渙", pinyin: "huàn" },
  { id: 60, upper: "KAN", lower: "DUI", hanzi: "節", pinyin: "jié" },
  { id: 61, upper: "XUN", lower: "DUI", hanzi: "中孚", pinyin: "zhōng fú" },
  { id: 62, upper: "ZHEN", lower: "GEN", hanzi: "小過", pinyin: "xiǎo guò" },
  { id: 63, upper: "KAN", lower: "LI", hanzi: "既濟", pinyin: "jì jì" },
  { id: 64, upper: "LI", lower: "KAN", hanzi: "未濟", pinyin: "wèi jì" },
];

const TRIGRAM_BY_KEY = new Map(TRIGRAMS.map((t) => [t.key, t]));

export function trigramByKey(key: TrigramKey): CanonicalTrigram {
  const trigram = TRIGRAM_BY_KEY.get(key);

  if (!trigram) throw new Error(`Unknown trigram: ${key}`);

  return trigram;
}

/** Six-line binary (bottom → top): lower trigram first, then upper. */
export function hexagramBinary(hexagram: CanonicalHexagram): string {
  return (
    trigramByKey(hexagram.lower).binary + trigramByKey(hexagram.upper).binary
  );
}

const HEXAGRAM_BY_BINARY = new Map(
  HEXAGRAMS.map((h) => [hexagramBinary(h), h]),
);

export function hexagramByBinary(binary: string): CanonicalHexagram {
  const hexagram = HEXAGRAM_BY_BINARY.get(binary);

  if (!hexagram) throw new Error(`Invalid hexagram binary: ${binary}`);

  return hexagram;
}

/** Unicode hexagram symbols (U+4DC0..U+4DFF) follow King Wen order. */
export function hexagramSymbol(id: number): string {
  if (!Number.isInteger(id) || id < 1 || id > 64) {
    throw new Error(`Invalid hexagram id: ${id}`);
  }

  return String.fromCodePoint(0x4dc0 + id - 1);
}

const TRIGRAM_SYMBOLS: Record<string, string> = {
  "111": "☰",
  "110": "☱",
  "101": "☲",
  "100": "☳",
  "011": "☴",
  "010": "☵",
  "001": "☶",
  "000": "☷",
};

export function trigramSymbol(binary: string): string {
  const symbol = TRIGRAM_SYMBOLS[binary];

  if (!symbol) throw new Error(`Invalid trigram binary: ${binary}`);

  return symbol;
}
