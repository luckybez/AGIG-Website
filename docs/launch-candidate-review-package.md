# Launch Candidate v2 review package — July 18

## Recommendation

**Keep draft PR #123 open for Travis review. Do not merge or deploy.**

The v2 copy, page structure, proof layer, service sequence, objection layer, diagnostic conversion, Applications page, About page, and source QA are complete. The branch is not a merge candidate until Travis closes the two explicit P0 gates:

1. choose visual-system Option A or Option B;
2. approve the Higgsfield contact-sheet sources before any image integration.

The visual choice also governs the outstanding mobile body-copy-size correction. The current light candidate contains 15px card copy at 375px; the brief requires 16px. No typography change was made because the brief prohibits typography or color work before the Option A/B decision.

## Repository-state verification

- Working branch: `feature/brand-revisions-july-17`
- Branch foundation before this pass: `a8f5cff`
- Original-site comparison: `main` at `e80a31b`
- Draft review surface: PR #123
- `main` was not checked out, modified, merged, or deployed.
- Existing unrelated untracked files were left untouched.
- The local consolidated preview was refreshed at `launch-candidate-single-file.html`; it is a noindex local review artifact, not a production asset.

## What changed

### Homepage

- Restored the protected hero kicker, H1, support copy, reassurance, and dominant scheduling action.
- Restored the six-line Weight ladder and its consequence close.
- Relocated the fragments headline and kept the five-relationship strip.
- Rebuilt the AI/IA distinction so artificial intelligence is a tool/mechanism and Intelligence Augmentation is the value and system discipline.
- Kept the chat-history distinction and inserted the exact one-time product expression required by the brief.
- Merged six capabilities with the Daily Brief.
- Restored four narrative proof stories, both Larry Conaway quotes, and the existing disclaimer.
- Added the five-stage white-glove engagement, credential-control language, up-to-six-month support, limited-client promise, and challenge-as-precision block.
- Kept seven objections and added the recommended assistant objection.
- Routed the diagnostic result to the private conversation.
- Rewrote outcomes in consequence terms and added the honest day-one/weeks/months trust arc.
- Restored the canonical authority statement, founder note, invitation, and protected footer signature.

### Applications

- Kept the five-domain page and protected plural kicker.
- Rewrote the page around five responsibilities rather than product packages.
- Added the Larry authorship proof pointer.
- Added the same instrumented scheduling action to every domain.

### About

- Kept the trading-floor origin, personal-stakes turn, founder quote, consented founder photograph, and complete IA lineage.
- Describes modern artificial intelligence only as a tool inside the larger Intelligence Augmentation discipline.
- Removed em dashes and public-facing internal governance language.
- Retains the Choate Rosemary Hall and University of Pennsylvania sentence pending Travis verification, as the brief directs.

### Interaction

- Kept the dependency-free event tracker, accessible disclosure behavior, diagnostic validation/focus/reset, and IA timeline.
- Added an explicit Escape handler after rendered QA found that native dialog dismissal was not reliable in the in-app browser.

## AI / IA terminology audit

The systems are described as Intelligence Augmentation or private intelligence systems. Artificial intelligence appears only in allowed tool/mechanism contexts:

- the AI-versus-IA contrast;
- the statement that a buyer can own every AI tool and still lack a private system;
- the approved exoskeleton beat;
- the doctrine line that artificial intelligence is the mechanism;
- the brief-mandated expression `private AI operating system`, exactly once;
- the protected footer signature, “The AI is the leverage.”

No internal system name appears. The one-time product expression follows the latest governing brief even though the site's normal external naming remains IA.

## Anti-mush audit

The two-stage mechanical and editor pass is complete across the homepage, Applications, and About.

| Check | Result |
| --- | --- |
| Em dashes in gated HTML prose | 0 |
| `governed` / `governance` / `bounded` on homepage | 0 each |
| Rendered `continuity` uses on homepage | 3; cap is 4 |
| Empty power verbs / dead adjectives / vague stand-ins | 0, excluding protected canon |
| Fake-profound flips | 0; the required “Why not just use…” question is an objection, not a flip |
| Internal names and council vocabulary | 0 |
| `private AI operating system` | 1 |
| AI as a system category outside the brief-mandated expression | 0 |

Three canon-controlled exceptions are documented rather than hidden:

- “leverage” appears in the locked footer signature;
- “Decision Infrastructure” is explicitly identified as point-of-view vocabulary;
- the lowercase cognitive-infrastructure footer descriptor is required by the brief.

## Proof and consent

- Larry Conaway is the only named client.
- Both Larry quotes and the existing disclaimer match the approved text.
- The father/son story contains no diagnosis, identifying detail, metric, or outcome claim.
- The founder medical story states decision support only and retains qualified clinicians.
- The Daily Brief and philanthropist stories remain non-identifying.
- The candidate's earlier public withheld-consent paragraph was removed because the v2 brief records Larry's consent gate as cleared.

## Higgsfield review set

Generated with the installed Higgsfield capability:

- model: GPT Image 2;
- tier: 2K, high quality;
- 33 completed candidates;
- three variants for each required A, C, D1–D4, and E1–E5 asset;
- no Asset B because it is optional and the Weight ladder is typographic;
- no Asset F generation because the consented founder photograph remains;
- no Asset G until Travis approves an Asset A source.

Review materials:

