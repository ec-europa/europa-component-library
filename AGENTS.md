# ECL – AI Agent Guide

Europa Component Library (ECL) is an enterprise design system built as a pnpm monorepo.
It provides vanilla CSS/JS components and Twig templates for European Commission (EC)
and European Union (EU) websites.

Full developer documentation lives in [`/docs`](./docs/README.md). This file covers
only what is useful to orient an AI agent quickly.

---

## Setup & key commands

```bash
pnpm install          # install and link all workspace packages

pnpm start:ec         # Storybook for the EC system (port 9001)
pnpm start:eu         # Storybook for the EU system (port 9002)
pnpm start:website    # Documentation website

pnpm test:components              # run all Jest tests
pnpm test:components -- button    # test a single component
npm run test:components -- button -u  # update snapshots for one component only
npm run test:components -- -u         # update all snapshots

pnpm lint             # ESLint + Stylelint
pnpm prettier:write   # auto-format

pnpm dist             # full build (presets + components + resources)
pnpm --filter '@ecl/button' run dist  # build a single package
```

---

## Monorepo layout

```
src/
  components/     ← 60+ components, each an @ecl/{name} npm package
  compositions/   ← higher-level markup patterns built from components
  themes/         ← design tokens for EC and EU (maps/, variables/)
  presets/        ← bundled distributions (ec, eu, reset, rtl)
  playground/     ← Storybook instances (ec/, eu/)
  website/        ← documentation site (React + Vike + MDX)
  resources/      ← logos, favicons
  tools/          ← build tool (@ecl/builder), dom-utils, event-manager
docs/             ← developer documentation (start here for deep dives)
```

---

## Component anatomy

Every component is a self-contained package at `src/components/{name}/`:

| File               | Purpose                                |
| ------------------ | -------------------------------------- |
| `{name}.html.twig` | Twig template (markup)                 |
| `{name}.scss`      | Component styles (BEM, `@use` modules) |
| `{name}.js`        | JS behaviour (optional)                |
| `{name}.story.js`  | Storybook story                        |
| `{name}.test.js`   | Jest snapshot + axe a11y tests         |
| `demo/data.js`     | Sample data for stories                |
| `package.json`     | Declares `@ecl/{name}`, lists deps     |

Design tokens for a component live in `src/themes/{ec|eu}/variables/_{name}.scss`
and are injected into the component via Sass module configuration in the preset.

To trace a visual property end-to-end:
`story (demo/data.js)` → `twig template` → `component.scss` → `themes/*/variables/`

---

## EC vs EU — the critical distinction

- **EC** (European Commission): blue branding, supports colour modes (palette swaps defined in `ecl-ec-color-modes.css`).
- **EU** (European Union): EU colour palette, light mode only, no colour-mode CSS.
- Component packages (`@ecl/button`, etc.) are **shared**; visual differences come
  entirely from which preset/theme is loaded.
- **Never mix EC and EU components on the same page.**
- If the system is unclear from context, ask before assuming.

See [`docs/ec-eu-systems.md`](./docs/ec-eu-systems.md) for full details.

---

## Conventions to respect

- CSS class naming: BEM with `ecl-` prefix — `.ecl-button__label--primary`
- SCSS: use `@use` / `@forward`, never `@import`
- Package names: `@ecl/{kebab-name}`, published under the `@ecl` npm org
- Commits: `type(scope): message - TICKET-ID (#PR)` — see [`docs/conventions/git.md`](./docs/conventions/git.md)
- Tests: update snapshots explicitly (`-u` flag) only after reviewing the diff

---

## Task-specific skills

Step-by-step guides for common AI tasks live in [`docs/agentic/`](./docs/agentic/README.md):

| Task                                | Skill file                                                                       |
| ----------------------------------- | -------------------------------------------------------------------------------- |
| Create a new component              | [`docs/agentic/ecl-new-component.md`](./docs/agentic/ecl-new-component.md)       |
| Modify an existing component        | [`docs/agentic/ecl-modify-component.md`](./docs/agentic/ecl-modify-component.md) |
| Run tests / fix snapshots / fix axe | [`docs/agentic/ecl-testing.md`](./docs/agentic/ecl-testing.md)                   |
| Add or update Storybook stories     | [`docs/agentic/ecl-story-controls.md`](./docs/agentic/ecl-story-controls.md)     |

---

## Where to look for more

| Topic                    | File                                                                 |
| ------------------------ | -------------------------------------------------------------------- |
| Project setup & commands | [`docs/developers-start-here.md`](./docs/developers-start-here.md)   |
| Repo structure           | [`docs/ecl-structure.md`](./docs/ecl-structure.md)                   |
| Component conventions    | [`docs/conventions/components.md`](./docs/conventions/components.md) |
| SCSS conventions         | [`docs/conventions/scss.md`](./docs/conventions/scss.md)             |
| JS conventions           | [`docs/conventions/javascript.md`](./docs/conventions/javascript.md) |
| Theme & tokens           | [`docs/ec-eu-systems.md`](./docs/ec-eu-systems.md)                   |
| Accessibility            | [`docs/accessibility.md`](./docs/accessibility.md)                   |
| EC vs EU systems         | [`docs/ec-eu-systems.md`](./docs/ec-eu-systems.md)                   |
