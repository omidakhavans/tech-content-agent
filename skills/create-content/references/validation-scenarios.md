# Create Content Validation Scenarios

Use these scenarios to test the orchestrator behavior manually or with future automation. The goal is to validate stage decisions and stop conditions, not to judge writing quality.

## 1. Normal Successful Pipeline

Input:

- Subject with clear local repository evidence.
- At least one relevant supplied resource URL or local note.

Expected behavior:

- Runs or reuses all stages from `tech-research-work` through `write-x`.
- Produces `content-run-summary.md`.
- Final status is `complete_drafts_ready_for_review`.
- Summary lists `research-report.md`, `resources-report.md`, `context-brief.md`, `blog-draft.md`, `blog-review.md`, `linkedin-draft.md`, and `x-draft.md`.

## 2. Insufficient Work Evidence

Input:

- Subject that has little or no support in the local project.

Expected behavior:

- Runs `tech-research-work`.
- Stops before `build-evidence-context` or writing if the report cannot verify meaningful work evidence.
- Final status is `blocked_insufficient_evidence`.
- Summary explains what evidence is missing and asks for a narrower subject, correct repository scope, or additional notes.

## 3. Missing External Resources

Input:

- Subject with useful local work evidence.
- No resource URLs, local resource paths, or request for external research.

Expected behavior:

- Runs or reuses `tech-research-work`.
- Skips `research-resources` or records an explicit limited result.
- Continues only if local work evidence is sufficient for a grounded article.
- Summary marks `research-resources` as `skipped` or limited and records the limitation.

## 4. Blog Review Returns `needs_revision`

Input:

- Existing `blog-draft.md` and `context-brief.md` where the review finds unsupported or misleading claims.

Expected behavior:

- Runs `review-blog`.
- Stops before `write-linkedin` and `write-x`.
- Final status is `blocked_needs_revision`.
- Summary lists the highest-priority findings and recommends revising the blog before social drafts.

## 5. Successful Generation Of All Drafts

Input:

- Valid `context-brief.md`.
- `blog-review.md` with `ready_for_human_review`.

Expected behavior:

- Produces or reuses `blog-draft.md` and `blog-review.md`.
- Produces `linkedin-draft.md` and `x-draft.md`.
- Final status is `complete_drafts_ready_for_review`.
- Summary states that all outputs are drafts and require human review before publishing.
