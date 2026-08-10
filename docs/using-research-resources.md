# Using `research-resources`

`research-resources` is the second V1 skill in the Personal Applied AI Engineering content workflow.

Its job is not to write content. Its job is to inspect external or explicitly supplied resources and produce a structured report that later writing skills can combine with project-evidence reports from `tech-research-work`.

Research artifacts are stored under:

```text
/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/
```

## Invocation

Use the skill by naming it and providing a subject plus resources:

```text
Use $research-resources to research the resources I used while learning about LLM tool calling:
- https://platform.openai.com/docs/guides/function-calling
- /path/to/my/course-notes.md
```

If you want Codex to discover resources externally, say that explicitly:

```text
Use $research-resources to find and research authoritative resources about LLM tool calling.
Prefer official docs, primary sources, and source repositories.
```

## Output

The skill saves Markdown artifacts for each subject. V1 always writes:

```text
resources-report.md
```

It may also write supporting Markdown files such as `resource-notes.md`, `source-index.md`, or `unknowns.md` when useful.

The main resource report includes:

- Subject
- Investigation scope
- Resources inspected
- Important concepts
- Technical explanations
- Approaches or patterns discovered
- Important terminology
- Useful examples
- Claims supported by each resource
- Connections to the subject
- Conflicting or divergent information
- Source references
- Potential lessons worth discussing
- Unknown or unverified information

## V1 Design

This V1 intentionally uses Codex as the runtime. It relies on careful resource inspection, source references, and explicit fact-versus-interpretation labels. It does not introduce LangChain, LangGraph, RAG, vector databases, or a custom runtime.
