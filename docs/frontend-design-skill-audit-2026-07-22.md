# Frontend-Design Skill Audit — avantgarde-internationalgroup.com

Date: 2026-07-22
Auditor lens: Anthropic `frontend-design` skill (installed at `.claude/skills/frontend-design/SKILL.md`)
Brand authority: the Avant Garde Brand Spine, as encoded in `docs/batch-6-implementation-checklist.md` (human problem, human authority, privacy, claims discipline, editorial voice, visual system, narrative order) and the July 17 revision record's visual doctrine ("quiet, editorial, technology-invisible"; interaction restraint; documentary imagery only).
Evidence: fresh Chromium renders of all four pages at 1280px and 390px against the current source (`styles.css?v=33`), not the archived batch-6 screenshots.

---

## Verdict

The site passes the test most marketing sites fail: it could not be mistaken for anyone else's. The hero is a genuine thesis, the copy is disciplined and specific, the narrative order follows the Brand Spine beat for beat, and the accessibility/performance floor is genuinely strong. The problems are not of concept but of accumulation: one real layout defect, an accent that has drifted from "copper" to safety orange, and three signature devices (numbering, italic doctrine lines, hairline card grids) that are each used so often they cancel their own emphasis. The skill's core discipline — "spend your boldness in one place" — is the single most useful correction available.

---

## What holds (keep this)

