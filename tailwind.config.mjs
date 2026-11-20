import { heroui } from "@heroui/theme";

// 玄黃 "Heaven and Earth": the Book of Changes' own colours — 天玄而地黃,
// "heaven is dark, earth is yellow" (Kun, Wenyan) — plus the cinnabar that filled
// oracle-bone inscriptions. Cinnabar is reserved for change: moving lines,
// the transformation, the seal. Preview: /styleguide
const xuanHuang = {
  xuan: "#0C0A09", // 玄 heaven: warm black (玄 first meant dark red)
  lacquer: "#17120F", // 漆 raised surfaces, inputs
  huang: "#C99A2E", // 黃 earth: main accent, primary action, yang
  silk: "#E8DFC8", // 帛 unbleached silk: main text
  bone: "#8A8178", // 骨 oracle bone: secondary text, hairlines
  cinnabar: "#C2321F", // 朱 change only
};

// Five phases, for trigram diagrams only (as information, never decoration)
const phases = {
  metal: "#E6E2D8", // 乾 兌
  earth: "#C99A2E", // 坤 艮
  wood: "#4F7A52", // 震 巽
  water: "#1E2A33", // 坎
  fire: "#B5452B", // 離
};

// Superseded "Ring of Changes" palette, still used by /readings/new until it's migrated
const palette = {
  night: "#16302B",
  depth: "#10241F",
  crackle: "#3E5E55",
  celadon: "#8FB9A8",
  mist: "#D9E2DE",
  brass: "#C9A55C",
};

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...palette,
        ...xuanHuang,
        phase: phases,
      },
      // 天圆地方: heaven is round (actions, coins), earth is square (text containers)
      borderRadius: {
        heaven: "9999px",
        earth: "2px",
      },
      // Six lines to a hexagram: spacing in multiples of 6px (hex-n = n × 6px)
      spacing: {
        "hex-1": "6px",
        "hex-2": "12px",
        "hex-3": "18px",
        "hex-4": "24px",
        "hex-6": "36px",
        "hex-8": "48px",
        "hex-12": "72px",
        "hex-16": "96px",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        hanzi: ["var(--font-hanzi)", "serif"],
        "noto-display": ["var(--font-noto-display)", "serif"],
        "noto-serif": ["var(--font-noto-serif)", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: palette.night,
            foreground: palette.mist,
            divider: palette.crackle,
            focus: palette.brass,
            content1: palette.depth,
            primary: { DEFAULT: palette.brass, foreground: palette.night },
          },
        },
      },
    }),
  ],
};

export default config;
