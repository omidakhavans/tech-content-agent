---
name: create-content
description: Orchestrate the Phase 1 Personal Applied AI Engineering Content Agent workflow from one subject. Use when the user asks to create content end-to-end by coordinating tech-research-work, research-resources, build-evidence-context, write-blog, review-blog, write-linkedin, and write-x, saving a Markdown run summary under the configured content workspace's .techcontent directory, respecting stage status, stopping on insufficient evidence or needs_revision, and not reimplementing research, writing, review, publishing, scheduling, or social APIs.
---

# Create Content

## Overview

Run the Phase 1 content workflow from a single subject by coordinating the existing skills. This is an orchestrator, not another research, writing, review, publishing, or social skill.

Expected workflow:

`subject -> tech-research-work -> research-resources -> build-evidence-context -> write-blog -> review-blog -> write-linkedin -> write-x`

Codex is still the agent runtime. This skill defines the coordination policy and run summary.

## Core Rules

- Reuse the existing skills; do not duplicate their responsibilities.
- Treat each skill artifact as the contract for deciding the next step.
- Stop instead of fabricating when evidence is insufficient.
- Do not generate social drafts if `blog-review.md` has `needs_revision`.
- Preserve uncertainty, missing inputs, skipped stages, and blocked stages in the run summary.
- Keep the workflow draft-first and human-in-the-loop.
- Do not publish to WordPress, LinkedIn, X, or any other platform.
- Do not introduce LangChain, LangGraph, RAG, vector databases, queues, social APIs, scheduling, or WordPress publishing APIs.
- Save orchestration artifacts as Markdown files under the configured content workspace.

## Inputs

Minimum input:

- Subject.

Optional inputs:

- Resource URLs.
- Local resource paths.
- Repository or project scope.
- Additional notes/context.
- Existing `.techcontent/<title-slug>/` folder to resume.

## Artifact Storage

Store each run under:

`<content-workspace>/.techcontent/<title-slug>/`

Use the same slug convention as the component skills:

- Lowercase ASCII when practical.
- Replace spaces and punctuation with single hyphens.
- Remove leading, trailing, and repeated hyphens.
- Reuse an existing folder for the same subject unless the user asks for a new versioned run.

For V1, create:

- `content-run-summary.md`: orchestration summary from `references/run-summary-format.md`.

Component skills produce:

- `research-report.md`
- `resources-report.md`
- `context-brief.md`
- `blog-draft.md`
- `blog-review.md`
- `linkedin-draft.md`
- `x-draft.md`

## Workflow

1. Identify the subject and artifact folder.
   - If an existing folder is supplied, inspect it before rerunning stages.
   - If no folder exists, derive the slug from the subject.
2. Inspect available inputs.
   - Check for optional resource URLs, local resource paths, repository scope, and user notes.
   - Check whether stage artifacts already exist.
3. Run or reuse `tech-research-work`.
   - Use it to inspect local project evidence.
   - If `research-report.md` is missing after the stage or reports insufficient verified work evidence for the subject, stop before writing.
4. Run, skip, or limit `research-resources`.
   - Run it when resources are supplied or the user explicitly asks for external resource research.
   - If no resources are supplied and external research is not requested, skip it and record the limitation.
   - If a limited/empty resource report is useful for downstream traceability, create or ask `research-resources` to create an explicit limited result.
5. Run `build-evidence-context`.
   - Use available research artifacts.
   - If it reports serious uncertainty, unsupported core claims, or no credible article angle, stop and surface the issue.
6. Run `write-blog`.
   - Generate only from `context-brief.md`.
   - Preserve the workflow's verified local work requirement. An author context or source-backed opinion angle does not count as evidence that the user built, tested or experienced something.
   - If no blog draft is produced, stop.
7. Run `review-blog`.
   - Inspect `blog-review.md` and ensure its recorded article hash matches the current `blog-draft.md`.
   - If approval status is `needs_revision`, stop before social drafts and explain what needs attention.
   - Continue only when status is `ready_for_human_review` or the user explicitly directs a degraded path.
8. Run `write-linkedin`.
   - Generate `linkedin-draft.md` from the reviewed blog.
9. Run `write-x`.
   - Generate `x-draft.md` from the reviewed blog.
10. Save the orchestration summary.
   - Read `references/run-summary-format.md` and follow it.
   - Include executed, skipped, blocked, and reused stages.
   - Include final status, warnings, and produced artifacts.

## Stage Decisions

Use these statuses in the run summary:

- `executed`: The stage ran in this orchestration pass.
- `reused`: A valid existing artifact was used.
- `skipped`: The stage was intentionally not needed for this run.
- `blocked`: The pipeline stopped because a required input or quality condition failed.

Recommended final statuses:

- `complete_drafts_ready_for_review`: Blog, review, LinkedIn, and X drafts exist and the blog review did not block social generation.
- `blocked_insufficient_evidence`: Work evidence is too weak to support a grounded article.
- `blocked_missing_inputs`: Required artifacts or user inputs are missing.
- `blocked_needs_revision`: Blog review found issues that should be fixed before social derivatives.
- `partial_context_only`: Research/context artifacts exist, but writing should not proceed yet.

## Orchestration Concepts

A capability or skill performs a focused job, such as researching local work or writing an X draft.

An orchestrator coordinates capabilities, checks their outputs, and decides whether the workflow can safely continue.

An agent runtime executes the steps, uses tools, reads files, and applies judgment. In Phase 1, Codex is the runtime; later, the project can rebuild this behavior with a raw LLM API and a minimal custom runtime.

A deterministic workflow rule is fixed, such as `review-blog` must happen after `write-blog`. An agentic decision depends on evidence and context, such as deciding whether there is enough verified work evidence to continue.

## Output Contract

Save `content-run-summary.md` and return a concise final response with:

- Final status.
- Artifact folder.
- Stages executed, reused, skipped, or blocked.
- Important warnings.
- Files produced or reused.
- Clear human-attention items.

Before writing the summary, read `references/run-summary-format.md`.

For validation or handoff, read `references/validation-scenarios.md`.
