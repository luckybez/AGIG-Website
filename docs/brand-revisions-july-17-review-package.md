# Brand revisions — July 17: review package

> Review control: this branch and pull request must not be merged without Travis Lewis's explicit approval. No deployment is included or authorized.

## Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`. The site is static and has no build step.

## Before and after narrative map

| Before | After |
| --- | --- |
| Opens with the non-delegable decision | Opens with the buyer's invisible continuity burden |
| Describes many pressures and capabilities | Follows one causal path: fragments → integration labor → governed continuity |
| Compares generic AI with Intelligence Augmentation | Distinguishes stored chats from governed decision memory and tool access from operating capacity |
| Introduces the system through a broad feature inventory | Explains preserve → prepare → sequence → support judgment |
| Uses a long bespoke-engagement sequence | Offers one bounded first deployment with explicit scope and review |
| Repeats benefits across examples and proof | Defines Decision Infrastructure as an outcome earned through performance |
| Interleaves founder, client, and product stories | Keeps the customer central; founder and lineage support the About page |
| Repeats conversion invitations throughout | Uses one dominant conversion at header, hero, and close |

## Section rationale

1. **Hero** — recognizes the buyer as connective tissue before naming the system.
2. **Continuity problem** — makes invisible integration labor concrete without a long vignette list.
3. **Necessary distinction** — answers “I already have AI/tools” and “is this saved chat history?”
4. **Private cognitive infrastructure** — explains the operating loop and the product expression without leading with technology.
5. **Bounded first deployment** — lowers perceived scope and makes governance inspectable.
6. **Decision Infrastructure** — establishes preparation, sequencing, follow-through, and judgment as the strategic outcome.
7. **Performance** — uses observable, consent-safe operating patterns instead of unverified claims.
8. **Trust and authority** — makes privacy, traceability, approvals, and earned trust visible.
9. **Fit** — qualifies the buyer and rejects autonomous-decision expectations.
10. **Invitation** — closes with one low-pressure, founder-led conversion.

## Content disposition

### Retained

- “You can delegate the work. You cannot delegate the decision.”
- “It doesn't make the decision. It carries what the decision depends on.”
- Intelligence Augmentation, private/founder-led positioning, human authority, privacy, permissions, and source traceability.
- The About page's founder story and intellectual lineage.

### Revised

- Hero, continuity problem, AI distinction, system description, benefits, proof, trust, fit, and engagement pathway.
- Capabilities became a four-part continuity loop rather than a generic feature list.
- Five-step engagement became a bounded four-step first deployment.

### Relocated

- Detailed founder credibility and historical lineage remain on About.
- Detailed security principles remain available in an accessible native dialog.

### Removed

- Repetitive pressure vignettes and overlapping benefit sections.
- Client-specific stories and testimony whose public-consent status is not recorded in the repository.
- Repeated mid-page conversion buttons.
- Visual or verbal suggestions of autonomous AI authority.

## UI/UX Pro Max findings and corrections

- **Density:** the prior homepage carried too many equal-weight movements. The new page uses ten clearly differentiated sections and routes lineage away from conversion.
- **Hierarchy:** buyer problem precedes category, mechanism, and outcome. Headings use a consistent editorial scale.
- **Conversion:** one primary CTA label and destination; secondary links only support orientation.
- **Accessibility:** semantic sections and headings, skip link, visible focus, native dialog, descriptive image alternative, 44px minimum controls, non-color labels, and reduced-motion handling.
- **Responsive behavior:** single-column narrative at 375px, stacked comparisons, mobile-specific imagery, compact header, no hidden essential content, and no horizontal-scroll interaction.
- **Performance:** self-hosted fonts, dependency-free CSS/JS, WebP generated imagery, explicit media dimensions/aspect ratios, eager hero only, lazy below-fold media.
- **Interaction restraint:** no scroll choreography or decorative animation; only 180ms color/border state transitions.
- **Design-system judgment:** UI/UX Pro Max suggested a brighter aurora treatment and pink accent. Those recommendations were rejected because they conflict with the approved quiet, editorial, technology-invisible doctrine. Its spacious density, editorial typography, contrast, focus, responsive, and motion guidance were retained.

## AI anti-mush audit

The homepage and About page were audited after visual review. The pass targeted:

