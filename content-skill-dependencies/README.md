# Pinned Content Skill Dependencies

These upstream skills are vendored as reference material for the local content skills. They are not exposed as separate skills or independent workflows. Local instructions and article-specific author context take precedence over conflicting recommendations.

| Dependency | Source revision | License | Local use |
|---|---|---|---|
| Humanizer | [`blader/humanizer` `225a6f39ac85f76ee48dbad772ea4abe4ed6c9d8`](https://github.com/blader/humanizer/tree/225a6f39ac85f76ee48dbad772ea4abe4ed6c9d8) | MIT; see its included `LICENSE` | Editorial cues; preserve the author's voice and do not treat patterns as proof of AI authorship. |
| Copy Editing | [`coreyhaines31/marketingskills` `5b2c0007766c6a1cf1d53fd8fc73e979e0821022`](https://github.com/coreyhaines31/marketingskills/tree/5b2c0007766c6a1cf1d53fd8fc73e979e0821022) | MIT; see its included `LICENSE` | Focused editing techniques; no forced marketing claims, emotion, or calls to action. |

The upstream revisions are pinned so a later upstream change cannot silently change local behavior. Update a dependency deliberately: review its content, license and effect on local guidance, then update this table and the dependency policy.

`doc-coauthoring` was reviewed as a candidate but is not vendored: the pinned upstream README says only that many repository skills are Apache-2.0 and does not identify that skill's license at this revision. Its useful reader-comprehension practice is written into our local author-context guidance instead.
