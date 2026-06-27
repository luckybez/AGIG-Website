# Avant Garde Website — Session Handoff

_Last updated: 2026-06-18_

## ⚠️ START HERE — launching a web session
When starting a Claude Code web session, set the **branch/source to `AGIG-Website-Redesign`**
in the new-session screen. Do **not** accept the auto-generated `claude/…` branch — it starts
from `main` and is missing all redesign work. If the screen won't let you pick a branch, tell
Claude in the first message: "We're working on `AGIG-Website-Redesign` — switch to it first."

## TL;DR — where to work
- **Canonical repo:** `luckybez/AGIG-Website`
- **Canonical branch:** **`AGIG-Website-Redesign`** (open draft **PR #2** → `main`)
- **Working file:** `live-website.html` (a copy of the deployed `index.html`; the live
  `index.html` is left untouched until changes are approved)
- Everything else (other branches, the WORKSITE repo) is archive/cleanup — see the
  **Branch cleanup** section below.

---

## How to work & preview
The site is one self-contained multi-page HTML file (Home → Architecture → Cases →
Discovery, switched by a JS `navigate()` function).

```bash
npm install            # one-time / handled by the SessionStart hook on web sessions
npm run bundle         # builds live-website-preview.html (fonts inlined) — open this in a browser
npm run render         # screenshots the pages to screenshots/ via Puppeteer
npm run serve          # optional local preview server at http://localhost:8080
```

**Workflow we agreed on:** edit `live-website.html` → `npm run bundle` →
review `live-website-preview.html` in the browser → commit.

---

## What changed this session

### Tooling / setup (so web sessions are reproducible)
- **SessionStart hook** (`.claude/hooks/session-start.sh` + `.claude/settings.json`) —
  installs npm deps + pdfminer each session.
- **`package.json`** — Puppeteer + Prettier; scripts: `render`, `bundle`, `serve`, `fonts`, `format`.
- **`scripts/render.mjs`** — page screenshots. **`scripts/bundle.mjs`** — self-contained
  preview. **`scripts/fetch-fonts.mjs`** — vendors fonts.
- **Self-hosted fonts** (`fonts/`) — Fraunces + Inter woff2 (no Google Fonts dependency).
- **ui-ux-pro-max skill** in `.claude/skills/` (symlinks materialized to real files so its CLI runs).
- **`CLAUDE.md`** — standing operating principles (see below).

### Content (the `live-website.html` redesign)
- **Hero:** "Facing a difficult decision you need to make with *precision*?"
- **Audience line** moved below the hero subtitle: "For founders, executives, leaders,
  and anyone who has to **decide alone**."
- **Home cards** (eyebrows removed), grounded in a real client's usage, human-in-the-loop central:
  - **It Knows Your World** (memory) · **You Make the Call** (you decide / you own it) ·
    **It Gets Sharper Every Day** (compounding)
- **Case studies:** anonymized (role labels, no names); **medical context kept** per founder
  direction; the minor is included but **never named**. Fourth (eye-surgery) case **removed**.
  Councils reworded to **"multi-role."** Reordered **Founder → Father & Son → Retired Executive**
  (founder-first / medical-last) with counters + prev/next re-chained.
- Earlier copy fixes: simplified the cancer-safety line; "His father died when he was four";
  softened the inheritance line; trimmed the dual-mandate sentence to "the Philanthropic Fund."

---

## Operating principles (locked into `CLAUDE.md`)
1. **Branches:** clear, descriptive, human-readable names; **confirm the name before** creating/switching.
2. **Decisions:** **ask before consequential/hard-to-reverse actions** (naming, deleting, closing PRs, restructuring).
3. **Accuracy:** **never fabricate** — verify before stating.
4. **Teaching:** the user is learning GitHub/dev; teach the *why* at every opportunity.
5. **Compliance:** never surface proprietary framework names in client-facing copy
   (BCA = **Buyer Champion Advocate**, CJ, Axia, ROCCO, Director-Executor, Student-Teacher, etc.).

---

## Branch cleanup checklist
Delete via **GitHub → repo → Branches → 🗑️**. Safe: each deleted branch's PR is closed/merged,
and closed PRs keep a **"Restore branch"** button, so nothing is truly lost.

**`AGIG-Website` — delete:** `claude/vigilant-archimedes-hm6okj` (PR #1 closed)
**`AGIG-Website` — keep:** `main`, `AGIG-Website-Redesign` (#2)

**`WORKSITE` — delete:** `claude/vigilant-archimedes-hm6okj` (#8), `claude/avant-garde-site` (#6),
`claude/wonderful-johnson-aptqh5` (#5/#3), `claude/blissful-curie-zmw2l1` (#4),
`claude/pensive-ramanujan-ch9hmt` (#2), `site/avant-garde` (#7)
**`WORKSITE` — keep:** `main`, `WORKSITE-Setup` (#9), `devin/1780896262-scaffold-project-foundation` (#1)

**Optional:** since AGIG-Website is canonical, **Archive** the WORKSITE repo
(Settings → bottom → Archive) so it's read-only and clearly not active.

---

## Open items / next steps
- **Launch blockers (founder's to clear):** written consent (especially the minor) +
  FTC / legal review before the site goes live.
- **Home polish:** tighten whitespace between hero and cards; consider restyling the
  repositioned audience line (currently the small copper "eyebrow" style).
- **Architecture page** ("How Our Custom AI Systems Work") — messaging review (Step 5).
- **Discovery + nav/footer** copy alignment (Step 6).
- **Founder case** still reads as somewhat identifiable even without a name — optional
  further de-identification if desired.
- **Go-live:** when approved, port `live-website.html` → deployed `index.html`.

## Useful references (internal)
- Notion: *Session #7 Log — v9 Website & BCA Compliance*, *BCA Progression Council* —
  buyer-journey stages, ICP, and the "you remain in control" thread.
