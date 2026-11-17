---
name: ecl-modify-component
description: Guides changes to an existing ECL component in src/components/ — styles and design tokens, Twig markup and parameters, responsive layout, print styles, images. Use when the user asks to fix, restyle, extend, add a parameter or variant to, or otherwise change a component that already exists. For Storybook-only changes use ecl-story-controls; for EC palette/color-mode tokens use ecl-update-token.
---

# Modify an existing ECL component

## Trace before editing

Every visual property has a chain. Follow it before changing anything:

```
demo/data.js  →  {name}.html.twig  →  {name}.scss  →  src/themes/{ec|eu}/variables/_{name}.scss
```

Start from the theme variables file. If a token already exists for what you want to
change, update it there. Hardcoded values in component SCSS bypass theming and make
EC/EU diverge silently.

Ask the user which system (EC, EU or both) the change targets if the request does not say.

## Which SCSS files to edit

Look at the component folder:

| What you find                                | Edit                                    |
| -------------------------------------------- | --------------------------------------- |
| `{name}.scss` only                           | The single shared file                  |
| `{name}-ec.scss` and `{name}-eu.scss`        | Each system the change applies to       |
| `{name}-print.scss` (or per-system variants) | Too, whenever layout or spacing changes |

## Changing styles

1. Check `src/themes/{ec|eu}/variables/_{name}.scss` — use or add a token rather than
   hardcoding.
2. Reference it from the component SCSS with `map.get($<name>, 'token-key')`.
3. EC-only or EU-only change → edit only that system's variables/files.

### Responsive layout

Use the breakpoints mixin, never raw `@media` queries:

```scss
@use '@ecl/grid/mixins/breakpoints';

.ecl-{name}__element {
  flex-direction: column; // mobile first

  @include breakpoints.up('m') {
    flex-direction: row;
  }
}
```

Keys (from `src/themes/{ec|eu}/maps/layout.scss`): `'xs'` 0, `'s'` 480px, `'m'` 768px,
`'l'` 996px, `'xl'` 1140px.

If the SCSS does not already `@use` the mixin, add `"@ecl/grid": "<VERSION>"` to the
component's `devDependencies` (copy the version from another `@ecl/*` dependency) and
the `@use` line at the top of the file.

## Changing the Twig template

- Keep the existing parameter pattern: documented in the `{# Parameters: ... #}` header,
  internal `_` variables, escaped output.
- Never drop the `extra_classes` / `extra_attributes` passthrough.
- A new parameter must be added in all four places together:
  - `{name}.html.twig` — declare in the header and use it
  - `demo/data.js` — sensible default value
  - `{name}.story.js` — only if a control is useful; ask the user when unsure, then
    follow `ecl-story-controls`
  - `README.md` — Parameters section

**Images** — if the task adds or changes an image, read
[reference/picture.md](reference/picture.md) first (Picture component vs plain `<img>`,
include pattern, demo data, overflow fix).

## Verify

```bash
pnpm lint                         # always — Stylelint/ESLint
pnpm test:components -- <name>    # only if the Twig template or demo data changed
```

Snapshots capture rendered HTML, so SCSS and token-only changes cannot affect them.
If a snapshot fails, follow `ecl-testing` — never update with `-u` before reading the diff.
