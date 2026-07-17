# Launch-candidate review package — July 17

## Recommendation

**Revise further before replacing the live site.**

The branch is now structurally capable of becoming the replacement site: it has a coherent homepage, proof above the midpoint, practical breadth, a bounded service model, a useful diagnostic, a launch-ready Applications page, a strong About page, consistent terminology, and one dominant conversion path.

Replacement should wait only for the explicit launch blockers listed below and final Travis review of the rendered pages.

## Final page map

| Page | Role | Primary conversion |
| --- | --- | --- |
| `/` | Recognition, mechanism, proof, service entry, objection handling, fit, trust, diagnostic | Schedule a private conversation |
| `/applications.html` | Deep-linkable breadth by continuity need | Schedule a private conversation |
| `/about.html` | Founder credibility, founder-use origin, IA lineage, human authority | Schedule a private conversation |
| `/#diagnostic` | No-email continuity assessment and useful pre-call artifact | Print/save result; optional later conversation |

## Homepage rationale by movement

1. **Hero:** preserves the governing headline, adds disconnected decisions/commitments/research/changing facts, names the capacity cost, and introduces Avant Garde only after consequence.
2. **Lived recognition:** converts abstraction into three ordinary operating moments.
3. **Missing layer:** prevents systems-integration and document-management interpretations by defining the relationships the system preserves. Includes a champion-ready internal explanation.
4. **Practical IA:** uses observable verbs and a Daily Brief artifact. “Useful before impressive” sets the product standard.
5. **Proof:** founder-use evidence and anonymized delivered operating evidence appear before the midpoint. Consent boundaries are explicit.
6. **Bounded deployment:** provides a credible service path without a fixed unapproved duration.
7. **Decision Infrastructure:** gives the Buyer an investment/risk bridge and makes quiet confidence an earned result.
8. **Objection layer:** answers tool substitution, effort, access, provider change, decision authority, post-pilot support, and shared privacy responsibility.
9. **Fit, trust, founder:** qualifies the client and states that source approval, principles, boundaries, training, review, and acceptance require participation.
10. **Final invitation:** says what the call is, what it is not, and what the visitor leaves with.

## Applications page rationale

The page prevents homepage overload while restoring the strongest breadth from the live site:

- executive operating continuity;
- research and consequential preparation;
- authorship and personal history;
- philanthropy, succession, and legacy;
- governed specialist and advisory synthesis.

Each pathway states what is preserved, the recurring artifact, and the human or privacy boundary. Sections are deep-linkable. Sensitive family material is omitted.

## Buyer / Champion / Advocate findings

### Buyer

The Buyer can now see:

- an ordinary-week artifact;
- one bounded entry model;
- the implementation and support sequence;
- operating risks reduced without an unverified ROI claim;
- participation requirements;
- practical answers to access, effort, privacy, and provider-change objections.

Remaining Buyer need: Travis must approve the commercial accuracy of the anonymized operating proof and service language.

### Champion

The Champion can repeat:

> Avant Garde builds a private system around one accountable person so the sources, decisions, commitments, changes, and next reviews behind their work remain connected and inspectable.

The Applications page provides internal routing by need without requiring the Champion to explain the entire category.

### Advocate

The Advocate now has founder-use proof, an anonymized operating transformation, a Daily Brief artifact, and explicit performance standards. Named evidence would improve advocacy but must not appear without documented consent.

## GTM and funnel rationale

The site supports founder-led referral, LinkedIn, email, WhatsApp, BixJet, and direct traffic through two commitments:

1. **Primary:** schedule a private conversation.
2. **Secondary:** complete the Continuity Diagnostic privately in-browser.

The diagnostic is the lower-risk commitment. It gives an immediate continuity profile and next step without requiring an email address. This protects brand trust and works across shared links. Applications sections provide deep-link destinations for traffic with known intent.

CTA hierarchy remains restrained:

- primary copper button at hero and final invitation;
- diagnostic as a text link;
- no repeated section-level scheduling buttons;
- Applications and About act as evidence paths, not competing conversions.

## Russell Brunson principles used and rejected

### Used, translated into the brand

- **Low-risk first commitment:** the no-email diagnostic precedes a sales conversation.
- **Value before request:** the diagnostic returns a useful profile and next action immediately.
- **Hook → story → offer:** headline recognition, founder/client proof, then a bounded conversation.
- **One clear next step:** scheduling remains the dominant action.
- **Message-to-market specificity:** recognition examples and application deep links let traffic enter through a known continuity burden.

### Rejected

- cheap tripwires;
- countdown timers;
- fake scarcity;
- exaggerated guarantees;
- loud funnel styling;
- forced email gates;
- stacked bonuses;
- unsupported transformation claims;
- repeated high-pressure CTAs.

