---
name: review-blog
description: Review a generated technical blog draft against the article itself and the evidence/context package used to generate it. Use when the user asks for an editorial and technical quality gate before social-content generation by reading blog-draft.md and context-brief.md under /Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent, classifying unsupported claims, hallucinations, exaggeration, contradictions, weak explanations, filler, structure issues, source traceability, approval status, and saving blog-review.md without publishing.
---

# Review Blog

## Overview

Evaluate `blog-draft.md` against `context-brief.md` and the article itself. Do not publish, generate social posts, or treat the review as proof of correctness.

Use this after `write-blog` and before social derivative skills:

`research -> evidence context -> write-blog -> review-blog -> social derivatives`

## Core Rules

- Use a structured review process; do not merely answer "is this article good?"
- Compare article claims against `context-brief.md`.
- Surface unsupported or incorrect claims clearly.
- Do not silently rewrite major technical claims to make them pass.
- Do not invent missing evidence during review.
- Preserve source/evidence references for findings.
- Classify findings by severity and type.
- Remember that an LLM review is not proof of correctness; human review remains required.
- Save review artifacts as Markdown files under the configured content workspace.

## Artifact Storage

Store every review run under:

`/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/`

Use the user-supplied title or subject as the folder name source. If the user provides an existing `.techcontent` folder path, write into that folder.

For V1, create at least:

- `blog-review.md`: the structured review from `references/review-format.md`.

Create optional Markdown artifacts only when useful:

- `blog-draft-reviewed.md`: a revised draft, only if the user asks for revision or the changes are small and clearly described.
- `review-change-log.md`: material changes made in a revised draft and why.
- `claim-check.md`: detailed claim-by-claim mapping when the article has many technical claims.

Do not store non-Markdown artifacts for this skill unless the user explicitly asks.

## Workflow

1. Identify the subject and artifact folder.
   - Prefer an explicit `.techcontent/<title-slug>/` path when supplied.
   - Otherwise derive the slug from the user-supplied title or subject.
2. Locate source artifacts.
   - Read `blog-draft.md`.
   - Read `context-brief.md`.
   - If `blog-draft.md` is missing, stop and ask for a draft.
   - If `context-brief.md` is missing, stop unless the user explicitly requests article-only editorial review; mark that review as limited.
3. Extract checkable claims from the draft.
   - Claims about what the user built, tested, learned, or discovered.
   - Technical explanations and comparisons.
   - Causal claims, chronology, tradeoffs, failures, and outcomes.
   - Takeaways and recommendations.
4. Compare claims to evidence.
   - Prefer `Verified work evidence` from `context-brief.md` for claims about the user's work.
   - Use `Verified external knowledge` for concepts, terminology, and general technical explanations.
   - Treat `Interpretation` as interpretation, not fact.
   - Flag anything listed under "Claims That Must Not Be Stated As Fact" if it appears as fact in the draft.
5. Review article quality.
   - Technical correctness and clarity.
   - Reasoning quality and whether conclusions follow from evidence.
   - Missing important context from the brief.
   - Exaggeration, hype, misleading certainty, generic filler, repetition, and weak takeaways.
   - Structure, narrative flow, and whether headings/lists help.
6. Classify findings.
   - `Critical`: unsupported, incorrect, hallucinated, or materially misleading claim.
   - `Important`: unclear, weak, exaggerated, or missing context that materially affects quality.
   - `Improvement`: style, structure, flow, concision, or polish.
   - `Verified`: important claim successfully grounded in evidence.
7. Decide approval status.
   - Use `needs_revision` when Critical findings exist or Important findings would mislead readers.
   - Use `ready_for_human_review` only when no Critical findings remain and remaining issues are editorial or require human preference.
   - Never use an LLM approval as a substitute for human review.
8. Save the review.
   - Read `references/review-format.md` and follow its structure.
   - Write the main artifact to `blog-review.md`.
   - Write optional supporting artifacts only when useful.
   - If producing a revised draft, preserve visibility into material changes and why.
   - In the final response, include the saved artifact path, approval status, and top findings.

## Evaluation Pattern

Generation and evaluation should be separate responsibilities. `write-blog` optimizes for producing a useful draft; `review-blog` checks that draft against evidence and editorial standards. Evidence-aware evaluation can catch hallucinations, unsupported claims, and overconfident phrasing that a free-form quality check might miss.

Limitation: an LLM reviewing another LLM's output is still fallible. The review improves reliability, but it does not prove correctness. Human review remains required before publication.

## Output Contract

Save the structured review to `blog-review.md` and return a concise final response with the artifact path, approval status, and highest-priority findings. Do not publish anything.

Before writing the review, read `references/review-format.md`.
