# CLAUDE.md

This file mirrors the repository guidance in `AGENTS.md` for Claude Code and other coding agents.

## Security is part of every change

Treat the repository, README, documentation site, examples, and GitHub Actions workflow as public. Before commit or push, inspect the complete staged diff for local absolute paths, usernames, internal URLs, credentials, private content, unsafe workflow permissions, vulnerable dependencies, and accidental artifacts such as `.env`, `.techcontent`, `.claude`, `.next`, `out`, or `node_modules`.

Use `<content-workspace>` and `/path/to/project` placeholders in committed documentation. Never copy a real home directory, token, key, cookie, or private research artifact into the repository.

Run:

```bash
git diff --cached --check
git grep -nE '(/Users/|/home/|[A-Za-z]:\\Users\\|BEGIN [A-Z ]+PRIVATE KEY|ghp_|github_pat_|sk-[A-Za-z0-9])' -- . ':(exclude)package-lock.json'
npm audit --audit-level=high
```

Do not push when these checks identify an unresolved exposure. Update affected source-controlled documentation in the same change, while keeping CI incapable of calling an LLM or committing documentation automatically.

For project architecture, skill contracts, and website conventions, follow `AGENTS.md` and the relevant `skills/<name>/SKILL.md`.
