---
name: research-resources
description: Research external or supplied resources related to a technical writing subject, save Markdown resource research artifacts under /Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent, and produce a structured evidence report for later content-writing skills. Use when the user asks to inspect URLs, documentation, GitHub repositories, research papers, articles, tutorials, local Markdown/text notes, README files, course notes, or other explicitly supplied references and extract verifiable concepts, examples, claims, terminology, conflicts, and source-backed lessons without writing final content.
---

# Research Resources

## Overview

Investigate external or explicitly supplied resources for a subject and produce a structured resource report. Do not write a blog post, LinkedIn post, social copy, or final narrative.

Use this after `tech-research-work` or independently when the user wants resource-backed context:

`subject -> research-work -> research-resources -> evidence/context -> writing -> social derivatives -> review`

## Core Rules

- Never invent information that is not supported by an inspected resource.
- Distinguish `Source fact`, `Interpretation`, and `Unknown`.
- Preserve source references for every important claim.
- Prefer primary or authoritative sources when available.
- Use supplied resources first; do not replace them with unrelated web results.
- Do not use external resources unless the user provides them or asks for them.
- Do not turn the research into final content.
- Save research artifacts as Markdown files under the configured content workspace.

## Artifact Storage

Store every resource research run under:

`/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/`

Use the user-supplied title or subject as the folder name source. Convert it to a filesystem-safe slug:

- Lowercase ASCII when practical.
- Replace spaces and punctuation with single hyphens.
- Remove leading, trailing, and repeated hyphens.
- Keep the slug human-readable.
- If the folder already exists, reuse it and update the relevant Markdown artifacts unless the user asks for a new versioned folder.

For V1, create at least:

- `resources-report.md`: the structured report from `references/report-format.md`.

Create optional Markdown artifacts only when useful:

- `resource-notes.md`: raw notes grouped by resource.
- `source-index.md`: bibliography-style list when many resources are inspected.
- `unknowns.md`: unresolved questions when there are many.

Do not store non-Markdown artifacts for this skill unless the user explicitly asks.

## Workflow

1. Identify the subject exactly as given by the user.
2. Inventory the resources to inspect.
   - Include URLs, docs, GitHub repositories, papers, articles, tutorials, local notes, README files, course notes, and other references explicitly supplied by the user.
   - If no resources are supplied and the user asks to research externally, search for authoritative sources and explain the source-selection criteria.
   - If no resources are supplied and external research was not requested, ask for resources instead of guessing.
3. Rank resources by authority and relevance.
   - Prefer official documentation, specs, primary research papers, source repositories, and author-maintained docs.
   - Use tutorials/articles for examples and interpretation, not as the sole source for foundational claims when primary sources exist.
4. Inspect each resource deliberately.
   - For local files, use local file reads and `rg` before broad reading.
   - For URLs or remote repositories, use browsing or available connectors when access is allowed.
   - For GitHub repositories, prefer README, docs, examples, issues/PRs only when relevant, and source paths that directly explain the subject.
   - For papers, capture title, authors when visible, publication venue/date when visible, main contribution, limits, and relevant technical claims.
5. Extract source-backed knowledge.
   - Important concepts.
   - Technical explanations.
   - Approaches or patterns.
   - Important terminology.
   - Useful examples.
   - Claims supported by each resource.
   - Conflicts or differences between resources.
   - Connections to the subject.
6. Separate facts from interpretation.
   - Use `Source fact` for what the resource directly supports.
   - Use `Interpretation` for your synthesis or connection to the subject.
   - Use `Unknown` for gaps, unsupported claims, inaccessible resources, or ambiguous evidence.
7. Save the report.
   - Read `references/report-format.md` and follow its structure.
   - Create the content artifact folder under `.techcontent`.
   - Write the main report to `resources-report.md`.
   - Write any optional supporting artifacts as `.md` files.
   - In the final response, include the saved artifact path and a short status summary.

## Evidence Quality

Treat evidence in this order of strength:

1. Official documentation, standards/specs, primary papers, and source repositories.
2. Maintainer-authored guides, examples, changelogs, release notes, and design docs.
3. Reputable tutorials, articles, course notes, and conference talks.
4. Personal notes supplied by the user.
5. Your own interpretation across sources.

Do not present item 5 as source fact. Mark it as `Interpretation`.

## Scope Control

Start with the resources the user supplied. Expand only when:

- The user explicitly asks for external resource research.
- A supplied resource points to a primary source needed for accuracy.
- A claim cannot be understood without a nearby reference.

Stop when the report has enough source-backed context for later writing skills and additional resources would add repetition rather than clarity.

## Output Contract

Save the structured resource report to `resources-report.md` and return a concise final response with the artifact path, inspected resource count, and any major limitations. The report is an input to later writing skills, so optimize it for traceability and clarity rather than prose polish.

Before writing the report, read `references/report-format.md`.
