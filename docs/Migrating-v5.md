# ECL v5 migration notes

The following guidelines aim to facilitate the migration from ECL v4 to v5.

- [Style modifications](#style-modifications)
- [Component modifications](#component-modifications)
- [Js modifications](#js-modifications)
- [Packages modifications](#packages-modifications)

## Style modifications

Color definition and usage have greately changed for ECL5, with the introduction of color modes in EC.

Typography has also changed quite drastically in EC.

### Grid

- A new breakpoint has been added, it is labelled XXL and it is set at 1368px.
  All the responsive utilities have been updated to include also the new breakpoint.
- Main container width has been updated on large breakpoints; now it uses available sace more efficiently
- Grid gutters are now changing based on the breakpoints

### [EC] Color scales

Main semantic colors (primary, secondary) are still present, but now use a new unified scale, going from `[color]-25` to `[color]-950`. Color values have also been changed.
Dark and neutral colors have been merged into a single palette: `neutral`.

A few palettes are also provided for grey colors: `grey`, `grey-alpha` and ` monochrome`.

### [EC] Color modes

A color mode is a set of color, applied to different elements, and giving a distinct identity to a specific page or site. Currently the color modes are used only on EC.

Every color mode is defined in a new file, called `ecl-ec-color-modes.css`. If this file is omitted, the default EC display is used.

Components can use one mode or another by adding a css class to its root. Css class name is `ecl-color-mode--[color mode name]`. A twig parameter called `color_mode` is also provided for components taking benefits of it (not all the components are affected by color modes).

How it works:

- several colors are defined to be part of the color modes, via the use of new css proporties. It includes background (surface), content (on surface) and borders
- some components have a new parameter `color-mode` to switch from one color mode to the other, and are using these new css color mode properties where needed, with a fallback to previously defined color
- EC css defines a default value for these color mode properties; EU does not use color mode currently, and so relies on the fallback
- the new color modes css simply override the value of some properties

Here is the list of variables used in the color modes:
| Name | CSS custom property | Utilities |
| ---------------------- | --------------------------- | ------------------------ |
| surface lowest | --cm-surface-lowest | _-surface-lowest |
| surface lowest variant | --cm-surface-lowest-variant | _-surface-lowest-variant |
| surface low 1 | --cm-surface-low-1 | _-surface-low-1 |
| surface low 2 | --cm-surface-low-2 | _-surface-low-2 |
| surface medium | --cm-surface-medium | _-surface-medium |
| surface | --cm-surface | _-surface |
| surface-high | --cm-surface-high | _-surface-high |
| surface variant 1 | --cm-surface-variant-1 | _-surface-variant-1 |
| surface variant 2 | --cm-surface-variant-2 | _-surface-variant-2 |
| on surface | --cm-on-surface | _-on-surface |
| on surface variant 1 | --cm-on-surface-variant-1 | _-on-surface-variant-1 |
| on surface variant 2 | --cm-on-surface-variant-2 | _-on-surface-variant-2 |
| on surface highlight | --cm-on-surface-highlight | _-on-surface-highlight |
| on surface swap 1 | --cm-on-surface-swap-1 | _-on-surface-swap-1 |
| on surface swap-2 | --cm-on-surface-swap-2 | _-on-surface-swap-2 |
| border low | --cm-border-low | _-border-low |
| border | --cm-border | \_-border |

### [EC] Typography

Font family and scales have changed. The new font (Inter) is quite similar to Arial, but offers more flexibility.

Font size now goes from `10xl` to `2xs`, line height goes from `10xl` to `3xs`.

**Important note**: default font size (`m`) is now 18px/1.125rem, instead of 16px/1rem. It makes all content displayed larger.

There are now 9 levels of font weight, from `thin` to `black`.

A new very large typography has been added, called `display`.

Font variant have been updated too. The variant `font-ui`, previously used to have larger line height, has been removed.

Corresponding css properties and utilities have been updated accordingly:

- paragraph utilities now use the new font scale, and go from `ecl-u-type-paragraph-xs` to `ecl-u-type-paragraph-2xl` (previously existing utilities like `ecl-u-type-paragraph-lead` are still valid)
- css properties are available to handle font-size and line-height directly

### [EC] Shadows

EC shadows name have been updated to follow a more easy to read scale. This affect utilities and css properties, as they are now using the new names.

Here are ECL 5 shadows, and the mapping with ECL 4.
| ECL 5 | ECL 4 |
| -------------- | ---------------- |
| ecl-u-shadow-1 | ecl-u-shadow-1 |
| ecl-u-shadow-2 | ecl-u-shadow-6 |
| ecl-u-shadow-3 | ecl-u-shadow-12 |
| ecl-u-shadow-4 | ecl-u-shadow-16 |
| ecl-u-shadow-5 | / (new in ECL 5) |

EU shadows have not been modified (name and value).

### [EC] Spacing

The scale has been extended in EC, it now has all these values: `5xs`, `4xs`, `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`, `10xl`

The primary values used for spacing have largely remained unchanged: `m` is still `16px`, `s` is `12px`, and `l` is `20px`."

### Utilities

Utilities have been added for the color modes. They are available for background, border and typography.

Here are a few examples:

- `ecl-u-bg-surface`
- `ecl-u-border-color-border-low`

Other modification for the utilities:

- `ecl-u-border-radius-1` has been removed, as it was barely visible

### Right to left

The way ECL handles right to left has been updated. Previously, we were delivering an optional css for that, now the corresponding css has been integrated directly in the components.

To have the correct right to left display, you should make sure that the html `dir` attribute is correctly set on the page (it could be on the `html` or `body` tag for instance).

If not specificed, the default reading direction remains left to right.

## Component modifications

### Accordion

Markup of accordion title has been updated to use a simple div instead of a heading.

Corresponding twig parameter `level` has been removed.

A selector has been added to the first item `.is-first` and to the last item `.is-last` of the accordion, the css is now expecting those classes instead of relying on the order of the sibling items in the markup.

### Banner

- Aspect ratio of the banner is now fixed for mobile and tablet. Note that it is a different aspect ratio than desktop banners.
  Desktop banners are unchanged in terms of aspect ratio: **Mobile: 3/2, Tablet: 3/1**
- Additional font size avaiable for banners, now offering three values: `s`, `m` and `l`

### Breadcrumb

- Breadcrumb links are no longer using the "no-visited" variant (class `ecl-link--no-visited`)

### Button

- Button variant have been updated, to be more flexible. Available variants are `primary`, `secondary`, `tertiary`
- On top of the variants different styles are available: `highlight`, `neutral` and `inverted`

Depending on your usage, you may have to update the button classes to match the new ones.

Here is the mapping to the new variant / style:

- primary -> primary
- secondary -> secondary
- tertiary -> tertiary / neutral
- cta -> primary / highlight
- ghost -> tertiary
- ghost-inverted -> tertiary / inverted

### Card

- New parameter `secondary_meta_direction` to change orientation of secondary meta (default vertical)

### Checkbox

- To keep the helper and invalid text accessible, they are duplicated into the `legend` tag, but kept hidden on screen

### Content block

- The `data-ecl-title-link` attribute used by the js script to identify titles containing links has been moved from the `div.content-block__title` to the link element itself.
- New parameter `secondary_meta_direction` to change orientation of secondary meta (default vertical)

### Content item

- New parameter `secondary_meta_direction` to change orientation of secondary meta (default vertical)

### Datepicker

ECL v5 uses [duet datepicker](https://duetds.github.io/date-picker/) which replaces the previous implementation using pikaday. Therefore the pikaday script needs to be replaced by:

`<script type="module" src="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.esm.js"></script>`
or
`<script nomodule src="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.js"></script>`

The markup is now using the custom element defined by duet js:
`<div class="ecl-datepicker" data-ecl-auto-init="Datepicker" data-ecl-datepicker-toggle=""><duet-date-picker identifier="example-input-id-1" /></div>`

- Short months: The select to choose the month is now showing options using abbreviations for the month names, the default ones in english are provided by the ecl datepicker's js, the name of the option is `monthNamesShort`.

### Fact & figures

- A selector is added to the first item in the list, `.is-first`.
- The selector used to reduce the font-size has changed, it's `.ecl-fact-figures__item--font-m` now and it's applied to each item instead of the root element.

### Featured item

- Variant `simple` has been removed (deprecated in v4)
- Featured item footer has been removed, as it is no longer in use.
- Markup has been simplified: now it reflects the real element orders, and extra container `ecl-featured-item__title-content` has been removed
- New parameter `link-highlighted` to have a different display for the link
- New parameter `id` to provide a unique id for the element. It is used in aria attributes. Set to a random string by default.

### Form

- Icon for the invalid text has been changed to the outline one
- The label for required fields has been made more explicit ("required" instead of "\*"), so unless a custom label is used, it is no longer needed to provide an aria-label for it. Demo example have been updated in that sense. The parameter is still available in twig template, but left empy by default.

### Icon

ECL is no longer providing the icons directly: they are now hosted and distributed centrally by Webtools.
Please make sure to check the documentation, as addition configuration or files may be needed to make the icons work.

Here is the official documentation: https://webtools.europa.eu/showcase/demo/?comp=icons&section=about&demo=how_to_use

Twig templates have been updated to deliver the new markup for the icon, so this is mostly transparent, except for a few new parameters:

- `family`, to specify the icon family when needed (social media and flags currently)
- `style`, if the icon has to be displayed in a specific style (primary, inverted, ...). This is only used for social media currently

If you don't use the templates, this would have to be done manually:

- keep the existing ECL classes, and append the Webtools classes (name, family, style). Pay extra attention to the social networks and flags, needing a family and possibly a style

  Examples:
  - `ecl-icon ecl-icon--s ecl-icon--plus ecl-accordion__toggle-icon` (v4) should become `wt-icon--plus ecl-icon ecl-icon--s ecl-icon--plus ecl-accordion__toggle-icon`
    - `ecl-icon ecl-icon--m ecl-icon--facebook-inverted` (v4) should become `wt-icon-networks--facebook wt-icon--inverted ecl-icon ecl-icon--m ecl-icon--facebook`

- extra title and description should be passed in `data-title` and `data-desc` respectively

As the data structure of icons is slightly different on Webtools, here are a few extra steps:

- in the site footer, icon names have been changed for the social media icons: the icon family and style have to be passed as data.
  For instance, `instagram-inverted` (v4) is now `instagram`, with family `networks` and style `inverted`
- Twitter and X now are 2 different icons. So whenever you were using `twitter` icon, it has to be changed to `x`

Extra attention points:

- flags are now names with the country code istead of the full name (`be` instead of `belgium`)
- flags squared are no longer available

### Link

- following the button updates, type `cta` has ben renamed to `primary-highlight`
- variant `ecl-link--no-visited` has been removed (it was marked as deprecated). Visited links have the same color as default link in ECL 5

### List with illustration

Two new variants have been added:

- icon list (twig param: `icon_list`)
- number list (twig param: `number_list`)

For the number list additional parameter are available:

- `counter_reset` (default: true) Resets the counter of the list
- `counter_start` (default: 0) Starting number of the counter when counter_reset is true

These variants are supposed to be used with a description only and in a layout with a single column or two columns maximum

An additional param has been added to place the icon on the left and not on top:

- `icon_inline`
  This cannot be used in combnation with the `centered` variant

### Mega menu

The featured panel has changed in order to present a list of elements including images, description, links with images only, textual links instead of an img and then a list of links.
A new template has been added in the `@ecl/mega-menu` package, it's named: `ecl-mega-menu-featured-item.html.twig`
The expected data for the featured panel looks like this:

`...
featured: {
	title: 'Featured items',
	// This is for an image that links without a label (alt text is mandatory)
	items: [
	  {
	    path: exampleLink,
	    picture: {
	      img: {
	        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
	        alt: 'Jean Monnet banner',
	      },
	    },
	  },
	  // This is for a textual link
	  {
	    path: exampleLink,
	    label: "this is a textual link"
	  },
	  // This is just an image
	  {
	    picture: {
	      img: {
	        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
	      },
	    },
	  },
	],
}`

The image will be clickable and will act as the associated link.

It is now possible to highlight a menu link (first level) associated to a special event or page passing the "promotional" paramter as part of the item's data.
The related styles can be customized defining:
--ecl-mega-menu-item-promotional-bg
--ecl-mega-menu-item-promotional-hover-bg
--ecl-mega-menu-item-promotional-focus-bg
--ecl-mega-menu-item-promotional-outline-color
--ecl-mega-menu-item-promotional-text-color
--ecl-mega-menu-item-promotional-hover-text-color
--ecl-mega-menu-item-promotional-focus-text-color

The featured panel can now be associated also to the first level items, it will be visible in all the children as long as they don't have a featured panel on their own, by default the one belonging to the clicked item will be shown.
A parameter has been added in the twig template `featured_priority` so that this behavior can be changed and always show the panel from the first level item, the default value is `secondary`, it can be changed to `primary`.

The menu can be used to show a single level list of sub items in a multi column layout, a parameter has been added `one_level_only` at the item level to optionally choose this display, the default is still to display the sub-items in a single column.
It can be used with or without an info or a featured panel, it goes up to 4 columns when it's the only content of the dropdown.

### Notification

The default notifications now use the outline version of the icons, instead of the filled one. It is still possible to use any icon if needed; the default one are set in the template.

### Page header

- Meta now support a structure { label , icon } in addition to the existing string
- Deprecated overlay on the image has been removed

### Radio

- To be consistent with checkboxes, css class `ecl-radio--invalid` is added at the root of the component, when the radio is not correctly selected.
- To keep the helper and invalid text accessible, they are duplicated into the `legend` tag, but kept hidden on screen

### Range

- To improve the component and be able to correctly position the bubble when used in a container (with position relative), a wrapper has been added and the js has been updated to calculate the position of the bubble based on a selector passed as an option `containerSelector`, by default it is `data-ecl-range-container`.

### Site header

New twig parameter added to hide the site name on desktop (still visible on mobile), with a corresponding css class `ecl-site-header__site-name--mobile-only`

### Social media follow

- additional option to display the description inline with the links. Corresponding twig parameter: `description_inline`

### Social media share

This element is managed by Webtools, and has been removed from ECL showcase

### Site footer

Site footer EC has been completely revamped to accomodate new design (markup, css and data structure):

- sections are now clearly identified
- social media links are using the Social Media Follow component
- data structure is less complex to use and maintain
  See the component documentation and examples for more information

EU footer hasn't changed, but is now using its own template file

### Table

- parameter for aria label, in the sorting table (`label_sort`) has been split into `label_sort_ascending`, `label_sort_descending` and `label_sort_default`. It translates to `data-ecl-table-sort-label-asc`, `data-ecl-table-sort-label-desc` and `data-ecl-table-sort-label-default` in the markup. Current `label_sort` is used as fallback if the new elements are not provided.

### Timeline

- new section available to add headline (larger first item). Corresponding twig parameter is `headline`
- new way to group multiple timeline, in a timeline set. This is a separated template, just using an array of timelines.

## Js modifications

## Packages modifications

The number of the distributed npm packages has been drastically reduced in ECL v5 by merging the ones defining the components into a single package containing scss, js and the twig template.
The naming of those packages has been then simplified using only the name of the component still in the @ecl namespace.
Ex: `@ecl/button`, `@ecl/gallery`, `@ecl/site-header`

In ECL v5 the twig templates can be retrieved all at once in a single package named `@ecl/twig-templates`, it contains the templates inside the respective component's folder to be compatible with the way ECL includes its own templates.

Other packages have been kept as they are in v4, icons and logos are in the form of @ecl/resources-{name of the resource}, the presets are also unchanged, `@ecl/preset-ec` and `@ecl/preset-eu`