- abstract benefit stacks without an observable action or output;
- symmetrical lists of polished nouns;
- vague words such as “meaningful,” “coherent,” “grounded,” and “governable” where a test could be named instead;
- repeated “not X, but Y” constructions;
- inflated claims about trust, judgment, transformation, or intelligence;
- metaphor that obscured what the system reads, records, prepares, or requires a person to approve;
- generic founder language that could apply to any technology consultancy.

Corrections made:

- The hero now says what is linked, what the system prepares, and who decides.
- The continuity problem now uses an email, calendar, document, and chat to show the reconstruction work.
- Governed decision memory is defined as a maintained record with sources, rationale, owner, commitments, open questions, and changes.
- System capabilities now use observable verbs: record, prepare, follow through, and challenge.
- The first deployment names example workflows and explicit acceptance checks: accuracy, traceability, missed changes, false alerts, and time saved.
- Decision Infrastructure benefits now describe prepared reviews, visible dependencies, tracked commitments, and reviewable reasoning.
- Proof modules name citations, owners, due dates, approval points, and prohibited autonomous actions.
- Trust language now specifies source access, revision history, approval rules, and expansion criteria.
- Founder copy now describes concrete technical work, the eye-surgery decision process, and the operating method without generic “meaningful impact” claims.

The two governing authority lines remain because they are approved brand doctrine, not filler.

## Higgsfield assets

Generated with GPT Image 2 through the installed Higgsfield capability.

| Asset | Use | Source composition | Crop |
| --- | --- | --- | --- |
| `assets/continuity-hero-desktop.webp` | Homepage hero | Accountable human at a real decision table; source fragments remain separate | 16:9, CSS cover |
| `assets/continuity-hero-mobile.webp` | Mobile hero | Same narrative with vertical composition and copy space | 3:4, CSS cover |
| `assets/governed-continuity-desktop.webp` | System section | Human hand arranges source material into a traceable sequence | 16:9 source, displayed 16:7 |
| `assets/governed-continuity-mobile.webp` | Mobile system section | Same continuity-after narrative in vertical form | 3:4 |

### Prompt direction

The prompts specified editorial documentary realism; real paper sources; a dark walnut worktable; deep navy, ivory, and muted copper; natural directional light; visible human judgment; and either separated fragments or a calm traceable sequence.

### Explicit exclusions

No readable generated text, screens, dashboards, UI, robots, holograms, glowing brains, circuitry, futuristic interfaces, stock-tech poses, logos, or synthesized founder likeness.

The first desktop hero generation used the default low-quality tier and was excluded. A 2K/high-quality replacement using the same approved prompt direction is the reviewed asset.

## Responsive and accessibility QA

- Target widths: 375, 768, 1024, and 1440 pixels.
- Mobile layout preserves the desktop narrative order and all trust content.
- Primary controls meet a 44px minimum target.
- Focus states are visible against light and dark surfaces.
- Hero imagery is decorative because adjacent copy carries the full meaning; governed-continuity imagery has descriptive alternative text.
- Comparison blocks use headings and labels, not position or color alone.
- Native `dialog` supports keyboard Escape; close control is labeled.
- `prefers-reduced-motion` disables transitions and smooth scrolling.
- Body copy remains at least 16px on mobile.

## Performance and metadata

- No third-party runtime or framework.
- Self-hosted variable fonts with `font-display: swap`.
- Hero image preloaded for desktop; below-fold continuity image is lazy-loaded.
- Generated PNGs were consumed via Higgsfield's optimized WebP derivatives.
- Title, meta description, canonical, Open Graph, Twitter Card, and Organization JSON-LD were rewritten around Decision Infrastructure and continuity.
- Social image alternative text is present.
- Sitemap remains limited to the homepage and About page.

## CTA instrumentation

All Calendly entry points retain `data-event` instrumentation with placement-specific event names:

- `calendly_clicked_header`
- `calendly_clicked_hero`
- `calendly_clicked_final`
- `calendly_clicked_footer`

The trust disclosure retains `trust_principles_opened`.

## Unresolved decisions for Travis

1. Confirm the recommended hero line or select one Gate 1 alternative.
2. Confirm whether “Private AI Operating Systems” should remain a product-expression phrase on the homepage or move to a later sales conversation.
3. Decide whether any prior client testimony has explicit, documented public consent and should be restored in a later proof module.
4. Confirm whether the current Calendly destination and “Schedule a private conversation” label remain canonical.
5. Review the generated imagery for brand fit and decide whether the human should remain partially visible or the composition should become entirely first-person.
