---
name: write-linkedin
description: Transform a reviewed technical blog article into a LinkedIn post draft. Use when the user asks to create professional LinkedIn content from blog-draft.md and blog-review.md under /Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent, preserving technical substance, adapting the story for LinkedIn, avoiding unsupported reviewed claims, distinguishing personal experience from general claims, saving linkedin-draft.md, and not researching, rewriting the canonical blog, publishing, or generating X content.
---

# Write LinkedIn

## Overview

Transform a reviewed technical blog draft into a LinkedIn post draft. Do not research, rewrite the canonical blog, publish to LinkedIn, or generate X content.

Use this after `review-blog`:

`research -> evidence context -> blog -> review -> write-linkedin`

## Core Rules

- Use `blog-draft.md` as the primary content source.
- Use `blog-review.md` as the quality gate; avoid claims flagged as Critical or unsupported.
- Verify `blog-review.md` names `blog-draft.md` and its SHA-256 matches the current saved article before adapting it. A stale or missing fingerprint is not a passing review.
- Preserve the article's author context and accepted decisions. A source mention of a product does not establish whether it should be named; carry forward the author's stated treatment for this article.
- Use `context-brief.md` only when verification is necessary.
- Preserve technical accuracy and the distinction between personal experience and general technical knowledge.
- Adapt the content for LinkedIn instead of summarizing mechanically.
- Avoid clickbait, exaggerated achievements, generic motivational content, and obvious AI-generated patterns.
- Do not research the repository or external resources.
- Do not rewrite the canonical blog.
- Do not publish anything.
- Save LinkedIn artifacts as Markdown files under the configured content workspace.

## Artifact Storage

Store every LinkedIn-writing run under:

`/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/`

Use the user-supplied title or subject as the folder name source. If the user provides an existing `.techcontent` folder path, write into that folder.

For V1, create at least:

- `linkedin-draft.md`: the structured LinkedIn draft from `references/draft-format.md`.

Create optional Markdown artifacts only when useful:

- `linkedin-variants.md`: alternate hooks or post variants.
- `linkedin-notes.md`: transformation choices or claims avoided because of review findings.

Do not store non-Markdown artifacts for this skill unless the user explicitly asks.

## Workflow

1. Identify the subject and artifact folder.
   - Prefer an explicit `.techcontent/<title-slug>/` path when supplied.
   - Otherwise derive the slug from the user-supplied title or subject.
2. Locate source artifacts.
   - Read `blog-draft.md`, compute its SHA-256, then read the matching `blog-review.md`.
   - Read `context-brief.md` only when a claim needs verification or review status is unclear.
   - If `blog-draft.md` is missing, stop and ask for the canonical blog draft.
   - If `blog-review.md` is missing, stop and ask the user to run `review-blog` first unless they explicitly accept an unreviewed LinkedIn draft.
   - If the fingerprint is absent, mismatched, editorial-only, or `needs_revision`, follow the derivative gate in the shared article contract. Do not silently fall back to `blog-draft-reviewed.md` or another legacy file.
3. Extract the strongest LinkedIn angle.
   - Look for one useful engineering lesson, tradeoff, failure, decision, or technical insight.
   - Prefer a specific, grounded learning over broad motivational framing.
   - Avoid turning the post into an advertisement for the article.
4. Respect review constraints.
   - Do not use claims marked Critical, unsupported, or needing revision as factual statements.
   - If review status is `needs_revision`, either produce a cautious draft that avoids flagged claims or stop and ask whether to wait for a revised blog.
   - Preserve any human-attention caveats in the output.
5. Draft for LinkedIn.
   - Start with a strong opening that is specific and not clickbait.
   - Explain the engineering problem or learning clearly.
   - Keep the post concise enough for social reading.
   - Use short paragraphs.
   - Use bullets sparingly for technical takeaways only.
   - Optionally include a line for article/link placement.
   - Avoid hashtags unless the user asks.
6. Save the draft.
   - Read `references/draft-format.md` and follow its structure.
   - Write the main artifact to `linkedin-draft.md`.
   - Write optional supporting artifacts only when useful.
   - In the final response, include the saved artifact path, source inputs used, and status.

## Content Transformation Principle

Content transformation is different from new content generation. The blog is the canonical, grounded artifact; LinkedIn should adapt that trusted content for a different medium instead of reconstructing the story independently. This reduces inconsistencies and hallucination across channels because later posts inherit the reviewed article's claim boundaries.

Read [the canonical article contract](../../content-skill-references/article-contract.md) and [author context](../../content-skill-references/author-context.md) for revision identity and article-specific constraints.

## Output Contract

Save the LinkedIn draft to `linkedin-draft.md` and return a concise final response with the artifact path, source inputs used, and any claims requiring human attention. The status is always `draft_for_review`.

Before writing the draft, read `references/draft-format.md`.
