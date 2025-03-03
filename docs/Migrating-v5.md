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

A new breakpoint has been added, it is labelled XXL and it is set at 1368px.
All the responsive utilities have been updated to include also the new breakpoint.

### [EC] Color scales

Main semantic colors (primary, secondary) are still present, but now use a new unified scale, going from `[color]-50` to `[color]-900`. Color values have also been changed.
Dark and neutral colors have been merged into two new palettes: `neutral-dark` and `neutral-light`.

TODO

- update the components to use the new color properties instead of the v4 ones
- remove old colors
- update utilities
- update documentation

### [EC] Color modes

A color mode is a set of color, applied to different elements, and giving a distinct identity to a specific page or site. Currently the color modes are used only on EC.

Every color mode is defined in a new file, called `ecl-ec-color-modes.css`. If this file is omitted, the default EC display is used.

Components can use on mode or another by adding a css class to its root. Css class name is `ecl-color-mode--[color mode name]`. A twig parameter called `color_mode` is also provided for components taking benefits of it (not all the components are affected by color modes).

How it works:

- several colors are defined to be part of the color modes, via the use of new css proporties. It includes background (surface), content (on surface) and borders
- some components have a new parameter `color-mode` to switch from one color mode to the other, and are using these new css color mode properties where needed, with a fallback to previously defined color
- EC css defines a default value for these color mode properties; EU does not use color mode currently, and so relies on the fallback
- the new color modes css simply override the value of some properties

Here is the list of variables used in the color modes:
| Name | CSS custom property | Utilities |
| ---------------------- | --------------------------- | ------------------------ |
| surface | --cm-surface | _-surface |
| surface medium | --cm-surface-medium | _-surface-medium |
| surface low | --cm-surface-low | _-surface-low |
| surface lowest | --cm-surface-lowest | _-surface-lowest |
| surface lowest variant | --cm-surface-lowest-variant | _-surface-lowest-variant |
| on surface | --cm-on-surface | _-on-surface |
| on surface highlight | --cm-on-surface-highlight | _-on-surface-highlight |
| on surface variant 1 | --cm-on-surface-variant-1 | _-on-surface-variant-1 |
| on surface variant 2 | --cm-on-surface-variant-2 | _-on-surface-variant-2 |
| border | --cm-border | _-border |
| border medium | --cm-border-medium | _-border-medium |
| border medium low | --cm-border-low | _-border-low |

TODO

- when we have the default values for EU, add them to the EU css. The fallback in component could then be removed

### [EC] Typography

Font family and scales have changed. The new font (Inter) is quite similar to Arial, but offers more flexibility.

Font size and line height now goes from `10xl` to `xs`.

**Important note**: default font size (`m`) is now 18px/1.125rem, instead of 16px/1rem. It makes all content displayed larger.

There are now 9 levels of font weight, from `thin` to `black`.

A new very large typography has been added, called `display`.

Font variant have been updated too. The variant `font-ui`, previously used to have larger line height, has been removed.
Two new variants have been added:

- `condensed` (smaller letter-spacing)
- `extended` (larger letter-spacing)

Corresponding css properties and utilities have been updated accordingly:

- paragraph utilities now use the new font scale, and go from `ecl-u-type-paragraph-xs` to `ecl-u-type-paragraph-2xl` (previously existing utilities like `ecl-u-type-paragraph-lead` are still valid)
- new utilities for compact and extended fonts: `ecl-u-type-compact-[size]` and `ecl-u-type-extended-[size]`

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

### Utilities

Utilities have been added for the color modes. They are available for background, border and typography.

Here are a few examples:

- `ecl-u-bg-surface`
- `ecl-u-border-color-border-medium`

Other modification for the utilities:

- `ecl-u-border-radius-1` has been removed, as it was barely visible

## Component modifications

### Accordion

Markup of accordion title has been updated to use a simple div instead of a heading.

Corresponding twig parameter `level` has been removed.

### Featured item

- Featured item footer has been removed, as it is no longer in use.
- Markup has been simplified: now it reflects the real element orders, and extra container `ecl-featured-item__title-content` has been removed

### Mega menu

The featured panel has changed in order to present a list of image with an associated link, instead of an img and then a list of links.
So now the expected data for the featured panel looks like this:

`...
featured: {
	title: 'Featured items',
	items: [
	  {
	    label: 'Featured link 1',
	    path: exampleLink,
	    picture: {
	      img: {
	        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
	        alt: 'Jean Monnet banner',
	      },
	    },
	  },
	],
}`

The image will be clickable and will act as the associated link.

## Js modifications

## Packages modifications

The number of the distributed npm packages has been drastically reduced in ECL v5 by merging the ones defining the components into a single package containing scss, js and the twig template.
The naming of those packages has been then simplified using only the name of the component still in the @ecl namespace.
Ex: `@ecl/button`, `@ecl/gallery`, `@ecl/site-header`

In ECL v5 the twig templates can be retrieved all at once in a single package named `@ecl/twig-templates`, it contains the templates inside the respective component's folder to be compatible with the way ECL includes its own templates.

Other packages have been kept as they are in v4, icons and logos are in the form of @ecl/resources-{name of the resource}, the presets are also unchanged, `@ecl/preset-ec` and `@ecl/preset-eu`
