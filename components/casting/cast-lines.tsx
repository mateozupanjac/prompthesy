import type { CastLine } from "@/lib/iching/casting";

import clsx from "clsx";

import { isMoving, isYang } from "@/lib/iching/casting";

// Old yang (9) is marked with a circle, old yin (6) with a cross
const MOVING_MARK: Record<number, string> = { 9: "○", 6: "×" };

/** The hexagram being built, bottom line first; empty slots for lines still to cast. */
export function CastLines({ lines }: { lines: CastLine[] }) {
  return (
    <ol
      aria-label="Lines cast so far, bottom to top"
      className="flex w-[30%] flex-col-reverse gap-[clamp(6px,1.4vmin,12px)]"
    >
      {Array.from({ length: 6 }, (_, i) => {
        const line = lines[i];
        const bar = "h-[clamp(7px,1.5vmin,13px)] rounded-[1px]";

        if (!line) {
          return (
            <li
              key={i}
              aria-hidden
              className={clsx(bar, "border border-dashed border-crackle/70")}
            />
          );
        }
        const color = isMoving(line.value) ? "bg-brass" : "bg-mist";

        return (
          <li
            key={i}
            aria-label={`Line ${line.position}: ${line.value}`}
            className="relative flex justify-between"
          >
            {isYang(line.value) ? (
              <span className={clsx(bar, color, "w-full")} />
            ) : (
              <>
                <span className={clsx(bar, color, "w-[42%]")} />
                <span className={clsx(bar, color, "w-[42%]")} />
              </>
            )}
            {isMoving(line.value) && (
              <span className="absolute left-full top-1/2 ml-3 -translate-y-1/2 text-sm leading-none text-brass">
                {MOVING_MARK[line.value]}
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
