# AGENTS.md

## Project overview

This repository is a Phase 1, skill-first technical content workflow. Codex is the runtime; Markdown artifacts are the interfaces between skills.

## Working conventions

- Read the relevant `skills/<name>/SKILL.md` and its references before changing a skill.
- Prefer source code, tests, Git history, and checked-in documentation over assumptions.
- Preserve the distinction between verified evidence, interpretation, unsupported claims, and unknowns.
- Keep `create-content` as an orchestrator; do not duplicate component skill responsibilities there.
- Preserve the `.techcontent/<title-slug>/` artifact convention and article review fingerprint contract.
- Do not add publishing APIs, social APIs, databases, RAG, LangChain, LangGraph, or autonomous documentation commits without an explicit project decision.

## Website and docs

- The website uses Next.js App Router, TypeScript, Tailwind CSS, Fumadocs MDX, and static export.
- Public docs source is in `content/docs/*.mdx`; keep important project knowledge in Markdown/MDX rather than only React components.
- Run `npm run typecheck` and `npm run build` after website or docs changes.
- GitHub Actions deploys the committed static output to GitHub Pages. CI must not call an LLM or rewrite docs.

## Documentation maintenance

When code or skill behavior changes, update the affected source-controlled documentation in the same change when practical. A future `document-project` skill may automate impact analysis, but autonomous documentation regeneration is intentionally not implemented yet.
