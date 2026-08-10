# Personal Applied AI Engineering Content Agent Roadmap

## Phase 1 Goal

Build a simple Content Agent prototype using Codex Skills as the runtime. The purpose is to learn agent workflow design, decomposition, context handling, evidence gathering, and skill interfaces before building a custom runtime.

Current direction:

```text
subject -> research-work -> research-resources -> evidence/context -> writing -> social derivatives -> review
```

## Completed Skills

- `tech-research-work`: Completed. Researches local project/repository evidence about what was actually built and saves `research-report.md`.
- `research-resources`: Completed. Researches external or explicitly supplied resources and saves `resources-report.md`.

## Artifact Convention

All research and later content artifacts should be Markdown files stored under:

```text
/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/
```

Current research artifacts:

- `research-report.md`: Local project/repository evidence from `tech-research-work`.
- `resources-report.md`: External/supplied resource evidence from `research-resources`.

## Recommended Next Skill

Build `evidence-context` next.

Why this should come next:

- The first two skills produce separate evidence streams: what was built and what external resources explain.
- Writing should not begin until those streams are reconciled into a compact content brief.
- `evidence-context` can merge `research-report.md` and `resources-report.md`, identify the strongest claims, flag weak or unsupported claims, and produce a writing-ready brief.
- This keeps writing skills simpler because they can consume one curated context artifact instead of re-solving evidence synthesis every time.

Suggested output artifact:

```text
context-brief.md
```

Do not implement `evidence-context` until explicitly requested.

## Design Notes

- Keep Phase 1 skill-first and runtime-light.
- Prefer small, inspectable Markdown artifacts over hidden state or generated databases.
- Continue separating source facts, interpretations, and unknowns.
- Avoid RAG, LangChain, LangGraph, vector databases, or custom infrastructure until the workflow proves it needs them.
