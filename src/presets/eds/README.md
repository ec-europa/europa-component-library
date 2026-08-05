# ECL - EDS preset

Compiles `@ecl/theme-eds` into real, distributable CSS: the `--eds-*` custom
properties plus a real `@font-face` for Inter (CDN + local woff2 fallback,
mirroring `src/presets/ec/src/ec.scss`).

Unlike `@ecl/preset-ec` / `@ecl/preset-eu`, this preset does **not** bundle
any components — `theme-eds` has no per-component variable wiring yet
(component adoption is a separate, later effort). It exists so anything that
needs the tokens as real compiled CSS - starting with
`src/themes/eds/showcase/` - has something reliable to consume instead of
the CDN-only font attempt that fails outside an approved origin.

## Build

```bash
pnpm --filter @ecl/preset-eds run build   # → build/styles/ecl-eds.css, build/fonts/
pnpm --filter @ecl/preset-eds run dist    # production build → dist/
```