- **The hero is a thesis.** "You can delegate the work. You cannot delegate the decision." over the boardroom footage opens with the most characteristic thing in the subject's world. No stat tiles, no gradient accent. This is exactly what the skill asks a hero to be.
- **Copy as design material.** Active voice, one consistent CTA name ("Schedule a private conversation") from header to hero to proof to invitation, bounded claims (Devin's "implementation decision, not an investment outcome"), and the anti-hype discipline the checklist enforces. The register matches the audience.
- **The Weight section.** The photo-editorial composition (copy left, executive right, ladder counting up to "the final decision that still belongs to you") is the strongest moment on the site — the numbering there encodes a real crescendo, which is precisely when numbering is earned.
- **The Daily Brief.** The one place the product is shown rather than described. It reads as an artifact, not a claim.
- **Quality floor.** Skip links, focus-visible, 44px targets, native details/summary, reduced-motion kills the video loops, self-hosted variable fonts, zero dependencies. Built without announcing it, per the skill.
- **Documentary imagery doctrine held.** Consistent dark cinematic photography; the About page's real trading-floor photo does more brand work than any generated image could.

---

## Findings

Ranked by severity. F1 is a defect; the rest are design drift against the skill and the Spine's visual doctrine.

### F1 — Defect: the fixed header CTA covers the primary navigation (desktop)
At 1280px, the v21 fixed CTA (`.header-cta { position: fixed; top: 20px; right: 32px }`) sits on top of the in-flow nav links: "Applications" renders half-hidden behind the orange button on every page. The overlap was cleared for mobile (`.mobile-nav { margin-right: 84px }`) but never for desktop widths below ~1440px, which includes the most common laptop width.
**Fix:** reserve the CTA's width in the nav row (e.g. `padding-right` on `.nav-links` at ≤1440px, or return the CTA to flow inside `.nav-shell` and only fix it after the header scrolls away).

### F2 — Accent drift: "copper" is now safety orange
The token is named `--copper` but holds `#ff8a1f` — a bright pure orange, applied as a solid fixed chip with a drop shadow on every page, plus a full-bleed orange privacy band on Client Stories. The July 17 record shows the team explicitly rejected a brighter accent from another tool "because it conflicts with the approved quiet, editorial, technology-invisible doctrine" — the current header treatment re-introduces that conflict. It is also, per the skill's calibration note, the template look ("near-black ground, single bright accent") rather than a choice specific to this brand.
**Fix:** either retune the token toward actual copper (desaturated, e.g. in the `#c87a3c`–`#b06a30` range, keeping `--copper-dark` for light grounds) or keep the hue but reserve solid-fill orange for the two conversion moments (hero CTA, final invitation) and let everything else use it as line, label, and underline — which is how the rest of the system already behaves.

### F3 — Numbering decorates sets that are not sequences
The skill is explicit: 01/02/03 markers are appropriate only when order carries information. On this site they are earned twice — the Weight ladder (a crescendo) and the five engagement steps (a process) — and decorative everywhere else: the three problem cards, the six "Built around your world" facets, the nine capabilities. Numbering a set tells the reader to look for an order that isn't there, and dilutes the two places where the numbers mean something.
**Fix:** drop the `item-number` markers from the problem, world, and capability grids (the eyebrow + title already structure them); keep them on the Weight ladder and engagement steps, where they'll now stand out.

### F4 — The italic-serif doctrine line is spent ~10 times on one page
`recognition-close`, `doctrine` (twice), `prompt-close`, `proof-line`, `signature-line`, `boundary-line`, `trust-line`, `judgment-line`, plus the founder-note H2 — the homepage closes nearly every section with a centered italic serif aphorism. Each one is individually good; collectively they compete, and by mid-page the reader has learned to skim them. This is the Chanel rule from the skill: remove accessories so the one that remains lands.
**Fix:** keep two, at most three — "Every tool holds a fragment. You are still expected to hold the whole." and the trust line are the strongest — and let the remaining sections end on their content.

### F5 — One structural device carries almost every section
The hairline-bordered card grid (editorial-grid, system-grid, outcome-grid, case-grid, trust-progression, invitation-grid, fit-grid, brief-grid) is the answer to nearly every layout question, which pushes the page toward the broadsheet-hairline default the skill warns about. The sections readers will remember — the Weight and the Daily Brief — are memorable precisely because they break the pattern.
**Fix:** no rebuild needed; choose one more section to give its own form. The strongest candidate is the proof section (Larry/Roger/Horacio/Devin), whose human material deserves something less uniform than three equal cells — or elevate the Daily Brief further into a rendered "brief" artifact and let it be the page's single signature element.

### F6 — Length and late-page redundancy
The homepage renders at ~19,700px on desktop and ~29,000px on mobile across 15 sections. The Spine's narrative order is fully preserved, but the authority doctrine is restated at full length three times in the back half (the three-levels close, the trust section, the fit section), and FAQ → trust → fit stack three consecutive "reassurance" sections after the proof has already landed.
**Fix:** candidates, in order of ease — fold the "It is not the right fit when" column into the invitation's "What it is not" cell; merge the trust-progression stages into the trust section's four points; tighten doctrine repetitions per F4. Target: two to three fewer screens without losing a single Spine requirement.

### F7 — Eyebrow labels carrying full sentences
`.section-number` sometimes holds an entire sentence in uppercase, letter-spaced type ("BUILT AROUND REAL PEOPLE CARRYING RESPONSIBILITIES THAT DO NOT FIT INSIDE ONE CHAT."). Tracked uppercase is a labeling voice, not a reading voice — long strings set in it are hard to read and break the eyebrow's job of orienting at a glance.
**Fix:** eyebrows label ("Proof", "Client stories", "The engagement"); move the sentence content into the lede where it belongs. One element, one job — the skill's writing rule.

### F8 — CSS accretion debt (v18 → v30 override layers)
The stylesheet now carries its own history: v18 centering overrides that convert earlier grids to `display: block`, `.chain-lead`'s `-44px` negative-margin coupling to the section below, `.governance-line { border-top: 0 }` undoing a rule declared 350 lines earlier, and duplicate `.shell`/`.container` definitions. This is exactly the specificity-cancellation trap the skill warns about, and it will make the next visual batch slower and riskier than it needs to be.
**Fix:** a consolidation pass that folds the override layers into the base rules before the next design batch. No visual change; pure maintainability.

### Typography note (no action required)
Source Serif 4 / Source Sans 3 is a competent, well-executed pairing, and the italic serif is doing real personality work. It is, however, a safe choice — if the brand ever wants the type itself to be memorable (the skill's higher bar), the display role is the axis to explore. Not a recommendation to change now; the pairing serves the doctrine.

---

## Brand Spine conformance check

| Spine axis | Status | Evidence |
| --- | --- | --- |
| Human problem | Holds | Weight ladder, continuity problem, reassembly cost — the problem stays human, never tool-first. |
| Human authority | Holds | "The final call remains yours" through every section; FAQ "Does the system make decisions? No." |
| Privacy | Holds | Permissioned-access language, trust dialog, Client Stories privacy statement, privacy-note under proof. |
| Claims discipline | Holds | Bounded quotes, Devin disclaimer, provider-certification boundary, no Review/AggregateRating schema. |
| Editorial voice | Holds | Zero hype vocabulary; specific, active, restrained copy throughout. |
| Visual system | Drift | Quiet editorial system intact, but the fixed orange CTA chip and pure-orange accent conflict with the recorded "quiet, editorial, technology-invisible" doctrine (F1, F2). |
| Narrative order | Holds | Weight → problem → three levels → world → connected systems → practice → proof → engagement → outcomes → questions → trust → fit → founder → invitation. |

Process gates from the batch-6 checklist (written permissions for named clients, terminology supersession) remain open items outside design scope.

---

## Suggested order of work

1. **F1** — nav overlap (defect, small CSS change).
2. **F2** — accent discipline (token retune or usage restriction).
3. **F3 + F4** — remove unearned numbering and surplus doctrine lines (deletion-only, immediate quieting effect).
4. **F7** — eyebrow/lede swap (copy moves, no layout change).
5. **F6** — late-page consolidation (needs a copy decision against the Spine).
6. **F5** — one section gets its own form (design work, highest craft return).
7. **F8** — CSS consolidation pass (before the next visual batch).
