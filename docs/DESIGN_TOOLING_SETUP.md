# Design Tooling Setup

## Purpose

This branch requires two specialist capabilities before website implementation begins:

1. **UI/UX Pro Max** for design-system generation, information hierarchy, responsive UX, accessibility, interaction restraint, and pre-delivery UI review.
2. **Higgsfield** for approved editorial-realism image and motion generation.

These tools support execution. They do not override the Avant Garde Brand & Experience Blueprint, Company Spine, approved website doctrine, or Travis's approval authority.

## Codex setup

From the repository root, run:

```bash
bash scripts/bootstrap-design-tools.sh
```

The script:

- installs UI/UX Pro Max into `.codex/skills/ui-ux-pro-max/`;
- installs the official Higgsfield CLI;
- verifies both local installations;
- leaves Higgsfield authentication as an explicit human-controlled step.

Complete Higgsfield authentication:

```bash
higgsfield auth login
higgsfield model list
```

Do not commit authentication tokens, session files, API keys, generated secrets, or local environment files.

## ChatGPT setup

Higgsfield's official remote MCP endpoint is:

```text
https://mcp.higgsfield.ai/mcp
```

In ChatGPT, add it through **Settings → Connectors → Add custom connector**, name it `Higgsfield`, paste the endpoint, and complete the Higgsfield sign-in flow.

UI/UX Pro Max is not a ChatGPT connector. It is a repository-installed skill intended for Codex and other coding agents. ChatGPT remains the brand, CRO, buyer-psychology, BCA, GTM, and governance review layer.

## Verification gates

Before Gate 1 implementation, Codex must provide evidence that:

- `.codex/skills/ui-ux-pro-max/SKILL.md` exists;
- the UI/UX Pro Max skill loads during a UI/UX request;
- `higgsfield model list` succeeds after authentication;
- no credentials were committed;
- the production branch remains unchanged.

## Higgsfield visual constraints

Use Higgsfield only after the narrative and composition are approved.

Required direction:

- human judgment first;
- continuity and support second;
- technology visually quiet or invisible;
- editorial or ultra-real realism where trust and emotion matter;
- text-safe space and responsive crop variants;
- consistent subject, palette, lighting, emotion, and brand world.

Prohibited:

- robots;
- holograms;
- glowing brains;
- floating dashboards;
- generic stock-tech imagery;
- autonomous-decision symbolism;
- visual complexity without a conversion purpose.

## Failure handling

If UI/UX Pro Max does not install, rerun with the current CLI:

```bash
npm install -g uipro-cli@latest
uipro init --ai codex --force
```

If Higgsfield reports an expired session:

```bash
higgsfield auth login
```

If a model name is unavailable, do not guess. Run:

```bash
higgsfield model list
```

Record unresolved failures in WO-50 before website implementation proceeds.
