---
name: tech-research-work
description: Research a supplied technical writing subject against local project evidence and produce a structured research report for later content-writing skills. Use when the user asks to investigate what they actually worked on in a repository, gather evidence from source code, Git history, commits, branches, diffs, docs, tests, configuration, local PR artifacts, or architecture notes, and separate verified facts from inference before writing content.
---

# Tech Research Work

## Overview

Investigate a subject in the current project or another user-approved local repository and produce a structured evidence report. Do not write the final blog post, LinkedIn post, or social copy.

Use this as the first step in a larger content workflow:

`subject -> research-work -> research-resources -> write-blog -> write-linkedin -> write-x`

## Core Rules

- Never invent what the user did.
- Prefer source code, tests, docs, diffs, and Git evidence over memory or assumptions.
- Label every major claim as `Verified`, `Inference`, or `Unknown`.
- Keep the investigation scoped to files, commits, and docs that plausibly relate to the subject.
- Avoid broad repository reads unless narrow searches fail.
- Do not use external services unless the user explicitly asks and access is available.
- Do not modify the target repository while researching.

## Workflow

1. Identify the subject exactly as given by the user.
2. Identify the repository or project root.
   - Use the current working directory when the user does not name another repo.
   - If the relevant repository is outside the writable workspace, treat it as read-only unless the user explicitly grants write permission.
3. Build a small search vocabulary from the subject.
   - Include product terms, feature names, UI labels, file names, concepts, class/function names, and likely synonyms.
   - Example for "AI rewrite feature": `rewrite`, `AI`, `openai`, `prompt`, `generation`, `content`, `editor`, `suggestion`.
4. Inspect high-signal project context first.
   - File tree: `rg --files`, scoped with globs when possible.
   - Docs: README files, docs folders, architecture notes, issue or PR notes stored locally.
   - Config: package/composer/build/test config, feature flags, env examples.
   - Tests: unit, integration, e2e, fixtures, snapshots.
5. Search source code narrowly.
   - Use `rg` for subject vocabulary.
   - Follow references from matched files to nearby types, helpers, tests, and docs.
   - Prefer reading complete relevant files or coherent sections over isolated lines when behavior matters.
6. Inspect Git evidence when the target is a Git repo.
   - Use `git status --short` to understand whether there are local changes.
   - Use `git branch --show-current`, `git log --oneline --decorate --all -- <paths>`, and `git show --stat` for relevant commits.
   - Use `git diff -- <paths>` and `git diff --cached -- <paths>` for local changes.
   - Use path-scoped history once relevant files are known.
7. Convert evidence into a research report.
   - Read `references/report-format.md` and follow its structure.
   - Include file paths and line numbers where useful.
   - Distinguish verified implementation details from inferred lessons or motivations.
   - Include unknowns instead of filling gaps with guesses.

## Evidence Quality

Treat evidence in this order of strength:

1. Source code, tests, migrations, config, and committed diffs.
2. Git commit messages, branch names, tags, and local PR artifacts.
3. Project documentation and architecture notes.
4. Local comments, TODOs, changelog entries, and generated artifacts.
5. Inference from naming, structure, or nearby code.

Do not present item 5 as fact. Use language like "This suggests..." or "Likely..." and mark it as `Inference`.

## Scope Control

Start narrow, then expand only when needed:

- Search exact subject phrases and obvious keywords first.
- Prefer path-scoped Git commands after finding candidate files.
- Stop when the report has enough evidence to support the main claims and the remaining searches are returning unrelated material.
- Mention skipped areas when they could matter but were not inspected.

## Output Contract

Return only the structured research report unless the user asks for process notes. The report is an input to later writing skills, so optimize it for accuracy, traceability, and reuse rather than polish.

Before writing the report, read `references/report-format.md`.
