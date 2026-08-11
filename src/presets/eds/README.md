# ECL - EDS preset

Compiles `@ecl/theme-eds` into real, distributable CSS: the `--eds-*` custom
properties plus a real `@font-face` for Inter (CDN + local woff2 fallback,
mirroring `src/presets/ec/src/ec.scss`).

Unlike `@ecl/preset-ec` / `@ecl/preset-eu`, this preset bundles only the
components used to compare EDS integration approaches (see
`docs/eds-integration-poc.md`) — `@ecl/button` (themed via
`src/themes/eds/variables/_button.scss`) and `@ecl/eds-button`. It's what
`playground/eds`'s Storybook loads to render those components and the
design-token stories.

## Build

```bash
pnpm --filter @ecl/preset-eds run build   # → build/styles/ecl-eds.css, build/fonts/
pnpm --filter @ecl/preset-eds run dist    # production build → dist/
```
