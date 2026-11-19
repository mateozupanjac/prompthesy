# System Patterns — Prompthesy

## High-level architecture
- **Next.js App Router**: UI lives under `app/` with route segments for pages and API.
- **UI kit**: HeroUI + Tailwind CSS for components and styling.
- **Database**: Postgres via Prisma models in `prisma/schema.prisma`.
- **Seeded canonical content**: I Ching trigrams/hexagrams/lines are seeded from a source slice.

## Data model patterns (Prisma)
- **Canonical content**
  - `Trigram` (id 1..8) with `binary` (3 chars), `hanzi`, `pinyin`
  - `Hexagram` (1..64, King Wen) with relations to upper/lower trigram, `binary` (6 chars = lower + upper), `hanzi` (traditional), `pinyin`
  - Binary strings are read bottom → top, `1` = yang, `0` = yin
  - `Line` (1..6 per hexagram)
  - `ContentSource` for provenance/versioning of imported source payload
- **Auth**
  - `User`, `Account`, `Session`, `VerificationToken` (Auth.js/NextAuth-style schema)
- **Domain**
  - `Reading` with base/result hexagram relations and stored provenance (`tossesJson`, `movingLines`)
  - `ChatSession` + `ChatMessage` attached to a `Reading`
  - `ShareLink` token → reading
  - `Favorite` (user ↔ reading) and `JournalEntry`

## I Ching domain logic (`lib/iching/`)
- `canonical.ts`: language-neutral source of truth (trigram binaries, hexagram hanzi/pinyin, King Wen trigram pairs, Unicode symbols). Used by both the seed and the app; unit-tested against `prisma/hex_en_slice.ts`.
- `casting.ts`: three-coin method (heads = 3, tails = 2; line values 6/7/8/9), moving lines, base → result binary. Casts are driven by a seeded PRNG (cyrb128 → sfc32) so `Reading.seed` replays the exact tosses; the seed itself comes from `crypto.getRandomValues`.
- `lib/readings.ts` (server-only): input validation, `createReading`, `getReading`.
- API: `POST /api/readings` (`{ method: "3_coins" | "manual", question?, notes?, lines? }`), `GET /api/readings/[id]` (with both hexagrams, lines and trigrams). No list endpoint until auth exists.
- The seed is always generated server-side (a client-chosen seed would let the caller pick the outcome) and, like `userId`, is never returned by the API. `GET` by id is unauthenticated for now; restrict it to the owner / a `ShareLink` token once auth lands.
- Tests: `npm test` (Vitest), colocated as `*.test.ts`.

## Routing patterns
- **Pages**: `app/page.tsx` currently redirects to `/login`.
- **Auth UI**: `app/login/page.tsx` uses `components/auth-card.tsx` and `components/hexagram-background.tsx`.
- **API routes**: Under `app/api/**`. Readings create/get are implemented; auth, chat and reading PATCH/DELETE are still 501 placeholders.

## Prisma client pattern
- App code and the seed script both use the default `@prisma/client` (generated into `node_modules` on install). `lib/prisma.ts` extends it with `@prisma/extension-accelerate`, which is a no-op for plain `postgresql://` URLs.
- Prisma CLI config lives in `prisma.config.ts` (schema, migrations, seed command; loads `.env` via `dotenv`).
- Local dev DB: Postgres 16 from `docker-compose.yml` on port 5433 (`npm run db:up`). `.env` is gitignored; `.env.example` is the template.

## UI/theming pattern
- Theme handled via `next-themes` provider in `app/providers.tsx`.
- Tailwind configured with HeroUI plugin (`tailwind.config.mjs`).


