# tech-content-agent

`tech-content-agent` is a Phase 1, Codex Skills-based workflow for turning engineering work into grounded technical content. It separates research, evidence selection, writing, review, and social repurposing into small skills with inspectable Markdown artifacts.

## What it does

```text
subject
  → tech-research-work + research-resources
  → build-evidence-context
  → write-blog → review-blog
  → write-linkedin + write-x
```

The project uses Codex as the runtime. It does not publish content, call social APIs, use a database, or add LangChain/LangGraph/RAG infrastructure.

## Quick start

Open the repository in Codex and run:

```text
Use $create-content for: What I learned while building an AI rewrite feature.
```

To run the public site locally:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/`. Build the static export with `npm run typecheck && npm run build`; output is written to `out/`.

## Current skills

`tech-research-work`, `research-resources`, `build-evidence-context`, `write-blog`, `edit-blog`, `review-blog`, `write-linkedin`, `write-x`, and `create-content` live under `skills/`. Their full contracts and artifact relationships are documented in the [public documentation source](./content/docs) and, after deployment, the [hosted documentation site](https://omidakhavans.github.io/tech-content-agent/docs/).

## Artifacts

Content artifacts are stored under `.techcontent/<title-slug>/` in the surrounding workspace. The main files are `research-report.md`, `resources-report.md`, `context-brief.md`, `blog-draft.md`, `blog-review.md`, `linkedin-draft.md`, `x-draft.md`, and `content-run-summary.md`.

## Website and deployment

The public website is a Next.js static export with Fumadocs MDX documentation. Source lives in `app/`, `components/`, `content/docs/`, and `lib/`. `.github/workflows/pages.yml` builds and deploys it to GitHub Pages on pushes to `main`.

See [docs/development.mdx](./content/docs/development.mdx) for the website architecture, local development, adding pages, base-path handling, and a future Vercel move.

## Development

Keep skill behavior in `SKILL.md` and supporting Markdown contracts. When implementation changes affect workflow behavior, update the relevant docs and review the complete diff. Human review remains required before publishing content.

## License

No license file is currently present in the repository. Add one before distributing the project under an open-source license.
