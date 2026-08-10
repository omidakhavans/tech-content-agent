# Using `write-blog`

`write-blog` is the first writing skill in the Personal Applied AI Engineering content workflow.

Its job is to transform `context-brief.md` into a grounded technical blog draft. The draft is the canonical long-form content artifact that later LinkedIn and X skills can derive from.

Blog artifacts are stored under:

```text
/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/
```

## Invocation

Use the skill after `build-evidence-context` has produced a context brief:

```text
Use $write-blog for: What I learned while building an AI rewrite feature.
```

If the artifact folder already exists, you can point to it directly:

```text
Use $write-blog with /Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/what-i-learned-while-building-an-ai-rewrite-feature
```

## Input

The skill expects:

```text
context-brief.md
```

It should not research the repository, inspect external resources, publish to WordPress, or generate social posts.

## Output

The skill saves:

```text
blog-draft.md
```

It may also save `draft-notes.md` or `review-questions.md` when useful.

## Grounded Generation Note

Research context and generation are separate. `context-brief.md` gives the writer selected facts, evidence, uncertainty, and claim boundaries. `write-blog` turns that grounded context into prose. This reduces hallucination risk because the writer is not asked to invent or rediscover what happened.

## V1 Design

This V1 uses Codex as the runtime and Markdown artifacts as the interface between skills. It avoids RAG, LangChain, LangGraph, vector databases, publishing integrations, and custom infrastructure.
