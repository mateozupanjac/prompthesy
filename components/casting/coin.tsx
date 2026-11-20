import type { Coin as CoinValue } from "@/lib/iching/casting";

// Chinese cash coin: round with a square hole. The inscribed face counts as
// heads (3, yang), the plain face as tails (2, yin).
export function Coin({ value }: { value: CoinValue }) {
  const inscribed = value === 3;

  return (
    <svg
      aria-label={inscribed ? "Heads, 3" : "Tails, 2"}
      className="coin-toss size-10 sm:size-12"
      role="img"
      viewBox="0 0 100 100"
    >
      <circle
        className="fill-depth stroke-celadon"
        cx="50"
        cy="50"
        r="45"
        strokeWidth="3"
      />
      <circle
        className="fill-none stroke-crackle"
        cx="50"
        cy="50"
        r="38"
        strokeWidth="2"
      />
      <rect
        className="fill-night stroke-celadon"
        height="22"
        strokeWidth="3"
        width="22"
        x="39"
        y="39"
      />
      {inscribed && (
        <g className="fill-mist">
          <rect height="12" width="5" x="47.5" y="19" />
          <rect height="12" width="5" x="47.5" y="69" />
          <rect height="5" width="12" x="19" y="47.5" />
          <rect height="5" width="12" x="69" y="47.5" />
        </g>
      )}
    </svg>
  );
}
