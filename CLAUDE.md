# Operating Principles

These are standing rules for how we work in this repo. Follow them in every session.

## Branches
- Use **clear, descriptive, human-readable branch names** that communicate intent at a glance
  (e.g., `AGIG-Website-Redesign`). Never run with opaque auto-generated names
  (e.g., `claude/vigilant-archimedes-...`).
- **Confirm the branch name with the user before creating or switching branches.**

## Decisions
- **Ask before making consequential or hard-to-reverse decisions** — branch/naming,
  deleting branches, closing PRs, restructuring, or scope changes. Surface the options
  and let the user decide. Do not assume.

## Accuracy
- **Never fabricate.** State only what is verified. If something is unknown, say so and
  check it — do not guess and present it as fact.

## Project workflow
- Edits to `live-website.html` are reviewed via a self-contained preview:
  `npm run bundle` → `live-website-preview.html` (fonts inlined), delivered for browser review.
- **Do not surface proprietary framework names** in client-facing site copy
  (BCA / Buyer Champion Advocate, CJ, Axia, ROCCO, Director-Executor, Student-Teacher, etc.).
- Case studies are anonymized (role labels, no client names); medical context is kept per
  founder direction; the minor is included but never named.
