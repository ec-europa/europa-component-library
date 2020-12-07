# ECL v3 migration notes

The following guidelines aim to facilitate migration between ECL v2 to v3.

## Deprecated components haven't been migrated

The following have been kept in v2 in order to avoid breaking changes, but will no longer be available in v3:

Components:

- Accordion (deprecated since ECL 2.6.0)
- Footer (deprecated since ECL 2.12.0)
- Menu (legacy)
- Page header (deprecated since ECL 2.14.0)
- Site header (deprecated since ECL 2.12.0)
- Timeline (deprecated since ECL 2.5.0)

Templates:

- Content page (deprecated sine ECL 2.12.0)
- Standard page (deprecated sine ECL 2.12.0)

## npm packages

All packages are under [`@ecl`](https://www.npmjs.com/org/ecl) organization. System-specific prefixes have been removed.

- SCSS packages have the following change in pattern: `@ecl/(ec|eu)-component-{component_name}` has become `@ecl/vanilla-component-{component_name}`.

Example: `@ecl/ec-component-accordion` => `@ecl/vanilla-component-accordion`

- Twig templates packages have the following change in pattern: `@ecl-twig/(ec|eu)-component-{component_name}` has become `@ecl/twig-component-{component_name}`.

Example: `@ecl-twig/ec-component-accordion` => `@ecl/twig-component-accordion`

- Resources' packages have the following change in pattern: `@ecl/(ec|eu)-resources-{resource_name}` has become `@ecl/resources-(ec|eu)-{resource_name}`

Example: `@ecl/ec-resources-logo` => `@ecl/resources-ec-logo`

The following packages have been re-organized:

- `@ecl/(ec|eu)-design-tokens` has been removed
- `@ecl/polyfills` has been moved to `@ecl/dom-utils/polyfills`
- `@ecl/(ec|eu)-auto-init` have been moved to `@ecl/dom-utils/autoinit`
- `@ecl/(ec|eu)-base/helpers` have been moved to `@ecl/dom-utils`

Example from v2:

```javascript
import { formatBytes } from '@ecl/ec-base/helpers/utilities';
```

Becomes the following in v3:

```javascript
import { formatBytes } from '@ecl/dom-utils';
```

The example holds true for `queryAll()`, `queryOne()` as well.

## SCSS implementation specifics

// DEPRECATED

## Layout specifics

Grid utility classes have been changed in the following way:

- `.ecl-col-sm` => `.ecl-col-s`
- `.ecl-col-md` => `.ecl-col-m`
- `.ecl-col-lg` => `.ecl-col-l`

## Twig implementation specifics

They have been migrated from `[ecl-twig](https://github.com/ec-europa/ecl-twig)` repository to `[europa-component-library](https://github.com/ec-europa/europa-component-library)`.

- Namespace has been changed from `@ecl-twig/(ec|eu)-{component_name}` to `@ecl/{component_name}`
- The `ecl-` prefix has been removed from template file `ecl-{component_name}` to `{component_name}`

Example: `@ecl-twig/ec-component-accordion/ecl-accordion.html.twig` => `@ecl/accordion/accordion.html.twig`

[ECL Compliance component](https://github.com/ec-europa/ecl-twig/tree/master/src/ec/packages/ec-component-ecl-compliance) has been removed.

## Releases

They remain to be published at its [corresponding github page](https://github.com/ec-europa/europa-component-library/releases).

- What happens with `@ecl/(ec|eu)-preset-full`?
- What happens with `@ecl/(ec|eu)-preset-website`?

A few words regarding `(ec|eu)-core`.
