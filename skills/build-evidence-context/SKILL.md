---
name: build-evidence-context
description: Combine completed research-work and research-resources Markdown outputs into a concise, evidence-grounded context package for later writing skills. Use when the user asks to bridge research and writing by reading research-report.md and resources-report.md under /Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent, merging related findings, removing duplication, preserving evidence references, identifying unsupported claims, contradictions, strongest lessons, content angles, and saving context-brief.md without drafting final content.
---

# Build Evidence Context

## Overview

Convert research artifacts into a concise, writing-ready evidence package. Do not write the blog post, LinkedIn post, X post, or final narrative.

Use this after the research skills have produced one or both source artifacts:

`subject -> research-work + research-resources -> build-evidence-context -> writing`

## Core Rules

- Never invent missing connections between work evidence and external resources.
- Do not convert inference or interpretation into fact.
- Keep every important technical claim traceable to source evidence.
- Prefer `research-report.md` when describing what the user actually built or did.
- Use `resources-report.md` mainly for concepts, terminology, comparisons, and external context.
- Remove duplicates and irrelevant details instead of passing everything downstream.
- Preserve contradictions, uncertainty, and unsupported claims.
- Do not introduce RAG, LangChain, LangGraph, vector databases, or custom infrastructure.
- Save context artifacts as Markdown files under the configured content workspace.

## Artifact Storage

Store every context-building run under:

`/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/`

Use the user-supplied title or subject as the folder name source. Convert it to a filesystem-safe slug:

- Lowercase ASCII when practical.
- Replace spaces and punctuation with single hyphens.
- Remove leading, trailing, and repeated hyphens.
- Keep the slug human-readable.
- If the folder already exists, reuse it and update the relevant Markdown artifacts unless the user asks for a new versioned folder.

For V1, create at least:

- `context-brief.md`: the structured context package from `references/report-format.md`.

Create optional Markdown artifacts only when useful:

- `claim-map.md`: claim-to-evidence mapping when the subject has many claims.
- `excluded-evidence.md`: details intentionally left out when exclusion rationale would clutter the main brief.
- `unknowns.md`: unresolved claims, contradictions, or missing evidence when there are many.

Do not store non-Markdown artifacts for this skill unless the user explicitly asks.

## Workflow

1. Identify the subject and artifact folder.
   - Use the user-supplied subject/title when provided.
   - Otherwise infer it from the `.techcontent/<title-slug>/` folder name and the source reports.
2. Locate source artifacts.
   - Prefer the subject folder under `.techcontent`.
   - Read `research-report.md` when present.
   - Read `resources-report.md` when present.
   - If both are missing, stop and ask for research artifacts.
   - If one is missing, continue only if the user permits or the task still makes sense; mark the missing input as a limitation.
3. Extract and normalize claim types.
   - Work facts: verified implementation, files, commits, decisions, problems, and solutions.
   - External facts: concepts, terminology, technical explanations, approaches, examples, and source-backed claims.
   - Interpretations: inferred lessons, connections, content angles, and reasoning.
   - Unknowns: unsupported claims, contradictions, inaccessible evidence, and uncertainty.
4. Merge related findings.
   - Group work evidence and external knowledge by shared concept, decision, problem, or lesson.
   - Deduplicate repeated facts.
   - Keep the strongest version of each claim and preserve the best source references.
5. Build useful connections.
   - Connect what the user built to external resources only when both sides have evidence.
   - Mark synthesis as `Interpretation`.
   - Do not imply the user used a resource unless `resources-report.md`, user notes, or other evidence supports that claim.
6. Reduce context for writing.
   - Keep facts that explain what happened, why it matters, or what lesson is credible.
   - Exclude tangential resource facts, implementation trivia, repeated examples, and weak claims.
   - Record excluded information when it might be tempting but should not be used.
7. Select content angles.
   - Identify the strongest article angles supported by both work evidence and/or external context.
   - Attach supporting evidence and risk notes to each angle.
   - Recommend one article focus for the next writing skill.
8. Save the context package.
   - Read `references/report-format.md` and follow its structure.
   - Write the main package to `context-brief.md`.
   - Write optional supporting artifacts as `.md` files only when useful.
   - In the final response, include the saved artifact path and a short status summary.

## Evidence Labels

Use these labels consistently:

- `Verified work evidence`: Supported by `research-report.md`.
- `Verified external knowledge`: Supported by `resources-report.md`.
- `Interpretation`: A synthesis, connection, or lesson inferred from evidence.
- `Unsupported`: A claim that should not be stated as fact.
- `Unknown`: Missing, ambiguous, contradictory, or inaccessible evidence.

## Context Engineering Principle

More context is not automatically better. Later writing skills need a compact, grounded package: selected evidence, clear claim status, references, and excluded noise. This reduces hallucination risk and helps the model spend attention on the strongest material.

## Output Contract

Save the structured evidence context package to `context-brief.md` and return a concise final response with the artifact path, inputs used, and major limitations. Do not draft final content.

Before writing the package, read `references/report-format.md`.
