import clsx from "clsx";

export const metadata = { title: "Styleguide" };

// Mirrors tailwind.config.mjs (xuanHuang) so contrast is computed from the real values
const COLORS = [
  {
    token: "xuan",
    hanzi: "玄",
    hex: "#0C0A09",
    origin: "Heaven: a warm black (玄 first meant dark red)",
    role: "Background",
  },
  {
    token: "lacquer",
    hanzi: "漆",
    hex: "#17120F",
    origin: "Black lacquer",
    role: "Raised surfaces, inputs",
  },
  {
    token: "huang",
    hanzi: "黃",
    hex: "#C99A2E",
    origin: "Earth: yellow loess, ochre, gold",
    role: "Main accent, primary action, yang",
  },
  {
    token: "silk",
    hanzi: "帛",
    hex: "#E8DFC8",
    origin: "Unbleached silk of the Mawangdui manuscript",
    role: "Main text",
  },
  {
    token: "bone",
    hanzi: "骨",
    hex: "#8A8178",
    origin: "Oracle bone",
    role: "Secondary text, hairlines",
  },
  {
    token: "cinnabar",
    hanzi: "朱",
    hex: "#C2321F",
    origin: "Cinnabar that filled oracle-bone inscriptions",
    role: "Change only: moving lines, transformation, seal",
  },
];

const PHASES = [
  { name: "Metal", hex: "#E6E2D8", trigrams: "☰ ☱", names: "乾 兌" },
  { name: "Earth", hex: "#C99A2E", trigrams: "☷ ☶", names: "坤 艮" },
  { name: "Wood", hex: "#4F7A52", trigrams: "☳ ☴", names: "震 巽" },
  { name: "Water", hex: "#1E2A33", trigrams: "☵", names: "坎" },
  { name: "Fire", hex: "#B5452B", trigrams: "☲", names: "離" },
];

const TYPE_SCALE = [
  { size: 72, use: "Display" },
  { size: 48, use: "Page title" },
  { size: 36, use: "Section" },
  { size: 24, use: "Lead" },
  { size: 18, use: "Body" },
  { size: 14, use: "Caption" },
];

const SPACING = [1, 2, 3, 4, 6, 8, 12, 16];

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;

    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);

  return (hi + 0.05) / (lo + 0.05);
}

