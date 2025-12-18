# System Patterns — Prompthesy

## High-level architecture
- **Next.js App Router**: UI lives under `app/` with route segments for pages and API.
- **UI kit**: HeroUI + Tailwind CSS for components and styling.
- **Database**: Postgres via Prisma models in `prisma/schema.prisma`.
- **Seeded canonical content**: I Ching trigrams/hexagrams/lines are seeded from a source slice.

## Data model patterns (Prisma)
- **Canonical content**
  - `Trigram` (id 1..8)
  - `Hexagram` (1..64) with relations to upper/lower trigram
  - `Line` (1..6 per hexagram)
  - `ContentSource` for provenance/versioning of imported source payload
- **Auth**
  - `User`, `Account`, `Session`, `VerificationToken` (Auth.js/NextAuth-style schema)
- **Domain**
  - `Reading` with base/result hexagram relations and stored provenance (`tossesJson`, `movingLines`)
  - `ChatSession` + `ChatMessage` attached to a `Reading`
  - `ShareLink` token → reading
  - `Favorite` (user ↔ reading) and `JournalEntry`

## Routing patterns
- **Pages**: `app/page.tsx` currently redirects to `/login`.
- **Auth UI**: `app/login/page.tsx` uses `components/auth-card.tsx` and `components/hexagram-background.tsx`.
- **API routes**: Under `app/api/**`. Some routes currently appear to be placeholders (files contain no implementation yet).

## Prisma client pattern
- App code imports Prisma client from `app/generated/prisma` via `lib/prisma.ts` and extends it with `@prisma/extension-accelerate`.
- Seed script uses `@prisma/client` directly (`prisma/seed.ts`), which may be intentional (server-side only) but is worth keeping consistent.

## UI/theming pattern
- Theme handled via `next-themes` provider in `app/providers.tsx`.
- Tailwind configured with HeroUI plugin (`tailwind.config.js`).


