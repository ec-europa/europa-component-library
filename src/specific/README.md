# Specific

Site-specific ECL builds. They are released with ECL (npm, CDN and GitHub
release assets) but are meant only for the sites they were made for.

Presets and components are kept apart, so that one component can be reused by
several site presets.

## Layout

```
src/specific/
  presets/{site}/       @ecl/specific-preset-{site}: a full EC preset compiled with site overrides
  components/specific-{name}/    @ecl/specific-{name}: components that are not part of ECL, used by one or more presets
```

## How a component works

A specific component follows the ECL component anatomy, with the `specific-`
prefix on the folder so that folder, npm package and Twig path match:

- Twig: `{% include '@ecl/specific-{name}/{name}.html.twig' %}`
- CSS classes: `ecl-{name}` (BEM, like ECL components)
- The component SCSS only exposes `$theme` and `${name}` maps (`null !default`).
  Values live in each preset that uses it, in
  `presets/{site}/src/variables/_{name}.scss`, and the component is loaded at
  the end of `{site}.scss`. The preset lists the component in its dependencies.
- Stories appear in the EC Storybook under "Specific" only with `pnpm start:ep`.
  Tests run with the other component tests (`pnpm test:components`).
- Components are published on npm with the release, but are not part of
  `@ecl/twig-templates`: sites install the ones they use.

## How a preset works

`presets/{site}/src/_config.scss` configures `@ecl/theme-ec`. Each entry
(`{site}.scss`, `{site}-print.scss`…) loads it first, then the matching EC preset
entry, so every EC|EU output is compiled with the site values. No runtime CSS
variables and no changes to the components themselves are needed.

- **Per component**: `@use '@ecl/theme-ec/overrides' with ($overrides: (...))`
  takes partial maps that are deep-merged into the matching component map of
  `src/themes/ec/variables/*.scss`, keyed by map name (`'card'`, `'button'`,
  `'accordion-print'`…).
- **Theme-wide**: the primitives in `src/themes/ec/maps/*.scss` are `!default`
  and can be set with `@use '@ecl/theme-ec/theme' with (...)`. Component maps
  derived from them follow.
- Site-specific component styles and scripts are added to `{site}.scss`,
  `{site}.js` and `{site}-esm.js`.

The build mirrors the EC|EU preset file for file (`ecl-ec*.css` → `ecl-{site}*.css`,
plus scripts, fonts and logos), so a site switches by replacing the EC preset
with its own.

## Release

`pnpm dist:presets` builds every `@ecl/specific-preset-*` package. Each new
preset also needs a copy line in `scripts/dist-presets.sh` (CDN + SRI) and a
zip step in `.github/workflows/production.yml`.

## EP

```bash
pnpm build:ep   # build into presets/ep/build
pnpm dist:ep    # production build into presets/ep/dist
pnpm start:ep   # build EP, then run the EP watcher and the EC Storybook (no EC watcher)
```

`start:ep` opens the EC Storybook with `ecl-ep` on and `ecl-ec` off in the
"ECL styles" panel; the EP checkbox only appears there. The EP watcher only
rebuilds `ecl-ep.css`; run `pnpm build:ep` for the other outputs.
