# Architecture — portfolio

## System shape

One paragraph: the deployable units, how they talk, what the data flow is.

## Module map

| Module / dir | Responsibility | May depend on |
|---|---|---|
| | | |

## Boundaries

- What may NOT depend on what (direction rules, circular-dependency bans).
- Where business logic lives vs transport vs presentation.

## Data flow

- Request/job/event path end-to-end for the core flows.

## External dependencies

- Services, APIs, storage, queues — and which direction calls go.

## Decisions

- Architecture decisions are recorded in `docs/ADR/`. This file describes the current state, ADRs describe the why.
