# ECL v4 migration notes

The following guidelines aim to facilitate migration between ECL v3 to v4.

- [Style modifications](#style-modifications)

## Style modifications

### Colors

Semantic colors have been introduced; they were already defined in v3 but not used.

All EC and EU components would rely on these semantic colors, to allow easy color swap where needed.

If there are custom styles or components, they should be updated to use one of the semantic color wherever applicable

Semantic colors:

- Primary
- Secondary
- Dark
- Success
- Warning
- Error
- Background
- Branding: used only in EC footer and page header; could be set to primary color if needed

Most of these semantic colors are also defined in different tint, to cover extra needs (mouse hover, focus, ...).
The naming convention is as follow:

- lighter tint uses `color-X`. Ex: primary-10, dark-20
- darker tint uses `colorX`. Ex: primary10, dark20

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

### Accordion

- The icon size is now different in the two systems, the twig template sets it by default to `xs` which is the value for EC, it needs to be
  overridden by the data provided when working with the EU theme to `m`.

- A selector `ecl-accordion__item--active` is now added via our vanilla js to mark the latest item the user interacted with.

### Breadcrumb

- Font size of the separator icon is now `fluid` for both EC and EU, so it will automatically adjust based on the font size
- Icon rotation is now handled in CSS as it depends on the context, so no need to use icon variant anymore for that (`ecl-icon--rotate-90`)
- All EC breadcrumb now share the same display; there is no longer a specific variant for EC Core (previously called `negative`). Corresponding parameter and css classes have been removed

### Button

- Classes `ecl-button__icon--before` and `ecl-button__icon--after` are no longer needed for the icon; position is detected using CSS.
- To keep consistency, CSS class for call to action button has been renamed from `ecl-button--call` to `ecl-button--cta`
- `ghost`button is now called like that everywhere (it was sometimes called `text` previously). CSS classes haven't been modified
- New variant added to handle button with icon only: `ecl-button--icon-only`. By using it, it is no longer needed to add utility classes on the button label. If you are using the twig template, this variant relies on the already existing parameter `hide_label`
  Note: even with this variant, it is still mandatory to provide a label for the button, for screen readers. It is just not displayed.

### Form group

- Icon for invalid form input has been reduced on EC (`s` instead of `m`)

- form-group.html.twig template has been added. Form elements can now be rendered through it by passing an input named object with the same
  properties of the ECL v3 form elements and an additional input_type that can be `text`, `checkbox`, `radio`, `datepicker`, `select`, `file`, `textarea`, `range`, `rating-field`.

EX: `{% include '@ecl/form-group/form-group.html.twig' with { 
  label: 'my file upload label', 
  helper_text: 'this is a helper text', 
  invalid_text: 'this is an invalid text', 
  required_text: '*', 
  required: true,
  optional_text: 'this is an optional text', 
  input: {
    input_type: file,
    multiple: false, 
    button_choose_label: "Choose file", 
    button_replace_label: "Replace file",
  } only %}`

- It is also possible to include directly the form elements templates to only render the input field, but in that case it's responsibility of the
  implementation to ensure that the accessibility is not compromised.

- The vanilla package defining the styles for the form group elements is now named `@ecl/vanilla-component-form-group` and the scss contained in it are `_form-group.scss`
  and `form-group-print.scss`

### Links

- `Negative` links have been renamed `inverted`, to be consistent with other components. This concern the css class, and the twig parameter.
- Classes `ecl-link--icon-before` and `ecl-link--icon-after` are no longer needed for the icon; position is detected using CSS. Class `ecl-link--icon` is still needed.

### Lists

#### Unordered list and Ordered list

- the same variants are now available in both components `no-marker, divider`
- the `no-bullets` variant is renamed in `no-marker` since it deals now with different symbols.

### Message

- Message component has been renamed to `Notification`. This includes the related CSS classes, and javascript
- Icon for the close button is now different between EC and EU: `close` for EC, `close-filled` for EU. Button label is also hidden on EC.

### Search form

- Icon in the search button is now placed before the label
- Search button is now using existing variant of the button; it was previously using class `ecl-button--search`, which has no definition.
  Please note that EC search form uses ghost button, while EU button uses primary button

### Site footer

- Links in EC site footer are now using links with the parameter `inverted`, instead of defining custom CSS.

### Spinner

- For consistency, possible sizes have been renamed `s`, `m` and `l`, instead of `small`, `medium` and `large`. Corresponding css classes have been renamed.
- Order of elements in the markup has been changed

### Site header

- Twig parameter `message` has been renamed to `notification`
- CSS class `ecl-site-header__message` has been renamed to `ecl-site-header__notification`

### Table

- In order to properly support the row extra_classes and extra_attributes the data structure is now changed and it expects a `data` named object containing all the table cells belonging to that row.
  Classes and attributes for the single row can now be set inside the row object, like this:
  `rows: [
  {
    data: [
      {
        label: 'Administators in Competition Law',
        'data-ecl-table-header': 'Job title',
      },
      {
        label: 'AD7',
        'data-ecl-table-header': 'EFSI finance approved by EIB',
      },
      extra_classes: 'row-extra-class',
      extra_attributes: [{ name: 'custom-attr', value: 'custom-value'}],
    ],
  },
  ...
]`

## Custom theme

ECL4 introduces new ways to customize the look and feel of elements, by changing styles and component display

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
