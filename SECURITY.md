# Security policy

## Scope

The project is a local skill workflow plus a static public website. The repository can contain instructions and examples that are consumed by coding agents, so accidental disclosure in Markdown is a security concern even when the project has no backend runtime.

## Required review before publication

Every change must be checked for:

- machine-specific paths and usernames;
- credentials, API keys, tokens, private keys, cookies, and personal data;
- private source or research artifacts;
- unsafe GitHub Actions permissions or untrusted command interpolation;
- dependency vulnerabilities and generated build output.

Use placeholders in public documentation and keep `.techcontent` artifacts outside the repository unless sanitized.

## Reporting

Do not publish a suspected secret or exploit in an issue. Remove it from the working tree and contact the repository maintainer through a private channel before public disclosure. Rotate any credential that may have been exposed.

## Automation boundary

GitHub Actions may validate and deploy committed files. It must not call an LLM, rewrite documentation, commit changes, or publish user content.
