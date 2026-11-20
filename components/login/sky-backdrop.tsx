import clsx from "clsx";

import { seededRandom } from "@/lib/iching/casting";

// 仰則觀象於天，俯則觀法於地 (Great Commentary): Fu Xi "looked up and contemplated
// the images in the heavens, looked down and contemplated the patterns on the
// earth", and made the trigrams. Behind the diagram is that sky: stars at three
// depths, the Heavenly River (天河, the Milky Way), and four of the old Chinese
// asterisms, which join up once the circle closes. Layers shift with the pointer
// (through --px / --py, set by the page), the far ones least.
//
// Everything is generated from a fixed seed, so server and browser draw the same
// sky and it is in the first paint.

const W = 1600;
const H = 1000;
const random = seededRandom("prompthesy-sky");
const r1 = (v: number) => Math.round(v * 10) / 10;
const r2 = (v: number) => Math.round(v * 100) / 100;

type Star = { x: number; y: number; r: number; o: number; twinkle?: number };

function scatter(
  count: number,
  rMin: number,
  rMax: number,
  oMin: number,
  oMax: number,
  twinkleShare: number,
) {
  return Array.from({ length: count }, (): Star => {
    const twinkles = random() < twinkleShare;

    return {
      x: r1(random() * W),
      y: r1(random() * H),
      r: r2(rMin + random() ** 2 * (rMax - rMin)),
      o: r2(oMin + random() * (oMax - oMin)),
      twinkle: twinkles ? r1(random() * 9) : undefined,
    };
  });
}

// The Heavenly River runs corner to corner, a dense haze of the faintest stars
const RIVER = { from: { x: -100, y: 930 }, to: { x: 1700, y: 60 }, spread: 85 };
const RIVER_ANGLE = r1(
  (Math.atan2(RIVER.to.y - RIVER.from.y, RIVER.to.x - RIVER.from.x) * 180) /
    Math.PI,
);
const riverStars = Array.from({ length: 560 }, (): Star => {
  const t = random();
  // Roughly normal across the band: the sum of three uniforms
  const across = (random() + random() + random() - 1.5) * RIVER.spread;
  const len = Math.hypot(RIVER.to.x - RIVER.from.x, RIVER.to.y - RIVER.from.y);
  const nx = -(RIVER.to.y - RIVER.from.y) / len;
  const ny = (RIVER.to.x - RIVER.from.x) / len;

  return {
    x: r1(RIVER.from.x + (RIVER.to.x - RIVER.from.x) * t + nx * across),
    y: r1(RIVER.from.y + (RIVER.to.y - RIVER.from.y) * t + ny * across),
    r: r2(0.35 + random() * 0.5),
    o: r2(0.15 + random() * 0.35),
  };
});

const LAYERS = [
  {
    stars: [...riverStars, ...scatter(420, 0.4, 0.9, 0.2, 0.5, 0.1)],
    shift: 6,
    river: true,
  },
  { stars: scatter(160, 0.7, 1.3, 0.35, 0.7, 0.3), shift: 16 },
  { stars: scatter(34, 1.1, 1.9, 0.55, 0.9, 0.5), shift: 34, glow: true },
];

// Four asterisms, from real positions: [right ascension (h), declination (°), magnitude]
type Asterism = {
  hanzi: string;
  name: string;
  stars: [number, number, number][];
  lines: [number, number][];
  scale: number; // px per degree
  place: string; // where it sits on wide screens
  warm?: number; // index of a red giant
};

const ASTERISMS: Asterism[] = [
  {
    hanzi: "北斗",
    name: "The Northern Dipper",
    // Dubhe, Merak, Phecda, Megrez, Alioth, Mizar, Alkaid
    stars: [
      [11.06, 61.75, 1.8],
      [11.03, 56.38, 2.4],
      [11.9, 53.69, 2.4],
      [12.26, 57.03, 3.3],
      [12.9, 55.96, 1.8],
      [13.4, 54.93, 2.2],
      [13.79, 49.31, 1.9],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [3, 4],
      [4, 5],
      [5, 6],
    ],
    scale: 10,
    place: "left-[5%] top-[11%]",
  },
  {
    hanzi: "心",
    name: "The Heart",
    // σ Sco, Antares (大火, the Great Fire), τ Sco
    stars: [
      [16.35, -25.59, 2.9],
      [16.49, -26.43, 1.0],
      [16.6, -28.22, 2.8],
    ],
    lines: [
      [0, 1],
      [1, 2],
    ],
    scale: 30,
    place: "left-[10%] bottom-[16%]",
    warm: 1,
  },
  {
    hanzi: "參",
    name: "Three Stars",
    // Betelgeuse, Bellatrix, Mintaka, Alnilam, Alnitak, Saiph, Rigel
    stars: [
      [5.92, 7.41, 0.5],
      [5.42, 6.35, 1.6],
      [5.53, -0.3, 2.2],
      [5.6, -1.2, 1.7],
      [5.68, -1.94, 1.8],
      [5.8, -9.67, 2.1],
      [5.24, -8.2, 0.1],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [2, 6],
      [4, 5],
      [5, 6],
    ],
    scale: 11.5,
    place: "right-[7%] top-[10%]",
    warm: 0,
  },
  {
    hanzi: "斗",
    name: "The Southern Dipper",
    // μ, λ, φ, σ, τ, ζ Sagittarii
    stars: [
      [18.23, -21.06, 3.8],
      [18.47, -25.42, 2.8],
      [18.76, -26.99, 3.2],
      [18.92, -26.3, 2.0],
      [19.12, -27.67, 3.3],
      [19.04, -29.88, 2.6],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 2],
    ],
    scale: 13,
    place: "right-[8%] bottom-[14%]",
  },
];

