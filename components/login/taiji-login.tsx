"use client";

import type { TaijituTargets } from "./taijitu-canvas";

import clsx from "clsx";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { RitualHeader } from "./ritual-header";
import { SkyBackdrop } from "./sky-backdrop";
import { TaijituSvg } from "./taijitu-svg";

import { LoginForm } from "@/components/login/login-form";
import { HEXAGRAMS, hexagramBinary } from "@/lib/iching/canonical";
import { fuxiAngle } from "@/lib/iching/fuxi";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const TaijituCanvas = dynamic(
  () => import("./taijitu-canvas").then((m) => m.TaijituCanvas),
  {
    ssr: false,
  },
);

// Start fetching three.js as soon as this module runs, not when React first renders the canvas
if (typeof window !== "undefined") void import("./taijitu-canvas");

// 易有太極，是生兩儀，兩儀生四象，四象生八卦 (Great Commentary): "In the Changes
// there is the Supreme Ultimate; it gives rise to the two modes, the two modes to
// the four images, the four images to the eight trigrams." Doubled, the trigrams
// give the sixty-four hexagrams (八卦相重), which close the circle: Shao Yong's
// diagram, eight trigrams inside a ring of sixty-four. It unfolds by itself,
// and then the sign-in form rests in its centre.
//
// Depth: the diagram is built in layers at different distances (the ring of 64
// farthest, a dark well under the centre, the trigrams, the taijitu nearest),
// and once whole it tilts gently toward the pointer, so the layers part. Behind
// it all is the sky Fu Xi looked up at (see `SkyBackdrop`).

const UNFOLD_DELAY = 0.5; // seconds with the taijitu alone, before anything is born
const UNFOLD_SECONDS = 4.2;

// Earlier Heaven (Fu Xi) order: angle in degrees from the top, counter-clockwise.
// Binary strings read bottom → top; each child sits in its parent's half.
const MODES = [
  { lines: "1", angle: 67.5 },
  { lines: "0", angle: -112.5 },
];
const IMAGES = [
  { lines: "11", angle: 22.5 },
  { lines: "10", angle: 112.5 },
  { lines: "01", angle: -67.5 },
  { lines: "00", angle: -157.5 },
];
const TRIGRAMS = [
  { lines: "111", angle: 0, hanzi: "乾" },
  { lines: "110", angle: 45, hanzi: "兌" },
  { lines: "101", angle: 90, hanzi: "離" },
  { lines: "100", angle: 135, hanzi: "震" },
  { lines: "011", angle: -45, hanzi: "巽" },
  { lines: "010", angle: -90, hanzi: "坎" },
  { lines: "001", angle: -135, hanzi: "艮" },
  { lines: "000", angle: 180, hanzi: "坤" },
];
const RING_OF_64 = HEXAGRAMS.map((h) => {
  const lines = hexagramBinary(h);
  const angle = Math.round(((fuxiAngle(lines) * 180) / Math.PI) * 1000) / 1000;

  // sweep: 0 at the top, growing clockwise, so the ring is drawn round the circle
  return {
    id: h.id,
    lines,
    angle,
    sweep: (((-angle % 360) + 360) % 360) / 360,
  };
});

// Ring geometry in a 1000 × 1000 viewBox
const C = 500;
const TAIJI_R = 100;
const RINGS = {
  modes: { r: 172, length: 56, thickness: 7, gap: 11 },
  images: { r: 242, length: 50, thickness: 6, gap: 10 },
  trigrams: { r: 312, length: 46, thickness: 6, gap: 9 },
  hexagrams: { r: 418, length: 26, thickness: 3, gap: 4.4 },
};
const LABEL_R = 388;

const STAGES = [
  { from: 0, hanzi: "太極", name: "The Supreme Ultimate" },
  { from: 0.1, hanzi: "兩儀", name: "The two modes" },
  { from: 0.28, hanzi: "四象", name: "The four images" },
  { from: 0.46, hanzi: "八卦", name: "The eight trigrams" },
  { from: 0.7, hanzi: "六十四卦", name: "The sixty-four hexagrams" },
];

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);
const ease = (t: number) => t * t * (3 - 2 * t);
// Rounded, so server and browser render identical SVG (their sin/cos can differ in the last digit)
const round = (v: number) => Math.round(v * 1000) / 1000;

function polar(angle: number, r: number) {
  const a = (angle * Math.PI) / 180;

  return { x: round(C - r * Math.sin(a)), y: round(C - r * Math.cos(a)) };
}

