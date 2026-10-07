# ECL → EDS token mapping

Mapping between ECL v5 design tokens and the EDS tokens
(`@ecl/eds-foundations`, `src/eds/foundations`), for EC and EU.

The mapping is not 1:1: scales were renamed, some steps were dropped or
added, and some concepts changed entirely (color modes, dark mode, responsive
typography). Each row is therefore qualified:

| Match | Meaning                                                                    |
| ----- | -------------------------------------------------------------------------- |
| `=`   | same value, drop-in replacement                                            |
| `≈`   | closest equivalent, the rendered value changes (difference given in notes) |
| `—`   | no EDS equivalent, keep a local value or pick a token by role              |
| new   | EDS only                                                                   |

Sources: ECL values are read from the built `ecl-ec.css` / `ecl-eu.css`
and the theme Sass maps (`src/themes/{ec,eu}`); EDS values from the
foundations maps (`src/eds/foundations` for EC, `src/eds/foundations/theme-eu`
for EU).

## General notes

- **Two themes, one token set**: EC and EU share the same EDS token names.
  The EU theme only changes color values, shadow colors and the font family
  (Arial); the dimension, typography and layout scales are common, which
  changes the EU heading sizes and shadows.
- **Naming**: ECL custom properties are `--ecl-{category}-{name}` with short
  aliases (`--s-*`, `--fs-*`, `--lh-*`, `--f-*`, `--ff-d`, `--c-*`, `--sh-*`,
  `--max-w`). EDS custom properties are `--eds-{abbr}-{name}`, abbreviations
  listed in `src/eds/foundations/README.md`. Short aliases follow the same
  mapping as their long name, they are not repeated in the tables below.
- **Primitives are Sass-only in EDS**: the raw palette and scales
  (`eds.$color`, `eds.$dimension`, `eds.$font-size`…) are not emitted as CSS
  custom properties, only semantic tokens are. ECL exposed the full palette
  (`--ecl-color-primary-600`, `--c-p-600`…), so a CSS usage of a palette
  color should move to the semantic token describing its role, not to a
  primitive.
- **Dark mode**: every EDS color token holds a light and a dark value
  (`light-dark()`). The mapping is done on the light value.
- **Scale names shifted**: several scales use the same t-shirt names on both
  sides but with different values (font sizes, line heights, breakpoints).
  A search/replace on the name (`--ecl-font-size-m` → `--eds-f-s-m`) is
  wrong, always go through the tables.
- **Semantic name traps**: in ECL `inverted` means white and `on-surface-*`
  is a colored text meant for a light background. In EDS `surface-inverted`
  is dark navy and `on-surface-*` is the text color _on_ the matching
  surface (often white). E.g. `--cm-on-surface-primary` (blue text) becomes
  `--eds-c-foreground-primary`, not `--eds-c-on-surface-primary` (white).

## EC

### Spacing

Values are identical up to `11xl`.

| ECL                    | Value     | EDS             | Match | Notes                   |
| ---------------------- | --------- | --------------- | ----- | ----------------------- |
| —                      | 0         | `--eds-sp-none` | new   |                         |
| `--ecl-spacing-5xs`    | 0.0625rem | `--eds-sp-5xs`  | `=`   |                         |
| `--ecl-spacing-4xs`    | 0.125rem  | `--eds-sp-4xs`  | `=`   |                         |
| `--ecl-spacing-3xs`    | 0.25rem   | `--eds-sp-3xs`  | `=`   |                         |
| `--ecl-spacing-2xs`    | 0.375rem  | `--eds-sp-2xs`  | `=`   |                         |
| `--ecl-spacing-xs`     | 0.5rem    | `--eds-sp-xs`   | `=`   |                         |
| `--ecl-spacing-s`      | 0.75rem   | `--eds-sp-s`    | `=`   |                         |
| `--ecl-spacing-m`      | 1rem      | `--eds-sp-m`    | `=`   |                         |
| `--ecl-spacing-l`      | 1.25rem   | `--eds-sp-l`    | `=`   |                         |
| `--ecl-spacing-xl`     | 1.5rem    | `--eds-sp-xl`   | `=`   |                         |
| `--ecl-spacing-2xl`    | 1.75rem   | `--eds-sp-2xl`  | `=`   |                         |
| `--ecl-spacing-3xl`    | 2rem      | `--eds-sp-3xl`  | `=`   |                         |
| `--ecl-spacing-4xl`    | 2.25rem   | `--eds-sp-4xl`  | `=`   |                         |
| `--ecl-spacing-5xl`    | 2.5rem    | `--eds-sp-5xl`  | `=`   |                         |
| `--ecl-spacing-6xl`    | 2.75rem   | `--eds-sp-6xl`  | `=`   |                         |
| `--ecl-spacing-7xl`    | 3rem      | `--eds-sp-7xl`  | `=`   |                         |
| `--ecl-spacing-8xl`    | 3.25rem   | `--eds-sp-8xl`  | `=`   |                         |
| `--ecl-spacing-9xl`    | 3.5rem    | `--eds-sp-9xl`  | `=`   |                         |
| `--ecl-spacing-10xl`   | 3.75rem   | `--eds-sp-10xl` | `=`   |                         |
| `--ecl-spacing-11xl`   | 4rem      | `--eds-sp-11xl` | `=`   |                         |
| `--ecl-spacing-12xl`   | 4.25rem   | —               | `—`   |                         |
| `--ecl-spacing-13xl`   | 4.5rem    | —               | `—`   |                         |
| `$spacing-print` (all) | cm values | —               | `—`   | EDS has no print tokens |

### Sizing

ECL has no generic sizing scale; EDS adds `--eds-si-*` (`none`, `3xs` 0.125rem
→ `9xl` 4rem) for widths/heights of elements. Icon sizes (Sass `$icon` map in
ECL) map as follows:

| ECL (`$icon`) | Value    | EDS            | Match | Notes                        |
| ------------- | -------- | -------------- | ----- | ---------------------------- |
| —             | 0.75rem  | `--eds-is-2xs` | new   |                              |
| `2xs`         | 1rem     | `--eds-is-xs`  | `=`   | name shifted                 |
| `xs`          | 1.125rem | —              | `—`   | closest `--eds-is-xs` (1rem) |
| `s`           | 1.25rem  | `--eds-is-s`   | `=`   |                              |
| `m`           | 1.5rem   | `--eds-is-m`   | `=`   |                              |
| `l`           | 2rem     | `--eds-is-l`   | `=`   |                              |
| `xl`          | 2.5rem   | `--eds-is-xl`  | `=`   |                              |
| `2xl`         | 3rem     | `--eds-is-2xl` | `=`   |                              |
| —             | 3.5rem   | `--eds-is-3xl` | new   |                              |
| —             | 4rem     | `--eds-is-4xl` | new   |                              |
| `fluid`       | 1em      | —              | `—`   | use `1em` directly           |
| `$icon-print` | pt       | —              | `—`   | EDS has no print tokens      |

### Typography

#### Font family

| ECL                               | Value                | EDS                        | Match | Notes |
| --------------------------------- | -------------------- | -------------------------- | ----- | ----- |
| `--ecl-font-family-default`       | Inter, arial         | `--eds-f-family`           | `=`   |       |
| —                                 | Consolas…, monospace | `--eds-f-family-monospace` | new   |       |
| `--ecl-font-family-print-default` | Inter, verdana       | —                          | `—`   |       |
| `--ecl-font-family-print-alt`     | Inter, arial         | —                          | `—`   |       |

#### Font weight

ECL weights are Sass-only (`$font-weight`), EDS exposes them as custom
properties.

| ECL (`$font-weight`) | Value | EDS                  | Match |
| -------------------- | ----- | -------------------- | ----- |
| `thin`               | 100   | —                    | `—`   |
| `extra-light`        | 200   | —                    | `—`   |
| `light`              | 300   | `--eds-f-w-light`    | `=`   |
| `semi-regular`       | 350   | —                    | `—`   |
| `regular`            | 400   | `--eds-f-w-regular`  | `=`   |
| `medium`             | 500   | `--eds-f-w-medium`   | `=`   |
| `semi-bold`          | 600   | `--eds-f-w-semibold` | `=`   |
| `near-bold`          | 650   | —                    | `—`   |
| `bold`               | 700   | `--eds-f-w-bold`     | `=`   |
| `extra-bold`         | 800   | —                    | `—`   |
| `black`              | 900   | —                    | `—`   |

`near-bold` is used by ECL `heading6`; it has to become `semibold` or `bold`.

#### Font size

The EDS scale is shifted by one step: ECL `s` (1rem) is EDS `m`.

