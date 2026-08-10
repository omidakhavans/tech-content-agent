# Personal Applied AI Engineering Content Agent Roadmap

## Phase 1 Goal

Build a simple Content Agent prototype using Codex Skills as the runtime. The purpose is to learn agent workflow design, decomposition, context handling, evidence gathering, and skill interfaces before building a custom runtime.

Current direction:

```text
subject -> research-work + research-resources -> build-evidence-context -> write-blog -> social derivatives -> review
```

## Completed Skills

- `tech-research-work`: Completed. Researches local project/repository evidence about what was actually built and saves `research-report.md`.
- `research-resources`: Completed. Researches external or explicitly supplied resources and saves `resources-report.md`.
- `build-evidence-context`: Completed. Merges research artifacts into a concise, writing-ready `context-brief.md`.
- `write-blog`: Completed. Turns `context-brief.md` into a grounded technical blog draft saved as `blog-draft.md`.

## Artifact Convention

All research and later content artifacts should be Markdown files stored under:

```text
/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/
```

Current research artifacts:

- `research-report.md`: Local project/repository evidence from `tech-research-work`.
- `resources-report.md`: External/supplied resource evidence from `research-resources`.
- `context-brief.md`: Reduced, grounded context package from `build-evidence-context`.
- `blog-draft.md`: Canonical long-form article draft from `write-blog`.

## Recommended Next Skill

Build `review-blog` next.

Why this should come next:

- `blog-draft.md` is explicitly a draft and should not become the source for social derivatives until it has been checked.
- A review step can compare the draft back against `context-brief.md`, flag unsupported claims, remove hype, improve clarity, and produce a cleaner canonical article.
- Reviewing before derivative generation prevents errors from being amplified into LinkedIn and X posts.

Suggested output artifact:

```text
blog-review.md
```

Do not implement `review-blog` until explicitly requested.

## Design Notes

- Keep Phase 1 skill-first and runtime-light.
- Prefer small, inspectable Markdown artifacts over hidden state or generated databases.
- Continue separating source facts, interpretations, and unknowns.
- Treat context engineering as its own step: select, structure, ground, and reduce research before asking a model to write.
- Treat grounded generation as its own step: write from `context-brief.md` rather than giving the writer unrestricted freedom to reconstruct the research.
- Avoid RAG, LangChain, LangGraph, vector databases, or custom infrastructure until the workflow proves it needs them.
