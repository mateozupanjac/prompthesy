import clsx from "clsx";

/** Wordmark, and a quiet way past the ritual for people who just want to sign in. */
export function RitualHeader({
  onSkip,
  skipped,
}: {
  onSkip: () => void;
  skipped: boolean;
}) {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-hex-4 py-hex-4 lg:px-hex-8">
      <span className="font-noto-display text-2xl font-light text-silk">
        Prompthesy
      </span>
      <button
        className={clsx(
          "pointer-events-auto text-base text-bone underline-offset-4 outline-none transition-opacity hover:text-silk hover:underline focus-visible:text-silk focus-visible:underline",
          skipped && "invisible",
        )}
        type="button"
        onClick={onSkip}
      >
        Sign in
      </button>
    </header>
  );
}
