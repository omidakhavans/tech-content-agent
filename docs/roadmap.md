# Personal Applied AI Engineering Content Agent Roadmap

## Phase 1 Goal

Build a simple Content Agent prototype using Codex Skills as the runtime. The purpose is to learn agent workflow design, decomposition, context handling, evidence gathering, and skill interfaces before building a custom runtime.

Current direction:

```text
subject -> create-content -> research-work + research-resources -> build-evidence-context -> write-blog -> review-blog -> write-linkedin + write-x
```

## Completed Skills

- `tech-research-work`: Completed. Researches local project/repository evidence about what was actually built and saves `research-report.md`.
- `research-resources`: Completed. Researches external or explicitly supplied resources and saves `resources-report.md`.
- `build-evidence-context`: Completed. Merges research artifacts into a concise, writing-ready `context-brief.md`.
- `write-blog`: Completed. Turns `context-brief.md` into a grounded technical blog draft saved as `blog-draft.md`.
- `edit-blog`: Added. Applies author feedback to the canonical article while preserving accepted content and revision history.
- `review-blog`: Completed. Reviews `blog-draft.md` against `context-brief.md` and saves `blog-review.md`.
- `write-linkedin`: Completed. Transforms the reviewed blog into a LinkedIn draft saved as `linkedin-draft.md`.
- `write-x`: Completed. Transforms the reviewed blog into a single X post or thread saved as `x-draft.md`.
- `create-content`: Completed. Orchestrates the full Phase 1 workflow from one subject, checks stage status, stops on insufficient evidence or `needs_revision`, and saves `content-run-summary.md`.

## Phase 1 Status

The core Phase 1 Content Agent prototype is complete.

It is functional as a Codex Skills-based workflow: a user can start with one subject, produce grounded research, reduce it into evidence context, draft a canonical blog article, review that article, and generate LinkedIn and X drafts when the review does not block continuation.

Human review remains required before publishing.

## Public website and documentation

The repository now includes a static Next.js website and Fumadocs MDX documentation under `app/`, `components/`, `content/docs/`, and `lib/`. GitHub Actions builds and deploys the committed site to GitHub Pages on pushes to `main`; it does not call an LLM or rewrite documentation in CI.

The source of truth for documentation remains Markdown/MDX and the existing skill contracts. A future `document-project` skill can inspect diffs and update affected pages as a reviewed code change, but autonomous documentation commits are intentionally out of scope.

## Artifact Convention

All research and later content artifacts should be Markdown files stored under:

```text
<content-workspace>/.techcontent/<title-slug>/
```

Current research artifacts:

- `research-report.md`: Local project/repository evidence from `tech-research-work`.
- `resources-report.md`: External/supplied resource evidence from `research-resources`.
- `context-brief.md`: Reduced, grounded context package from `build-evidence-context`.
- `blog-draft.md`: Canonical long-form article draft from `write-blog`.
- `blog-review.md`: Editorial and technical review report from `review-blog`.
- `history/`: Exact prior article and review revisions, named by SHA-256.
- `linkedin-draft.md`: LinkedIn post draft from `write-linkedin`.
- `x-draft.md`: X single post or thread draft from `write-x`.
- `content-run-summary.md`: End-to-end orchestration summary from `create-content`.

## Recommended Next Step

Begin Phase 2 with a minimal custom agent runtime spike.

Why this should come next:

- Phase 1 now has enough working skill contracts to serve as a reference implementation.
- The next learning goal is understanding what Codex has been providing as the runtime: state tracking, tool use, stage gating, filesystem operations, and judgment between deterministic workflow steps.
- A minimal runtime spike can replay the existing artifact-based workflow using a raw LLM API without introducing LangChain, LangGraph, RAG, vector databases, queues, publishing APIs, or social APIs.

Suggested Phase 2 scope:

```text
subject -> load workflow config -> run one stage at a time -> write Markdown artifacts -> stop on explicit status gates
```

Do not implement Phase 2 until explicitly requested.

After the runtime spike, consider `review-social` as the next quality-gate skill for checking `linkedin-draft.md` and `x-draft.md` against the canonical blog and `blog-review.md`.

## Design Notes

- Keep Phase 1 skill-first and runtime-light.
- Prefer small, inspectable Markdown artifacts over hidden state or generated databases.
- Continue separating source facts, interpretations, and unknowns.
- Treat context engineering as its own step: select, structure, ground, and reduce research before asking a model to write.
- Treat grounded generation as its own step: write from `context-brief.md` rather than giving the writer unrestricted freedom to reconstruct the research.
- Treat evaluation as its own step: compare generated content against evidence before deriving more content from it.
- Remember the evaluator limitation: LLM review improves reliability but does not prove correctness; human review remains required.
- Treat platform-specific social writing as transformation: adapt the reviewed canonical article instead of independently reconstructing the story.
- Treat controlled generation as a practical constraint system: trusted source content, platform objectives, explicit boundaries, and structured outputs keep social drafts creative but bounded.
- Treat orchestration as coordination, not capability duplication: the orchestrator should call or reuse focused skills and inspect their artifacts before advancing.
- Keep deterministic workflow rules separate from agentic decisions: the order of stages is fixed, but continuation depends on evidence quality, missing inputs, review status, and user intent.
- Avoid RAG, LangChain, LangGraph, vector databases, or custom infrastructure until the workflow proves it needs them.
