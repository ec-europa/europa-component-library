# ECL v3 migration notes

The following guidelines aim to facilitate migration between ECL v2 to v3.

## System requirements

ECL has always been using the LTS version of Node.js. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

## Deprecated components haven't been migrated

The following have been kept in v2 in order to avoid breaking changes, but will no longer be available in v3:

Components:

- Accordion (deprecated since ECL 2.6.0; ECL v3 contains an accordion taken from ECL v2 aka accordion2 now named accordion)
- Footer (deprecated since ECL 2.12.0)
- Menu (legacy)
- Page header (deprecated since ECL 2.14.0)
- Site header (deprecated since ECL 2.12.0)
- Timeline (deprecated since ECL 2.5.0; ECL v3 contains a timeline taken from ECL v2 aka timeline2 now named timeline)

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
- `@ecl/ec-utility-colorize` has been removed
- `@ecl/ec-utility-font-size` has been removed
- `@ecl/ec-utility-ratio` has been removed
- `@ecl/ec-utility-text` has been removed
- `@ecl/(ec|eu)-component-form-form-group`, `@ecl/(ec|eu)-component-form-feedback-message`, `@ecl/(ec|eu)-component-form-help-block` and `@ecl/(ec|eu)-component-form-form-label` have been consolidated in `@ecl/vanilla-component-form`
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

## SCSS/CSS implementation specifics

### Removed classes

| Removed CSS classes                                                                                                       | Solution                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `ecl-form-label--hidden`                                                                                                  | use `ecl-u-sr-only`                                                                                                          |
| `ecl-radio__group`, `ecl-radio__group--invalid`, `ecl-radio--disabled`, `ecl-radio--readonly`, `ecl-radio__group--binary` | see latest form radio component                                                                                              |
| `ecl-select--invalid`                                                                                                     | see latest form select component                                                                                             |
| `ecl-gallery__slider-image-container`, `ecl-gallery__slider-image-container`                                              | see latest gallery component                                                                                                 |
| `ecl-menu__link`                                                                                                          | see latest menu component                                                                                                    |
| `ecl-u-color-*`                                                                                                           | split into `@ecl/vanilla-utility-background` for `ecl-u-bg-*` and `@ecl/vanilla-utility-typography` for `ecl-u-type-color-*` |
| `ecl-u-fs-*`                                                                                                              | use `@ecl/vanilla-utility-typography` and `ecl-u-type-*` discouraged                                                         |
| `ecl-u-ratio-*`                                                                                                           | use `@ecl/ec-utility-media` and `ecl-u-media-ratio-*`                                                                        |
| `ecl-u-text-*`                                                                                                            | use `@ecl/vanilla-utility-typography` and `ecl-u-type-*`                                                                     |

Please note that not all changes listed above will be breaking changes for your project as it depends on how CSS classes have been applied through templates.

If you have applied any of these CSS classes manually or programatically in your website, then please pay extra attention.

If the CSS classes are used through ECL twig templates, then changes are already resolved.

### SCSS parsing and rendering

This section is relevant for ECL users who use raw resources and compile/bundle assets on their end. If you are not using the ready-made ECL releases from Github or npm and you are not using `ecl-builder` as your bundler, please read the following paragraphs.

