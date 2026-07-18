# Batch 6 Whole-Person Website — Implementation and Review Checklist

Date: 2026-07-18

Branch: `feature/batch-6-whole-person-website`

Baseline: `origin/main` at `89ec159`

Status: Draft review package. Not merged or deployed.

## Source precedence and controlled decisions

1. The Avant Garde Brand Spine governs the human problem, human authority, privacy, claims discipline, editorial voice, visual system, and narrative order.
2. The Batch 6 HTML brief governed implementation detail. The duplicate HTML briefs were identical.
3. The Batch 6 PDF was rendered and visually checked as the formatted reference. The duplicate PDFs were identical.
4. The current repository was used as the technical and accessibility baseline, not as messaging authority.
5. The approved Batch 6 copy and Travis’s later explicit terminology direction govern the product expression: Artificial Intelligence is described only as a tool or mechanism; Intelligence Augmentation is the point; private cognitive infrastructure is the delivered operating environment.
6. The brief’s isolated phrase “Not a diagnostic” was changed to “Not an assessment” because the same brief explicitly requires complete removal of the Continuity Diagnostic and its references from the live site.
7. No new imagery was generated. Existing documentary assets were reused; no generic AI imagery or unsupported visual claim was introduced.

## Requirement-to-file map

| Requirement | Implementation |
| --- | --- |
| Whole-person homepage architecture | `index.html`, `styles.css` |
| Generic AI → Advanced Prompting → Private Cognitive Infrastructure | `index.html` |
| Connected systems and compounding capability | `index.html`, `styles.css` |
| Nine approved capabilities and Daily Brief | `index.html`, `styles.css` |
| Layered proof architecture | `index.html`, `client-stories.html`, `styles.css` |
| Approved Client Stories experience | `client-stories.html`, `app.js`, `sitemap.xml` |
| Whole-person engagement, trust, FAQ, fit, and invitation | `index.html`, `app.js`, `styles.css` |
| Applications cross-site consistency | `applications.html` |
| About cross-site consistency | `about.html` |
| Accessible desktop/mobile navigation | All four HTML pages, `styles.css`, `app.js` |
| Diagnostic removal | `index.html`, `applications.html`, `styles.css`, `app.js` |
| SEO, canonical URLs, JSON-LD | All four HTML pages, `sitemap.xml` |
| Analytics events | All four HTML pages, `app.js` |
| Review evidence | `docs/review/batch-6/` |

## Requirement-by-requirement completion

### Homepage

- [x] Retained the approved H1 and reframed the eyebrow, lede, microcopy, and single hero CTA around the person who remains responsible.
- [x] Preserved the Weight ladder and accountability close.
- [x] Rebuilt the continuity problem with Fragmented context, The reassembly tax, and Mental residue.
- [x] Implemented the three-level progression without a commodity checkmark table.
- [x] Retained the human-authority doctrine and exact category bridge.
- [x] Added the six-part Built Around Your World section.
- [x] Added the two-layer Connected Systems, Compounding Capability narrative and governance boundary.
- [x] Expanded Useful Before Impressive to Remember, Prepare, Research, Challenge, Draft, Coordinate, Monitor, Teach, and Execute.
- [x] Preserved the Daily Brief as one expression of the infrastructure rather than the product.
- [x] Rebuilt proof around Larry, Roger, Horacio/Javier, and Devin with bounded claims and a visible Client Stories link.
- [x] Replaced domain-first engagement with the five-stage whole-person model.
- [x] Replaced the FAQ with all eight approved questions and answers.
- [x] Preserved the six practical outcomes and revised trust progression to Foundation, Operation, and Extension.
- [x] Updated privacy, participation, autonomy, fit, and trust-dialog language.
- [x] Replaced the final invitation with the whole-person conversation and fit gate.

### Client Stories

- [x] Added `client-stories.html`.
- [x] Added the approved hero, privacy statement, story index, four complete editorial stories, claims boundaries, and final CTA.
- [x] Each story covers the person/world, retained responsibility, continuity burden, limits of ordinary tools, system design, different behavior, visible improvement, retained human role, IA proof, and claims boundary.
- [x] Added `CollectionPage` and `ItemList` JSON-LD. No `Review` or `AggregateRating` schema is used.
- [x] Added case-anchor analytics events.

### Applications and About

