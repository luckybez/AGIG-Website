# Codex Execution Instructions

## Governing work order

WO-50: Codex Parallel Website Rebuild — Continuity-Led Intelligence Augmentation Narrative.

## Mandatory preflight

Before changing website code:

1. Read `docs/DESIGN_TOOLING_SETUP.md`.
2. Run `bash scripts/bootstrap-design-tools.sh`.
3. Verify `.codex/skills/ui-ux-pro-max/SKILL.md` exists.
4. Authenticate Higgsfield with `higgsfield auth login` and verify with `higgsfield model list`.
5. Confirm the current branch is `feature/continuity-led-ia-rebuild`.
6. Do not modify or merge into `main`.

If any preflight step fails, stop website implementation and report the exact failure in WO-50.

## Tool routing

- Use UI/UX Pro Max for design-system reasoning, hierarchy, responsive UX, accessibility, interaction design, and UI quality review.
- Use Higgsfield only for approved visual-generation tasks after narrative and composition approval.
- Use Codex for repository inspection, implementation, testing, responsive behavior, accessibility, metadata, analytics, and QA.
- Treat Notion doctrine and Travis's explicit decisions as authoritative.

## Brand guardrails

- Category: Intelligence Augmentation.
- What Avant Garde builds: private cognitive infrastructure.
- Strategic outcome: Decision Infrastructure.
- AI is the mechanism, not the story.
- The customer remains the hero and accountable decision-maker.
- Preserve semantic continuity as the differentiator; do not reduce the story to data integration.
- Do not claim that the system replaces judgment, responsibility, human support, or final authority.
- Do not use generic AI imagery, robots, holograms, glowing brains, or floating dashboards.

## Review gates

Do not advance automatically between gates:

1. Information architecture and narrative map.
2. Complete first build.
3. Visual and UX refinement.
4. Final QA and merge recommendation.

Each gate requires Project Manager review and Travis approval or redirection. No production merge is authorized by this file.
