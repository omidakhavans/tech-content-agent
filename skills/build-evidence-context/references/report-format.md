# Evidence Context Brief Format

Use this structure for `build-evidence-context` output. Keep it concise, high-signal, and traceable enough for later writing skills.

## Subject

State the subject exactly as supplied by the user. Add a one-sentence normalized interpretation only if needed.

## Input Artifacts

- Artifact folder:
- `research-report.md`: Present/missing and brief limitation note.
- `resources-report.md`: Present/missing and brief limitation note.
- Optional artifacts inspected:

## Executive Research Summary

Summarize the most important evidence-backed story in 3-6 bullets. Do not write article prose.

## Verified Work Evidence

List the strongest facts about what the user built or did. Prefer evidence from `research-report.md`.

Format:

- Verified work evidence:
  - Evidence:
  - Why it matters:

## Verified External Knowledge

List external concepts, terminology, or technical explanations worth carrying into writing.

Format:

- Verified external knowledge:
  - Source:
  - Why it matters:

## Connections Between Work And Resources

Connect work evidence to external resource knowledge only when supported by both sides. Mark synthesis clearly.

Format:

- Interpretation:
  - Work evidence:
  - External source:
  - Connection:

## Technical Decisions And Reasoning

Summarize decisions, tradeoffs, and reasoning that are supported by evidence. Separate verified decisions from inferred reasoning.

## Problems Or Failures Encountered

Include only problems/failures supported by research artifacts. Mark uncertain items as `Unknown` or `Interpretation`.

## Lessons Learned

List lessons that are safe to discuss. Label each:

- Verified lesson:
- Interpretation:

## Strong Content Angles

List possible article angles with evidence support and risk notes.

Format:

- Angle:
  - Supporting evidence:
  - Why it is strong:
  - Risk or caveat:

## Supporting Evidence For Each Angle

Map each angle to source references from the input reports.

## Claims That Must Not Be Stated As Fact

List unsupported, weak, or overly broad claims that later writing skills should avoid or phrase carefully.

## Conflicts Or Uncertainty

Call out contradictions, missing research inputs, mismatched terminology, unclear chronology, or ambiguous causal claims.

## Source And Evidence References

Preserve references from both input reports:

- Work evidence: file paths, commits, diffs, docs, tests, or local notes.
- External evidence: URLs, docs, papers, repositories, local notes, or course notes.

## Recommended Article Focus

Recommend one focused direction for the next writing skill. Explain why it is best supported by the evidence.

## Information Intentionally Excluded As Irrelevant

List information intentionally left out and why it should not burden the writing stage.

## Generated Artifacts

List Markdown files written for this context-building run:

- `context-brief.md`: Main context package.
- `claim-map.md`: Optional.
- `excluded-evidence.md`: Optional.
- `unknowns.md`: Optional.
