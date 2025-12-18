import { PrismaClient } from "@prisma/client";
import { hexSlice } from "./hex_en_slice.ts";

const prisma = new PrismaClient();

const LINE_KEYS = [1, 2, 3, 4, 5, 6];
type LineNo = (typeof LINE_KEYS)[number];
type Lines = { [k in LineNo]: string };

// Canonical 8 trigrams (bottom→top bits), English names
const TRIGRAMS = [
  {
    id: 1,
    key: "QIAN",
    name: "Qian – Heaven",
    meaning: "heaven, creative, strong, father",
  },
  {
    id: 2,
    key: "KUN",
    name: "Kun – Earth",
    meaning: "earth, receptive, devoted, mother",
  },
  {
    id: 3,
    key: "ZHEN",
    name: "Zhen – Thunder",
    meaning: "thunder, arousing, movement, eldest son",
  },
  {
    id: 4,
    key: "KAN",
    name: "Kan – Water",
    meaning: "water, abyss, danger, middle son",
  },
  {
    id: 5,
    key: "GEN",
    name: "Gen – Mountain",
    meaning: "mountain, stillness, immovable, youngest son",
  },
  {
    id: 6,
    key: "XUN",
    name: "Xun – Wind/Wood",
    meaning: "wind, wood, gentle, eldest daughter",
  },
  {
    id: 7,
    key: "LI",
    name: "Li – Fire",
    meaning: "fire, brightness, clinging, middle daughter",
  },
  {
    id: 8,
    key: "DUI",
    name: "Dui – Lake",
    meaning: "lake, joy, pleasure, youngest daughter",
  },
] as const;

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function toLinesArray(lines: Lines): { number: LineNo; text: string }[] {
  return LINE_KEYS.map((n) => ({
    number: n,
    text: (lines[n] ?? "").toString().trim(),
  }));
}

async function seedTrigrams() {
  for (const trigram of TRIGRAMS) {
    await prisma.trigram.upsert({
      where: { id: trigram.id },
      update: {
        key: trigram.key,
        name: trigram.name,
        meaning: trigram.meaning,
      },
      create: {
        id: trigram.id,
        key: trigram.key,
        name: trigram.name,
        meaning: trigram.meaning,
      },
    });
  }
}

async function seedHexagrams() {
  // Keep the original source for provenance
  await prisma.contentSource.upsert({
    where: { key: "hexSlice.en.v1" },
    update: { payload: hexSlice, version: "en.v1" },
    create: { key: "hexSlice.en.v1", payload: hexSlice, version: "en.v1" },
  });

  for (const h of hexSlice) {
    const upper = await prisma.trigram.findFirstOrThrow({
      where: { key: h.upper },
    });
    const lower = await prisma.trigram.findFirstOrThrow({
      where: { key: h.lower },
    });

    await prisma.hexagram.upsert({
      where: { id: h.id },
      update: {
        key: h.key,
        slug: slugify(h.name ?? `hexagram-${h.id}`),
        name: (h.name ?? "").trim(),
        judgment: (h.judgment ?? "").trim(),
        imageText: h.imageText ?? null,
        comment: h.comment ? String(h.comment).trim() : null,
        footnote: h.footnote ? String(h.footnote).trim() : null,
        upperTrigramId: upper.id,
        lowerTrigramId: lower.id,
      },
      create: {
        id: h.id,
        key: h.key,
        slug: slugify(h.name ?? `hexagram-${h.id}`),
        name: (h.name ?? "").trim(),
        judgment: (h.judgment ?? "").trim(),
        imageText: h.imageText ?? null,
        comment: h.comment ? String(h.comment).trim() : null,
        footnote: h.footnote ? String(h.footnote).trim() : null,
        upperTrigramId: upper.id,
        lowerTrigramId: lower.id,
        tags: [], // keep empty by default; can be filled later
      },
    });

    // Lines (1..6)
    const lines = toLinesArray(h.lines as Lines);
    for (const l of lines) {
      await prisma.line.upsert({
        where: { hexagramId_number: { hexagramId: h.id, number: l.number } },
        update: { text: l.text },
        create: { hexagramId: h.id, number: l.number, text: l.text },
      });
    }
  }
}

export async function main() {
  await seedTrigrams();
  await seedHexagrams();
  const hexCount = await prisma.hexagram.count();
  console.log("Hexagrams in DB:", hexCount);

  const first = await prisma.hexagram.findFirst({
    include: { upperTrigram: true, lowerTrigram: true, lines: true },
  });
  console.dir(first, { depth: null });
  console.log("✅ Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