const PAD = 10;

/** Project an asterism onto a small flat chart, as seen looking up (east to the left). */
function chart(a: Asterism) {
  const ra0 = a.stars.reduce((s, [ra]) => s + ra, 0) / a.stars.length;
  const dec0 = a.stars.reduce((s, [, dec]) => s + dec, 0) / a.stars.length;
  const k = Math.round(Math.cos((dec0 * Math.PI) / 180) * 1000) / 1000;
  const raw = a.stars.map(([ra, dec, mag]) => ({
    x: -(ra - ra0) * 15 * k * a.scale,
    y: -(dec - dec0) * a.scale,
    r: r2(Math.max(0.9, 2.7 - 0.5 * mag)),
  }));
  const minX = Math.min(...raw.map((s) => s.x));
  const minY = Math.min(...raw.map((s) => s.y));
  const points = raw.map((s) => ({
    ...s,
    x: r1(s.x - minX + PAD),
    y: r1(s.y - minY + PAD),
  }));

  return {
    points,
    width: r1(Math.max(...points.map((s) => s.x)) + PAD),
    height: r1(Math.max(...points.map((s) => s.y)) + PAD),
  };
}

const CHARTS = ASTERISMS.map((a) => ({ ...a, ...chart(a) }));

const shift = (px: number) => ({
  transform: `translate3d(calc(var(--px, 0) * ${-px}px), calc(var(--py, 0) * ${-px * 0.6}px), 0)`,
});

export function SkyBackdrop({ complete }: { complete: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Soft glows around the brighter stars, shared by every layer */}
      <svg className="absolute size-0">
        <defs>
          <radialGradient id="sky-glow">
            <stop offset="0" stopColor="#F3ECDA" stopOpacity="0.45" />
            <stop offset="0.3" stopColor="#E8DFC8" stopOpacity="0.12" />
            <stop offset="1" stopColor="#E8DFC8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sky-glow-warm">
            <stop offset="0" stopColor="#EFC48A" stopOpacity="0.55" />
            <stop offset="0.3" stopColor="#E8B87A" stopOpacity="0.16" />
            <stop offset="1" stopColor="#E8B87A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      {LAYERS.map((layer, i) => (
        <div key={i} className="absolute -inset-12" style={shift(layer.shift)}>
          <svg
            className="size-full"
            preserveAspectRatio="xMidYMid slice"
            viewBox={`0 0 ${W} ${H}`}
          >
            {layer.river && (
              <>
                <defs>
                  <radialGradient id="sky-river">
                    <stop offset="0" stopColor="#E8DFC8" stopOpacity="0.1" />
                    <stop offset="0.6" stopColor="#E8DFC8" stopOpacity="0.04" />
                    <stop offset="1" stopColor="#E8DFC8" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse
                  cx={W / 2}
                  cy={(RIVER.from.y + RIVER.to.y) / 2}
                  fill="url(#sky-river)"
                  rx={1050}
                  ry={150}
                  transform={`rotate(${RIVER_ANGLE} ${W / 2} ${(RIVER.from.y + RIVER.to.y) / 2})`}
                />
              </>
            )}
            {layer.stars.map((s, j) => (
              <circle
                key={j}
                className={clsx(s.twinkle !== undefined && "star-twinkle")}
                cx={s.x}
                cy={s.y}
                fill="#E8DFC8"
                opacity={s.o}
                r={s.r}
                style={
                  s.twinkle !== undefined
                    ? ({
                        "--o": s.o,
                        animationDelay: `-${s.twinkle}s`,
                      } as React.CSSProperties)
                    : undefined
                }
              />
            ))}
            {layer.glow &&
              layer.stars.map((s, j) => (
                <circle
                  key={`g${j}`}
                  cx={s.x}
                  cy={s.y}
                  fill="url(#sky-glow)"
                  opacity={s.o}
                  r={s.r * 5}
                />
              ))}
          </svg>
        </div>
      ))}

      {/* The asterisms, between the far and middle stars; on wide screens only */}
      <div className="absolute inset-0 hidden lg:block" style={shift(11)}>
        {CHARTS.map((a) => (
          <figure
            key={a.hanzi}
            className={clsx(
              "absolute flex flex-col items-center gap-hex-1",
              a.place,
            )}
          >
            <svg
              height={a.height}
              viewBox={`0 0 ${a.width} ${a.height}`}
              width={a.width}
            >
              {a.lines.map(([from, to], j) => (
                <line
                  key={j}
                  className={clsx(
                    "asterism-line",
                    complete && "asterism-line-drawn",
                  )}
                  pathLength={1}
                  stroke="#C99A2E"
                  strokeOpacity={0.4}
                  strokeWidth={0.8}
                  style={{ animationDelay: `${600 + j * 140}ms` }}
                  x1={a.points[from].x}
                  x2={a.points[to].x}
                  y1={a.points[from].y}
                  y2={a.points[to].y}
                />
              ))}
              {a.points.map((s, j) => (
                <g key={j}>
                  <circle
                    cx={s.x}
                    cy={s.y}
                    fill={
                      j === a.warm ? "url(#sky-glow-warm)" : "url(#sky-glow)"
                    }
                    r={s.r * 4.5}
                  />
                  <circle
                    cx={s.x}
                    cy={s.y}
                    fill={j === a.warm ? "#EFC48A" : "#F3ECDA"}
                    r={s.r}
                  />
                </g>
              ))}
            </svg>
            <figcaption
              className={clsx(
                "text-sm text-bone transition-opacity duration-[2000ms]",
                complete ? "opacity-80" : "opacity-0",
              )}
            >
              <span className="font-hanzi" lang="zh-Hant">
                {a.hanzi}
              </span>{" "}
              {a.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
