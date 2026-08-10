# Personal Applied AI Engineering Content Agent Roadmap

## Phase 1 Goal

Build a simple Content Agent prototype using Codex Skills as the runtime. The purpose is to learn agent workflow design, decomposition, context handling, evidence gathering, and skill interfaces before building a custom runtime.

Current direction:

```text
subject -> research-work + research-resources -> build-evidence-context -> write-blog -> review-blog -> write-linkedin -> other social derivatives
```

## Completed Skills

- `tech-research-work`: Completed. Researches local project/repository evidence about what was actually built and saves `research-report.md`.
- `research-resources`: Completed. Researches external or explicitly supplied resources and saves `resources-report.md`.
- `build-evidence-context`: Completed. Merges research artifacts into a concise, writing-ready `context-brief.md`.
- `write-blog`: Completed. Turns `context-brief.md` into a grounded technical blog draft saved as `blog-draft.md`.
- `review-blog`: Completed. Reviews `blog-draft.md` against `context-brief.md` and saves `blog-review.md`.
- `write-linkedin`: Completed. Transforms the reviewed blog into a LinkedIn draft saved as `linkedin-draft.md`.

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
- `blog-review.md`: Editorial and technical review report from `review-blog`.
- `linkedin-draft.md`: LinkedIn post draft from `write-linkedin`.

## Recommended Next Skill

Build `review-linkedin` next.

Why this should come next:

- `linkedin-draft.md` is a platform-specific transformation and remains a draft.
- A lightweight review step should check that the LinkedIn version did not reintroduce claims rejected by `blog-review.md`, exaggerate the article, or become generic social content.
- Reviewing LinkedIn before building X content keeps the derivative branch grounded and gives the user a better first social artifact.

Suggested output artifact:

```text
linkedin-review.md
```

Do not implement `review-linkedin` until explicitly requested.

## Design Notes

- Keep Phase 1 skill-first and runtime-light.
- Prefer small, inspectable Markdown artifacts over hidden state or generated databases.
- Continue separating source facts, interpretations, and unknowns.
- Treat context engineering as its own step: select, structure, ground, and reduce research before asking a model to write.
- Treat grounded generation as its own step: write from `context-brief.md` rather than giving the writer unrestricted freedom to reconstruct the research.
- Treat evaluation as its own step: compare generated content against evidence before deriving more content from it.
- Remember the evaluator limitation: LLM review improves reliability but does not prove correctness; human review remains required.
- Treat platform-specific social writing as transformation: adapt the reviewed canonical article instead of independently reconstructing the story.
- Avoid RAG, LangChain, LangGraph, vector databases, or custom infrastructure until the workflow proves it needs them.
