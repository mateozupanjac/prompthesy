# Product Context — Prompthesy

## Why this exists
Prompthesy combines a traditional I Ching reading workflow with modern UX: users can “prompt the prophecy” and then **discuss/interpret** the result conversationally.

## Problems it solves
- Makes the I Ching more approachable by pairing the reading with a guided conversation.
- Lets users **save** readings and come back later (and optionally share them).
- Centralizes canonical I Ching text so interpretations can reference consistent source material.

## Primary user journeys
- **Landing → Login**: Current home route redirects users to `/login`.
- **Sign in**: UI supports “magic link” style email input (currently stubbed in UI) and has placeholders for OAuth.
- **Create a reading**:
  - Method: coin tosses (e.g., “3_coins”) or manual.
  - Output: base hexagram, moving lines, result hexagram.
  - Optional: question and notes.
- **Chat about a reading**:
  - A chat session is attached to a reading.
  - Messages are role-based (`user` / `assistant` / `system`).
- **Share a reading**:
  - Share links are tokenized and associated with readings.

## UX principles
- **Calm, focused interface**: Minimal distractions; reading and conversation are the center.
- **Transparency**: Preserve “how the reading was produced” (store tosses/inputs).
- **Fast iteration**: Favor stubs/vertical slices that can be filled in incrementally.

## Target experience
Users should be able to go from question → reading → interpretation chat within a minute, with clear navigation to revisit past readings.


