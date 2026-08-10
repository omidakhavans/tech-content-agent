# Using `write-x`

`write-x` transforms the reviewed canonical blog article into X content.

It is not a summarizer and not a research skill. It adapts the technical substance from `blog-draft.md`, uses `blog-review.md` as the quality gate, and chooses either a single post or a short thread based on the idea.

X artifacts are stored under:

```text
/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/
```

## Invocation

Use the skill after `review-blog` has produced a review:

```text
Use $write-x for: What I learned while building an AI rewrite feature.
```

If the artifact folder already exists, you can point to it directly:

```text
Use $write-x with /Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/what-i-learned-while-building-an-ai-rewrite-feature
```

## Input

The skill expects:

```text
blog-draft.md
blog-review.md
```

It may consult `context-brief.md` when verification is necessary.

## Output

The skill saves:

```text
x-draft.md
```

It supports two formats:

```text
single
thread
```

Status is always:

```text
draft_for_review
```

## Controlled Generation Note

Controlled generation means giving the model trusted source content, platform-specific objectives, explicit boundaries, and a structured output contract. This reduces unpredictable behavior while still allowing useful creativity in the wording and format.

## V1 Design

This V1 uses Codex as the runtime and Markdown artifacts as the interface between skills. It avoids LangChain, LangGraph, RAG, vector databases, X APIs, scheduling infrastructure, publishing integrations, and custom infrastructure.
