# Using `tech-research-work`

`tech-research-work` is the first V1 skill in the Personal Applied AI Engineering content workflow.

Its job is not to write content. Its job is to research a subject against local project evidence and produce a structured report that later writing skills can consume.

## Invocation

Use the skill by naming it and providing a subject:

```text
Use $tech-research-work to research what I worked on for: What I learned while building an AI rewrite feature.
```

If the target repository is not the current workspace, include the path and whether Codex may read it:

```text
Use $tech-research-work in /path/to/project to research: What I learned while building an AI rewrite feature.
Treat the repository as read-only.
```

## Output

The skill returns a structured research report with:

- Subject
- Investigation scope
- Relevant files
- Relevant commits/changes
- What was implemented
- Technical decisions
- Problems encountered
- Solutions or approaches used
- Technologies and concepts involved
- Evidence references
- Potential lessons worth writing about
- Unknowns or unverified claims

## V1 Design

This V1 is intentionally simple. It uses Codex itself as the runtime and relies on local repository inspection, Git commands, and a stable report format. It does not introduce LangChain, LangGraph, RAG, vector databases, or a custom runtime.