- [x] Applications presents five pathways as expressions of one connected system, not separate products.
- [x] Applications includes Larry and Roger as cross-responsibility proof.
- [x] Applications contains no forced “where to begin” or isolated-domain conversion path.
- [x] About retains the trading-floor background, infrastructure discipline, founder medical origin with decision-support boundary, IA lineage, and signature line.
- [x] About now describes connected responsibilities and compounding capability across life and work.
- [x] About’s invitation is whole-person and cross-site consistent.

### Removal and terminology

- [x] No diagnostic element, anchor, form, result, profile, print treatment, selector, script block, or analytics event remains in the live HTML/CSS/JS/XML surfaces.
- [x] No one-decision, one-domain, defined-domain, first-workflow, or scope-grows legacy phrase remains in live source.
- [x] All remaining `AI` or `artificial intelligence` references describe a tool, interface, demonstration, collaboration mechanism, or the mechanism/category distinction—not the product sold.
- [x] Historical launch-candidate review documents still describe the former site and therefore contain archival references. They are not loaded, linked, or executed by the website and were not rewritten to falsify prior review history.

### Accessibility and responsive behavior

- [x] One H1 per page.
- [x] Skip link on every page.
- [x] Native `details`/`summary` mobile navigation at or below 900px.
- [x] Mobile navigation contains every secondary page; the compact primary conversation CTA remains visible.
- [x] Minimum 44px controls, visible focus treatment, semantic headings, native FAQ controls, and accessible dialog labeling.
- [x] Trust dialog supports native Escape close, backdrop close, explicit close, and focus return.
- [x] `prefers-reduced-motion` disables smooth scrolling and effectively removes transitions/animation.
- [x] No horizontal overflow at 320, 375, 390, 768, 1024, 1280, or 1440px on any changed page.

## Validation record

- [x] `npx --yes html-validate --rule=long-title:off index.html applications.html client-stories.html about.html`
  - Passes. `long-title` is disabled only because the approved homepage title is intentionally longer than the validator’s SEO recommendation.
- [x] `node --check app.js`
- [x] `git diff --check`
- [x] JSON-LD parsed as valid JSON.
- [x] Every internal file and fragment link resolves.
- [x] All CTA destinations resolve in source to `https://calendly.com/avantgarde-discovery/30min`.
- [x] Browser console: zero errors or warnings across all four pages.
- [x] Images: zero failed image loads across all tested widths.
- [x] Responsive matrix: 4 pages × 7 widths, with no overflow and correct navigation switching.
- [x] Keyboard/focus checks: native menu and FAQ controls are focusable; trust dialog moves focus to Close and restores focus to its trigger.
- [x] Reduced-motion CSS behavior confirmed.
- [x] Production-source searches for diagnostic and prohibited legacy phrases return zero matches.
- [x] Anti-mush search returns zero generic hype phrases such as “revolutionary,” “seamless,” “game-changing,” “unlock,” “cutting-edge,” and “transformative.”

## Screenshots

Baseline:

- `docs/review/batch-6/baseline/home-desktop-1440.png`
- `docs/review/batch-6/baseline/home-tablet-768.png`
- `docs/review/batch-6/baseline/home-mobile-390.png`

Final desktop and mobile captures:

- `docs/review/batch-6/final/home-desktop-1280.png`
- `docs/review/batch-6/final/home-mobile-390.png`
- `docs/review/batch-6/final/applications-desktop-1280.png`
- `docs/review/batch-6/final/applications-mobile-390.png`
- `docs/review/batch-6/final/client-stories-desktop-1280.png`
- `docs/review/batch-6/final/client-stories-mobile-390.png`
- `docs/review/batch-6/final/about-desktop-1280.png`
- `docs/review/batch-6/final/about-mobile-390.png`

## Travis review gates before merge

- [ ] Confirm the written-permission record for naming Roger, Horacio/Javier, and Devin, and for the level of detail used in each story. The approved Batch 6 brief names them; the Brand Spine still requires explicit written permission before public publication.
- [ ] Confirm the approved Larry quotation and attributed efficiency language remain authorized for publication.
- [ ] Confirm the later IA/private-cognitive-infrastructure terminology direction supersedes the older Brand Spine phrase “Personalized Private AI Operating Systems.”
- [ ] Decide whether to commission dedicated editorial case photography and a replacement social preview. The current implementation intentionally reuses approved documentary assets and introduces no new generated imagery.

No merge, deployment, publication, or modification of `main` occurred in this implementation.
