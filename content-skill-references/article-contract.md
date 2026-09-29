# Canonical Article and Review Contract

Within a subject folder, `blog-draft.md` is the single current article, including when the author calls it final. Final means the author's current version, not permission to publish. `blog-review.md` describes one exact revision. History is not an alternate current version.

## Saving revisions

Before replacing an existing article with changed content, preserve its exact bytes in `history/blog-draft-<sha256>.md` (reuse an identical snapshot). Preserve a review being replaced in the same way as `history/blog-review-<sha256>.md`. Never overwrite unrelated history. Save the selected revised article to `blog-draft.md`, read it back and verify the requested change is present before reporting success.

For legacy folders containing `blog-draft-reviewed.md` or another final-looking filename, resolve the intended current version from the author's explicit path and latest accepted revision. A filename or modification time alone is insufficient. If the versions conflict and intent is unclear, ask before replacing either. Once resolved, preserve the previous canonical version, copy the intended current article to `blog-draft.md`, and record that normalization in `draft-notes.md`. Keep legacy files as history and do not let their presence silently override the canonical file on later runs. Derivative skills must not guess or fall back to an older article; use `edit-blog` for necessary normalization.

## Exact review identity

Compute SHA-256 from the complete saved bytes, not a quoted article excerpt. For example, run `shasum -a 256 blog-draft.md` in the subject folder. A review begins with:

```yaml
---
reviewed_article: blog-draft.md
reviewed_sha256: "<actual 64-character SHA-256>"
review_scope: full
approval_status: ready_for_human_review
reviewed_at: "<actual ISO-8601 timestamp>"
---
```

Use `review_scope: full`, `focused_revision` or `editorial_only` and `approval_status: needs_revision` or `ready_for_human_review` as appropriate. Limited evidence coverage must be explicit in the body. Never manufacture a fingerprint or advance it without inspecting the corresponding revision.

Any byte change makes the previous fingerprint stale. A formatting-only revision needs a focused check that meaning, links, examples and claim boundaries remain intact; it does not need repeated research. Update the review fingerprint only after that check, identify the prior review and preserve its applicable findings. A substantive revision needs focused review of changed claims and their effects on the opening, reasoning and conclusion. If no trustworthy prior review exists, perform a full review (or explicitly limited editorial review when the author directs it).

## Derivative gate

Before social generation, compare the current `blog-draft.md` hash to `reviewed_sha256`, require `reviewed_article: blog-draft.md`, and inspect review scope and status. A missing fingerprint, mismatch, unresolved legacy version, `editorial_only` review or `needs_revision` is not a passing evidence-aware review. Request/run the appropriate review when authorized; otherwise explain what is missing. Only an explicit user direction may permit a degraded draft. Label it unreviewed or limited, state the exact gap, avoid known unsupported claims, and never present an old score as applying to the current article.

Record the source article path/hash and review scope in derivative artifacts. When a run is resumed, valid review identity is necessary before treating the review stage as reused.
