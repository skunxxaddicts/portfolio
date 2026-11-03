# Security Model — portfolio

## Trust boundaries

- What is untrusted input, where it enters, where it's validated.

## Authentication

- Mechanism, session/token handling, storage.

## Authorization

- Roles/permissions, where checks are enforced (server-side, which layer).

## Data protection

- Secrets handling (env names only, never values), sensitive fields, encryption needs.

## Abuse surface

- Public endpoints needing rate limits / CAPTCHA / idempotency; upload policies; webhook verification.

## Dependency policy

- Audit command: `bun audit`
- New deps: justify need + maintenance; prefer versions published >7 days; no floating ranges.

## Out of scope / accepted risks

- Deliberately accepted risks, documented honestly.
