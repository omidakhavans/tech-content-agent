# Using `build-evidence-context`

`build-evidence-context` is the bridge between research and writing in the Personal Applied AI Engineering content workflow.

Its job is not to write content. Its job is to read `research-report.md` and `resources-report.md`, merge the useful evidence, remove noise, and produce a writing-ready context package.

Context artifacts are stored under:

```text
/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/
```

## Invocation

Use the skill after one or both research skills have produced artifacts:

```text
Use $build-evidence-context for: What I learned while building an AI rewrite feature.
```

If the artifact folder already exists, you can point to it directly:

```text
Use $build-evidence-context with /Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/what-i-learned-while-building-an-ai-rewrite-feature
```

## Input

The skill expects one or both of:

```text
research-report.md
resources-report.md
```

It can continue with only one input if that is useful, but it must mark the missing input as a limitation.

## Output

The skill saves:

```text
context-brief.md
```

It may also save supporting Markdown files such as `claim-map.md`, `excluded-evidence.md`, or `unknowns.md` when useful.

## Context Engineering Note

Gathering lots of information is not enough. A writing model needs selected, structured, grounded context: what is verified, what is interpretation, what should be avoided, and which references support each claim. This reduces hallucination risk and keeps later writing focused on the strongest material.

## V1 Design

This V1 uses Codex as the runtime and Markdown artifacts as the interface between skills. It avoids RAG, LangChain, LangGraph, vector databases, and custom infrastructure until the workflow proves it needs them.
