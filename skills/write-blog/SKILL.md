---
name: write-blog
description: Write a grounded technical blog draft from a prepared context-brief.md artifact under /Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent. Use when the user asks to transform an evidence/context package into a high-quality technical article draft that explains what they built, tested, learned, or discovered while preserving accuracy, separating personal experience from general technical knowledge, retaining evidence references, and saving blog-draft.md without researching, publishing, or generating social posts.
---

# Write Blog

## Overview

Transform a prepared `context-brief.md` into a technical blog draft suitable for human review. Do not research, publish, or generate LinkedIn/X derivatives.

Use this after the context-building skill:

`subject -> research -> evidence context -> write-blog -> social derivatives`

The blog draft is the canonical long-form content artifact for later derivative skills.

## Core Rules

- Generate from `context-brief.md`; do not reconstruct research from scratch.
- Do not invent personal experiences, production usage, experiments, failures, or lessons.
- Distinguish the user's actual work from general technical knowledge.
- Preserve technical accuracy and important source/evidence references.
- Include failures, tradeoffs, and uncertainty when they are meaningful and supported.
- Avoid exaggerated claims, hype, generic AI filler, and fake certainty.
- Do not turn the article into product docs or a list-heavy research report.
- Save draft artifacts as Markdown files under the configured content workspace.
- Do not publish, create WordPress posts, or generate LinkedIn/X content.

## Artifact Storage

Store every blog-writing run under:

`/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/`

Use the user-supplied title or subject as the folder name source. If the user provides an existing `.techcontent` folder path, write into that folder.

For V1, create at least:

- `blog-draft.md`: the article draft from `references/draft-format.md`.

Create optional Markdown artifacts only when useful:

- `draft-notes.md`: writing choices, title alternatives, or structural notes.
- `review-questions.md`: questions the user should answer before publishing when many claims need review.

Do not store non-Markdown artifacts for this skill unless the user explicitly asks.

## Workflow

1. Identify the subject and artifact folder.
   - Prefer an explicit `.techcontent/<title-slug>/` path when supplied.
   - Otherwise derive the slug from the user-supplied title or subject.
2. Locate and read `context-brief.md`.
   - If it is missing, stop and ask the user to run `build-evidence-context` or provide a context brief.
   - Do not fall back to raw research reports unless the user explicitly asks for a degraded draft.
3. Extract writing constraints from the context brief.
   - Recommended article focus.
   - Strong content angles.
   - Verified work evidence.
   - Verified external knowledge.
   - Lessons learned.
   - Claims that must not be stated as fact.
   - Conflicts or uncertainty.
   - Source/evidence references.
4. Choose an article structure.
   - Prefer a technical narrative: situation, problem, implementation/approach, tradeoffs, lessons, and takeaways.
   - Use headings sparingly and only when they help the reader.
   - Avoid excessive bullets; reserve lists for takeaways, review notes, or concise technical summaries.
5. Draft with grounded generation.
   - Explain the user's actual work only where supported by verified work evidence.
   - Use external knowledge to explain concepts, terminology, or comparison points.
   - Mark uncertain claims in the review section instead of smoothing them into the article.
   - Keep the tone like an experienced engineer documenting real work.
6. Preserve references without overloading the prose.
   - Include a `Sources/evidence used` section in the artifact.
   - Add inline references only when the draft needs traceability for a specific claim.
7. Save the draft.
   - Read `references/draft-format.md` and follow its structure.
   - Write the main artifact to `blog-draft.md`.
   - Write optional supporting artifacts only when useful.
   - In the final response, include the saved artifact path and a concise status summary.

## Grounded Generation Principle

Research context and generation are separate steps. `context-brief.md` provides selected, grounded facts and boundaries; `write-blog` turns that context into readable prose. This reduces hallucination risk because the writer is not free to invent a stronger story or rediscover what happened.

## Output Contract

Save the blog draft to `blog-draft.md` and return a concise final response with the artifact path, input used, and any review caveats. The output is always a draft for human review.

Before writing the draft, read `references/draft-format.md`.
