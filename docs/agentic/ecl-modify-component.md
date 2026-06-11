# Skill: modify an existing ECL component

Use this when changing styles, markup, behaviour, or adding parameters to an existing component.

## Locate the files

Every visual property has a chain. Trace it before editing anything:

```
demo/data.js  →  {name}.html.twig  →  {name}.scss  →  src/themes/{ec|eu}/variables/_{name}.scss
```

Start from the theme variables file. If a token already exists for what you want to change,
update it there — not in the component SCSS. Hardcoding values in component SCSS is wrong.

## Understand the SCSS approach for this component

Open `{name}.scss` (and check for `{name}-ec.scss` / `{name}-eu.scss` siblings):

| What you find                              | Approach                   | Implication                             |
| ------------------------------------------ | -------------------------- | --------------------------------------- |
| One file, no system suffix                 | Shared — one file for both | Edit the single file                    |
| `{name}-ec.scss` and `{name}-eu.scss` only | Fully separate             | Edit both if the change applies to both |

Each component also has a `{name}-print.scss` (or per-system print variants). Keep print
styles in sync with their screen counterpart when you change layout or spacing.

## Changing styles

1. Check `src/themes/{ec|eu}/variables/_{name}.scss` — use or add a token rather than hardcoding.
2. Edit the component SCSS, referencing the token via `map.get($<name>, 'token-key')`.
3. If the change is EC-only or EU-only, edit only that system's file.

### Responsive layout

ECL uses a breakpoints mixin — do not write raw `@media` queries. The pattern is:

```scss
@use '@ecl/grid/mixins/breakpoints';

.ecl-{name}__element {
  flex-direction: column; // mobile first

  @include breakpoints.up('m') {
    flex-direction: row;  // tablet and above
  }
}
```

Available breakpoint keys: `'xs'` (480px), `'s'` (768px), `'m'` (996px), `'l'` (1140px).

If the component SCSS does not already import `@ecl/grid/mixins/breakpoints`, check
`{name}/package.json` — add `"@ecl/grid": "<VERSION>"` to `devDependencies` if missing,
then add the `@use` at the top of the SCSS file.

## Changing the Twig template

- Follow the existing parameter pattern: declare at the top with `{# Parameters: ... #}`,
  use internal `_` variables, never output raw user content without escaping.
- `extra_classes` and `extra_attributes` passthrough must be preserved in every template.
- If you add a new parameter, update all of these in sync:
  - `{name}.html.twig` — add the parameter and use it
  - `demo/data.js` — add a sensible default value
  - `{name}.story.js` — add to `getArgs` and `getArgTypes`
  - `README.md` — add to the Parameters section

### Images

If the task involves adding an image, read [`docs/agentic/ecl-picture.md`](./ecl-picture.md)
before making any changes — it covers the Picture vs plain `<img>` decision, Twig include
pattern, demo data shape, and the SCSS overflow fix.

### Optional sub-objects in stories

Not every new optional parameter needs a Storybook toggle control. If it's unclear whether
a control is useful, **ask the user** before adding one.

When a toggle is needed and the parameter is an optional object (e.g. an image, an icon),
expose it as a boolean toggle rather than the raw object. The pattern:

```js
// getArgs
show_image: true,

// getArgTypes
show_image: {
  name: 'image',
  type: { name: 'boolean' },
  description: 'Toggle image visibility',
  table: { type: { summary: 'boolean' }, category: 'Optional' },
},

// prepareData
if (!args.show_image) {
  delete clone.image;
}
```

## After any change

```bash
pnpm test:components -- <name>   # run tests for this component only
```

If snapshots fail, read the diff. If the change was intentional:

```bash
npm run test:components -- <name> -u   # update snapshots for this component only
```

Never update snapshots without reading what changed. A snapshot update is a permanent
record that the new HTML output is correct.
