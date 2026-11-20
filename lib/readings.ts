import "server-only";

import {
  castFromLines,
  castWithCoins,
  isLineValue,
  randomSeed,
  seededRandom,
  type LineValue,
} from "./iching/casting";
import prisma from "./prisma";

export type ReadingMethod = "3_coins" | "manual";

export type CreateReadingInput = {
  method: ReadingMethod;
  question?: string | null;
  notes?: string | null;
  lines?: LineValue[]; // manual only: six values, bottom → top
  userId?: string | null;
};

export class InvalidReadingInput extends Error {}

const MAX_QUESTION = 1000;
const MAX_NOTES = 5000;

const optionalText = (value: unknown, field: string, max: number) => {
  if (value == null || value === "") return null;
  if (typeof value !== "string") {
    throw new InvalidReadingInput(`${field} must be a string`);
  }
  const trimmed = value.trim();

  if (trimmed.length > max) {
    throw new InvalidReadingInput(`${field} is longer than ${max} characters`);
  }

  return trimmed || null;
};

const validLines = (lines: unknown): LineValue[] => {
  if (
    !Array.isArray(lines) ||
    lines.length !== 6 ||
    !lines.every(isLineValue)
  ) {
    throw new InvalidReadingInput(
      "manual readings need lines: six values of 6, 7, 8 or 9 (bottom → top)",
    );
  }

  return lines;
};

/** Validates an untrusted request body (e.g. from POST /api/readings). */
export function parseCreateReadingInput(body: unknown): CreateReadingInput {
  if (typeof body !== "object" || body === null) {
    throw new InvalidReadingInput("Body must be a JSON object");
  }
  const { method, question, notes, lines } = body as Record<string, unknown>;

  if (method !== "3_coins" && method !== "manual") {
    throw new InvalidReadingInput('method must be "3_coins" or "manual"');
  }

  const input: CreateReadingInput = {
    method,
    question: optionalText(question, "question", MAX_QUESTION),
    notes: optionalText(notes, "notes", MAX_NOTES),
  };

  if (method === "manual") input.lines = validLines(lines);

  return input;
}

const hexagramSummary = {
  id: true,
  name: true,
  hanzi: true,
  pinyin: true,
  binary: true,
} as const;

export async function createReading(input: CreateReadingInput) {
  // The seed is always generated server-side: accepting one from the client
  // would let it pick the outcome. It's stored so the tosses can be audited.
  const seed = input.method === "3_coins" ? randomSeed() : null;
  const cast =
    seed !== null
      ? castWithCoins(seededRandom(seed))
      : castFromLines(validLines(input.lines));

  return prisma.reading.create({
    data: {
      method: input.method,
      seed,
      tossesJson: cast.lines,
      movingLines: cast.movingLines,
      baseHexagramId: cast.baseHexagramId,
      resultHexagramId: cast.resultHexagramId,
      question: input.question ?? null,
      notes: input.notes ?? null,
      userId: input.userId ?? null,
    },
    omit: { seed: true, userId: true },
    include: {
      baseHexagram: { select: hexagramSummary },
      resultHexagram: { select: hexagramSummary },
    },
  });
}

export type CreatedReading = Awaited<ReturnType<typeof createReading>>;

const hexagramWithContent = {
  include: {
    lines: { orderBy: { number: "asc" } },
    upperTrigram: true,
    lowerTrigram: true,
  },
} as const;

// TODO: restrict to the owner or a ShareLink token once auth exists;
// until then never expose who owns a reading or the seed behind it.
export async function getReading(id: string) {
  return prisma.reading.findUnique({
    where: { id },
    omit: { seed: true, userId: true },
    include: {
      baseHexagram: hexagramWithContent,
      resultHexagram: hexagramWithContent,
    },
  });
}
