# ECL v4 migration notes

The following guidelines aim to facilitate migration between ECL v3 to v4.

- [Style modifications](#style-modifications)

## Style modifications

Global note: Most of the changes here concern EC styles. EU styles remains globally the same.

### Colors

Semantic colors have been introduced; they were already defined in v3 but not used.

All EC components would rely on these semantic colors, to allow easy color swap where needed.

If there are custom styles or components, they should be updated to use one of the semantic color wherever applicable

Semantic colors:

- Primary
- Secondary
- Dark
- Success
- Warning
- Error
- Background

Apart from that, some static colors have been introduced for very specific cases

- Branding: used only in EC footer and page header; could be set to primary color if needed

### Typography

No more categories of font for EC (normal - with standard line height, and prolonged - with bigger line height). Now all the font are using the same scale

### Shadows

Elevation scale has been updated for EC, to allow more flexibility. Instead of elevation 1 to 4, it now uses the real depth of it. It affects mostly the shadow utilites.

Corresponding list (v3 -> v4):

```
.ecl-u-shadow-1 -> .ecl-u-shadow-1 (not changed)
.ecl-u-shadow-2 -> .ecl-u-shadow-6
.ecl-u-shadow-3 -> .ecl-u-shadow-12
.ecl-u-shadow-4 -> .ecl-u-shadow-16
```

Inner and negative shadows are also not part of EC styles anymore.

### Spacing

Spacing scale has been enriched for EC, now going from 2XS to 6XL (previously 2XS to 4XL). Default value is still the same: spacing M is 1rem

## Component modifications

### Button

- Classes `ecl-button__icon--before` and `ecl-button__icon--after` are no longer needed for the icon; position is detected using CSS.
- To keep consistency, CSS class for call to action button has been renamed from `ecl-button--call` to `ecl-button--cta`
- `ghost`button is now called like that everywhere (it was sometimes called `text` previously). CSS classes haven't been modified
- Added documentation for button with icon only

### Links

- `Negative` links have been renamed `Inverted`, to be consistent with other components. This concern the css class, and the twig parameter.

## Custom theme

ECL4 introduces new ways to custommize the look and feel of elements, by changing styles and component display

### How to create a custom theme

[To be done]

### How to customize styles

#### Using SASS variables

[to be done]

#### Using CSS variables

CSS variables are provided for the semantic styles (mostly colors). You can find the full list of global CSS variables at the end of the file `src/themes/[your_theme]/_variables.scss`.

By default, these variables take values from the SASS variables. You can freely override them in a custom CSS file loaded after ECL one.

### How to customize component display

[WIP]

Every component is now exposing a set of variables, managing different aspect of their display. These variables can be overriden to alter the look and feel of the component, by picking values defined in the styles.

There are two ways to customize values related to the components:

#### Using SASS variables

SASS variables are defined in the file `src/themes/[your_theme]/_variables.scss`. There are two theme available by default (EC and EU), which could act as example.

You can edit them in your custom theme, and recompile ECL css by running the command `yarn dist` at the root of the project. The compiled files are available in `/dist/packages/[your_theme]`

#### Using CSS variables

[To be updated]

Each component exposes a set of CSS variables. By default, these variables are filled by the value coming from the SASS variable.

You can overrive one or more CSS variable by calling a custom CSS anywhere after the ECL one.

Example:

```
root: {
  --ecl-link-color: red;
  --ecl-link-color-hover: green;
}
```
