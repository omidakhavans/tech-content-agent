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

## Security and public-data boundary

This repository and its generated website are public-facing. Before committing or pushing, every Codex or Claude skill must review the staged diff for:

- absolute local paths, home-directory names, usernames, internal hostnames, private URLs, and workspace locations;
- API keys, access tokens, passwords, private keys, cookies, session material, personal data, or copied private content;
- unsafe workflow permissions, dependency vulnerabilities, generated artifacts, and accidental `.env`, `.techcontent`, `.claude`, or build output files.

Use portable placeholders such as `<content-workspace>` and `/path/to/project` in committed examples. Keep real research artifacts outside the repository unless they are explicitly sanitized for publication. Do not assume a file is safe because it is Markdown or because a value is only used in documentation.

Run the repository security checks before pushing:

```bash
git diff --cached --check
git grep -nE '(/Users/|/home/|[A-Za-z]:\\Users\\|BEGIN [A-Z ]+PRIVATE KEY|ghp_|github_pat_|sk-[A-Za-z0-9])' -- . ':(exclude)package-lock.json'
npm audit --audit-level=high
```

If a check finds a real exposure or vulnerability, stop and fix or explicitly document the accepted risk before publishing.

## Documentation maintenance

When code or skill behavior changes, update the affected source-controlled documentation in the same change when practical. A future `document-project` skill may automate impact analysis, but autonomous documentation regeneration is intentionally not implemented yet.