- `docs/review-assets/higgsfield-v2-contact-sheet.jpg`
- `docs/review-assets/higgsfield-v2/contact-sheet.html`
- `docs/review-assets/higgsfield-v2/generations.tsv`
- `docs/higgsfield-v2-production-log.md`

The log includes full prompt direction, universal exclusions, model, tier, aspect ratios, generation IDs, raw PNG URLs, review derivatives, critique, and recommended variants. Higgsfield normalized the five requested Applications 4:5 generations to 3:4 sources; their final 4:5 crops remain deferred until approval. Higgsfield generation history remains the raw source archive. The PR contains lightweight high-resolution WebP review derivatives. No candidate is referenced by production HTML or CSS.

## UI/UX Pro Max findings applied

The installed UI/UX capability was used for a private executive-advisory conversion and trust review. The implementation follows its applicable recommendations:

- one primary scheduling action;
- proof before the final conversion;
- quiet editorial hierarchy and generous spacing;
- 44px interactive targets;
- visible focus and reduced-motion handling;
- responsive verification at 375, 768, 1024, and 1440;
- no horizontal overflow;
- semantic sections and a single H1;
- accessible disclosures, dialog, and diagnostic recovery.

The capability's generated color/typography direction was not applied because the brief's visual-system gate takes precedence.

## QA gates

| Gate | Result | Evidence / remaining action |
| --- | --- | --- |
| 1. Canonical-line grep | **Pass** | Locked lines 1, 2, 3, 5, 6, and 8 are present verbatim. |
| 2. Kill-list and frequency sweep | **Pass with recorded canon exceptions** | Zero em dashes; homepage frequency caps pass; exceptions listed above. |
| 3. Consent audit | **Pass** | Larry verbatim block; no other named client; family and medical boundaries present. |
| 4. Product-expression check | **Pass** | One `private AI operating system`; infrastructure terms used only as brief-authorized point of view/descriptor. |
| 5. Visual-system check | **Blocked on Travis** | Option A/B not chosen; generated images not graded or integrated. |
| 6. Events | **Pass** | All seven required event hooks are present; diagnostic validation, completion, CTA, and reset were exercised. |
| 7. Accessibility/responsive | **Conditional pass** | No overflow at four widths, one H1/page, alt coverage, 44px controls, keyboard disclosures, labeled dialog, Escape fix, diagnostic focus/reset, clean console. Mobile card copy remains 15px pending the visual-system decision. |
| 8. Read-aloud/editor pass | **Pass for copy; Travis review remains** | Copy was read in narrative order after the mechanical sweep. Final founder read-aloud remains appropriate before approval. |

## Rendered QA detail

### Responsive

- Homepage, Applications, and About checked at 375×812, 768×900, 1024×900, and 1440×900.
- No horizontal overflow at any target width.
- Each page has one H1.
- All referenced images loaded when scrolled into view and include alt attributes.
- Homepage primary buttons, buttons, and summary controls are at least 44px at 375px.
- Existing 15px mobile capability-card copy is the only known responsive specification miss and is held by the visual gate.

### Interaction

- Diagnostic missing-answer submission displays the error and focuses the first unanswered control.
- Six high-risk answers produce “The record depends heavily on you.”
- Result includes “Bring this profile to a private conversation. It becomes the agenda.” and the diagnostic CTA.
- Retake clears all selections, restores the form, and returns focus to the first question.
- Objections respond to Enter and Space, synchronize `aria-expanded`, and keep one item open.
- Trust dialog has a labeled close control and verified explicit Escape dismissal.
- About timeline opens by control and keeps one entry expanded.
- Browser console: no warnings or errors on Homepage, Applications, About, or consolidated preview.

### Source and metadata

- `app.js` passes `node --check`.
- JSON-LD parses on all three pages.
- Canonicals, Open Graph, Twitter Card metadata, robots, and sitemap routes are present.
- `git diff --check` passes.
- Production remains static HTML/CSS/JavaScript with no runtime dependency or third-party script.

## Review screenshots and preview

| Review view | File |
| --- | --- |
| Homepage hero, v2 desktop | `docs/review-assets/launch-candidate-v2-homepage-desktop.png` |
| Higgsfield approval contact sheet | `docs/review-assets/higgsfield-v2-contact-sheet.jpg` |
| Browsable full-resolution contact sheet | `docs/review-assets/higgsfield-v2/contact-sheet.html` |
| Consolidated noindex homepage | `launch-candidate-single-file.html` (local-only review artifact) |

## Travis decisions

### P0 — must close before approval

1. Choose **Option A** canonical dark Fraunces/Inter or **Option B** ratified light editorial.
2. Approve one source variant per required Higgsfield asset, or request a new generation round.
3. After the visual choice, raise mobile card copy to the required 16px within the chosen type system.

### P1 — strongly recommended

1. Confirm public use of the Choate Rosemary Hall and University of Pennsylvania claims.
2. Reconcile founder-led public positioning with the older internal founder-name restriction.
3. Confirm the recommended six-line Weight ladder.
4. Confirm the recommended “Why not hire an assistant?” objection.

### P2 — after source approval

1. Grade selected images to the approved visual system.
2. Produce final desktop/mobile crops and the Asset A social/OG crop.
3. Run the final 100% anatomy, paper-physics, and phantom-text inspection.
4. Re-run visual regression, image payload, and print-result checks after integration.

## Explicit controls

- No merge occurred.
- No deployment occurred.
- `main` was not modified.
- No generated image entered the site.
- Draft PR #123 remains the review surface.