// Distances of the layers, in px, seen through a 1400px perspective. Each layer
// is scaled back so that at rest it looks exactly where the flat drawing put it.
const PERSPECTIVE = 1400;
const depth = (z: number) =>
  `translateZ(${z}px) scale(${round((PERSPECTIVE - z) / PERSPECTIVE)})`;
const LAYERS = {
  ring: depth(-90),
  well: depth(-40),
  taijitu: depth(70),
};
const MAX_TILT = { x: 5, y: 7 }; // degrees

/** A stack of lines (bottom line innermost), each drawn out from its centre as `t` grows. */
function Mark({
  lines,
  angle,
  ring,
  t,
  fill = "#E8DFC8",
}: {
  lines: string;
  angle: number;
  ring: (typeof RINGS)[keyof typeof RINGS];
  t: number;
  fill?: string;
}) {
  const { x, y } = polar(angle, ring.r);

  return (
    <g transform={`translate(${x} ${y}) rotate(${-angle})`}>
      {lines.split("").map((bit, i) => {
        const draw = ease(clamp01(t * lines.length - i * 0.6));
        const ly = -i * (ring.thickness + ring.gap) - ring.thickness / 2;
        const w = ring.length * draw;

        return bit === "1" ? (
          <rect
            key={i}
            fill={fill}
            height={ring.thickness}
            opacity={draw}
            rx={1}
            width={w}
            x={-w / 2}
            y={ly}
          />
        ) : (
          <g key={i} opacity={draw}>
            <rect
              fill={fill}
              height={ring.thickness}
              rx={1}
              width={w * 0.42}
              x={-ring.length / 2}
              y={ly}
            />
            <rect
              fill={fill}
              height={ring.thickness}
              rx={1}
              width={w * 0.42}
              x={ring.length / 2 - w * 0.42}
              y={ly}
            />
          </g>
        );
      })}
    </g>
  );
}

/** A branch from parent to child, drawn as `t` grows. */
function Branch({
  from,
  to,
  t,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  t: number;
}) {
  return (
    <line
      opacity={0.35}
      pathLength={1}
      stroke="#8A8178"
      strokeDasharray="1"
      strokeDashoffset={1 - ease(t)}
      strokeWidth={1.2}
      x1={from.x}
      x2={to.x}
      y1={from.y}
      y2={to.y}
    />
  );
}

/**
 * Tilts the stage toward the pointer once `active`; mouse and trackpad only. The
 * damped pointer is also published on `root` as --px / --py (-1..1), for
 * the sky, whose layers shift with it.
 */
function usePointerTilt(
  stage: React.RefObject<HTMLDivElement | null>,
  root: React.RefObject<HTMLDivElement | null>,
  active: boolean,
) {
  useEffect(() => {
    const el = stage.current;
    const vars = root.current;

    if (
      !active ||
      !el ||
      !vars ||
      !window.matchMedia("(pointer: fine)").matches
    )
      return;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      // Damped, so the diagram settles like something with weight
      const k = 1 - Math.exp(-2.5 * ((now - last) / 1000));

      last = now;
      current.x += (target.x - current.x) * k;
      current.y += (target.y - current.y) * k;
      el.style.transform = `rotateX(${(-current.y * MAX_TILT.x).toFixed(3)}deg) rotateY(${(current.x * MAX_TILT.y).toFixed(3)}deg)`;
      vars.style.setProperty("--px", current.x.toFixed(4));
      vars.style.setProperty("--py", current.y.toFixed(4));
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      el.style.transform = "";
      vars.style.removeProperty("--px");
      vars.style.removeProperty("--py");
    };
  }, [stage, root, active]);
}