/** Hexagram drawn bottom → top; `moving` positions are cinnabar, marked ○ (old yang) or × (old yin). */
function Hexagram({
  binary,
  moving = [],
  className,
}: {
  binary: string;
  moving?: number[];
  className?: string;
}) {
  return (
    <div
      aria-label={`Hexagram ${binary}`}
      className={clsx("flex w-36 flex-col-reverse gap-hex-2", className)}
      role="img"
    >
      {binary.split("").map((bit, i) => {
        const isMoving = moving.includes(i + 1);
        const color = isMoving ? "bg-cinnabar" : "bg-silk";

        return (
          <div key={i} className="relative flex h-3 justify-between">
            {bit === "1" ? (
              <span className={clsx("w-full", color)} />
            ) : (
              <>
                <span className={clsx("w-[42%]", color)} />
                <span className={clsx("w-[42%]", color)} />
              </>
            )}
            {isMoving && (
              <span className="absolute left-full top-1/2 ml-hex-2 -translate-y-1/2 text-sm text-cinnabar">
                {bit === "1" ? "○" : "×"}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Coin() {
  return (
    <svg
      aria-label="Cash coin: round heaven, square earth"
      className="size-16"
      role="img"
      viewBox="0 0 100 100"
    >
      <circle
        className="fill-lacquer stroke-huang"
        cx="50"
        cy="50"
        r="45"
        strokeWidth="3"
      />
      <circle
        className="fill-none stroke-huang/40"
        cx="50"
        cy="50"
        r="37"
        strokeWidth="2"
      />
      <rect
        className="fill-xuan stroke-huang"
        height="22"
        strokeWidth="3"
        width="22"
        x="39"
        y="39"
      />
    </svg>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-bone/30 py-hex-12">
      <h2 className="font-noto-display text-4xl font-light text-silk">
        {title}
      </h2>
      {note && (
        <p className="mt-hex-2 max-w-[60ch] text-lg leading-relaxed text-bone">
          {note}
        </p>
      )}
      <div className="mt-hex-8">{children}</div>
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-xuan font-noto-serif text-silk">
      <div className="mx-auto max-w-5xl px-hex-4 py-hex-16">
        <header className="flex flex-wrap items-end gap-x-hex-8 gap-y-hex-4 pb-hex-12">
          <span className="font-hanzi text-[160px] leading-none" lang="zh-Hant">
            玄黃
          </span>
          <div className="pb-hex-3">
            <h1 className="font-noto-display text-5xl font-light">
              Heaven and Earth
            </h1>
            <p className="mt-hex-3 text-2xl">
              <span className="font-hanzi" lang="zh-Hant">
                天玄而地黃
              </span>
            </p>
            <p className="mt-hex-1 text-lg italic text-bone">
              “Heaven is dark, the earth is yellow.” Book of Changes, Kun,
              Wenyan
            </p>
          </div>
        </header>

        <Section
          note="Contrast is measured against xuan. Cinnabar passes only for graphics and large text, which is why it marks change and nothing else."
          title="Colour"
        >
          <div className="grid grid-cols-1 gap-hex-4 sm:grid-cols-2 lg:grid-cols-3">
            {COLORS.map((c) => {
              const ratio = contrast(c.hex, "#0C0A09");

              return (
                <div key={c.token} className="flex flex-col gap-hex-2">
                  <div
                    className="flex h-28 items-end justify-between rounded-earth border border-bone/30 p-hex-3"
                    style={{ backgroundColor: c.hex }}
                  >
                    <span
                      className="font-hanzi text-5xl leading-none"
                      lang="zh-Hant"
                      style={{
                        color:
                          contrast(c.hex, "#E8DFC8") >
                          contrast(c.hex, "#0C0A09")
                            ? "#E8DFC8"
                            : "#0C0A09",
                      }}
                    >
                      {c.hanzi}
                    </span>
                  </div>
                  <p className="flex items-baseline justify-between">
                    <span className="text-lg">{c.token}</span>
                    <span className="tabular-nums text-bone">{c.hex}</span>
                  </p>
                  <p className="text-bone">{c.role}</p>
                  <p className="text-sm italic text-bone">{c.origin}</p>
                  {c.token !== "xuan" && (
                    <p className="text-sm text-bone">
                      {ratio.toFixed(1)}:1 on xuan{" "}
                      {ratio >= 4.5
                        ? "(text)"
                        : ratio >= 3
                          ? "(large text, graphics)"
                          : "(surfaces only)"}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <h3 className="mt-hex-12 text-2xl">
            Five phases, for trigram diagrams only
          </h3>
          <div className="mt-hex-4 flex flex-wrap gap-hex-3">
            {PHASES.map((p) => (
              <div key={p.name} className="flex w-36 flex-col gap-hex-1">
                <div
                  className="flex h-16 items-center justify-center rounded-earth border border-bone/30 text-3xl"
                  style={{
                    backgroundColor: p.hex,
                    color: luminance(p.hex) > 0.18 ? "#0C0A09" : "#E8DFC8",
                  }}
                >
                  {p.trigrams}
                </div>
                <p>
                  {p.name}{" "}
                  <span className="font-hanzi text-bone" lang="zh-Hant">
                    {p.names}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          note="One superfamily for both scripts: Noto Serif Display for titles, Noto Serif for reading, Noto Serif TC for hanzi. The scale follows Bringhurst’s classic steps."
          title="Type"
        >
          <div className="flex flex-col gap-hex-4">
            {TYPE_SCALE.map((t) => (
              <div key={t.size} className="flex items-baseline gap-hex-4">
                <span className="w-24 shrink-0 text-sm tabular-nums text-bone">
                  {t.size}px {t.use}
                </span>
                <span
                  className={clsx(
                    "truncate",
                    t.size >= 36
                      ? "font-noto-display font-light"
                      : "font-noto-serif",
                  )}
                  style={{ fontSize: t.size, lineHeight: 1.15 }}
                >
                  Return (Turning Back)
                </span>
              </div>
            ))}
          </div>

          <div className="mt-hex-12 grid gap-hex-8 md:grid-cols-[auto_1fr]">
            <div className="flex items-end gap-hex-3">
              <span
                className="font-hanzi text-[120px] leading-none"
                lang="zh-Hant"
              >
                復
              </span>
              <div className="pb-hex-2">
                <p className="font-noto-display text-4xl font-light">24</p>
                <p className="text-xl italic text-bone">fù</p>
              </div>
            </div>
            <div className="max-w-[62ch]">
              <p className="text-lg leading-[1.65]">
                Return. Success. Going and coming without error. Friends come—no
                blame. After seven days comes return. It furthers to have a
                goal.
              </p>
              <p className="mt-hex-3 text-sm text-bone">
                Body: Noto Serif 18/30, about 65 characters a line
              </p>
            </div>
          </div>
        </Section>

        <Section
          note="天圆地方: heaven is round, earth is square — the cash coin carries both. What asks heaven is round; what holds text is square."
          title="Shape"
        >
          <div className="grid gap-hex-8 md:grid-cols-2">
            <div className="flex flex-col gap-hex-4">
              <h3 className="text-2xl">Heaven is round</h3>
              <div className="flex flex-wrap items-center gap-hex-4">
                <button
                  className="h-12 rounded-heaven bg-huang px-hex-6 text-lg text-xuan outline-none focus-visible:ring-2 focus-visible:ring-silk focus-visible:ring-offset-4 focus-visible:ring-offset-xuan"
                  type="button"
                >
                  Toss the coins
                </button>
                <button
                  className="h-11 rounded-heaven border border-bone/50 px-hex-4 text-silk outline-none focus-visible:ring-2 focus-visible:ring-huang focus-visible:ring-offset-4 focus-visible:ring-offset-xuan"
                  type="button"
                >
                  Continue with Google
                </button>
                <Coin />
              </div>
            </div>
            <div className="flex flex-col gap-hex-4">
              <h3 className="text-2xl">Earth is square</h3>
              <label className="flex flex-col gap-hex-1">
                <span className="text-bone">Email</span>
                <input
                  className="h-12 rounded-earth border border-bone/40 bg-lacquer px-hex-3 text-lg text-silk outline-none placeholder:text-bone focus:border-huang"
                  placeholder="name@example.com"
                  type="email"
                />
              </label>
              <div className="rounded-earth border border-bone/30 bg-lacquer p-hex-4">
                <p className="text-bone">
                  A panel that holds text: lacquer, square, a bone hairline.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          note="Lines are silk; a line that changes turns cinnabar and carries its classical mark. Here 大壯 with its third line moving becomes 歸妹."
          title="Lines"
        >
          <div className="flex flex-wrap items-center gap-x-hex-12 gap-y-hex-6">
            <div className="flex flex-col gap-hex-3">
              <Hexagram binary="111100" moving={[3]} />
              <p>
                34{" "}
                <span className="font-hanzi" lang="zh-Hant">
                  大壯
                </span>
              </p>
            </div>
            <span aria-hidden className="text-3xl text-cinnabar">
              →
            </span>
            <div className="flex flex-col gap-hex-3">
              <Hexagram binary="110100" />
              <p>
                54{" "}
                <span className="font-hanzi" lang="zh-Hant">
                  歸妹
                </span>
              </p>
            </div>
            <ul className="text-bone">
              <li>Yang: one solid line</li>
              <li>Yin: broken in the middle</li>
              <li>
                <span className="text-cinnabar">○</span> old yang, changing
              </li>
              <li>
                <span className="text-cinnabar">×</span> old yin, changing
              </li>
            </ul>
          </div>
        </Section>

        <Section
          note="Six lines to a hexagram, so spacing steps in sixes."
          title="Spacing"
        >
          <div className="flex flex-col gap-hex-2">
            {SPACING.map((n) => (
              <div key={n} className="flex items-center gap-hex-4">
                <span className="w-24 text-sm tabular-nums text-bone">
                  hex-{n} = {n * 6}px
                </span>
                <span className="h-3 bg-huang" style={{ width: n * 6 }} />
              </div>
            ))}
          </div>
        </Section>

        <Section
          note="Sketches, not yet agreed: where these motifs could appear once we design pages."
          title="Motifs"
        >
          <div className="grid gap-hex-8 md:grid-cols-3">
            <figure className="flex flex-col gap-hex-3">
              <div aria-hidden className="flex h-32 items-end gap-[3px]">
                {Array.from({ length: 49 }, (_, i) => (
                  <span key={i} className="h-full w-[2px] bg-huang/80" />
                ))}
                <span className="ml-hex-3 h-full w-[2px] rotate-12 bg-bone" />
              </div>
              <figcaption className="text-bone">
                49 + 1 yarrow stalks: fifty, one set aside. A progress mark for
                casting.
              </figcaption>
            </figure>
            <figure className="flex flex-col gap-hex-3">
              <div
                aria-hidden
                className="flex size-32 items-center justify-center rounded-earth border-4 border-cinnabar bg-cinnabar"
              >
                <span
                  className="font-hanzi text-7xl font-semibold leading-none text-xuan"
                  lang="zh-Hant"
                >
                  易
                </span>
              </div>
              <figcaption className="text-bone">
                Cinnabar seal 易 (change): your reading, stamped.
              </figcaption>
            </figure>
            <figure className="flex flex-col gap-hex-3">
              <div aria-hidden className="relative flex h-32 gap-hex-1">
                {["乾", "元", "亨", "利", "貞"].map((c) => (
                  <span
                    key={c}
                    className="flex w-hex-6 justify-center rounded-earth bg-lacquer pt-hex-2 font-hanzi text-xl text-silk"
                    lang="zh-Hant"
                  >
                    {c}
                  </span>
                ))}
                <span className="absolute inset-x-0 top-[30%] h-px bg-huang/60" />
                <span className="absolute inset-x-0 top-[72%] h-px bg-huang/60" />
              </div>
              <figcaption className="text-bone">
                Bamboo slips bound with two silk threads: text in narrow
                columns.
              </figcaption>
            </figure>
          </div>
        </Section>
      </div>
    </div>
  );
}
