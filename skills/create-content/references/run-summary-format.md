# Content Run Summary Format

Use this structure for `create-content` output. Keep it concise, operational, and easy for a later Codex session or human reviewer to continue.

## Subject

State the exact subject used for the run.

## Final Status

Use one:

- `complete_drafts_ready_for_review`
- `blocked_insufficient_evidence`
- `blocked_missing_inputs`
- `blocked_needs_revision`
- `partial_context_only`

Include a one-sentence rationale.

## Artifact Folder

Provide the absolute path to the `.techcontent/<title-slug>/` folder.

## Inputs

- Subject:
- Repository/project scope:
- Resource URLs:
- Local resource paths:
- Additional notes/context:

## Stage Summary

For each stage, use one of `executed`, `reused`, `skipped`, or `blocked`.

| Stage | Status | Artifact | Decision Notes |
| --- | --- | --- | --- |
| `tech-research-work` |  | `research-report.md` |  |
| `research-resources` |  | `resources-report.md` |  |
| `build-evidence-context` |  | `context-brief.md` |  |
| `write-blog` |  | `blog-draft.md` |  |
| `review-blog` |  | `blog-review.md` |  |
| `write-linkedin` |  | `linkedin-draft.md` |  |
| `write-x` |  | `x-draft.md` |  |

## Artifacts Produced Or Reused

List absolute paths for every artifact produced or reused.

## Important Warnings

Capture limitations that later skills or the user must see:

- Insufficient work evidence:
- Missing or skipped external resources:
- Unsupported claims:
- Contradictions or uncertainty:
- Review caveats:

## Human Attention Required

List decisions, edits, or verification steps the user should handle before publishing.

## Next Recommended Action

State the single next action for this content run, such as:

- Review drafts manually.
- Revise the blog and rerun `review-blog`.
- Provide more work evidence.
- Provide resource URLs or notes.
- Run social review when available.
