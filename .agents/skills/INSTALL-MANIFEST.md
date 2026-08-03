# Project-local design skills

These skills are pinned to audited Git commits and are installed only on the
`tooling/design-skills` branch. Production code and `main` are unchanged.

## Sources

- `incluud/astro-agent-skills` at `4b4355ecea8ef4f68c9025f3de5a73c27df59310`
- `currents-dev/playwright-best-practices-skill` at `283d5cbc5d11aac1abda058b16ad22c317d54dc0`
- `addyosmani/web-quality-skills` at `95d6e255afe1596b557d7a8498517884438f5b3a`
- `pbakaus/impeccable` at `33b9a3752b8852c7adb7f4935a3f6c160bf3fefc`

## Impeccable restrictions

- Skill files only; no CLI installer was run.
- No hooks or browser extension are installed.
- No global files or agent configuration are changed.
- Do not use Impeccable live-edit mode without a separate review and explicit
  user approval.
- Review upstream changes before updating the pinned commit.

## Revert

Switch back to `main` to remove these project-local skills from the working
tree. Delete the `tooling/design-skills` branch if permanent removal is wanted.