ECL v2 and prior versions have been using `node-sass`, whereas ECL v3 uses [dart-sass](https://sass-lang.com/dart-sass). This migration allows for more efficient SCSS development practices while preserving the quality of the bundled CSS.

Here's a list of changes to apply in your project to follow up with ECL v3 SCSS approach:

- Remove [node-sass](https://www.npmjs.com/package/node-sass) package and install [`sass`](https://www.npmjs.com/package/sass).
- Convert `import` statements to [`use` statements](https://sass-lang.com/documentation/at-rules/use) in order to benefit from a module system protecting against many scope issues.
- Remove usages of [`import-once()` mixin](https://github.com/ec-europa/europa-component-library/blob/6068cca85e387741556239826792ca27520fcf69/src/systems/ec/implementations/vanilla/packages/ec-base/mixins/_import-once.scss). This utility is not needed any more because of the module system.
- ECL global variables are no longer available. Values for `$ecl-color-grey-5` are now accessible through a theming layer. In the most generalized way: import the main theme file `@use '@ecl/theme-dev/theme'` and access values through the corresponding map `map.get(theme.$color, 'grey-5')`.
- Update input options for sass compiler or rendering function. Pass `getsystem()` function from [`functions`](https://sass-lang.com/documentation/js-api#functions) parameter. Some SCSS files in ECL will depend on this function to get system-specific context. `ecl-builder` uses `@ecl/builder/utils/getSystem`.

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

## Component implementation specifics

Most of the components have been updated without much changes. Although, there are a few exceptions, which may result in breaking changes

- Footers
  - section ids have been updated to be more consistent (no more jumping from section 3 to section 6 for instance)
  - twig parameter "type" has been removed (not used)
  - twig parameters added for each link, to allow content before and after it
- Date block
  - css class for variant "cancelled" has been renamed from `.ecl-date-block--canceled` to `.ecl-date-block--cancelled`
  - new css class `.ecl-date-block__daytime` in place of the `ecl-u-sr-only` utility (components are not supposed to contain utilities)
- Link
  - twig parameter "icon_path" has been removed (not used)
- Button
  - variant "search" has been removed (css has been integrated in search form)
- Text input
  - twig parameter "invalid_icon" added, to display additional icon when field is invalid
  - twig parameter "placeholder" added, to manage default content
  - twig parameter "invalid_icon_label" has been removed (not used)

## Resources specifics

- logo file names have been homogenized between EC and EU, using the pattern `logo-(ec|eu)--(language).svg`

## Presets / themes

ECL is made available to end users in the form of ready to use set of css, javascript and resources. Users are free to include one css or another depending on their needs.
The following packages are available:

- ec: contains everything related to EC sites, plus optional css
- eu: contains everything related to EU sites, plus optional css

Under the hook, a theme layer has been introduced in ECL v3. It sits on top of the components layer and transforms variables into values targeting specific use cases called presets. Presets are ready-made ECL releases serving for different purposes and target audiences.

Most of the old v2 presets have been removed or modified:
| Preset | Modifications |
| - | - |
| ec-preset-full | preset removed (not used anymore) |
| ec-preset-website | preset removed (replaced by an optional css) |
| ec-preset-legacy | preset removed (no legacy content) |
| ec-preset-legacy-website | preset removed (no legacy content) |
| eu-preset-full | preset removed (not used anymore) |
| eu-preset-website | preset removed (replaced by an optional css) |
| eu-preset-legacy | preset removed (no legacy content) |
| eu-preset-legacy-website | preset removed (no legacy content) |

## Component implementation specifics

Most of the components have been updated without much changes. Although, there are a few exceptions, which may result in breaking changes

- Footers
  - section ids have been updated to be more consistent (no more jumping from section 3 to section 6 for instance)
  - twig parameter "type" has been removed (not used)
  - twig parameters added for each link, to allow content before and after it
- Date block
  - css class for variant "cancelled" has been renamed from `.ecl-date-block--canceled` to `.ecl-date-block--cancelled`
  - new css class `.ecl-date-block__daytime` in place of the `ecl-u-sr-only` utility (components are not supposed to contain utilities)
- Link
  - twig parameter "icon_path" has been removed (not used)
- Button
  - variant "search" has been removed (css has been integrated in search form)
- Text input
  - twig parameter "invalid_icon" added, to display additional icon when field is invalid
  - twig parameter "placeholder" added, to manage default content
  - twig parameter "invalid_icon_label" has been removed (not used)
- Text-area
  - twig parameter "invalid_icon" added, to display additional icon when field is invalid
  - twig parameter "placeholder" added, to manage default content
