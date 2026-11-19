import { PrismaClient } from "@prisma/client";

import {
  HEXAGRAMS,
  TRIGRAMS,
  hexagramBinary,
  trigramByKey,
  type TrigramKey,
} from "../lib/iching/canonical.ts";

import { hexSlice } from "./hex_en_slice.ts";

const prisma = new PrismaClient();

const LINE_KEYS = [1, 2, 3, 4, 5, 6];

type LineNo = (typeof LINE_KEYS)[number];
type Lines = { [k in LineNo]: string };

// English names for the 8 trigrams; id/binary/hanzi/pinyin come from lib/iching/canonical
const TRIGRAM_NAMES: Record<TrigramKey, { name: string; meaning: string }> = {
  QIAN: { name: "Qian – Heaven", meaning: "heaven, creative, strong, father" },
  KUN: { name: "Kun – Earth", meaning: "earth, receptive, devoted, mother" },
  ZHEN: {
    name: "Zhen – Thunder",
    meaning: "thunder, arousing, movement, eldest son",
  },
  KAN: { name: "Kan – Water", meaning: "water, abyss, danger, middle son" },
  GEN: {
    name: "Gen – Mountain",
    meaning: "mountain, stillness, immovable, youngest son",
  },
  XUN: {
    name: "Xun – Wind/Wood",
    meaning: "wind, wood, gentle, eldest daughter",
  },
  LI: {
    name: "Li – Fire",
    meaning: "fire, brightness, clinging, middle daughter",
  },
  DUI: {
    name: "Dui – Lake",
    meaning: "lake, joy, pleasure, youngest daughter",
  },
};

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
  for (const { id, ...trigram } of TRIGRAMS) {
    const data = { ...trigram, ...TRIGRAM_NAMES[trigram.key] };

    await prisma.trigram.upsert({
      where: { id },
      update: data,
      create: { id, ...data },
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
    const canonical = HEXAGRAMS.find((c) => c.id === h.id);

    if (canonical?.upper !== h.upper || canonical.lower !== h.lower) {
      throw new Error(`Hexagram ${h.id}: trigrams don't match canonical data`);
    }
    const canonicalFields = {
      binary: hexagramBinary(canonical),
      hanzi: canonical.hanzi,
      pinyin: canonical.pinyin,
      upperTrigramId: trigramByKey(canonical.upper).id,
      lowerTrigramId: trigramByKey(canonical.lower).id,
    };
    const lines = toLinesArray(h.lines as Lines);

    // One transaction per hexagram: a single round trip over Accelerate
    await prisma.$transaction([
      prisma.hexagram.upsert({
        where: { id: h.id },
        update: {
          key: h.key,
          slug: slugify(h.name ?? `hexagram-${h.id}`),
          ...canonicalFields,
          name: (h.name ?? "").trim(),
          judgment: (h.judgment ?? "").trim(),
          imageText: h.imageText ?? null,
          comment: h.comment ? String(h.comment).trim() : null,
          footnote: h.footnote ? String(h.footnote).trim() : null,
        },
        create: {
          id: h.id,
          key: h.key,
          slug: slugify(h.name ?? `hexagram-${h.id}`),
          ...canonicalFields,
          name: (h.name ?? "").trim(),
          judgment: (h.judgment ?? "").trim(),
          imageText: h.imageText ?? null,
          comment: h.comment ? String(h.comment).trim() : null,
          footnote: h.footnote ? String(h.footnote).trim() : null,
          tags: [], // keep empty by default; can be filled later
        },
      }),
      ...lines.map((l) =>
        prisma.line.upsert({
          where: { hexagramId_number: { hexagramId: h.id, number: l.number } },
          update: { text: l.text },
          create: { hexagramId: h.id, number: l.number, text: l.text },
        }),
      ),
    ]);
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
