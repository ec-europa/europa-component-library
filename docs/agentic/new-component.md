# Skill: create a new ECL component

The definitive step-by-step guide is [`docs/conventions/new-component.md`](../conventions/new-component.md).
Read it fully before starting — it covers every file to create or modify, with exact
templates and alphabetical-insertion rules.

## Before you start

- Read an existing component that is similar in complexity (e.g. `src/components/label/`
  for a simple one, `src/components/expandable/` for one that also includes JS).
- Get the current `<VERSION>` from any existing component's `package.json` — all packages
  are versioned together and must match.

## AI checklist (things easy to miss)

- [ ] Alphabetical order is required in every file that receives an insertion
      (theme `_variables.scss`, preset `package.json`, preset `ec.scss`, website index).
- [ ] Both EC **and** EU must be updated for every file in sections 2–5 of the guide.
- [ ] Run `pnpm install` from the root after creating the package — this links the new
      workspace package before tests or Storybook can find it.
- [ ] The `demo/data.js` file uses `module.exports`, not ES module `export default`.
- [ ] Thumbnail SVGs for the website index are hand-crafted; flag to the team if none exists.

## After creating all files

```bash
pnpm install
pnpm test:components -- <name>   # should pass on first run
pnpm start:ec                    # verify story renders in Storybook
```
