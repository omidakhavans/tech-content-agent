---
name: edit-blog
description: Revise or finalize an existing technical blog from author feedback or review findings, preserving accepted content and evidence boundaries. Use for focused changes, voice or technical revisions, headings and canonical-file finalization; save blog-draft.md with history and identify needed review without publishing or generating social posts.
---

# Edit Blog

Apply the requested revision to the author's current article. Preserve accepted story, voice and claims unless the requested change requires altering them. Do not restart the research or rewrite the whole piece for a bounded edit.

## Inputs and Supporting Guidance

Use the supplied article or conversation draft and its subject folder, otherwise `<content-workspace>/.techcontent/<title-slug>/`. Read available `context-brief.md`, `draft-notes.md` and `blog-review.md`; an ordinary edit can proceed without a context brief, but missing evidence must not be invented.

Read [author context](../../content-skill-references/author-context.md), [article contract](../../content-skill-references/article-contract.md) and [dependency policy](../../content-skill-references/dependency-policy.md). Consult [Copy Editing](../../content-skill-dependencies/copy-editing/SKILL.md) for meaningful prose revisions and [Humanizer](../../content-skill-dependencies/humanizer/SKILL.md) when improving voice. For structure or comprehension, use the local author-context guidance. A tiny formatting change does not require loading unrelated dependency guidance. Local instructions override conflicting dependency guidance.

## Workflow

1. Resolve the current intended article from the latest author context. Follow the legacy normalization rule if multiple final-looking files exist; do not select by filename alone.
2. Capture new author decisions once in the brief or draft notes. Distinguish enduring accepted content from the current edit request. Product naming, story, tone and technical depth come from this author and article; do not import another article's preferences.
3. Make the smallest coherent revision that satisfies the request. A request for more technical depth should connect relevant mechanisms, failures or value to the thesis, while preserving an accepted narrative. Protect code, links, factual qualifiers and citation support during prose edits.
4. Compare the revision with the previous article. Verify the requested change, preservation of accepted elements, and consistency of the opening and conclusion. Treat hypothetical scenarios as hypothetical. Do not add personal experience or results without evidence.
5. Check changed factual claims against the available evidence. If a material new claim lacks support, qualify/remove it when that satisfies the request, or identify the specific research gap. Tiny heading or formatting changes do not require fresh repository or web research. Follow runtime requirements to verify current claims when necessary; keep any research bounded to the changed claim.
6. Preserve history, save `blog-draft.md`, read it back and verify completion. Record meaningful changes and author decisions in `draft-notes.md`; no separate change-log is needed for trivial edits.
7. Follow the exact-revision review contract. For formatting-only edits with a trustworthy prior review, perform the focused integrity check and record its updated fingerprint and retained findings. For substantive changes, use `review-blog` for a focused follow-up when available and supported by the brief; otherwise clearly leave the review stale and identify the needed review. Never merely copy an old score/hash onto a new revision. Derivatives remain gated until reviewed or explicitly directed otherwise by the user.

## Output

Return the saved canonical article path, a concise description of changes and review status. Provide the full revised prose only when useful or requested. Finalization does not authorize publication, social generation, staging, committing or pushing.
