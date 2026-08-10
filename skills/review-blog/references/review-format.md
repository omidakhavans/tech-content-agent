# Blog Review Format

Use this structure for `review-blog` output. Keep findings actionable, evidence-aware, and easy for the user to inspect.

## Subject

State the subject or article title.

## Input Artifacts

- Artifact folder:
- `blog-draft.md`: Present/missing and brief note.
- `context-brief.md`: Present/missing and brief note.
- Optional artifacts inspected:

## Approval Status

Use one:

- `needs_revision`
- `ready_for_human_review`

Include a one-sentence rationale.

## Overall Assessment

Summarize the draft's quality, accuracy risk, and readiness in 3-6 bullets.

## Grounding And Accuracy Findings

Classify each finding:

- `Critical`: unsupported, incorrect, hallucinated, or materially misleading claim.
- `Important`: unclear, weak, exaggerated, or missing context that materially affects quality.
- `Improvement`: style, structure, flow, concision, or polish.
- `Verified`: important claim successfully grounded in evidence.

For each finding include:

- Finding:
- Evidence/reference:
- Recommendation:

## Technical Quality Findings

Review technical explanations, reasoning, tradeoffs, terminology, and whether conclusions follow from evidence.

## Editorial Findings

Review structure, clarity, repetition, filler, tone, headings, takeaways, and narrative flow.

## Unsupported Claims

List claims that should not be stated as fact unless the user provides evidence or edits them.

## Contradictions Or Uncertainty

List contradictions with `context-brief.md`, ambiguous chronology, misleading certainty, or uncertainty that needs human review.

## Recommended Changes

Prioritize changes:

- Must change:
- Should change:
- Could improve:

## Verified Claims

List important claims that are supported by evidence and safe to preserve.

## Evidence References

Preserve traceability:

- Context brief references:
- Work evidence references:
- External source references:

## Revised Draft

Only include this section if a revised draft is produced. Otherwise state: "Not produced."

## Material Change Log

If a revised draft is produced, list what materially changed and why.

## Human Review Notes

State what the user should personally verify before publication.

## Generated Artifacts

List Markdown files written for this review run:

- `blog-review.md`: Main review report.
- `blog-draft-reviewed.md`: Optional.
- `review-change-log.md`: Optional.
- `claim-check.md`: Optional.
