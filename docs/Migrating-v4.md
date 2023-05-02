# ECL v4 migration notes

The following guidelines aim to facilitate migration between ECL v3 to v4.

- [Style modifications](#style-modifications)

## Style modifications

Global note: Most of the changes here concern EC styles. EU styles remains globally the same.

### Colors

Semantic colors have been introduced; they were already defined in v3 but not used.

All components would rely on these semantic colors, to allow easy color swap where needed.

If there are custom styles or components, they should be updated to use one of the semantic color wherever applicable

Semantic colors:

- Primary
- Secondary
- Dark
- Success
- Warning
- Error
- Background

Apart from that, some static have been introduced for very specific cases

- Branding: used only in EC footer and page header; could be set to primary color if needed

### Typography

No more categories of font for EC (normal, with standard line height, and prolonged, with bigger line height). Now all the font are using the same scale

### Shadows

Elevation scale has been updated for EC, to allow more felxibility. Instead of elevation 1 to 4, it now uses the real depth of it. It affects mostly the shadow utilites.

Corresponding list (v3 -> v4):

- .ecl-u-shadow-1 -> .ecl-u-shadow-1 (not changed)
- .ecl-u-shadow-2 -> .ecl-u-shadow-6
- .ecl-u-shadow-3 -> .ecl-u-shadow-12
- .ecl-u-shadow-4 -> .ecl-u-shadow-16

Inner and negative shadows are also not part of EC styles anymore.

### Spacing

TBD
