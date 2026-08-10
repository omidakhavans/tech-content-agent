# Resource Research Report Format

Use this structure for `research-resources` output. Keep entries concise, source-backed, and easy for later writing skills to combine with `tech-research-work` output.

## Subject

State the subject exactly as supplied by the user. Add a one-sentence normalized interpretation only if needed.

## Investigation Scope

- Artifact folder:
- Resources requested:
- Resources inspected:
- Resources skipped or inaccessible:
- Source-selection criteria:
- Search terms used, if external discovery was requested:

## Resources Inspected

List each resource with a short credibility and relevance note.

Format:

- `Resource title or URL`: Source fact. What it is and why it matters for the subject.

## Important Concepts

List concepts directly supported by resources. Mark each entry:

- Source fact:
- Interpretation:
- Unknown:

## Technical Explanations

Explain mechanisms, APIs, architecture, workflows, or technical behavior from the resources. Keep each explanation tied to one or more sources.

## Approaches Or Patterns Discovered

Capture reusable patterns, recommended practices, anti-patterns, tradeoffs, or implementation approaches found in the resources.

## Important Terminology

List terms and definitions that later writing skills should preserve accurately.

## Useful Examples

Summarize examples from the resources. Do not copy long passages. Include source references.

## Claims Supported By Each Resource

Group claims by resource.

Format:

- `Resource`:
  - Source fact:
  - Interpretation:

## Connections To The Subject

Explain how the inspected resources relate to the subject. Mark synthesis as `Interpretation`.

## Conflicting Or Divergent Information

Call out conflicting terminology, recommendations, dates, API behavior, or assumptions between resources. If no conflicts are found, say that.

## Source References

Provide traceable references:

- URL.
- Local file path and line number when available.
- GitHub repository path, README/docs path, or commit/tag if relevant.
- Paper title, authors, date, and URL/DOI when available.

## Generated Artifacts

List Markdown files written for this research run:

- `resources-report.md`: Main structured report.
- `resource-notes.md`: Optional.
- `source-index.md`: Optional.
- `unknowns.md`: Optional.

## Potential Lessons Worth Discussing

These may be interpretations, but label them clearly:

- Source-backed lesson:
- Interpretation:

## Unknown Or Unverified Information

List unsupported claims, inaccessible resources, uncertain dates, ambiguous terminology, or claims that need user confirmation before later writing.
