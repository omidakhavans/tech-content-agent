# Using `review-blog`

`review-blog` is the editorial and technical quality gate between blog generation and social-content generation.

Its job is to review `blog-draft.md` against both the article itself and `context-brief.md`. It checks grounding, technical quality, editorial quality, unsupported claims, misleading certainty, and source traceability.

Review artifacts are stored under:

```text
<content-workspace>/.techcontent/<title-slug>/
```

## Invocation

Use the skill after `write-blog` has produced a draft:

```text
Use $review-blog for: What I learned while building an AI rewrite feature.
```

If the artifact folder already exists, you can point to it directly:

```text
Use $review-blog with <content-workspace>/.techcontent/what-i-learned-while-building-an-ai-rewrite-feature
```

## Input

The skill expects:

```text
blog-draft.md
context-brief.md
```

## Output

The skill saves:

```text
blog-review.md
```

It may also save `blog-draft-reviewed.md`, `review-change-log.md`, or `claim-check.md` when useful.

Approval status is one of:

```text
needs_revision
ready_for_human_review
```

The review begins with the canonical article filename, its SHA-256 fingerprint, review scope and status. Any byte change makes the review stale. Social-writing skills require a matching fingerprint before treating the review as a passing gate. The editorial index is subjective; it does not measure search rankings, traffic or correctness. A limited article-only review must say what could not be checked.

## Evaluator Pattern Note

Generation and evaluation are separate jobs. `write-blog` creates a draft; `review-blog` checks it against evidence and editorial standards. Evidence-aware review can reduce hallucination risk by catching unsupported claims and overconfident phrasing.

This is still not proof of correctness. An LLM evaluator can miss errors or make its own mistakes, so human review remains required before publishing.

## V1 Design

This V1 uses Codex as the runtime and Markdown artifacts as the interface between skills. It avoids LangChain, LangGraph, RAG, vector databases, complex scoring frameworks, publishing integrations, and custom infrastructure.