export function TaijiLogin() {
  const reducedMotion = useReducedMotion();
  const targets = useRef<TaijituTargets>({ scale: 1, spin: 0.05, glow: 0 });
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [skipped, setSkipped] = useState(false);
  // The SVG taijitu holds the centre until the WebGL one has drawn its first frame
  const [canvasDrawn, setCanvasDrawn] = useState(false);
  const p = useRef(0);
  // The SVG taijitu is there from the first paint, so the unfolding starts with
  // the page; it does not wait for WebGL
  const start = useRef<number | null>(null);

  useEffect(() => {
    start.current = performance.now();
  }, []);

  // Without motion the circle is simply there, already complete
  useEffect(() => {
    if (reducedMotion) {
      p.current = 1;
      setProgress(1);
      setComplete(true);
    }
  }, [reducedMotion]);

  useEffect(() => {
    let frame = 0;
    const tick = (now: number) => {
      if (!complete && start.current !== null) {
        const elapsed = (now - start.current) / 1000;

        p.current = clamp01((elapsed - UNFOLD_DELAY) / UNFOLD_SECONDS);
        if (p.current >= 1) setComplete(true);
        setProgress(p.current);
      }
      const t = targets.current;
      const shown = complete ? 1 : p.current;

      t.spin = complete ? 0.04 : 0.05 + 0.9 * shown;
      t.glow = complete ? 0.5 : shown;
      // Once complete, the taijitu keeps a slow breath
      t.scale = complete
        ? 1 +
          (reducedMotion ? 0 : 0.035 * Math.sin((now / 1000 / 8) * Math.PI * 2))
        : 1 + 0.08 * shown;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [complete, reducedMotion]);

  const living = complete && !reducedMotion;

  usePointerTilt(stage, root, living);

  const shown = complete ? 1 : progress;
  const t1 = clamp01((shown - 0.1) / 0.16);
  const t2 = clamp01((shown - 0.28) / 0.16);
  const t3 = clamp01((shown - 0.46) / 0.2);
  const t4 = clamp01((shown - 0.62) / 0.12);
  const t5 = clamp01((shown - 0.7) / 0.3);
  const caption =
    [...STAGES].reverse().find((s) => shown >= s.from) ?? STAGES[0];
  const showForm = complete || skipped;
  // Once the circle closes, the inner generations recede and leave room for the form
  const inner = complete ? 0 : 1;

  return (
    <div
      ref={root}
      className="relative min-h-screen overflow-hidden bg-xuan font-noto-serif text-silk"
    >
      <SkyBackdrop complete={complete} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(201,154,46,0.08) 0%, rgba(201,154,46,0) 50%)",
        }}
      />
      <RitualHeader
        skipped={showForm}
        onSkip={() => {
          setSkipped(true);
          setComplete(true);
        }}
      />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-hex-4 pb-hex-8 pt-hex-16 lg:pt-0">
        <div
          className="relative aspect-square w-[min(92vh,92vw)]"
          style={{ perspective: `${PERSPECTIVE}px` }}
        >
          <div
            ref={stage}
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Farthest: the sixty-four hexagrams close the circle, and drift very slowly once it is whole */}
            <svg
              aria-hidden
              className="absolute inset-0 size-full"
              style={{ transform: LAYERS.ring }}
              viewBox="0 0 1000 1000"
            >
              <g
                className={clsx(living && "ring-drift")}
                style={{
                  transformBox: "view-box",
                  transformOrigin: "500px 500px",
                }}
              >
                {RING_OF_64.map((h) => (
                  <Mark
                    key={h.id}
                    angle={h.angle}
                    fill="#8A8178"
                    lines={h.lines}
                    ring={RINGS.hexagrams}
                    t={clamp01(t5 * 1.8 - h.sweep * 0.8)}
                  />
                ))}
              </g>
            </svg>

            {/* The well: the centre sinks a little, so the form rests in a hollow */}
            <svg
              aria-hidden
              className="absolute inset-0 size-full"
              style={{ transform: LAYERS.well }}
              viewBox="0 0 1000 1000"
            >
              <defs>
                <radialGradient fy="0.42" id="taiji-well">
                  <stop offset="0" stopColor="#050403" stopOpacity="0.92" />
                  <stop offset="0.8" stopColor="#050403" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#050403" stopOpacity="0" />
                </radialGradient>
                {/* Light from above: the far (lower) inner wall catches it */}
                <linearGradient id="taiji-rim" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#C99A2E" stopOpacity="0.05" />
                  <stop offset="0.55" stopColor="#C99A2E" stopOpacity="0.1" />
                  <stop offset="1" stopColor="#C99A2E" stopOpacity="0.32" />
                </linearGradient>
              </defs>
              <circle
                cx={C}
                cy={C}
                fill="url(#taiji-well)"
                opacity={t3}
                r={RINGS.trigrams.r - 20}
              />
              <circle
                cx={C}
                cy={C}
                fill="none"
                opacity={t3}
                r={RINGS.trigrams.r - 20}
                stroke="url(#taiji-rim)"
                strokeWidth={1.5}
              />
            </svg>

            {/* The generations and the eight trigrams, on the surface */}
            <svg
              aria-hidden
              className="absolute inset-0 size-full"
              viewBox="0 0 1000 1000"
            >
              <g opacity={inner} style={{ transition: "opacity 1.2s ease" }}>
                {MODES.map((m) => (
                  <Branch
                    key={m.lines}
                    from={polar(m.angle, TAIJI_R + 6)}
                    t={t1}
                    to={polar(m.angle, RINGS.modes.r - 8)}
                  />
                ))}
                {IMAGES.map((img) => {
                  const parent = MODES.find((m) => m.lines === img.lines[0])!;

                  return (
                    <Branch
                      key={img.lines}
                      from={polar(parent.angle, RINGS.modes.r + 26)}
                      t={t2}
                      to={polar(img.angle, RINGS.images.r - 8)}
                    />
                  );
                })}
                {TRIGRAMS.map((tri) => {
                  const parent = IMAGES.find(
                    (img) => img.lines === tri.lines.slice(0, 2),
                  )!;

                  return (
                    <Branch
                      key={tri.lines}
                      from={polar(parent.angle, RINGS.images.r + 34)}
                      t={t3}
                      to={polar(tri.angle, RINGS.trigrams.r - 8)}
                    />
                  );
                })}
                {MODES.map((m) => (
                  <Mark
                    key={m.lines}
                    angle={m.angle}
                    lines={m.lines}
                    ring={RINGS.modes}
                    t={t1}
                  />
                ))}
                {IMAGES.map((img) => (
                  <Mark
                    key={img.lines}
                    angle={img.angle}
                    lines={img.lines}
                    ring={RINGS.images}
                    t={t2}
                  />
                ))}
              </g>

              {/* The eight trigrams: a single pulse when the circle closes, then a slow breath */}
              <g
                className={clsx(
                  complete &&
                    !skipped &&
                    !reducedMotion &&
                    "ring-complete trigram-breathe",
                )}
              >
                {TRIGRAMS.map((tri, i) => (
                  <Mark
                    key={tri.lines}
                    angle={tri.angle}
                    lines={tri.lines}
                    ring={RINGS.trigrams}
                    t={clamp01(t3 * 1.6 - i * 0.075)}
                  />
                ))}
              </g>
              {TRIGRAMS.map((tri) => {
                const { x, y } = polar(tri.angle, LABEL_R);

                return (
                  <text
                    key={tri.lines}
                    className="font-hanzi"
                    dominantBaseline="central"
                    fill="#8A8178"
                    fontSize={26}
                    opacity={t4}
                    textAnchor="middle"
                    x={x}
                    y={y}
                  >
                    {tri.hanzi}
                  </text>
                );
              })}
            </svg>

            {/* Nearest: the taijitu, the source of everything here; once the circle closes it rises above the form */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ transform: LAYERS.taijitu }}
            >
              <div
                className={clsx(
                  "absolute left-1/2 top-1/2 aspect-square w-[28%] transition-transform duration-[900ms] ease-out",
                  showForm
                    ? "-translate-x-1/2 -translate-y-1/2 scale-[0.6] lg:-translate-y-[calc(50%+19vh)] lg:scale-[0.34]"
                    : "-translate-x-1/2 -translate-y-1/2",
                )}
              >
                <TaijituSvg
                  className={clsx(
                    "absolute inset-0 transition-opacity duration-500",
                    canvasDrawn && "opacity-0",
                  )}
                />
                <TaijituCanvas
                  reducedMotion={reducedMotion}
                  targets={targets}
                  // Two frames later the shader has compiled and drawn
                  onReady={() =>
                    requestAnimationFrame(() =>
                      requestAnimationFrame(() => setCanvasDrawn(true)),
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {!showForm && (
          <div
            aria-live="polite"
            className="pointer-events-none mt-hex-2 flex flex-col items-center gap-hex-2 text-center lg:absolute lg:bottom-hex-6"
          >
            <p className="text-lg text-silk/90">
              <span className="font-hanzi" lang="zh-Hant">
                {caption.hanzi}
              </span>{" "}
              {caption.name}
            </p>
            <p className="text-sm text-bone" lang="zh-Hant">
              <span className="font-hanzi">
                易有太極，是生兩儀，兩儀生四象，四象生八卦
              </span>
            </p>
          </div>
        )}

        {/* The sign-in form: inside the closed circle on wide screens, below it on phones */}
        {showForm && (
          <div className="relative mt-hex-4 flex w-full justify-center lg:pointer-events-none lg:absolute lg:inset-0 lg:mt-0 lg:items-center lg:pt-[9vh]">
            <div className="reveal-rise flex w-full max-w-[420px] flex-col items-center gap-hex-3 text-center [animation-delay:550ms] lg:pointer-events-auto">
              <p className="text-bone">
                Prompthesy reads the Book of Changes with you.
              </p>
              <h1 className="font-noto-display text-3xl font-light text-silk">
                Sign in to ask the Changes
              </h1>
              <LoginForm id="login" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
