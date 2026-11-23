# ECL PR review checklist

Built from ~350 review comments on ECL pull requests (2025–2026). Each item is something
reviewers actually raised, usually more than once. Apply only the sections relevant to
the files the PR touches.

## Twig templates (`*.html.twig`)

- **Boolean defaults** — `x|default(true)` turns an explicit `false` into `true`. Booleans
  defaulting to true must use `{% set _x = x ?? true %}`.
- **Defensive access** — nested properties are tested before use
  (`_indicator.position is defined`, `_thumbnail.img is defined`): Twig in PHP (Drupal)
  throws where the JS renderer is lenient. Prefer `is defined and is not empty` over a
  bare truthiness test, as elsewhere in ECL.
- **Shape of the data** — a parameter documented as "string or array" (e.g. a
  description-list term) must render correctly in both forms.
- **User input is merged, not overridden** — `extra_classes` / `extra_attributes`
  passed to a sub-component include are combined with the component's own, so users
  can still add analytics attributes or classes.
- **No empty wrappers** — do not render a wrapper and then hide it with CSS or an extra
  parameter; wrap it in a condition on its content.
- **Defaults match the README** — every default in the template equals the one
  documented in `README.md` and the `{# Parameters #}` header.
- **No leftovers** — unused variables (`_title_attrs`), parameters that are declared but
  never used, parameters that duplicate each other (`full_width` that only matters with
  `background` → one parameter).
- **Parameter naming** — clear and not confusable with existing ones (`picture` vs
  `image` → `image_display`).
- **BEM class names** — variants are modifiers on the block
  (`ecl-x--static`), not a second block name (`ecl-x ecl-x-not-expandable`). All new
  classes and CSS identifiers (container names, counters) carry the `ecl-` namespace.
- **Markup completeness** — matching closing tags, list items inside a `ul`/`ol`, no
  stray elements (a full `<li>` rendered only to draw a divider → CSS border instead).

## SCSS

- **Tokens, not values** — colours, spacing and fonts come from theme variables or
  custom properties; a raw hex or rem in component SCSS is a finding.
- **Correct token syntax** — every value in a multi-value property wrapped in `var()`;
  Sass variables inside custom properties need `#{...}` interpolation; map keys spelled
  as defined (`padding-container-desktop`, not a guessed name). Silent typos still
  compile but render nothing.
- **Color modes and backgrounds (EC)** — borders, focus rings and text stay visible on
  dark backgrounds and in every color mode; `--cm-*` tokens used where a surface can
  change. White text on warning/yellow and `--c-w` (semi-transparent white) are
  frequent contrast traps.
- **EC and EU** — a value that works for EC may be wrong for EU (different palette,
  e.g. `var(--c-d)`); with `-ec`/`-eu` file pairs, both are updated and kept
  copy-paste aligned.
- **Print** — `*-print.scss` follows layout/markup changes; removing print rules can
  regress alignment (list markers, icon placement).
- **RTL** — logical properties (`inset-inline-end`, `margin-inline-start`) instead of
  `left`/`right`; directional transforms/rotations inverted under RTL.
- **Responsive** — breakpoint mixin, no raw `@media`. Container queries: named at the
  component root, and aware that `container-type` changes layout (it broke the search
  form once).
- **Selectors** — no deep `>` chains when a class would do; no styling through `data-*`
  attributes or structural pseudo-classes like `:first-of-type` (eUI and the web
  components do not reproduce that markup — add a class such as `.is-first`); no
  dependency on utility classes inside a component (utilities ship as an optional file).
- **Side effects** — `overflow`, `container-type`, margins removed "by default" can
  break other variants or existing pages; ask whether the change is meant to affect all
  variants (e.g. vertical as well as horizontal).
- **Leftovers** — classes no longer produced by Twig/JS, dead rules.

## JavaScript

- **Safety** — `textContent` instead of `innerHTML` when injecting data.
- **No debug code** — `console.log`, `debugger`.
- **Robust queries** — select by ECL class (`.ecl-tabs__item`), not tag names or
  `childNodes` (whitespace nodes); reuse `queryOne`/`queryAll` and cache repeated queries
  on the instance.
- **Unique IDs** — generated from an index, not from user values that can repeat.
- **Counting edge cases** — "see more"/helper elements excluded when counting items
  against a limit.
- **Events** — resize handlers debounced or rAF-throttled as in other components; every
  listener added in `init` removed in `destroy`; prefer one delegated listener over one
  per item.
- **Hardcoded values** — magic numbers or media queries that should come from an option
  or the markup, with JSDoc for new options.

## Stories (`*.story.js`)

See `ecl-edit-story` for the patterns.

- `parameters.notes.json` is a function `({ args }) => prepareData(data, args)` —
  otherwise the include example goes stale.
- Every control actually reaches the template (check `prepareData`); reviewers often find
  2–3 controls that do nothing.
- Controls irrelevant in a state are hidden with `if:` (e.g. icon options when icon is
  `'none'`).
- Control labels lower-case, consistent with other stories.
- Story defaults reflect generic usage, not one site's needs.

## Demo data and tests

- Demo files use `export default`.
- Data is static and complete: labels the template needs (`close_label`,
  `sources_label`) present in every variant; no random strings generated in the output.
- Axe test of a variant renders that variant's data, not the default.
- Snapshot diff matches the intended change — look for anomalies like duplicated
  classes or unexpected removed attributes. New/renamed variants have consistently named
  tests. See `ecl-test-component`.

## Accessibility

- Information removed for sighted users is not silently removed for screen-reader users
  (or vice versa) without a stated reason.
- `aria-label` on a container does not override readable content inside it;
  `aria-hidden` is not added to elements that are already hidden.
- Related content read together (value + title of a figure) stays grouped in the markup.
- Form inputs always have a label (visually hidden if needed), even with an empty
  placeholder.
- Focus is visible on every background; keyboard behaviour of interactive widgets follows
  the matching WAI-ARIA APG pattern.

## Docs, website and API

- `README.md` parameters updated with the template (name, type, default).
- **Breaking changes** — removed or renamed parameters, classes, events, or changed
  defaults are documented in the migration doc for the next major (`docs/Migrating-v*.md`);
  in a minor release they need explicit agreement.
- Website: new pages registered in `src/website/public/admin/config.yml` for both EC and
  EU, usage and accessibility. `accessibility.md` follows the section headings used on
  other components (`### Accessible names`, `### Content structure`,
  `### Input assistance`) with `order: 3` in the frontmatter.
- New design tokens exist in Figma and are not a one-off for a single component.

## Packages

- `@ecl/*` dependencies aligned to the latest released version, not a patch or an
  outdated pre-release.
- Unused dependencies removed; `package.json` / `pnpm-lock.yaml` untouched when no
  dependency changed.

## Scope

- Unrelated cleanup is called out (fine if intentional, but it should be visible).
- Inconsistencies with similar components (button vs link, tabs vs slider) or
  pre-existing bugs noticed during review go under "Out of scope / follow-up" rather
  than blocking the PR.
- Design decisions that look odd but match Figma are questions for the designers, not
  findings against the author.
