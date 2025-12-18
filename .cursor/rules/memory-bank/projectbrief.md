# Project Brief — Prompthesy

## Summary
Prompthesy is a web app that helps users **generate I Ching readings** (hexagrams) and **converse about them** in a chat-like experience. It uses a Postgres database (via Prisma) to store canonical I Ching content (trigrams/hexagrams/lines) plus user readings, chat sessions, and related entities.

## Core goals
- **Create readings**: Persist a reading with base/result hexagrams, moving lines, and optional question/notes.
- **Chat about readings**: Attach chat sessions/messages to a specific reading.
- **Account support**: Users can sign in so readings/chats can be saved across sessions.
- **Share + revisit**: Enable deep links / share tokens for readings (and/or chats) where appropriate.

## Non-goals (for now)
- Full CMS/editor for hexagram content (seeded canonical content is the source of truth).
- Complex social features beyond share links (e.g., followers, public profiles).

## Key constraints
- **App Router**: Next.js app directory routing.
- **DB-first domain**: Prisma schema defines core domain objects (Hexagram/Reading/Chat).
- **Environment-driven config**: Requires `DATABASE_URL` for Postgres.

## Success criteria
- A user can generate or create a reading, see base/result hexagrams and line texts, and have a coherent “conversation” tied to that reading.
- Signed-in users can return and see their past readings and chats.
- The system is stable, typed, and deployable with minimal manual steps.


