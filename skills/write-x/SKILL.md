---
name: write-x
description: Transform a reviewed canonical technical blog article into X/Twitter content drafts. Use when the user asks to create a single X post or coherent thread from blog-draft.md and blog-review.md under the configured content workspace's .techcontent directory, preserving technical accuracy, adapting to X, avoiding unsupported reviewed claims, selecting single vs thread format, saving x-draft.md, and not researching, rewriting the blog, generating LinkedIn content, publishing, scheduling, or using X APIs.
---

# Write X

## Overview

Transform a reviewed technical blog draft into X content. Do not research, rewrite the canonical blog, generate LinkedIn content, publish to X, schedule posts, or use X APIs.

Use this after `review-blog`:

`research -> evidence context -> blog -> review -> write-x`

## Core Rules

- Use `blog-draft.md` as the primary content source.
- Use `blog-review.md` as the quality gate; avoid claims flagged as Critical or unsupported.
- Verify `blog-review.md` names `blog-draft.md` and its SHA-256 matches the current saved article before adapting it. A stale or missing fingerprint is not a passing review.
- Preserve the article's author context and accepted decisions. A source mention of a product does not establish whether it should be named; carry forward the author's stated treatment for this article.
- Use `context-brief.md` only when verification is necessary.
- Preserve technical accuracy and the user's engineering perspective.
- Adapt the content for X instead of merely shortening the blog.
- Choose `single` when the idea works as one post.
- Choose `thread` only when the technical idea needs progression.
- Avoid unsupported claims, exaggeration, generic promotional language, engagement bait, unnecessary hashtags, and obvious AI-generated phrasing.
- Do not research the repository or external resources.
- Do not publish anything.
- Save X artifacts as Markdown files under the configured content workspace.

## Artifact Storage

Store every X-writing run under:

`<content-workspace>/.techcontent/<title-slug>/`

Use the user-supplied title or subject as the folder name source. If the user provides an existing `.techcontent` folder path, write into that folder.

For V1, create at least:

- `x-draft.md`: the structured X draft from `references/draft-format.md`.

Create optional Markdown artifacts only when useful:

- `x-variants.md`: alternate single posts, hooks, or thread shapes.
- `x-notes.md`: transformation choices or claims avoided because of review findings.

Do not store non-Markdown artifacts for this skill unless the user explicitly asks.

## Workflow

1. Identify the subject and artifact folder.
   - Prefer an explicit `.techcontent/<title-slug>/` path when supplied.
   - Otherwise derive the slug from the user-supplied title or subject.
2. Locate source artifacts.
   - Read `blog-draft.md`, compute its SHA-256, then read the matching `blog-review.md`.
   - Read `context-brief.md` only when a claim needs verification or review status is unclear.
   - If `blog-draft.md` is missing, stop and ask for the canonical blog draft.
   - If `blog-review.md` is missing, stop and ask the user to run `review-blog` first unless they explicitly accept an unreviewed X draft.
   - If the fingerprint is absent, mismatched, editorial-only, or `needs_revision`, follow the derivative gate in the shared article contract. Do not silently fall back to `blog-draft-reviewed.md` or another legacy file.
3. Extract the strongest X-sized insight.
   - Look for one concrete engineering lesson, technical discovery, tradeoff, failure, or decision.
   - Prefer specificity over broad inspiration.
   - Avoid turning the post into generic blog promotion.
4. Choose the output mode.
   - Use `single` when the insight can be communicated clearly in one post.
   - Use `thread` when the idea needs a progression such as `problem -> approach -> discovery -> technical insight -> takeaway`.
   - Do not create a long thread just to look substantial.
5. Respect review constraints.
   - Do not state claims marked Critical, unsupported, or needing revision as facts.
   - If review status is `needs_revision`, either produce a cautious draft that avoids flagged claims or stop and ask whether to wait for a revised blog.
   - Preserve any human-attention caveats in the output.
6. Draft for X.
   - Keep writing concise and interesting.
   - Make each post stand on its own.
   - Avoid unnecessary hashtags and engagement bait.
   - Avoid vague hooks like "I learned something huge".
   - Include blog-link placement only where it fits naturally.
7. Save the draft.
   - Read `references/draft-format.md` and follow its structure.
   - Write the main artifact to `x-draft.md`.
   - Write optional supporting artifacts only when useful.
   - In the final response, include the saved artifact path, recommended format, source inputs used, and status.

## Controlled Generation Principle

Controlled generation constrains creative output with trusted source content, platform-specific objectives, explicit boundaries, and structured outputs. This keeps the model useful without letting it wander into unsupported claims, generic promotion, or inconsistent versions of the same story.

## Output Contract

Save the X draft to `x-draft.md` and return a concise final response with the artifact path, recommended format, source inputs used, and any claims requiring human attention. The status is always `draft_for_review`.

Read [the canonical article contract](../../content-skill-references/article-contract.md) and [author context](../../content-skill-references/author-context.md) for revision identity and article-specific constraints.

Before writing the draft, read `references/draft-format.md`.
