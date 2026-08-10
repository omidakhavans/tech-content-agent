# Personal Applied AI Engineering Content Agent Roadmap

## Phase 1 Goal

Build a simple Content Agent prototype using Codex Skills as the runtime. The purpose is to learn agent workflow design, decomposition, context handling, evidence gathering, and skill interfaces before building a custom runtime.

Current direction:

```text
subject -> research-work + research-resources -> build-evidence-context -> writing -> social derivatives -> review
```

## Completed Skills

- `tech-research-work`: Completed. Researches local project/repository evidence about what was actually built and saves `research-report.md`.
- `research-resources`: Completed. Researches external or explicitly supplied resources and saves `resources-report.md`.
- `build-evidence-context`: Completed. Merges research artifacts into a concise, writing-ready `context-brief.md`.

## Artifact Convention

All research and later content artifacts should be Markdown files stored under:

```text
/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/
```

Current research artifacts:

- `research-report.md`: Local project/repository evidence from `tech-research-work`.
- `resources-report.md`: External/supplied resource evidence from `research-resources`.
- `context-brief.md`: Reduced, grounded context package from `build-evidence-context`.

## Recommended Next Skill

Build `write-blog-draft` next.

Why this should come next:

- Research and context engineering are now separated from writing.
- `context-brief.md` is the correct input for a first long-form writing skill.
- A blog draft is the most useful next canonical artifact because LinkedIn and X derivatives should come from a stable long-form draft, not directly from raw research.
- `write-blog-draft` can focus on structure, narrative, clarity, and audience while relying on `context-brief.md` for facts and claim boundaries.

Suggested output artifact:

```text
blog-draft.md
```

Do not implement `write-blog-draft` until explicitly requested.

## Design Notes

- Keep Phase 1 skill-first and runtime-light.
- Prefer small, inspectable Markdown artifacts over hidden state or generated databases.
- Continue separating source facts, interpretations, and unknowns.
- Treat context engineering as its own step: select, structure, ground, and reduce research before asking a model to write.
- Avoid RAG, LangChain, LangGraph, vector databases, or custom infrastructure until the workflow proves it needs them.