| ECL                    | Value    | EDS             | Match |
| ---------------------- | -------- | --------------- | ----- |
| —                      | 0.625rem | `--eds-f-s-2xs` | new   |
| `--ecl-font-size-2xs`  | 0.75rem  | `--eds-f-s-xs`  | `=`   |
| `--ecl-font-size-xs`   | 0.875rem | `--eds-f-s-s`   | `=`   |
| `--ecl-font-size-s`    | 1rem     | `--eds-f-s-m`   | `=`   |
| `--ecl-font-size-m`    | 1.125rem | `--eds-f-s-l`   | `=`   |
| `--ecl-font-size-l`    | 1.25rem  | `--eds-f-s-xl`  | `=`   |
| `--ecl-font-size-xl`   | 1.375rem | `--eds-f-s-2xl` | `=`   |
| `--ecl-font-size-2xl`  | 1.5rem   | `--eds-f-s-3xl` | `=`   |
| `--ecl-font-size-3xl`  | 1.75rem  | `--eds-f-s-4xl` | `=`   |
| `--ecl-font-size-4xl`  | 2rem     | —               | `—`   |
| `--ecl-font-size-5xl`  | 2.25rem  | `--eds-f-s-5xl` | `=`   |
| `--ecl-font-size-6xl`  | 2.75rem  | `--eds-f-s-6xl` | `=`   |
| `--ecl-font-size-7xl`  | 3.25rem  | `--eds-f-s-7xl` | `=`   |
| `--ecl-font-size-8xl`  | 4rem     | `--eds-f-s-8xl` | `=`   |
| `--ecl-font-size-9xl`  | 4.5rem   | —               | `—`   |
| `--ecl-font-size-10xl` | 6rem     | `--eds-f-s-9xl` | `=`   |

#### Line height

| ECL                      | Value    | EDS               | Match |
| ------------------------ | -------- | ----------------- | ----- |
| —                        | 0.75rem  | `--eds-f-lh-2xs`  | new   |
| `--ecl-line-height-3xs`  | 0.875rem | —                 | `—`   |
| `--ecl-line-height-2xs`  | 1rem     | `--eds-f-lh-xs`   | `=`   |
| `--ecl-line-height-xs`   | 1.25rem  | `--eds-f-lh-s`    | `=`   |
| `--ecl-line-height-s`    | 1.5rem   | `--eds-f-lh-m`    | `=`   |
| `--ecl-line-height-m`    | 1.75rem  | `--eds-f-lh-l`    | `=`   |
| `--ecl-line-height-l`    | 2rem     | `--eds-f-lh-xl`   | `=`   |
| `--ecl-line-height-xl`   | 2.25rem  | `--eds-f-lh-2xl`  | `=`   |
| `--ecl-line-height-2xl`  | 2.5rem   | `--eds-f-lh-3xl`  | `=`   |
| `--ecl-line-height-3xl`  | 2.75rem  | `--eds-f-lh-4xl`  | `=`   |
| `--ecl-line-height-4xl`  | 3rem     | `--eds-f-lh-5xl`  | `=`   |
| `--ecl-line-height-5xl`  | 3.25rem  | `--eds-f-lh-6xl`  | `=`   |
| `--ecl-line-height-6xl`  | 3.5rem   | `--eds-f-lh-7xl`  | `=`   |
| —                        | 3.75rem  | `--eds-f-lh-8xl`  | new   |
| `--ecl-line-height-7xl`  | 4rem     | `--eds-f-lh-9xl`  | `=`   |
| `--ecl-line-height-8xl`  | 4.25rem  | —                 | `—`   |
| `--ecl-line-height-9xl`  | 4.875rem | —                 | `—`   |
| `--ecl-line-height-10xl` | 6rem     | `--eds-f-lh-10xl` | `=`   |

#### Font shorthands (deprecated in ECL)

`--ecl-font-*` bundles size, line height and family. EDS has no shorthand;
use `font: normal normal var(--eds-f-w-…) var(size)/var(line-height)
var(--eds-f-family)`.

| ECL               | Value      | EDS size / line height              | Match |
| ----------------- | ---------- | ----------------------------------- | ----- |
| `--ecl-font-2xs`  | 0.75/0.875 | `--eds-f-s-xs` / —                  | `≈`   |
| `--ecl-font-xs`   | 0.875/1.25 | `--eds-f-s-s` / `--eds-f-lh-s`      | `=`   |
| `--ecl-font-s`    | 1/1.5      | `--eds-f-s-m` / `--eds-f-lh-m`      | `=`   |
| `--ecl-font-m`    | 1.125/1.75 | `--eds-f-s-l` / `--eds-f-lh-l`      | `=`   |
| `--ecl-font-l`    | 1.25/1.75  | `--eds-f-s-xl` / `--eds-f-lh-l`     | `=`   |
| `--ecl-font-xl`   | 1.375/2    | `--eds-f-s-2xl` / `--eds-f-lh-xl`   | `=`   |
| `--ecl-font-2xl`  | 1.5/2.25   | `--eds-f-s-3xl` / `--eds-f-lh-2xl`  | `=`   |
| `--ecl-font-3xl`  | 1.75/2.25  | `--eds-f-s-4xl` / `--eds-f-lh-2xl`  | `=`   |
| `--ecl-font-4xl`  | 2/2.75     | — / `--eds-f-lh-4xl`                | `≈`   |
| `--ecl-font-5xl`  | 2.25/3     | `--eds-f-s-5xl` / `--eds-f-lh-5xl`  | `=`   |
| `--ecl-font-6xl`  | 2.75/3     | `--eds-f-s-6xl` / `--eds-f-lh-5xl`  | `=`   |
| `--ecl-font-7xl`  | 3.25/4     | `--eds-f-s-7xl` / `--eds-f-lh-9xl`  | `=`   |
| `--ecl-font-8xl`  | 4/4.25     | `--eds-f-s-8xl` / —                 | `≈`   |
| `--ecl-font-9xl`  | 4.5/4.875  | —                                   | `—`   |
| `--ecl-font-10xl` | 6/6        | `--eds-f-s-9xl` / `--eds-f-lh-10xl` | `=`   |

#### Letter spacing

ECL uses a px scale (`$letter-spacing`, `5xl` 3px → `4xs` -2.5px), EDS a
relative one (`--eds-f-ls-default` 0, `xs` 1%, `s` 2%, `neg-xs` -1%,
`neg-s` -2%). Only ECL `m` (0px) maps exactly, to `--eds-f-ls-default`.
Positive steps → `xs`/`s`, negative steps → `neg-xs`/`neg-s`, to be checked
visually.

#### Typographic roles

ECL roles live in the `$typography` Sass map (one entry per role and per
breakpoint tier), EDS roles are responsive custom properties
(`--eds-f-{role}-size` / `--eds-f-{role}-line-height`), weight is not part of
the EDS role and must be set separately.

Tiers: ECL has 4 (`mobile-xs` < 480px, `mobile` ≥ 480px, `tablet` ≥ 768px,
`desktop` ≥ 1140px), EDS has 3 (`mobile` < 768px, `tablet` ≥ 768px,
`desktop` ≥ 1140px). The values below are size/line-height in rem for
mobile (≥ 480px) | tablet | desktop.

