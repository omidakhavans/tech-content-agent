---
name: review-blog
description: Review a technical article against its evidence context and author brief, separating factual findings from editorial judgments and scoring the exact saved revision. Save blog-review.md with the canonical article fingerprint; use before social derivatives or after substantive edits, without publishing or silently rewriting the article.
---

# Review Blog

Review `blog-draft.md` against `context-brief.md` and the author's current decisions. A review is fallible evidence-aware evaluation, not proof of correctness or measured SEO performance.

## Inputs and Supporting Guidance

Use the supplied subject folder, otherwise `/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/`. A missing article requires an article; a missing context brief permits only an explicitly requested limited article-only editorial review.

Read [author context](../../content-skill-references/author-context.md), [article contract](../../content-skill-references/article-contract.md), [rubric](../../content-skill-references/review-rubric.md) and [dependency policy](../../content-skill-references/dependency-policy.md). Consult [Copy Editing](../../content-skill-dependencies/copy-editing/SKILL.md) for focused editorial passes and [Humanizer](../../content-skill-dependencies/humanizer/SKILL.md) for voice concerns. Use the local audience-comprehension check for reader clarity; simulated reader/persona judgments do not verify facts. Local instructions override conflicting dependency guidance.

## Workflow

1. Resolve the intended canonical article and its author context. Compute the SHA-256 of the saved file. If legacy versions conflict, follow the article contract rather than guessing which is current.
2. Select scope: full review for a new or untrusted draft; focused revision review when a trustworthy prior review and its exact earlier article are available. Inspect changed claims and their effects on the entire argument. Formatting-only changes need a focused integrity check, not new research.
3. Compare checkable claims with the context brief. Work claims need verified work evidence; general explanations need appropriate external evidence. Interpretations and hypothetical examples must not become reported outcomes. Record what was actually checked and what was not; do not invent missing evidence or call a cited URL verified without checking its supporting content.
4. Check the opening, reasoning and conclusion together. Do promised results exist? Does the ending overgeneralize a benchmark or hypothetical story? Separate unsupported facts from legitimate, clearly framed opinions.
5. Review reader comprehension, technical relevance, voice and structure against the author's brief. Check accepted decisions remain intact. For product or infrastructure articles, examine selection, integration, runtime and payment roles only when relevant to the thesis.
6. Apply the weighted editorial rubric. Provide a reason for each score and separate the subjective score from factual findings. Do not claim the score predicts ranking, traffic or adoption.
7. Classify each finding by type (`factual`, `technical reasoning` or `editorial`) and severity: `Critical` for incorrect, unsupported or materially misleading factual claims; `Important` for consequential ambiguity or missing context; `Improvement` for polish. Mark important supported claims `Verified` only within the stated evidence coverage.
8. Set `needs_revision` for Critical findings or Important findings that would mislead. Otherwise use `ready_for_human_review`, retaining evidence limitations. An `editorial_only` review is never a passing factual gate for derivatives without explicit user direction.
9. Save `blog-review.md` using [review format](references/review-format.md) and the exact fingerprint contract. Preserve the previous review when replacing it. Do not mutate the article merely to improve its score; route requested revisions through `edit-blog` and review the resulting bytes.

## Output

Return the review path, status, score or scoring limitation, and highest-priority findings. Keep review findings separate from any proposed prose. Do not publish or generate social posts.
