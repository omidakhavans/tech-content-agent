# Using `write-linkedin`

`write-linkedin` transforms the reviewed canonical blog article into a LinkedIn post draft.

It is not a summarizer and not a research skill. It adapts the technical substance and story from `blog-draft.md`, using `blog-review.md` as the quality gate.

LinkedIn artifacts are stored under:

```text
<content-workspace>/.techcontent/<title-slug>/
```

## Invocation

Use the skill after `review-blog` has produced a review:

```text
Use $write-linkedin for: What I learned while building an AI rewrite feature.
```

If the artifact folder already exists, you can point to it directly:

```text
Use $write-linkedin with <content-workspace>/.techcontent/what-i-learned-while-building-an-ai-rewrite-feature
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
linkedin-draft.md
```

Status is always:

```text
draft_for_review
```

## Content Transformation Note

Content transformation is different from new content generation. The canonical article is already grounded in research and review. Platform-specific skills should adapt that trusted content to the medium instead of independently reconstructing the story. This reduces inconsistency and hallucination across channels.

## V1 Design

This V1 uses Codex as the runtime and Markdown artifacts as the interface between skills. It avoids LangChain, LangGraph, RAG, vector databases, social APIs, publishing integrations, and custom infrastructure.