| ECL role        | ECL values                            | ECL weight | EDS role                          | EDS values                           | Match | Notes                                  |
| --------------- | ------------------------------------- | ---------- | --------------------------------- | ------------------------------------ | ----- | -------------------------------------- |
| `display`       | 2.75/3.25 \| 4/4 \| 6/6               | regular    | `display-xl`                      | 2.75/2.75 \| 4/4 \| 6/6              | `≈`   | mobile line height tighter             |
| `heading1`      | 2.25/2.5 \| 3.25/3.5 \| 4/4           | semi-bold  | `display-l`                       | 2.25/2.25 \| 3.25/3.25 \| 4/4        | `≈`   | sizes equal, line heights tighter      |
| `heading2`      | 1.75/2 \| 2.25/2.5 \| 2.75/3          | semi-bold  | `heading-2xl`                     | 1.75/2.25 \| 2.25/2.75 \| 2.75/3.25  | `≈`   | sizes equal, line heights +0.25rem     |
| `heading3`      | 1.375/1.75 \| 1.75/2 \| 1.75/2        | semi-bold  | `heading-xl`                      | 1.375/1.75 \| 1.75/2.25 \| 2.25/2.75 | `≈`   | desktop size grows to 2.25rem          |
| `heading4`      | 1.25/1.75 \| 1.375/1.75 \| 1.5/2      | medium     | `heading-l`                       | 1.25/1.5 \| 1.375/1.75 \| 1.75/2.25  | `≈`   | desktop size grows to 1.75rem          |
| `heading5`      | 1.125/1.5 \| 1.25/1.5 \| 1.375/1.75   | medium     | `heading-m`                       | 1.125/1.5 \| 1.25/1.75 \| 1.5/2      | `≈`   | desktop size grows to 1.5rem           |
| `heading6`      | 1/1.25 \| 1.125/1.5 \| 1.125/1.5      | near-bold  | `heading-s`                       | 1/1.5 \| 1.125/1.5 \| 1.25/1.75      | `≈`   | desktop size grows to 1.25rem          |
| —               |                                       |            | `heading-xs`                      | 1/1.5 \| 1/1.5 \| 1.125/1.75         | new   |                                        |
| `body.xs`       | 0.875/1.25                            | —          | `paragraph-s`                     | 0.875/1.25                           | `=`   |                                        |
| `body.s`        | 1/1.5                                 | —          | `paragraph-m`                     | 1/1.5                                | `=`   | ECL `mobile-xs`: 0.875/1.25            |
| `body.m`        | 1.125/1.75                            | —          | `paragraph-l`                     | 1.125/1.75                           | `=`   | ECL `mobile-xs`: 1/1.5                 |
| `body.l`        | 1.125/1.75 \| 1.125/1.75 \| 1.25/1.75 | —          | `paragraph-l`                     | 1.125/1.75                           | `≈`   | not responsive in EDS                  |
| `body.xl`       | 1.375/2                               | —          | `paragraph-xl`                    | 1.25/1.75 \| 1.375/2 \| 1.5/2.25     | `≈`   | responsive in EDS, only tablet matches |
| `body.2xl`      | 1.25/1.75 \| 1.375/2 \| 1.5/2.25      | —          | `paragraph-xl`                    | 1.25/1.75 \| 1.375/2 \| 1.5/2.25     | `=`   |                                        |
| `microcopy.2xs` | 0.75/0.875                            | —          | `microcopy-m`                     | 0.75/1                               | `≈`   | line height +0.125rem                  |
| `microcopy.xs`  | 0.875/1                               | —          | `label-s`                         | 0.875/1.25                           | `≈`   | line height +0.25rem                   |
| `microcopy.s`   | 1/1.5                                 | —          | `label-m`                         | 1/1.5                                | `=`   | ECL `mobile-xs`: 0.875/1               |
| `microcopy.m`   | 1.125/1.75                            | —          | `label-l`                         | 1.125/1.75                           | `=`   |                                        |
| —               |                                       |            | `supportive-m`                    | 0.625/0.75                           | new   |                                        |
| —               |                                       |            | `placeholder-m` / `placeholder-s` | 1/1.5, 0.875/1.25                    | new   |                                        |

Read in sequence, ECL `heading1`–`heading6` map to EDS `display-l`,
`heading-2xl`…`heading-s`: mobile and tablet sizes are identical, the EDS
desktop size is one step larger for `heading3`–`heading6`.

### Color

#### Palette (primitives)

EDS primitives are Sass-only (`map.get(eds.$color, 'european-blue-600')`).
Except for the rows listed in the next table, steps keep the same number and
the same value.

