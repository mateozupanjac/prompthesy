"use client";

import type { CastLine } from "@/lib/iching/casting";
import type { CreatedReading } from "@/lib/readings";

import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useRef, useState } from "react";

import { CastLines } from "./cast-lines";
import { Coin } from "./coin";

import { isMoving, isYang } from "@/lib/iching/casting";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const RingOfChanges = dynamic(
  () =>
    import("@/components/ring/ring-of-changes").then((m) => m.RingOfChanges),
  { ssr: false },
);

const LINE_NAMES: Record<number, string> = {
  6: "old yin, changing",
  7: "young yang",
  8: "young yin",
  9: "old yang, changing",
};

// "Da Zhuang – The Power of the Great" → "The Power of the Great"
const englishName = (name: string) =>
  name.split(" – ").slice(1).join(" – ") || name;

export function CastingRitual() {
  const reducedMotion = useReducedMotion();
  const [question, setQuestion] = useState("");
  const [reading, setReading] = useState<CreatedReading | null>(null);
  const [revealed, setRevealed] = useState(0);
  const [status, setStatus] = useState<"idle" | "casting" | "error">("idle");
  const tossButton = useRef<HTMLButtonElement>(null);

  const lines = ((reading?.tossesJson ?? []) as CastLine[]).slice(0, revealed);
  const prefix = lines.map((l) => (isYang(l.value) ? "1" : "0")).join("");
  const movingLines = lines
    .filter((l) => isMoving(l.value))
    .map((l) => l.position);
  const complete = revealed === 6;
  const lastLine = lines.at(-1);

  async function toss() {
    if (status === "casting") return;
    if (reading) {
      setRevealed((n) => Math.min(n + 1, 6));

      return;
    }
    // The server casts all six lines at once; each toss reveals the next one
    setStatus("casting");
    try {
      const response = await fetch("/api/readings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ method: "3_coins", question }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setReading(await response.json());
      setRevealed(1);
      setStatus("idle");
      // The question field is replaced by the question text; keep keyboard focus on tossing
      tossButton.current?.focus();
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setQuestion("");
    setReading(null);
    setRevealed(0);
    setStatus("idle");
  }

  const announcement = complete
    ? `Hexagram ${reading!.baseHexagram.id}, ${englishName(reading!.baseHexagram.name)}.`
    : lastLine
      ? `Line ${lastLine.position}: ${LINE_NAMES[lastLine.value]}. ${64 >> revealed} hexagrams remain.`
      : "";

  return (
    <div className="flex min-h-screen flex-col items-center px-4 pb-16">
      <header className="w-full max-w-5xl py-6">
        <NextLink
          className="font-display text-xl text-mist outline-none focus-visible:text-brass"
          href="/"
        >
          Prompthesy
        </NextLink>
      </header>

      <div className="relative aspect-square w-[min(92vw,64vh)]">
        <RingOfChanges
          movingLines={movingLines}
          prefix={prefix}
          reducedMotion={reducedMotion}
          resultBinary={complete ? reading!.resultHexagram.binary : undefined}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <CastLines lines={lines} />
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      <section className="mt-4 flex w-full max-w-xl flex-col items-center gap-6 text-center">
        {complete ? (
          <Result reading={reading!} onReset={reset} />
        ) : (
          <>
            {reading ? (
              <p className="text-2xl text-mist">
                {question ? `“${question}”` : "Your question, held in mind"}
              </p>
            ) : (
              <div className="w-full">
                <label className="sr-only" htmlFor="question">
                  Your question
                </label>
                <input
                  className="w-full border-b border-crackle bg-transparent py-2 text-center text-2xl text-mist outline-none transition-colors placeholder:text-celadon/60 focus:border-brass"
                  id="question"
                  maxLength={1000}
                  placeholder="What are you asking?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && toss()}
                />
                <p className="mt-3 text-celadon">
                  Hold the question in mind while you toss.
                </p>
              </div>
            )}

            <div className="flex h-12 items-center gap-3">
              {lastLine?.coins?.map((coin, i) => (
                <Coin key={`${revealed}-${i}`} value={coin} />
              ))}
            </div>

            <div className="flex flex-col items-center gap-2">
              <button
                ref={tossButton}
                className="rounded-full bg-brass px-8 py-3 text-lg text-night outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-mist focus-visible:ring-offset-4 focus-visible:ring-offset-night disabled:opacity-60"
                disabled={status === "casting"}
                type="button"
                onClick={toss}
              >
                Toss the coins
              </button>
              <p className="text-celadon">
                {revealed === 0
                  ? "Six tosses, one for each line"
                  : `Line ${revealed} of 6`}
              </p>
            </div>

            {status === "error" && (
              <p className="text-brass" role="alert">
                Couldn’t cast the reading. Check your connection and toss again.
              </p>
            )}
          </>
        )}
      </section>
    </div>
  );
}

function Result({
  reading,
  onReset,
}: {
  reading: CreatedReading;
  onReset: () => void;
}) {
  const base = reading.baseHexagram;
  const result = reading.resultHexagram;
  const changes = base.id !== result.id;

  return (
    <>
      <div>
        <p className="flex items-baseline justify-center gap-4 text-mist">
          <span className="font-display text-5xl tabular-nums">{base.id}</span>
          <span className="font-hanzi text-5xl">{base.hanzi}</span>
        </p>
        <p className="mt-3 text-2xl text-mist">{englishName(base.name)}</p>
        <p className="mt-1 italic text-celadon">{base.pinyin}</p>
      </div>

      {changes ? (
        <p className="text-lg text-brass">
          Changes into {result.id}{" "}
          <span className="font-hanzi">{result.hanzi}</span>{" "}
          {englishName(result.name)}
        </p>
      ) : (
        <p className="text-lg text-celadon">No changing lines</p>
      )}

      <div className="flex flex-col items-center gap-3">
        <NextLink
          className="rounded-full bg-brass px-8 py-3 text-lg text-night outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-mist focus-visible:ring-offset-4 focus-visible:ring-offset-night"
          href={`/readings/${reading.id}`}
        >
          Read your hexagram
        </NextLink>
        <button
          className="text-celadon underline-offset-4 outline-none hover:underline focus-visible:text-brass focus-visible:underline"
          type="button"
          onClick={onReset}
        >
          Ask another question
        </button>
      </div>
    </>
  );
}
