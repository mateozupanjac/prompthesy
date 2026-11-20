import clsx from "clsx";

// The taijitu drawn in plain SVG, matching the shader's first frame (no spin, no
// mist). It is in the server-rendered HTML, so the symbol is on screen at once,
// while three.js loads; the canvas then takes over and this fades away. Without
// WebGL it simply stays. Same geometry and framing as `taijitu-canvas`: disc of
// radius 1 in a square of half-width 1.4.

// Yang: the right half, plus the lower small circle, minus the upper one
const YANG = "M0 -1 A1 1 0 0 1 0 1 A0.5 0.5 0 0 1 0 0 A0.5 0.5 0 0 0 0 -1 Z";

export function TaijituSvg({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={clsx("size-full", className)}
      viewBox="-1.4 -1.4 2.8 2.8"
    >
      <defs>
        <radialGradient id="taijitu-svg-halo" r="0.5">
          <stop offset="0.7" stopColor="#C99A2E" stopOpacity="0.16" />
          <stop offset="0.84" stopColor="#C99A2E" stopOpacity="0.06" />
          <stop offset="1" stopColor="#C99A2E" stopOpacity="0" />
        </radialGradient>
        {/* Silk catching the light toward the centre, as in the shader */}
        <radialGradient
          cx={0}
          cy={0}
          gradientUnits="userSpaceOnUse"
          id="taijitu-svg-yang"
          r={1}
        >
          <stop offset="0" stopColor="#F3ECDA" />
          <stop offset="1" stopColor="#E8DFC8" />
        </radialGradient>
      </defs>
      <circle fill="url(#taijitu-svg-halo)" r={1.4} />
      <circle fill="#17120F" r={1} />
      <path d={YANG} fill="url(#taijitu-svg-yang)" />
      <circle cy={-0.5} fill="#E8DFC8" r={0.13} />
      <circle cy={0.5} fill="#17120F" r={0.13} />
      <circle fill="none" r={1} stroke="#C99A2E" strokeWidth={0.018} />
    </svg>
  );
}
