export function HexagramBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.08]"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hexagram-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Single hexagram symbol */}
            <g transform="translate(20, 20)">
              {/* Six horizontal lines representing I Ching hexagram */}
              <rect x="-8" y="-12" width="16" height="1.5" fill="currentColor" />
              <rect x="-8" y="-8" width="6" height="1.5" fill="currentColor" />
              <rect x="2" y="-8" width="6" height="1.5" fill="currentColor" />
              <rect x="-8" y="-4" width="16" height="1.5" fill="currentColor" />
              <rect x="-8" y="0" width="6" height="1.5" fill="currentColor" />
              <rect x="2" y="0" width="6" height="1.5" fill="currentColor" />
              <rect x="-8" y="4" width="16" height="1.5" fill="currentColor" />
              <rect x="-8" y="8" width="6" height="1.5" fill="currentColor" />
              <rect x="2" y="8" width="6" height="1.5" fill="currentColor" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagram-pattern)" />
      </svg>
    </div>
  );
}