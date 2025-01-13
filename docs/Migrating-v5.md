# ECL v5 migration notes

The following guidelines aim to facilitate the migration from ECL v4 to v5.

- [Style modifications](#style-modifications)
- [Js modifications](#js-modifications)
- [Component modifications](#component-modifications)

## Style modifications

Color definition and usage have greately changed for ECL5, with the introduction of color modes.

### Color scales

Main semantic colors (primary, secondary) are still present, but now use a new unified scale, going from `[color]-50` to `[color]-900`. Color values have also been changed.
For instance, here is the comparison for primary color between v4 and v5:

v4:

- 'primary-20': #d8e0fb,
- 'primary-40': #b1c0f8,
- 'primary-60': #89a1f4,
- 'primary-80': #5577f0,
- 'primary-100': #3860ed,
- 'primary-120': #143fd9,
- 'primary-140': #0f2fa2,
- 'primary-160': #0a1f6c,
- 'primary-180': #051036,

v5:

- 'primary-50': #e6edff,
- 'primary-100': #d9e3ff,
- 'primary-200': #b0c6ff,
- 'primary-300': #8cacff,
- 'primary-400': #5987ff,
- 'primary-500': #0046ff,
- 'primary-600': #003fe6,
- 'primary-700': #0038cc,
- 'primary-800': #0035bf,
- 'primary-900': #002a99,

Mapping (v4 -> v5):

- 20 -> 100
- 40 -> 200
- 60 -> 300
- 80 -> 400
- 100 -> 500
- 120 -> 600
- 140 -> 700
- 160 -> 800
- 180 -> 900

Dark and neutral colors have been merged into two new palettes: `neutral-dark` and `neutral-light`.

### Color modes

A color mode is a set of color, applied to different elements, and giving a distinct identity to a specific page or site.

TODO

## Js modifications

## Component modifications
