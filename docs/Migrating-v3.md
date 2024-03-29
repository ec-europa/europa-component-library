# ECL v3 migration notes

The following guidelines aim to facilitate migration between ECL v2 to v3.

- [Content modifications](#content-modifications)
  - [Deprecated elements](#deprecated-elements)
  - [Elements modified](#elements-modified)
    - [Layout updates](#layout-updates)
    - [Component updates](#component-updates)
    - [Resources updates](#resources-updates)
  - [Presets and themes](#presets-and-themes)
- [System and structure modifications](#system-and-structure-modifications)
  - [Requirements](#requirements)
  - [Packages](#packages)
  - [File structure](#file-structure)
  - [SCSS parsing and rendering](#scss-parsing-and-rendering)
- [Js bundle](#js-bundle)
- [Coming soon](#coming-soon)

## Content modifications

### Deprecated elements

The following had been kept in v2 in order to avoid breaking changes, but will no longer be available in v3:

**Components not ported to ECL v3:**

- `accordion` (deprecated since ECL 2.6.0; ECL v3 contains an accordion taken from ECL v2 aka accordion2 now named accordion)
- `footer` (deprecated since ECL 2.12.0)
- `menu-legacy` (deprecated since ECL 2.8.0; a menu is still available in ECL v3)
- `page-header` (deprecated since ECL 2.14.0)
- `site-header` (deprecated since ECL 2.12.0)
- `timeline` (deprecated since ECL 2.5.0; ECL v3 contains a timeline taken from ECL v2 aka timeline2 now named timeline)

**Utilities not ported to ECL v3:**

- `colorize` (deprecated since ECL 2.6.0; part of typography utilities now)
- `font-size` (deprecated since ECL 2.6.0; part of typography utilities now)
- `ratio` (deprecated since ECL 2.11.0; part of media utilities now)
- `text` (deprecated since ECL 2.6.0; part of typography utilities now)

**Other elements not ported to ECL v3:**

- [ECL Compliance component](https://github.com/ec-europa/ecl-twig/tree/master/src/ec/packages/ec-component-ecl-compliance) (previously used in twig templates)

### Elements modified

We tried to keep major updates to a minimum concerning ECL elements. Although, there are some modifications which may result in breaking changes, especially for branding elements (headers and footers).
Change impact have been grouped as :
:boom: breaking for everyone
:warning: major change (potentially breaking), generally affecting the markup
:heavy_check_mark: minor change

#### Naming updates

:boom: All utility classes based on breakpoints have been updated, to preserve consistency across the project:

- `sm` has become `s`
- `md` has become `m`
- `lg` has become `l`

Examples:

- `.ecl-u-d-md-none` => `.ecl-u-d-m-none` (display utilities)
- `.ecl-u-mt-sm-xl` => `.ecl-u-mt-s-xl` (spacing utilities)
- `.ecl-u-border-lg-bottom` => `.ecl-u-border-l-bottom` (border utilities)
- ...

This is also true for the grid classes:

- `.ecl-col-sm` => `.ecl-col-s`
- `.ecl-col-md` => `.ecl-col-m`
- `.ecl-col-lg` => `.ecl-col-l`

#### Component updates

**Accordion**

- :heavy_check_mark: the `icon` parameter is no longer defined for each item but only once for the whole accordion. Note that for the EU version you must use the `corner-arrow` icon name.
- :heavy_check_mark: twig parameter `label_expanded` & `label_collapsed` added, to add the open/close labels next to the icon in the EU version

**Banners**

- :warning: variant `grey` has been renamed `secondary`
- :warning: twig parameter `type` has been renamed `variant`
- :warning: twig parameter `baseline` has been renamed `description`

**Breadcrumb**

- :warning: EC Core breadcrumb is now using the new negative variant for links
- :heavy_check_mark: twig parameter `icon_size` added, to handle the size of the icon between segments

**Button**

- :heavy_check_mark: variant "search" has been removed (css has been integrated in search form)

**Card**

- :boom: components have been completely refactored at markup
- :warning: icon size for each info items is different between EC and EU version, `xs` icon size is used for EC and `m` for EU

**Date block**

- :warning: css class for variant "cancelled" has been renamed from `.ecl-date-block--canceled` to `.ecl-date-block--cancelled`
- :warning: new css class `.ecl-date-block__daytime` in place of the `.ecl-u-sr-only` utility (components are not supposed to contain utilities)
- :heavy_check_mark: new variant added: "rescheduled"

**Fact figures**

- :warning: icon size for each items is different between EC and EU version, `m` icon size is used for EC and `l` for EU
- :warning: icon added to `view_all` link, note that `xs` icon size is used for EC and `m` for EU

**File**

- :boom: markup has been revised, `.ecl-file__label` is now placed in the sub `.ecl-file__detail-info` container
- :warning: File icon is different between EC and EU version, `2xl` icon size is used for EC and `m` for EU

**Footers**

- :boom: components have been completely refactored at markup and specs level
- :boom: section ids have been removed, to have more generic markup
- :warning: titles are now h2 instead of a div tag
- :warning: twig parameters added for each link, to allow content before and after it
- :warning: twig parameter `title_class_name` replaced by boolean parameter `title_with_separator`
- :warning: twig parameter `list_class_name` replaced by boolean parameter `links_inline`
- :heavy_check_mark: twig parameter `type` has been removed (not used)

**Forms**

- :warning: css class `.ecl-form-label--hidden` has been removed (it was marked as deprecated already). You can use utility class `.ecl-u-sr-only` to achieve the same result, as it is outside a component

**Gallery**

- :warning: A css class has been added to the button for viewing all the items in a gallery: `ecl-gallery__view-all`
- :warning: The icon for the close button of the overlay is now `closed-filled` and not `close` anymore
- :warning: The share and download button in the overlay are now implementations of the `standalone` link component
- :warning: The next and previous icons in the overlay have now the size `s` instead of `l`

**Icon**

- :warning: twig parameter "type" has been removed

**Language list**

- :boom: markup has been revised, icon `generic-lang` added next to the title for the overlay variant

**Link**

- :warning: space between icon and label is now set using css (instead of a forced `&nbsp`)
- :heavy_check_mark: twig parameter `negative` added, to display negative (white on dark) links
- :heavy_check_mark: twig parameter `no_visited` added, to prevent change of color for visited links
- :heavy_check_mark: twig parameter `icon_path` has been removed (not used)

**Message**

- :warning: The size of the icon for the close button is no longer defined in the twig template, since it differs in the two system (`xs` for EC, `s` for EU)

**Menu**

- :heavy_check_mark: twig parameter `site_name` is now only used on mobile (other display relies on the already existing parameter in site header)

**Page headers**

- :boom: markup has been revised to handle new specs
- :warning: twig parameter `meta` is now an array of string
- :warning: twig parameter `background_image` has been removed (using image url to check if there is a background)
- :warning: twig parameter `overlay` added to Core page header, to select optional overlay on top of background image
- :heavy_check_mark: twig parameter `thumbnail` added, to add an optional image

**Site headers**

- :boom: markup has been revised, using button css where needed, and adding an extra container (needed for styling)
- :heavy_check_mark: twig parameter `menu_label` has been removed (not used)

**Tag**

- :boom: markup has been revised for the removable tag

**Text area**

- :heavy_check_mark: twig parameter `invalid_icon` added, to display additional icon when field is invalid
- :heavy_check_mark: twig parameter `placeholder` added, to manage default content

**Text input**

- :heavy_check_mark: twig parameter `invalid_icon` added, to display additional icon when field is invalid
- :heavy_check_mark: twig parameter `placeholder` added, to manage default content
- :heavy_check_mark: twig parameter `invalid_icon_label` has been removed (not used)

**Timeline**

- :warning: Additional markup has been added to handle the EU styles for the timeline items, their content is now wrapped in a `.ecl-timeline__tooltip` element with a `.ecl-timeline__tooltip-arrow` element as its first child

#### Resources updates

- :warning: logo file names have been homogenized between EC and EU, using the pattern `logo-(ec|eu)--(language).svg`
  Example: `logo-en.svg` => `logo-ec--en.svg`
- :warning: all icons have been grouped in a single cateory, instead of having different ones (branded, general, ...). So now only the icon name is used.
- :warning: icon `rounded-arrow` has been removed (arrows are cornered by default on EC, and rounded on EU)
- :heavy_check_mark: icon size `2xs` has been changed from 10px to 12px
- :heavy_check_mark: new icon set has been added for flags

### Presets and themes

ECL v3 is made available to end users in the form of ready to use set of css, javascript and resources. Users are free to include one css or another depending on their needs.
The following packages are available:

- ec: contains everything related to EC sites, plus optional css
- eu: contains everything related to EU sites, plus optional css

Under the hook, a theme layer has been introduced in ECL v3. It sits on top of the components layer and transforms variables into values targeting specific use cases called presets. Presets are ready-made ECL releases serving for different purposes and target audiences.

Most of the old v2 presets have been removed or modified:
| Preset | Modifications |
| - | - |
| ec-preset-full | preset removed (not used anymore) |
| ec-preset-website | preset removed (replaced by an optional "reset" css) |
| ec-preset-legacy | preset removed (no legacy content) |
| ec-preset-legacy-website | preset removed (no legacy content) |
| ec-editor | preset removed (replaced by an optional "default" css) |
| eu-preset-full | preset removed (not used anymore) |
| eu-preset-website | preset removed (replaced by an optional "reset" css) |
| eu-preset-legacy | preset removed (no legacy content) |
| eu-preset-legacy-website | preset removed (no legacy content) |
| eu-editor | preset removed (replaced by an optional "default" css) |

### HTML tag styling

An optional CSS has been added to allow basic styling of some HTML tags. Please refer to the corresponding documentation (docs/decisions/006-html-tag-style) and website page (utilities/HTML tag styling) for more information

## System and structure modifications

### Requirements

ECL has always been using the LTS version of Node.js. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

### Packages

All npm packages are under [`@ecl`](https://www.npmjs.com/org/ecl) organization. In most cases, system-specific prefixes have been removed.

- **SCSS packages** have the following change in pattern:
  `@ecl/(ec|eu)-component-{component_name}` has become `@ecl/vanilla-component-{component_name}`.

Example: `@ecl/ec-component-accordion` => `@ecl/vanilla-component-accordion`

- **Twig packages** have been migrated from [ecl-twig](https://github.com/ec-europa/ecl-twig) repository to [europa-component-library](https://github.com/ec-europa/europa-component-library). They have the following change in pattern:
  `@ecl-twig/(ec|eu)-component-{component_name}` has become `@ecl/twig-component-{component_name}`.

Example: `@ecl-twig/ec-component-accordion` => `@ecl/twig-component-accordion`

- **Resources packages** have the following change in pattern:
  `@ecl/(ec|eu)-resources-{resource_name}` has become `@ecl/resources-(ec|eu)-{resource_name}`

Example: `@ecl/ec-resources-logo` => `@ecl/resources-ec-logo`

### File structure

- The `ecl-` prefix has been removed from twig template files:
  `ecl-{component_name}` has become `{component_name}`

Example: `ecl-accordion.html.twig` => `accordion.html.twig`

The following packages have been re-organized:

- `@ecl/(ec|eu)-design-tokens` has been removed
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

### SCSS parsing and rendering

This section is relevant for ECL users who use raw resources and compile/bundle assets on their end. If you are not using the ready-made ECL releases from Github or npm and you are not using `ecl-builder` as your bundler, please read the following paragraphs.

ECL v2 and prior versions have been using `node-sass`, whereas ECL v3 uses [dart-sass](https://sass-lang.com/dart-sass). This migration allows for more efficient SCSS development practices while preserving the quality of the bundled CSS.

Here's a list of changes to apply in your project to follow up with ECL v3 SCSS approach:

- Remove [node-sass](https://www.npmjs.com/package/node-sass) package and install [`sass`](https://www.npmjs.com/package/sass).
- Convert `import` statements to [`use` statements](https://sass-lang.com/documentation/at-rules/use) in order to benefit from a module system protecting against many scope issues.
- Remove usages of [`import-once()` mixin](https://github.com/ec-europa/europa-component-library/blob/6068cca85e387741556239826792ca27520fcf69/src/systems/ec/implementations/vanilla/packages/ec-base/mixins/_import-once.scss). This utility is not needed any more because of the module system.
- ECL global variables are no longer available. Values for `$ecl-color-grey-5` are now accessible through a theming layer. In the most generalized way: import the main theme file `@use '@ecl/theme-dev/theme'` and access values through the corresponding map `map.get(theme.$color, 'grey-5')`.
- Update input options for sass compiler or rendering function. Pass `getsystem()` function from [`functions`](https://sass-lang.com/documentation/js-api#functions) parameter. Some SCSS files in ECL will depend on this function to get system-specific context. `ecl-builder` uses `@ecl/builder/utils/getSystem`.

## Js bundle

- ECL uses Pikaday for the datepicker component. Pikaday dynamically requires moment.js which messes up JS bundling.
- ECL does not want to include moment.js in its release in order to reduce the final bundle size.
- Instruct minifier to preserve the UMD locally scoped 'moment' (default Pikaday module) variable in Pikaday in order to correctly reference the global 'moment' included separately from the ECL library bundle.
- When Pikaday really removes moment from its dependencies and does not load it dynamically, bundlers such as rollup will be able to handle this more gracefully.
- @see https://github.com/Pikaday/Pikaday/issues/815

## Coming soon

- social media icons updates