| ECL palette                            | EDS primitive family | Match | Notes                                                               |
| -------------------------------------- | -------------------- | ----- | ------------------------------------------------------------------- |
| `--ecl-color-primary-*` (`--c-p-*`)    | `european-blue-*`    | `=`   | except `25`                                                         |
| `--ecl-color-secondary-*` (`--c-s-*`)  | `sunrise-orange-*`   | `=`   |                                                                     |
| `--ecl-color-grey-*` (`--c-g-*`)       | `silver-fog-*`       | `=`   | except `900`; EDS adds `0` (#fff) and `1000` (#000)                 |
| `--ecl-color-info-*` (`--c-in-*`)      | `blue-*`             | `=`   |                                                                     |
| `--ecl-color-success-*` (`--c-su-*`)   | `green-*`            | `=`   |                                                                     |
| `--ecl-color-error-*` (`--c-er-*`)     | `red-*`              | `=`   |                                                                     |
| `--ecl-color-warning-*` (`--c-wa-*`)   | `orange-*`           | `=`   |                                                                     |
| `--ecl-color-neutral-*` (`--c-n-*`)    | —                    | `—`   | blue-grey palette dropped, use `silver-fog-*` / `surface-neutral-*` |
| `--ecl-color-monochrome-*` (`--c-m-*`) | —                    | `—`   | dropped; `graphite-*` (dark mode neutral) is the closest            |
| —                                      | `graphite-*`         | new   | neutrals for dark mode                                              |
| `--ecl-color-corporate-gradient`       | —                    | `—`   |                                                                     |

The base aliases without a step point to: `primary` → `600`, `secondary` →
`400`, `neutral` → `600`, `grey` → `950`, `info` → `600`, `success` → `700`,
`error` → `600`, `warning` → `500`.

Steps that differ:

| ECL                      | Value     | EDS                | Value     | Match |
| ------------------------ | --------- | ------------------ | --------- | ----- |
| `--ecl-color-primary-25` | `#f7f9ff` | `european-blue-25` | `#fafafb` | `≈`   |
| `--ecl-color-grey-900`   | `#1c1c45` | `silver-fog-900`   | `#171740` | `≈`   |

#### Alpha colors

ECL alpha colors are `color-mix()` on `grey-950` / `#fff`. EDS has Sass-only
primitives `alpha-silver-fog-950-{n}` / `alpha-silver-fog-0-{n}` (n = opacity
%: 0, 8, 10, 12, 14, 20…90) and semantic backdrops (see below).

| ECL step (`--ecl-color-grey-alpha-*` / `--ecl-color-white-alpha-*`) | Opacity          | EDS step (`alpha-silver-fog-950-*` / `alpha-silver-fog-0-*`) | Match   |
| ------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------ | ------- |
| `950`                                                               | 95%              | `90`                                                         | `≈`     |
| `900`                                                               | 90%              | `90`                                                         | `=`     |
| `800`                                                               | 80%              | `80`                                                         | `=`     |
| `700`                                                               | 72%              | `70`                                                         | `≈`     |
| `600`                                                               | 60%              | `60`                                                         | `=`     |
| `500`                                                               | 50%              | `50`                                                         | `=`     |
| `400`                                                               | 40%              | `40` (dark: 50%, see below)                                  | `≈`     |
| `300`                                                               | 30%              | `30`                                                         | `=`     |
| `200`                                                               | 20% (white: 15%) | `20` (white: `14`)                                           | `=`/`≈` |
| `100`                                                               | 10%              | `10`                                                         | `=`     |
| `75`                                                                | 7.5%             | `8`                                                          | `≈`     |
| `50`, `25`                                                          | 5%, 2.5%         | —                                                            | `—`     |

#### Semantic colors (`--cm-*`)

Mapping done on the default color mode values. Component-specific tokens
(`*-page-summary`, `*-text-media`, `*-add-to-calendar`) map like their
generic counterpart.

Surfaces:

| ECL                                       | Value            | EDS                                      | Match | Notes                                             |
| ----------------------------------------- | ---------------- | ---------------------------------------- | ----- | ------------------------------------------------- |
| `--cm-surface-brand`                      | `#00002e`        | `--eds-c-surface-brand`                  | `=`   |                                                   |
| `--cm-surface-inverted`                   | `#fff`           | `--eds-c-surface-elevation`              | `=`   | **not** `surface-inverted` (dark in EDS)          |
| `--cm-surface-transparent-70`             | neutral-950 70%  | `--eds-c-alpha-backdrop-strong`          | `≈`   | silver-fog-950 60%                                |
| `--cm-surface-transparent-01`             | white 0.1%       | `--eds-c-surface-invisible`              | `≈`   | 0%                                                |
| `--cm-surface-lowest`                     | `#f2f6ff`        | `--eds-c-surface-primary-subtler`        | `=`   | also `surface-accent`                             |
| `--cm-surface-lowest-variant`             | warm-grey-50 50% | —                                        | `—`   | `surface-domain-warm-grey-subtler` is opaque      |
| `--cm-surface-lowest-1-page-summary`      | `#f6f6f8`        | `--eds-c-surface-neutral-subtler`        | `=`   |                                                   |
| `--cm-surface-color-mode-low`             | `#d9e3ff`        | `--eds-c-surface-primary-subtle`         | `=`   |                                                   |
| `--cm-surface-color-mode-high`            | `#0038cc`        | `--eds-c-surface-primary--hover`         | `≈`   | `#0035bf`                                         |
| `--cm-surface-low`                        | `#d9e3ff`        | `--eds-c-surface-primary-subtle`         | `=`   |                                                   |
| `--cm-surface-low-0`                      | `#f2f6ff`        | `--eds-c-surface-primary-subtler`        | `=`   |                                                   |
| `--cm-surface-low-1`                      | `#e6edff`        | `--eds-c-surface-selected`               | `=`   | value match only, role differs                    |
| `--cm-surface-low-2`                      | `#d9e3ff`        | `--eds-c-surface-primary-subtle`         | `=`   |                                                   |
| `--cm-surface-medium`                     | `#0046ff`        | `--eds-c-surface-primary`                | `=`   |                                                   |
| `--cm-surface-medium-0`                   | `#d9e3ff`        | `--eds-c-surface-primary-subtle`         | `=`   |                                                   |
| `--cm-surface-medium-1`                   | `#b0c6ff`        | —                                        | `—`   | `european-blue-300` primitive                     |
| `--cm-surface-0`                          | `#00002e`        | `--eds-c-surface-brand`                  | `=`   |                                                   |
| `--cm-surface-variant-1`                  | `#e2dcda`        | —                                        | `—`   | `domain-warm-grey-100` primitive                  |
| `--cm-surface-variant-2`                  | `#00002e`        | `--eds-c-surface-brand`                  | `=`   |                                                   |
| `--cm-surface-primary-lowest`             | `#f2f6ff`        | `--eds-c-surface-primary-subtler`        | `=`   |                                                   |
| `--cm-surface-primary-low-0`              | `#e6edff`        | `--eds-c-surface-selected`               | `=`   | value match only, role differs                    |
| `--cm-surface-primary-low-1`              | `#d9e3ff`        | `--eds-c-surface-primary-subtle`         | `=`   |                                                   |
| `--cm-surface-primary-medium`             | `#b0c6ff`        | —                                        | `—`   | `european-blue-300` primitive                     |
| `--cm-surface-primary`                    | `#0046ff`        | `--eds-c-surface-primary`                | `=`   |                                                   |
| `--cm-surface-primary-high`               | `#0035bf`        | `--eds-c-surface-primary--hover`         | `=`   |                                                   |
| `--cm-surface-primary-highest`            | `#002a99`        | `--eds-c-surface-primary--pressed`       | `=`   |                                                   |
| `--cm-surface-secondary-low`              | `#fff5e5`        | `--eds-c-surface-highlight-subtler`      | `=`   |                                                   |
| `--cm-surface-secondary-medium-0`         | `#ffd392`        | —                                        | `—`   | `sunrise-orange-200` primitive                    |
| `--cm-surface-secondary-medium-1`         | `#ffcb7d`        | `--eds-c-surface-highlight`              | `=`   |                                                   |
| `--cm-surface-secondary`                  | `#ffbe5c`        | `--eds-c-surface-highlight--hover`       | `=`   | or `surface-highlight` (one step lighter)         |
| `--cm-surface-secondary-high`             | `#fea439`        | `--eds-c-surface-highlight--pressed`     | `=`   |                                                   |
| `--cm-surface-secondary-highest`          | `#fc8713`        | —                                        | `—`   | `sunrise-orange-600` primitive                    |
| `--cm-surface-neutral-lowest`             | `#eceff9`        | `--eds-c-surface-neutral-subtler`        | `≈`   | `#f6f6f8`, neutral palette dropped                |
| `--cm-surface-neutral-low`                | `#d1d9f1`        | `--eds-c-surface-neutral-subtle`         | `≈`   | `#e1e1e7`                                         |
| `--cm-surface-neutral-medium`             | `#b0bde6`        | `--eds-c-surface-neutral-subtle--hover`  | `≈`   | `#d4d4dc`                                         |
| `--cm-surface-neutral`                    | `#51649d`        | `--eds-c-surface-neutral`                | `≈`   | `#696984`                                         |
| `--cm-surface-grey-low-0-transparent`     | grey-50 50%      | —                                        | `—`   |                                                   |
| `--cm-surface-grey-low-0`                 | `#f6f6f8`        | `--eds-c-surface-neutral-subtler`        | `=`   |                                                   |
| `--cm-surface-grey-low-1`                 | `#ededf0`        | `--eds-c-surface-neutral-subtler--hover` | `=`   | value match only, role differs                    |
| `--cm-surface-grey-medium`                | `#a0a0b1`        | —                                        | `—`   | `silver-fog-400` primitive                        |
| `--cm-surface-grey-highest-0`             | `#00002e`        | `--eds-c-surface-brand`                  | `=`   |                                                   |
| `--cm-surface-grey-highest-1-transparent` | grey-950 80%     | `--eds-c-alpha-backdrop-strong`          | `≈`   | 60%                                               |
| `--cm-surface-grey-highest-2-transparent` | grey-950 72%     | `--eds-c-alpha-backdrop-strong`          | `≈`   | 60%                                               |
| `--cm-surface-status-error-lowest`        | `#fdefef`        | `--eds-c-surface-critical-subtler`       | `=`   |                                                   |
| `--cm-surface-status-error`               | `#cb2029`        | `--eds-c-surface-critical`               | `=`   |                                                   |
| `--cm-surface-status-warning-lowest`      | `#fff3e8`        | `--eds-c-surface-warning-subtler`        | `=`   |                                                   |
| `--cm-surface-status-warning`             | `#ff8a20`        | `--eds-c-surface-warning`                | `=`   |                                                   |
| `--cm-surface-status-success-lowest`      | `#edfbf6`        | `--eds-c-surface-success-subtler`        | `=`   |                                                   |
| `--cm-surface-status-success`             | `#049e62`        | `--eds-c-surface-success`                | `≈`   | `#037e4e`, one step darker                        |
| `--cm-surface-status-info-lowest`         | `#ebeff7`        | `--eds-c-surface-info-subtler`           | `=`   |                                                   |
| `--cm-surface-status-info`                | `#003399`        | `--eds-c-surface-info`                   | `≈`   | `#3b62b0` (`surface-info--pressed` has the value) |

Text (`on-surface`):

| ECL                                    | Value        | EDS                                  | Match | Notes                                                         |
| -------------------------------------- | ------------ | ------------------------------------ | ----- | ------------------------------------------------------------- |
| `--cm-on-surface-brand`                | `#00002e`    | `--eds-c-foreground`                 | `=`   | **not** `on-surface-brand` (white in EDS)                     |
| `--cm-on-surface-inverted`             | `#fff`       | `--eds-c-foreground-inverted`        | `≈`   | `#fafafb`; on a brand surface use `on-surface-brand` (`#fff`) |
| `--cm-on-surface-swap-0`               | `#fff`       | `--eds-c-on-surface-brand`           | `=`   |                                                               |
| `--cm-on-surface-swap-1`               | `#00002e`    | `--eds-c-foreground`                 | `=`   |                                                               |
| `--cm-on-surface`                      | `#0046ff`    | `--eds-c-foreground-primary`         | `=`   |                                                               |
| `--cm-on-surface-1`                    | `#ffbe5c`    | —                                    | `—`   | `border-highlight` has the value                              |
| `--cm-on-surface-2`                    | `#b0c6ff`    | —                                    | `—`   | `european-blue-300` primitive                                 |
| `--cm-on-surface-3`                    | `#fff`       | `--eds-c-on-surface-brand`           | `=`   |                                                               |
| `--cm-on-surface-highlight`            | `#ffebcc`    | `--eds-c-surface-highlight-subtler`  | `≈`   | `#fff5e5`; used as a background                               |
| `--cm-on-surface-primary`              | `#0046ff`    | `--eds-c-foreground-primary`         | `=`   | **not** `on-surface-primary` (white in EDS)                   |
| `--cm-on-surface-primary-highest`      | `#002a99`    | `--eds-c-on-surface-primary-subtler` | `=`   | text on `surface-primary-subtler`                             |
| `--cm-on-surface-secondary-medium`     | `#ffe1b4`    | —                                    | `—`   | `sunrise-orange-100` primitive                                |
| `--cm-on-surface-secondary-highest`    | `#471b00`    | `--eds-c-on-surface-highlight`       | `=`   |                                                               |
| `--cm-on-surface-neutral-low`          | `#d1d9f1`    | —                                    | `—`   | neutral palette dropped                                       |
| `--cm-on-surface-neutral-medium`       | `#9eaee1`    | —                                    | `—`   | neutral palette dropped                                       |
| `--cm-on-surface-neutral-highest`      | `#26324b`    | `--eds-c-foreground-subtle`          | `≈`   | `#353559`                                                     |
| `--cm-on-surface-grey-low-transparent` | grey-950 30% | —                                    | `—`   |                                                               |
| `--cm-on-surface-grey-low`             | `#b9b9c5`    | `--eds-c-on-surface-inverted-subtle` | `=`   | value match only, role differs                                |
| `--cm-on-surface-grey-medium`          | `#84849b`    | `--eds-c-foreground-placeholder`     | `=`   | value match only, role differs                                |
| `--cm-on-surface-grey`                 | `#696984`    | `--eds-c-foreground-subtler`         | `≈`   | `#505070`, one step darker                                    |
| `--cm-on-surface-status-error`         | `#cb2029`    | `--eds-c-foreground-critical`        | `=`   |                                                               |
| `--cm-on-surface-status-warning`       | `#ba6517`    | `--eds-c-foreground-warning`         | `≈`   | `#8b4c11`                                                     |
| `--cm-on-surface-status-success`       | `#049e62`    | `--eds-c-foreground-success`         | `≈`   | `#037e4e`                                                     |
| `--cm-on-surface-status-info`          | `#003399`    | `--eds-c-foreground-info`            | `≈`   | `#00297a`                                                     |

Borders:

| ECL                                    | Value          | EDS                               | Match | Notes                                       |
| -------------------------------------- | -------------- | --------------------------------- | ----- | ------------------------------------------- |
| `--cm-border-brand`                    | `#00002e`      | `--eds-c-border-brand`            | `=`   |                                             |
| `--cm-border-on-brand`                 | neutral-75 60% | —                                 | `—`   |                                             |
| `--cm-border-inverted-low-transparent` | white 15%      | `--eds-c-alpha-backdrop-inverted` | `≈`   | white 14%, not a border token               |
| `--cm-border-inverted`                 | `#fff`         | `--eds-c-border-inverted`         | `≈`   | `#fafafb`                                   |
| `--cm-border-low`                      | `#b0c6ff`      | `--eds-c-border-primary-subtle`   | `≈`   | `#8cacff`                                   |
| `--cm-border-medium`                   | `#5987ff`      | `--eds-c-border-primary--hover`   | `=`   | value match only, role differs              |
| `--cm-border`                          | `#0046ff`      | `--eds-c-border-primary`          | `=`   |                                             |
| `--cm-border-high`                     | `#0035bf`      | —                                 | `—`   | removed in v6                               |
| `--cm-border-primary-medium`           | `#b0c6ff`      | `--eds-c-border-primary-subtle`   | `≈`   | `#8cacff`                                   |
| `--cm-border-primary`                  | `#0046ff`      | `--eds-c-border-primary`          | `=`   |                                             |
| `--cm-border-primary-highest`          | `#002a99`      | —                                 | `—`   | `european-blue-800` primitive               |
| `--cm-border-active`                   | `#0046ff`      | `--eds-c-border-primary`          | `=`   | or `border-focus`                           |
| `--cm-border-neutral-low`              | `#eceff9`      | `--eds-c-border-disabled`         | `≈`   | `#e1e1e7`, neutral palette dropped          |
| `--cm-border-neutral`                  | `#d1d9f1`      | `--eds-c-border-divider`          | `≈`   | `#d4d4dc`                                   |
| `--cm-border-neutral-high`             | `#7c92d6`      | `--eds-c-border-neutral`          | `≈`   | `#84849b`                                   |
| `--cm-border-neutral-highest`          | `#51649d`      | `--eds-c-border-neutral--hover`   | `≈`   | `#696984`                                   |
| `--cm-border-grey-lowest`              | `#ededf0`      | `--eds-c-border-disabled`         | `≈`   | `#e1e1e7`                                   |
| `--cm-border-grey-low`                 | `#e1e1e7`      | `--eds-c-border-divider`          | `≈`   | `#d4d4dc` (`border-disabled` has the value) |
| `--cm-border-grey-low-300`             | `#b9b9c5`      | `--eds-c-border-neutral-subtle`   | `=`   |                                             |
| `--cm-border-grey-medium`              | `#84849b`      | `--eds-c-border-neutral`          | `=`   |                                             |
| `--cm-border-grey`                     | `#696984`      | `--eds-c-border-neutral--hover`   | `=`   | value match only, role differs              |
| `--cm-border-status-error`             | `#cb2029`      | `--eds-c-border-critical`         | `=`   |                                             |
| `--cm-border-status-warning`           | `#e87e1d`      | `--eds-c-border-warning`          | `=`   |                                             |
| `--cm-border-status-success`           | `#049e62`      | `--eds-c-border-success`          | `=`   |                                             |
| `--cm-border-status-info`              | `#003399`      | `--eds-c-border-info`             | `≈`   | `#1c49a4`                                   |

Links and focus:

| ECL                         | Value     | EDS                                                                         | Match | Notes                                     |
| --------------------------- | --------- | --------------------------------------------------------------------------- | ----- | ----------------------------------------- |
| `--ecl-link-color`          | `#0046ff` | `--eds-c-link`                                                              | `=`   |                                           |
| `--ecl-link-color-hover`    | `#002a99` | `--eds-c-link--hover`                                                       | `≈`   | `#0035bf` (`link--pressed` has the value) |
| `--ecl-link-color-active`   | `#00002e` | `--eds-c-link--pressed`                                                     | `≈`   | `#002a99`                                 |
| —                           |           | `--eds-c-link--visited`, `--eds-c-link-inverted*`, `--eds-c-link-contrast*` | new   |                                           |
| `--ecl-focus-outline-color` | `#0046ff` | `--eds-c-focus`                                                             | `=`   | also `focus-inverted`, `focus-critical`   |

New EDS color tokens with no ECL counterpart: `surface-elevation-*`
(sunken, inset, raised, elevated, overlay), `surface-disabled*`,
`surface-skeleton`, `surface-inverted-*`, `*--hover` / `*--pressed` states on
all surfaces, `foreground-disabled`, `border-focus`, `alpha-backdrop-*`.

#### Color modes → domain colors

ECL color modes (`.ecl-color-mode--{name}`, `ecl-ec-color-modes.css`) swap
~30 `--cm-*` tokens per mode. EDS has no class-based mode switch: modes are
light/dark only, and each "domain" only provides 3 static tokens
(`--eds-c-surface-domain-{name}-subtler`, `--eds-c-on-surface-domain-{name}-subtler`,
`--eds-c-border-domain-{name}-subtle`). A richer per-domain model exists in
Figma but is not built yet (see `src/eds/foundations/figma-sync-notes.md`).

| ECL color mode  | EDS domain                   | Primitive values                                                                                                                                                       |
| --------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blue`          | — (default, `european-blue`) | `≈` steps shifted: ECL `blue-50`…`500` = `european-blue-100`…`600`, `800`/`900` = `european-blue-700`/`800`, `600` (`#003fe6`) and `700` (`#0038cc`) have no EDS value |
| `blue-electric` | `domain-blue-electric`       | `=`                                                                                                                                                                    |
| `blue-navy`     | `domain-blue-navy`           | `=`                                                                                                                                                                    |
| `blue-ocean`    | `domain-blue-ocean`          | `=`                                                                                                                                                                    |
| `green`         | `domain-green`               | `=`                                                                                                                                                                    |
| `green-dark`    | `domain-green-dark`          | `=`                                                                                                                                                                    |
| `green-lemon`   | `domain-green-lemon`         | `≈` `800`/`900` differ (`#7a8830`/`#626d26` → `#98aa3c`/`#7a8830`)                                                                                                     |
| `green-pine`    | `domain-green-pine`          | `=`                                                                                                                                                                    |
| `orange`        | `domain-orange`              | `≈` `50` differs (`#fff0ed` → `#fff3e9`)                                                                                                                               |
| `purple`        | `domain-purple`              | `=`                                                                                                                                                                    |
| `purple-violet` | `domain-purple-violet`       | `=`                                                                                                                                                                    |
| `red-crayola`   | `domain-red-crayola`         | `=`                                                                                                                                                                    |
| `red-tomato`    | `domain-red-tomato`          | `≈` `50` differs (`#fff3e9` → `#fff0ed`)                                                                                                                               |
| `warm-grey`     | `domain-warm-grey`           | `=`                                                                                                                                                                    |
| `yellow-gold`   | `domain-yellow-gold`         | `=`                                                                                                                                                                    |
| —               | `domain-orange-abricot`      | palette existed in ECL, no color mode                                                                                                                                  |

All EDS domain families add a `950` step. The `orange` / `red-tomato` `50`
values look swapped in ECL.

### Layout

#### Breakpoints

Names are shifted by one step, EDS drops the `0` breakpoint and adds two
large ones.

| ECL                   | Value  | EDS            | Match |
| --------------------- | ------ | -------------- | ----- |
| `--ecl-breakpoint-xs` | 0      | —              | `—`   |
| `--ecl-breakpoint-s`  | 480px  | `--eds-bp-xs`  | `=`   |
| `--ecl-breakpoint-m`  | 768px  | `--eds-bp-s`   | `=`   |
| `--ecl-breakpoint-l`  | 996px  | `--eds-bp-m`   | `=`   |
| `$breakpoint` `xl`    | 1140px | `--eds-bp-l`   | `=`   |
| —                     | 1440px | `--eds-bp-xl`  | new   |
| —                     | 1600px | `--eds-bp-2xl` | new   |

Custom properties can't be used in media queries, in Sass use
`map.get(eds.$breakpoint, 's')`.

#### Grid and container

The grid model changes: ECL has 12 columns at every size and fixed
containers, EDS has a column count, gutter and outer margin per tier
(`--eds-gr-columns`, `--eds-gr-gutter`, `--eds-gr-margin`, responsive).

| Tier         | ECL columns / gutter | EDS columns / gutter / margin |
| ------------ | -------------------- | ----------------------------- |
| < 480px      | 12 / 1rem            | 4 / 0.75rem / 1rem            |
| 480px–767px  | 12 / 1rem            | 4 / 0.75rem / 1rem            |
| 768px–995px  | 12 / 1.5rem          | 10 / 1.5rem / 1.5rem          |
| 996px–1139px | 12 / 1.5rem          | 10 / 1.5rem / 1.5rem          |
| ≥ 1140px     | 12 / 2rem            | 12 / 1.5rem / 2rem            |

| ECL                                  | EDS | Match | Notes                     |
| ------------------------------------ | --- | ----- | ------------------------- |
| `$container` (`s` 768 → `xl` 1368px) | —   | `—`   | no container width in EDS |
| `$grid` `gutter-print`               | —   | `—`   |                           |
| `--ecl-max-width` (80ch)             | —   | `—`   | text measure              |

### Other tokens

#### Border radius

| ECL (`$border-radius`) | Value  | EDS             | Match |
| ---------------------- | ------ | --------------- | ----- |
| —                      | 0      | `--eds-br-none` | new   |
| `2xs`                  | 1px    | —               | `—`   |
| `xs`                   | 2px    | `--eds-br-xs`   | `=`   |
| `s`                    | 4px    | `--eds-br-s`    | `=`   |
| `m`                    | 8px    | `--eds-br-m`    | `=`   |
| `l`                    | 12px   | `--eds-br-l`    | `=`   |
| —                      | 9999px | `--eds-br-full` | new   |

#### Border width

No ECL scale (only `--ecl-button-border-width`). EDS adds `--eds-bw-none`
(0), `xs` (1px), `s` (2px), `m` (4px).

#### Shadow

| ECL              | EDS             | Match | Notes                                                                                        |
| ---------------- | --------------- | ----- | -------------------------------------------------------------------------------------------- |
| `--ecl-shadow-1` | `--eds-sh-1`    | `≈`   | same offset/blur, EDS drops the `0 0 0.5px 0.5px` outline layer, color `#18274b` → `#00002e` |
| `--ecl-shadow-2` | `--eds-sh-2`    | `≈`   | same as above                                                                                |
| `--ecl-shadow-3` | `--eds-sh-3`    | `≈`   | same as above                                                                                |
| `--ecl-shadow-4` | `--eds-sh-4`    | `≈`   | same as above, opacity 12% → 14%                                                             |
| `--ecl-shadow-5` | —               | `—`   |                                                                                              |
| —                | `--eds-sh-none` | new   |                                                                                              |

#### Opacity

No ECL scale. EDS adds `--eds-op-none`, `--eds-op-10` … `--eds-op-100`.

#### Not covered by EDS

- `$z-index` (`highlight`, `navigation`, `dropdown`, `modal`, `overlay`, `max`)
- `$media` (`s` 77px, `m` 100px)
- `$form-width` (`s`, `m`, `l` per breakpoint), `--ecl-text-field-height`
- `--ecl-button-*`, `--ecl-link-text-decoration*`
- all print tokens (`$spacing-print`, `$icon-print`, `$font-print`,
  `$font-size-print`, `$line-height-print`, `$font-family-print`)

## EU

The EU theme (`src/eds/foundations/theme-eu`) comes from the Figma export
`EU/Light` and `EU/Dark`. Compared to EC it only overrides colors, shadow
colors and the font family; spacing, sizing, typography scale and roles,
border, opacity, breakpoints and grid are shared with EC. Custom property
names are the same as EC (`--eds-c-*`…), with EU values.

The EU theme is not emitted as CSS yet (not wired in `@ecl/preset-eds`),
the maps exist in Sass only.

Tokens not listed here (breakpoints, grid, container, max width, z-index,
media, form, print, opacity, border width) behave as described in the EC
section.

### Spacing

| ECL                 | Value   | EDS             | Match |
| ------------------- | ------- | --------------- | ----- |
| `--ecl-spacing-2xs` | 0.25rem | `--eds-sp-3xs`  | `=`   |
| `--ecl-spacing-xs`  | 0.5rem  | `--eds-sp-xs`   | `=`   |
| `--ecl-spacing-s`   | 0.75rem | `--eds-sp-s`    | `=`   |
| `--ecl-spacing-m`   | 1rem    | `--eds-sp-m`    | `=`   |
| `--ecl-spacing-l`   | 1.5rem  | `--eds-sp-xl`   | `=`   |
| `--ecl-spacing-xl`  | 2rem    | `--eds-sp-3xl`  | `=`   |
| `--ecl-spacing-2xl` | 2.5rem  | `--eds-sp-5xl`  | `=`   |
| `--ecl-spacing-3xl` | 3rem    | `--eds-sp-7xl`  | `=`   |
| `--ecl-spacing-4xl` | 4rem    | `--eds-sp-11xl` | `=`   |

### Sizing

EU icon sizes map 1:1 to EDS (`2xs` 0.75rem → `--eds-is-2xs`, `xs` 1rem →
`--eds-is-xs`, `s`…`2xl` same name and value). `fluid` (1em) has no EDS
equivalent.

### Typography

#### Font family and weight

| ECL                         | Value | EDS                 | Match | Notes                   |
| --------------------------- | ----- | ------------------- | ----- | ----------------------- |
| `--ecl-font-family-default` | arial | `--eds-f-family`    | `=`   | EU theme `$font-family` |
| `$font-weight` `regular`    | 400   | `--eds-f-w-regular` | `=`   |                         |
| `$font-weight` `bold`       | 700   | `--eds-f-w-bold`    | `=`   |                         |

#### Font size and line height

| ECL                   | Value    | EDS             | Match |
| --------------------- | -------- | --------------- | ----- |
| `$font-size` `2xs`    | 0.625rem | `--eds-f-s-2xs` | `=`   |
| `$font-size` `xs`     | 0.75rem  | `--eds-f-s-xs`  | `=`   |
| `--ecl-font-size-s`   | 0.875rem | `--eds-f-s-s`   | `=`   |
| `--ecl-font-size-m`   | 1rem     | `--eds-f-s-m`   | `=`   |
| `--ecl-font-size-l`   | 1.25rem  | `--eds-f-s-xl`  | `=`   |
| `--ecl-font-size-xl`  | 1.5rem   | `--eds-f-s-3xl` | `=`   |
| `--ecl-font-size-2xl` | 1.75rem  | `--eds-f-s-4xl` | `=`   |
| `--ecl-font-size-3xl` | 2rem     | —               | `—`   |
| `--ecl-font-size-4xl` | 2.25rem  | `--eds-f-s-5xl` | `=`   |
| `--ecl-font-size-5xl` | 2.625rem | —               | `—`   |

| ECL                      | Value    | EDS              | Match |
| ------------------------ | -------- | ---------------- | ----- |
| `$line-height` `2xs`     | 1rem     | `--eds-f-lh-xs`  | `=`   |
| `$line-height` `xs`, `s` | 1.125rem | —                | `—`   |
| `--ecl-line-height-m`    | 1.5rem   | `--eds-f-lh-m`   | `=`   |
| `--ecl-line-height-l`    | 1.75rem  | `--eds-f-lh-l`   | `=`   |
| `--ecl-line-height-xl`   | 1.75rem  | `--eds-f-lh-l`   | `=`   |
| `--ecl-line-height-2xl`  | 2rem     | `--eds-f-lh-xl`  | `=`   |
| `--ecl-line-height-3xl`  | 2.5rem   | `--eds-f-lh-3xl` | `=`   |
| `--ecl-line-height-4xl`  | 2.75rem  | `--eds-f-lh-4xl` | `=`   |
| `--ecl-line-height-5xl`  | 3.25rem  | `--eds-f-lh-6xl` | `=`   |

#### Font shorthands

| ECL                       | Value       | EDS                                | Match |
| ------------------------- | ----------- | ---------------------------------- | ----- |
| `--ecl-font-2xs`          | 0.625/1     | `--eds-f-s-2xs` / `--eds-f-lh-xs`  | `=`   |
| `--ecl-font-xs`           | 0.75/1.125  | `microcopy-m` (0.75/1)             | `≈`   |
| `--ecl-font-s`            | 0.875/1.125 | `paragraph-s` (0.875/1.25)         | `≈`   |
| `--ecl-font-m`            | 1/1.5       | `paragraph-m`                      | `=`   |
| `--ecl-font-l`            | 1.25/1.75   | `--eds-f-s-xl` / `--eds-f-lh-l`    | `=`   |
| `--ecl-font-xl`           | 1.5/1.75    | `--eds-f-s-3xl` / `--eds-f-lh-l`   | `=`   |
| `--ecl-font-2xl`          | 1.75/2      | `--eds-f-s-4xl` / `--eds-f-lh-xl`  | `=`   |
| `--ecl-font-3xl`          | 2/2.5       | — / `--eds-f-lh-3xl`               | `≈`   |
| `--ecl-font-4xl`          | 2.25/2.75   | `--eds-f-s-5xl` / `--eds-f-lh-4xl` | `=`   |
| `--ecl-font-5xl`, `6xl`   | 2.625/3.25  | — / `--eds-f-lh-6xl`               | `≈`   |
| `--ecl-font-prolonged-xs` | 0.75/1.25   | `microcopy-m` (0.75/1)             | `≈`   |
| `--ecl-font-prolonged-s`  | 0.875/1.25  | `paragraph-s`                      | `=`   |
| `--ecl-font-prolonged-m`  | 1/1.5       | `paragraph-m`                      | `=`   |
| `--ecl-font-prolonged-l`  | 1.25/1.75   | `paragraph-xl`                     | `≈`   |
| `--ecl-font-prolonged-xl` | 1.5/1.75    | —                                  | `—`   |
| `--ecl-font-ui-s`         | 0.875/1.5   | `label-s` (0.875/1.25)             | `≈`   |
| `--ecl-font-ui-m`         | 1/1.75      | `label-m` (1/1.5)                  | `≈`   |

#### Typographic roles

The EU export uses the same typography scale and roles as EC (the
Breakpoints collections are shared), so EU headings become responsive and
mostly smaller below desktop. ECL EU headings are regular weight and only
change at desktop. Values are mobile/tablet | desktop for ECL,
mobile | tablet | desktop for EDS.

| ECL role       | ECL values              | EDS role       | EDS values                           | Match | Notes                        |
| -------------- | ----------------------- | -------------- | ------------------------------------ | ----- | ---------------------------- |
| `heading1`     | 2.25/2.75 \| 2.625/3.25 | `heading-2xl`  | 1.75/2.25 \| 2.25/2.75 \| 2.75/3.25  | `≈`   | smaller on mobile            |
| `heading2`     | 2/2.5 \| 2.25/2.75      | `heading-xl`   | 1.375/1.75 \| 1.75/2.25 \| 2.25/2.75 | `≈`   | desktop equal, smaller below |
| `heading3`     | 1.75/2 \| 2/2.5         | `heading-l`    | 1.25/1.5 \| 1.375/1.75 \| 1.75/2.25  | `≈`   | smaller                      |
| `heading4`     | 1.5/1.75 \| 1.75/2      | `heading-m`    | 1.125/1.5 \| 1.25/1.75 \| 1.5/2      | `≈`   | smaller                      |
| `heading5`     | 1.25/1.75               | `heading-s`    | 1/1.5 \| 1.125/1.5 \| 1.25/1.75      | `≈`   | desktop equal, smaller below |
| `heading6`     | 1/1.5                   | `heading-xs`   | 1/1.5 \| 1/1.5 \| 1.125/1.75         | `≈`   |                              |
| `paragraph.xs` | 0.75/1.125              | `microcopy-m`  | 0.75/1                               | `≈`   |                              |
| `paragraph.s`  | 0.875/1.125             | `paragraph-s`  | 0.875/1.25                           | `≈`   |                              |
| `paragraph.m`  | 1/1.5                   | `paragraph-m`  | 1/1.5                                | `=`   |                              |
| `paragraph.l`  | 1.25/1.75               | `paragraph-xl` | 1.25/1.75 \| 1.375/2 \| 1.5/2.25     | `≈`   | responsive in EDS            |

### Color

ECL EU palette steps keep their value in the EDS EU primitives (Figma
`Primitives - EU`, in `theme-eu/primitives/_color.scss`, Sass-only like the
EC ones), mostly under the same name.

#### Palette (primitives)

| ECL                                           | Value     | EDS EU primitive                        | Match | Notes                                                 |
| --------------------------------------------- | --------- | --------------------------------------- | ----- | ----------------------------------------------------- |
| `--ecl-color-primary-5`                       | `#f3f6fc` | `primary-0`                             | `=`   | renamed                                               |
| `--ecl-color-primary-10`                      | `#e7edfa` | `primary-10`                            | `=`   |                                                       |
| `--ecl-color-primary-20` … `-180`             |           | `primary-20` … `primary-180`            | `=`   | same steps (20, 40…180)                               |
| `--ecl-color-primary-130`                     | `#0a328e` | `primary-160`                           | `=`   | ECL alias of `160`                                    |
| `--ecl-color-primary`, `--ecl-color-branding` | `#0e47cb` | `primary-100`                           | `=`   |                                                       |
| `--ecl-color-secondary-10`                    | `#fffae6` | —                                       | `—`   |                                                       |
| `--ecl-color-secondary-20` … `-180`           |           | `secondary-20` … `secondary-180`        | `=`   |                                                       |
| `--ecl-color-dark-5` … `-100`                 |           | `extended-dark-5` … `extended-dark-100` | `=`   | EDS adds `extended-dark-0` (`#fff`)                   |
| `--ecl-color-dark-120`, `-140`                |           | —                                       | `—`   |                                                       |
| `--ecl-color-info` / `-100`                   | `#0e47cb` | `functional-blue`                       | `=`   | same value as `primary-100`                           |
| `--ecl-color-info-5`                          | `#f3f6fc` | `functional-blue-background`            | `=`   |                                                       |
| —                                             | `#c5d0e5` | `functional-blue-midtone`               | new   | placeholder in Figma ("non-existent")                 |
| `--ecl-color-success` / `-100`                | `#00a174` | `functional-green`                      | `=`   |                                                       |
| `--ecl-color-success-midtone`                 | `#ccf4e9` | `functional-green-midtone`              | `=`   |                                                       |
| `--ecl-color-success-5`                       | `#f2fcf9` | `functional-green-background`           | `=`   |                                                       |
| `--ecl-color-warning` / `-100`                | `#ff8133` | `functional-orange`                     | `=`   |                                                       |
| —                                             | `#ffc998` | `functional-orange-midtone`             | new   | placeholder in Figma ("non-existent")                 |
| `--ecl-color-warning-5`                       | `#fff7f2` | `functional-orange-background`          | `=`   |                                                       |
| `--ecl-color-error` / `-100`                  | `#d7003d` | `functional-red`                        | `=`   |                                                       |
| `--ecl-color-error-80`                        | `#ef0044` | —                                       | `—`   |                                                       |
| `--ecl-color-error-midtone`                   | `#fcccda` | `functional-red-midtone`                | `=`   |                                                       |
| `--ecl-color-error-5`                         | `#fef2f5` | `functional-red-background`             | `=`   |                                                       |
| `--ecl-color-accent` / `-100`, `-30`          | `#00e9ff` | —                                       | `—`   |                                                       |
| `--ecl-color-visited` / `-100`, `-40`         | `#510dcd` | —                                       | `—`   | EDS visited links stay blue                           |
| `--ecl-color-dark-alpha-*`                    |           | `alpha-dark-*`                          | `=`   | same steps; `700` is 72% in ECL, 70% in EDS (`≈`)     |
| `--ecl-color-white-alpha-*`                   |           | `alpha-white-*`                         | `=`   | same steps; `700` 72% → 70% and `200` 15% → 20% (`≈`) |
| `--ecl-color-overlay-light`                   | dark 70%  | `alpha-dark-700`                        | `=`   |                                                       |
| `--ecl-color-overlay-dark`                    | dark 90%  | `alpha-dark-900`                        | `=`   |                                                       |
| `--ecl-color-corporate-gradient`              |           | —                                       | `—`   |                                                       |

#### Semantic colors

ECL EU has no semantic color layer (components use the palette directly).
This table gives, for each palette color, the EDS semantic tokens holding the
same value in the EU theme (light mode), to pick from by role.

| ECL                                            | EDS semantic tokens (EU theme)                                                                             | Match |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----- |
| `--ecl-color-primary` / `-100`                 | `surface-primary`, `foreground-primary`, `border-primary`, `link`, `focus`, `border-focus`                 | `=`   |
| `--ecl-color-primary-120`                      | `surface-primary--hover`, `link--hover`, `link--visited`                                                   | `=`   |
| `--ecl-color-primary-140`                      | `surface-primary--pressed`, `on-surface-primary-subtle`, `on-surface-primary-subtler`, `link--pressed`     | `=`   |
| `--ecl-color-primary-160` / `-130`             | —                                                                                                          | `—`   |
| `--ecl-color-primary-180`                      | — (dark mode `surface-primary-subtler`)                                                                    | `—`   |
| `--ecl-color-primary-80`                       | `border-primary-subtle`, `border-primary--hover`, `border-primary--pressed`                                | `=`   |
| `--ecl-color-primary-60`                       | `focus-inverted`                                                                                           | `=`   |
| `--ecl-color-primary-40`                       | `surface-primary-subtle`                                                                                   | `=`   |
| `--ecl-color-primary-20`                       | `surface-selected`, `border-primary-subtler`                                                               | `=`   |
| `--ecl-color-primary-5`                        | `surface-primary-subtler`, `surface-accent`                                                                | `=`   |
| `--ecl-color-secondary` / `-100`               | `surface-highlight--pressed`                                                                               | `=`   |
| `--ecl-color-secondary-80`                     | `surface-highlight--hover`, `border-highlight`                                                             | `=`   |
| `--ecl-color-secondary-60`                     | `surface-highlight`, `border-highlight-subtle`                                                             | `=`   |
| `--ecl-color-secondary-20`                     | `surface-highlight-subtler`                                                                                | `=`   |
| `--ecl-color-secondary-160`                    | `foreground-highlight`, `on-surface-highlight-subtler`                                                     | `=`   |
| `--ecl-color-dark` / `-100`                    | `foreground`, `surface-brand`, `surface-inverted`, `border-brand`, `link-contrast`, `on-surface-highlight` | `=`   |
| `--ecl-color-dark-80`                          | `foreground-subtle`, `surface-neutral--hover`, `link-contrast--pressed`                                    | `=`   |
| `--ecl-color-dark-60`                          | `foreground-subtler`, `foreground-placeholder`, `surface-neutral`, `border-neutral`                        | `=`   |
| `--ecl-color-dark-40`                          | `foreground-disabled`, `on-surface-disabled`, `border-neutral-subtle`                                      | `=`   |
| `--ecl-color-dark-20`                          | `border-divider`, `border-disabled`, `surface-disabled`, `surface-skeleton`, `surface-neutral-subtler`     | `=`   |
| `--ecl-color-dark-10`                          | `surface-elevation-sunken`, `surface-disabled-subtle`                                                      | `=`   |
| `--ecl-color-dark-5`                           | `surface-elevation-inset`, `foreground-inverted`, `border-inverted`                                        | `=`   |
| `#fff`                                         | `surface-elevation*`, `on-surface-brand`, `on-surface-primary`, `link-inverted`                            | `=`   |
| `--ecl-color-info` / `-100`                    | `surface-info`, `foreground-info`, `border-info`                                                           | `=`   |
| `--ecl-color-info-5`                           | `surface-info-subtler`                                                                                     | `=`   |
| `--ecl-color-success` / `-100`                 | `surface-success`, `foreground-success`, `border-success`                                                  | `=`   |
| `--ecl-color-success-midtone`                  | `surface-success-subtle`, `border-success-subtle`                                                          | `=`   |
| `--ecl-color-success-5`                        | `surface-success-subtler`                                                                                  | `=`   |
| `--ecl-color-warning` / `-100`                 | `surface-warning`, `foreground-warning`, `border-warning`                                                  | `=`   |
| `--ecl-color-warning-5`                        | `surface-warning-subtler`                                                                                  | `=`   |
| `--ecl-color-error` / `-100`                   | `surface-critical`, `foreground-critical`, `border-critical`, `focus-critical`                             | `=`   |
| `--ecl-color-error-midtone`                    | `surface-critical-subtle`, `border-critical-subtle`                                                        | `=`   |
| `--ecl-color-error-5`                          | `surface-critical-subtler`                                                                                 | `=`   |
| `--ecl-color-dark-alpha-600` / `-300` / `-100` | `alpha-backdrop-strong` / `alpha-backdrop` / `alpha-backdrop-subtle`                                       | `=`   |
| `--ecl-color-white-alpha-100`                  | `alpha-backdrop-inverted`, `alpha-backdrop-inverted-subtle`                                                | `=`   |

Links and focus:

| ECL                         | Value     | EDS (EU theme)          | Match | Notes                                    |
| --------------------------- | --------- | ----------------------- | ----- | ---------------------------------------- |
| `--ecl-link-color`          | `#0e47cb` | `--eds-c-link`          | `=`   |                                          |
| `--ecl-link-color-hover`    | `#0a328e` | `--eds-c-link--hover`   | `≈`   | `#0d40b7` (`primary-120`)                |
| `--ecl-link-color-active`   | `#191d26` | `--eds-c-link--pressed` | `≈`   | `#0b39a2`; `link-contrast` has the value |
| `--ecl-color-visited`       | `#510dcd` | `--eds-c-link--visited` | `≈`   | `#0d40b7`, purple → blue                 |
| `--ecl-focus-outline-color` | `#0e47cb` | `--eds-c-focus`         | `=`   |                                          |

EU has no domain colors (the `Domains` Figma collections are EC only).

### Other tokens

| ECL                                                        | EDS (EU theme)    | Match | Notes                                                                                    |
| ---------------------------------------------------------- | ----------------- | ----- | ---------------------------------------------------------------------------------------- |
| `$border-radius` `xs`…`l`                                  | `--eds-br-xs`…`l` | `=`   | same as EC                                                                               |
| `--ecl-shadow-1`                                           | `--eds-sh-1`      | `≈`   | ECL: 4 layers tinted `#09318e`; EDS: one layer `0 6px 12px`, `extended-dark-100` at 7.5% |
| `--ecl-shadow-2`…`4`                                       | `--eds-sh-2`…`4`  | `≈`   | same as above, `extended-dark-100` at 10% for the 3 levels                               |
| `--ecl-shadow-inner-*`                                     | —                 | `—`   |                                                                                          |
| `--ecl-shadow-negative-*`, `--ecl-shadow-negative-inner-*` | —                 | `—`   |                                                                                          |

### EU Figma export, points to check with design

- **Contrast**: several "text on" tokens use the status color itself.
  `on-surface-warning` is `#ff8133` on a `#ff8133` surface;
  `foreground-warning`, `on-surface-warning-subtle(r)`,
  `on-surface-success-subtle(r)` and `on-surface-critical-subtle(r)` use the
  default status color on a light background, below 4.5:1 for orange and green.
- **Collapsed states**: EU status colors only have default / midtone /
  background. `surface-critical--hover` and `--pressed` are the default
  color; the same was applied to the info/success/warning hover and pressed
  states derived in `theme-eu`.
- **Placeholders**: `functional-blue-midtone` and `functional-orange-midtone`
  are labelled "midtones (non-existent)" in Figma.
- **Dark mode** looks unfinished: every status `subtle`/`subtler` surface is
  the default status color, and `surface-elevation-raised`/`elevated` are
  `extended-dark-80`.
- `on-surface-inverted-placeholder` points to EC primitives (`silver-fog-500`
  / `graphite-500`) in the EU export.
- `surface-invisible` is white at 2.5% (EC: 0%).

## Gaps to discuss

- **Dropped palettes**: ECL EC `neutral` (blue-grey) and `monochrome`;
  every `--cm-*-neutral-*` token lands on a grey with a visible change.
- **Color modes**: EDS domains only provide 3 tokens per domain, the ~30
  tokens swapped by an ECL color mode have no equivalent. ECL `blue` mode
  uses two blues (`#003fe6`, `#0038cc`) absent from EDS. EU has no domains.
- **Missing steps**: spacing `12xl`/`13xl`, font size 2rem, 2.625rem
  (EU) and 4.5rem, line height 0.875rem / 1.125rem (EU) / 4.25rem /
  4.875rem, icon 1.125rem, radius 1px, `shadow-5`, EU inner/negative
  shadows, `max-width`, z-index, media, form widths, all print tokens.
- **Typography tiers**: ECL EC has an extra `mobile-xs` (< 480px) tier,
  EDS desktop headings are one step larger than ECL `heading3`–`heading6`;
  EU headings are not responsive in ECL, they are in EDS.
- **EC maps behind the latest EC export**: `semantic/_color.scss` was
  synced from the 2026-09-16 EC export. The EC export delivered with the EU
  one (2026-09-23) adds tokens (`border`, `border-neutral-strong`,
  `foreground-primary--hover`/`--pressed`, `foreground-highlight--hover`/`--pressed`,
  `border-highlight--hover`/`--pressed`, `on-surface-inverted-placeholder`),
  no longer has most `--hover`/`--pressed` surface states,
  `surface-neutral-subtle`, `border-neutral-subtle`, `border-brand` and
  `border-focus`, and changes 7 values (`surface-neutral-subtler`,
  `on-surface-highlight`, `foreground-placeholder`, `foreground-disabled`,
  `border-info`, `border-inverted-disabled`, `link-contrast--hover`).
  `theme-eu` keeps the current EC key set so both themes stay
  interchangeable: 45 tokens per mode are not in the EU export and are
  derived (marked `// derived` in the maps). The EC mapping above uses the
  current EC maps.
- **Data to confirm with design** (EC, values taken from Figma as is):
  `european-blue-25` is `#fafafb` (same as `silver-fog-25`, ECL had
  `#f7f9ff`); `alpha-*-950-40` is 50% opacity (same as `-50`);
  `silver-fog-900` is `#171740` (ECL grey-900 `#1c1c45`). EU: see
  "EU Figma export, points to check with design".
