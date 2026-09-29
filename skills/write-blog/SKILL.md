---
name: write-blog
description: Turn a prepared context-brief.md into a grounded technical blog draft, adapting narrative, voice and structure to the author's context. Use for work-based articles, explainers or source-backed opinions; save canonical blog-draft.md without researching, publishing or generating social posts. Use edit-blog for revisions of an existing article.
---

# Write Blog

Transform `context-brief.md` into a readable article. Keep research separate from writing and preserve its claim boundaries. Do not invent experience, experiments, production adoption or results.

## Inputs and Supporting Guidance

Use the supplied subject folder, otherwise `/Users/a100200300/Local Sites/ai/app/public/wp-content/plugins/.techcontent/<title-slug>/`. Read `context-brief.md`; if missing, request it or use raw reports only when the user explicitly directs a limited draft.

Read [author context](../../content-skill-references/author-context.md), [article contract](../../content-skill-references/article-contract.md) and [dependency policy](../../content-skill-references/dependency-policy.md). For voice, consult [Humanizer](../../content-skill-dependencies/humanizer/SKILL.md) under that policy. Local instructions override conflicting dependency guidance.

## Workflow

1. Extract the article's purpose, audience, voice and editorial constraints from the request, conversation and brief. Record applicable decisions in its `Author Context` section. Ask only material unanswered questions; do not require a separate approval round.
2. Choose the article type and focus supported by the evidence. A work-based case study needs verified local work. An explainer or opinion can use external evidence and an explicitly hypothetical scenario. Neither permits invented biography or results. `create-content` retains its stronger local-work entry requirement.
3. Choose a structure that serves this author and reader. Use a concrete story when helpful; preserve its factual or hypothetical status. Add descriptive headings where useful, without a fixed count or mandatory Introduction/Results/Conclusion labels.
4. Draft from the selected evidence. Connect technical detail to the thesis through behaviour, failures, tradeoffs or value. Keep interpretation separate from fact; include uncertainty where it affects the conclusion. Apply the author's brand treatment and positioning instead of inferring a universal naming rule.
5. Check the opening promise against the ending and evidence. Read from the audience's perspective without relying on chat context. Remove empty transitions and redundant closing lines while preserving voice, code, links and precise technical meaning.
6. Follow [draft format](references/draft-format.md), preserve source references, and save `blog-draft.md` using the article contract. Keep writing choices and review caveats outside the publishable prose in `draft-notes.md` when useful.

Do not independently research, publish or generate social posts. If stronger evidence is needed, identify the gap for the research stage rather than filling it with a more persuasive claim.

## Output

Return the saved canonical path, input used and material caveats. The output is a draft for review; the save must be verified before reporting completion.
