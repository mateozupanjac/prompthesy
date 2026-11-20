import {
  Bodoni_Moda as FontDisplay,
  Noto_Serif as FontNotoSerif,
  Noto_Serif_Display as FontNotoDisplay,
  Noto_Serif_TC as FontHanzi,
  Source_Serif_4 as FontSerif,
} from "next/font/google";

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

// CJK fonts are served as many unicode-range slices, so don't preload them
export const fontHanzi = FontHanzi({
  weight: ["400", "600"],
  preload: false,
  variable: "--font-hanzi",
});

// 玄黃 type: one superfamily for both scripts, so Chinese and English read as one voice
export const fontNotoDisplay = FontNotoDisplay({
  subsets: ["latin"],
  variable: "--font-noto-display",
});

export const fontNotoSerif = FontNotoSerif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});
