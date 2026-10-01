# Using `create-content`

`create-content` runs the Phase 1 Content Agent workflow from one subject.

It is an orchestrator. It coordinates the existing skills and checks their outputs before continuing:

```text
subject
-> tech-research-work
-> research-resources
-> build-evidence-context
-> write-blog
-> review-blog
-> write-linkedin
-> write-x
```

## Fresh Session Invocation

From a new Codex session, ask:

```text
Use $create-content for: What I learned while building tool calling into my AI project.
```

With resources:

```text
Use $create-content for: What I learned while building tool calling into my AI project.

Resources:
- https://platform.openai.com/docs/guides/tools
- /absolute/path/to/my/tool-calling-notes.md

Repository scope:
- /absolute/path/to/the/project
```

## Realistic End-To-End Example

```text
Use $create-content for: WP-CLI migration task from v4 to v5.

Repository scope:
- /path/to/tech-content-agent

Resources:
- <content-workspace>/.techcontent/wp-cli-migration-task-from-v4-to-v5/resources-report.md
```

Expected artifacts:

```text
<content-workspace>/.techcontent/wp-cli-migration-task-from-v4-to-v5/research-report.md
<content-workspace>/.techcontent/wp-cli-migration-task-from-v4-to-v5/resources-report.md
<content-workspace>/.techcontent/wp-cli-migration-task-from-v4-to-v5/context-brief.md
<content-workspace>/.techcontent/wp-cli-migration-task-from-v4-to-v5/blog-draft.md
<content-workspace>/.techcontent/wp-cli-migration-task-from-v4-to-v5/blog-review.md
<content-workspace>/.techcontent/wp-cli-migration-task-from-v4-to-v5/linkedin-draft.md
<content-workspace>/.techcontent/wp-cli-migration-task-from-v4-to-v5/x-draft.md
<content-workspace>/.techcontent/wp-cli-migration-task-from-v4-to-v5/content-run-summary.md
```

## Output

The orchestrator saves:

```text
content-run-summary.md
```

The summary records:

- Stages executed.
- Stages reused.
- Stages skipped.
- Stages blocked.
- Important warnings.
- Final status.
- Files produced or reused.
- Human attention required.

## Stop Conditions

The orchestrator should stop when:

- Work evidence is insufficient.
- Required inputs are missing.
- The evidence context cannot support a credible article.
- `review-blog` returns `needs_revision`.

It should not generate LinkedIn or X drafts from a blog that needs revision.

## Orchestration Note

A skill is a focused capability. An orchestrator coordinates capabilities. The agent runtime executes the workflow and makes context-dependent decisions.

In Phase 1, Codex is the runtime. `create-content` is the coordination policy. Later, Phase 2 can rebuild the same behavior using a raw LLM API and a minimal custom runtime.

A deterministic workflow rule is fixed, such as `review-blog` must run after `write-blog`. An agentic decision depends on evidence, such as deciding whether enough verified work exists to continue.

## V1 Design

This V1 uses Markdown artifacts as contracts between skills. It avoids LangChain, LangGraph, RAG, vector databases, background queues, publishing APIs, social APIs, and scheduling infrastructure.
