# ECL v5 migration notes

The following guidelines aim to facilitate the migration from ECL v4 to v5.

- [Style modifications](#style-modifications)
- [Js modifications](#js-modifications)
- [Component modifications](#component-modifications)

## Style modifications

Color definition and usage have greately changed for ECL5, with the introduction of color modes.

### Color scales

Main semantic colors (primary, secondary) are still present, but now use a new unified scale, going from `[color]-50` to `[color]-900`. Color values have also been changed.
Dark and neutral colors have been merged into two new palettes: `neutral-dark` and `neutral-light`.

TODO

- provide mapping between v4 and v5 colors, if possible
- update the components to use the new color properties instead of the v4 ones
- remove old colors
- update utilities
- update documentation

### Color modes

A color mode is a set of color, applied to different elements, and giving a distinct identity to a specific page or site. Currently the color modes are used only on EC.

Every color mode is defined in a new file, called `ecl-ec-color-modes.css`. If this file is omitted, the default EC display is used.

Components can use on mode or another by adding a css class to its root. Css class name is `ecl-color-mode--[color mode name]`. A twig parameter called `color_mode` is also provided for components taking benefits of it (not all the components are affected by color modes).

How it works:

- several colors are defined to be part of the color modes, via the use of new css proporties. It includes background (surface), content (on surface) and borders
- some components have a new parameter `color-mode` to switch from one color mode to the other, and are using these new css color mode properties where needed, with a fallback to previously defined color
- EC css defines a default value for these color mode properties; EU does not use color mode currently, and so relies on the fallback
- the new color modes css simply override the value of some properties

TODO

- when we have the default values for EU, add them to the EU css. The fallback in component could then be removed

## Js modifications

## Component modifications