These tactics would damage the private, consequential, founder-led positioning.

## Proof and consent

- Founder-use eye-surgery story: retained with medical and human-authority boundaries.
- Named client proof: withheld because consent documentation is absent.
- Client quotations: withheld.
- Numeric efficiency claim: withheld.
- Anonymized delivered operating transformation: included with an explicit boundary and requires Travis’s final public-use approval.
- Performance standards: clearly labeled as standards rather than client outcomes.

## Visual direction and asset notes

### Visual thesis

The accountable person remains the hero. Continuity is shown through editorial structure, operating artifacts, relationships, and disciplined information hierarchy. Technology stays mostly invisible.

### Current assets

No new Higgsfield generation was justified in this pass. Existing assets remain:

- `assets/continuity-hero-desktop.webp`
- `assets/continuity-hero-mobile.webp`
- `assets/governed-continuity-desktop.webp`
- `assets/governed-continuity-mobile.webp`
- `assets/founder-wide.jpg`
- `assets/founder.jpg`

The launch candidate uses the hero and authentic founder image. The Daily Brief is rendered as semantic HTML, avoiding generated interface text and improving accessibility.

### New visual prompts

None. No assets were generated.

## Before / after screenshots

| Review view | File |
| --- | --- |
| Previous homepage | `docs/review-assets/launch-candidate-before-homepage.jpg` |
| Launch-candidate homepage, desktop | `docs/review-assets/launch-candidate-homepage-desktop.jpg` |
| Launch-candidate homepage, mobile | `docs/review-assets/launch-candidate-homepage-mobile.jpg` |
| Continuity Diagnostic result, mobile | `docs/review-assets/launch-candidate-diagnostic-mobile.jpg` |
| Applications, desktop | `docs/review-assets/launch-candidate-applications-desktop.jpg` |
| About / IA timeline, desktop | `docs/review-assets/launch-candidate-about-timeline.jpg` |

The rendered pages preserve the restrained editorial visual system while making the offer, practical artifact, proof, and conversion path materially easier to scan.

## Accessibility and responsive QA

Rendered QA completed at:

- 375 × 812;
- 768 × 900;
- 1024 × 900;
- 1440 × 900;
- mobile landscape.

- No horizontal overflow at any target width or at 812 × 375 landscape.
- The pages have one H1 each and a logical semantic heading sequence.
- The objection accordion responds to Enter and Space, keeps only one item open, and synchronizes `aria-expanded`.
- The diagnostic has explicit labels, custom required-state recovery, first-error focus, focused results, reset with focus recovery, and a print/save action.
- Primary controls meet or exceed 44px; the homepage primary CTA is 50px high.
- Visible focus and reduced-motion behavior are retained.
- Every image has alternative text.
- Trust-dialog focus containment and Escape behavior are retained.
- The IA timeline remains keyboard/tap operable and does not overflow.

## Metadata and structured-data QA

Rendered and source verification completed:

- all three pages have a unique title and description;
- canonical URLs, Open Graph, and Twitter Card metadata are present;
- homepage and Applications use valid Organization / WebSite / Service JSON-LD as appropriate;
- About uses valid Person JSON-LD;
- the sitemap includes Applications;
- all local links and fragments resolve;
- no retired product terminology remains;
- “artificial intelligence” appears only where it is explicitly subordinated as a tool or contrasted with IA.

## Performance review

The implementation remains static HTML/CSS/JavaScript with:

- no runtime framework;
- no third-party JavaScript;
- self-hosted variable fonts with `font-display: swap`;
- one desktop hero preload;
- optimized existing WebP hero assets;
- no new image payload;
- semantic HTML for the Daily Brief, proof, diagnostic, and Applications content.

Core launch files total approximately 579 KB uncompressed, including the four principal existing images used by the pages. Individual code payloads remain small: homepage 29.7 KB, Applications 11.6 KB, About 16.3 KB, CSS 29.4 KB, and JavaScript 8.3 KB. The rendered console produced no warnings or errors.

## Unresolved Travis decisions

1. Approve, revise, or remove the anonymized delivered transformation.
2. Confirm the exact commercially supportable configuration/training/refinement promise.
3. Confirm whether any named client evidence has explicit public consent.
4. Decide whether the diagnostic should remain private in-browser or later support a consented handoff.
5. Approve the Applications taxonomy and memoir working brief.
6. Approve the launch-candidate hero and final invitation copy.

## Explicit launch blockers

1. Travis approval of the anonymized proof summary.
2. Travis approval of service-scope language.
3. Travis’s final visual review of the homepage, Applications page, diagnostic, About page, and IA timeline.

Responsive, accessibility, interaction, metadata, link, and console QA found no technical P0 defect.

No merge or deployment is authorized by this review package.
