# Research Report Format

Use this structure for `tech-research-work` output. Keep entries concise, evidence-backed, and useful for later writing skills.

## Subject

State the subject exactly as supplied by the user. Add a one-sentence normalized interpretation only if needed.

## Investigation Scope

- Repository/project inspected:
- Branch/current state:
- Search terms used:
- Areas inspected:
- Areas intentionally skipped:

## Relevant Files

List files with short notes. Include line numbers when a specific implementation detail matters.

Format:

- `path/to/file`: Verified. What this file shows.

## Relevant Commits/Changes

List relevant commits, diffs, branch names, or local changes.

Format:

- `commit-hash` or `working tree diff`: Verified. What changed and why it matters.

## What Was Implemented

Describe the implementation in plain technical language. Mark each claim:

- Verified:
- Inference:
- Unknown:

## Technical Decisions

Capture choices visible in the evidence: architecture, APIs, data flow, state management, UI behavior, testing strategy, error handling, configuration, or tradeoffs.

## Problems Encountered

Include only problems evidenced by commits, tests, comments, issue notes, failed approaches visible in diffs, or explicit docs. If problems are likely but not evidenced, mark them as inference.

## Solutions Or Approaches Used

Connect each approach to evidence. Prefer "The code does X" over motivational claims like "I wanted X" unless a commit/doc says so.

## Technologies And Concepts Involved

List concrete technologies, frameworks, libraries, APIs, and concepts that appear in the evidence.

## Evidence References

Provide traceable references:

- File path and line number.
- Commit hash and subject.
- Diff scope.
- Doc or note path.

## Potential Lessons Worth Writing About

These may be inferred, but label them clearly. Focus on lessons supported by the work:

- Verified lesson:
- Inferred lesson:

## Unknowns Or Unverified Claims

List claims that should not be used in later content unless the user confirms them or more evidence is found.
