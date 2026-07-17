#!/usr/bin/env bash
set -euo pipefail

command -v node >/dev/null 2>&1 || { echo "Node.js is required." >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "npm is required." >&2; exit 1; }
command -v python3 >/dev/null 2>&1 || { echo "Python 3 is required by UI/UX Pro Max." >&2; exit 1; }

printf '\nInstalling UI/UX Pro Max for Codex...\n'
npx --yes uipro-cli@latest init --ai codex --force

printf '\nInstalling Higgsfield CLI...\n'
npm install -g @higgsfield/cli@latest

printf '\nVerifying installations...\n'
test -f .codex/skills/ui-ux-pro-max/SKILL.md || {
  echo "UI/UX Pro Max skill was not installed at .codex/skills/ui-ux-pro-max/SKILL.md" >&2
  exit 1
}
command -v higgsfield >/dev/null 2>&1 || {
  echo "Higgsfield CLI is not available on PATH after installation." >&2
  exit 1
}

printf '\nUI/UX Pro Max is installed for Codex.\n'
printf 'Higgsfield CLI is installed. Complete authentication with: higgsfield auth login\n'
printf 'Then verify with: higgsfield model list\n\n'
