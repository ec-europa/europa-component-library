# ECL v4 migration notes

The following guidelines aim to facilitate migration between ECL v3 to v4.

- [Js modifications](#js-modifications)
- [Style modifications](#style-modifications)
- [Component modifications](#component-modifications)

## Js modifications

- The ECL javascript is not bundling anymore `pikaday`, therefore this library needs to be loaded by the project using ECL, it is only
  needed when a `datepicker` instance is present in the page.
- There is no hard dependency on `moment.js` anymore, this library is only needed when customising the default format for the dates, the default
  in ECL is `DD-MM-YYYY`. If the format is customised but moment is not loaded there will not be errors in the console but the chosen format would not be consistently shown.

## Style modifications

- The main ecl css is not including the ecl utilities anymore. Those are available in a separate css file named `ecl-{ec/eu}-utilities.css` in the `styles/optional` folder.

### Colors

Semantic colors have been introduced; they were already defined in v3 but not used.

All EC and EU components would rely on these semantic colors, to allow easy color swap where needed.

If there are custom styles or components, they should be updated to use one of the semantic color wherever applicable

Semantic colors:

- Primary
- Secondary
- Dark
- Info
- Success
- Warning
- Error
- Background
- Branding: used mostly in very visual elements (EC footer and page header for instance); could be set to primary color if needed

Most of these semantic colors are also defined in different tint, to cover extra needs (mouse hover, focus, ...).
The naming convention is as follow:

- main color uses `color-100`, or just `color`. Ex: primary-100, dark
- lighter colors use smaller numbers. Ex: primary-80, dark-20
- darker colors use larger numbers. Ex: primary-120, dark-140

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

### Banner

- The picture and the banner credit are now wrapper in a container `ecl-banner__picture-container` to handle the new position of the credit text.
- Three variants only: `plain-background`, `text-overlay` (replacing text-hightlight) and `text-box`, the `image-overlay` one doesn't exist anymore.
- Default display is now left, instead of centered. If you wish to have the banner centered, set the `centered` parameter to true

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
- It is now possible to pass multiple icons to the button, the same way it happens for the link, an array of objects of type icon will be rendered as a list of icons one after the other.

### Carousel

- Buttons for carousel pagination are now placed differently, and use Button `ghost`

### Checkbox

- In the single checkbox use case, when required, a mark is expected also in the checkbox label, this can be provided by passing a `required_text` prop in the checkbox item object.

### Content item

- New variant `ecl-content-item__picture--top` added to put the image on top. It requires to also add class `ecl-content-item--stack` to the root element of the component

### Expandable

- Button is now using variant `ghost`, instead of `secondary`

### Fact and figures

- Icon size is now `l` instead of `m`

### Featured item

- Variant `extended` has been renamed `highlight` to be consistent with other components

### File

- File title can now be also a link, the intended usage of this is limited to the case when the href is set to a webpage, please avoid duplicating
  this link and the one in the download button, they should be used alternatively.

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

### Inpage navigation

- Icon size is different in EC and EU, a new parameter `icon_size` is available in the template and set to the EC default (`xs`), in EU it should be set to `s`, instead.

### Links

- `Negative` links have been renamed `inverted`, to be consistent with other components. This concern the css class, and the twig parameter.
- Classes `ecl-link--icon-before` and `ecl-link--icon-after` are no longer needed for the icon; position is detected using CSS. Class `ecl-link--icon` is still needed.
- New variant added to handle link with icon only: `ecl-link--icon-only`. By using it, it is no longer needed to add utility classes on the link label. If you are using the twig template, this variant relies on the parameter `hide_label`
  Note: even with this variant, it is still mandatory to provide a label for the link, for screen readers. It is just not displayed.

### Lists

#### Unordered list and Ordered list

- the same variants are now available in both components `no-marker, divider`
- the `no-bullets` variant is renamed in `no-marker` since it deals now with different symbols.

#### Description list

- Lists with links, regardless of the type, always expect the `ecl-link--standalone` class to prevent the underlining.

### Menu

- Close button updated:
  - `close` twig parameter now expect an ECL Button structure, instead of a string
  - Icon is now different between EC and EU: `close` for EC, `close-filled` for EU.
  - Icon size is different (`m` for EC, `s` for EU). This has to be passed as data.
  - Button label is hidden on EC
- Toggle link updated (mobile):
  - New twig parameter `toggle` added. It expects an ECL Link structure
  - Twig parameter `menu_link` removed, as it is now part of this structure
  - Icon size is different (`m` for EC, `s` for EU). This has to be passed as data.
- `back` twig paramter has been renamed to `back_label`, to avoid confusion
- New link added on mobile to improve navigation: `see all`. Corresponding twig parameter is `see_all_label`
- Menu link are now using the Link twig template directly, with `standalone` variant
- Menu buttons are now using the Button twig template directly, with the `ghost` variant

### Message

- Message component has been renamed to `Notification`. This includes the related CSS classes, and javascript
- Icon for the close button is now different between EC and EU: `close` for EC, `close-filled` for EU. Icon size is also different (`m` for EC, `s` for EU)
- Close button label is hidden on EC

### Modal

- Close button updated:
  - new `close` twig parameter, expecting an ECL Button structure. It replaces the `close-label` parameter
  - Icon is now different between EC and EU: `close` for EC, `close-filled` for EU.
  - Icon size is different (`m` for EC, `s` for EU). This has to be passed as data.

### Navigation list

- `border` parameter has been moved to the parent template and then passed to the single items template, so it is set at once for all the items and it's now by default set to `true`.

### Page header

- Twig parameter `variant` has been removed, with the corresponding CSS classes. It was only used in EC Core page header. There is no more differences between Core, Standardised and Harmonised.
- Wrapper `ecl-page-header__title-container` has been removed

### Pagination

- A new `type` has been introduced, `truncation` can be used to add a placeholder with no link to represent some skipped items.
- In EC the previous and next links are icon only links, in order to get the expected look and feel set the `item.link.link.hide_label` parameter to `true`.

### Rating field

- Size of the icon is now `l` instead of `m`, it is resized in desktop viewports via css.

### Search form

- Icon in the search button is now placed before the label
- Search button is now using existing variant of the button; it was previously using class `ecl-button--search`, which has no definition.
  Please note that EC search form uses ghost button, while EU button uses primary button

### Select

- Both "variants" are now using javascript. For the single and multiple select a selector `ecl-select--active` is toggled in order to apply a transformation to the toggle icon.
- The markup for the dropdwon toggle has changed, it is now a ghost button, not focusable.
- A default label is provided for this button (although hidden via css), you're invited to customise it to your specific needs, the parameter name is `toggle_label`.
- Icon size is now different in EC and EU, `xs` for EC and `s` for EU. A parameter named `icon_size` is expected in the input object to set this. The icon in the multiple select is handled via js so it is not necessary to manage that through the data passed to the template.

### Site footer

- Links in EC site footer are now using links with the parameter `inverted`, instead of defining custom CSS.

### Spinner

- For consistency, possible sizes have been renamed `s`, `m` and `l`, instead of `small`, `medium` and `large`. Corresponding css classes have been renamed.
- Order of elements in the markup has been changed

### Site header

- Twig parameter `message` has been renamed to `notification`
- CSS class `ecl-site-header__message` has been renamed to `ecl-site-header__notification`
- Icon for the close button is now different between EC and EU: `close` for EC, `close-filled` for EU. Icon size is also different (`m` for EC, `s` for EU)
- Twig parameter `close_label` has been removed and replaced by a new one: `close`. It expect an ECL Button
- A container is added as first child of the root element of the component, with this class: `ecl-site-header__background`, it is needed in EC to handle the background image.

### Social media follow

- Icon size is different (`xs` for EC, `m` for EU). This has to be passed as data.
- The link "Other social media networks" is no longer a popover. This is now a standard link, leading to a dedicated page, and added after the other links. Corresponding twig parameter `popover` has been removed
- Icon `share` and its variants has been removed from the social media icons. It has been replaced by a new icon `chain`

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

### Tabs

- Button for "more" is now a `ghost` button, and icon is now size `s`
- A container has been added for the dropdown list

### Tag

- Icon used in removable tag is now `close-outline`

## Custom theme

ECL4 introduces new ways to customize the look and feel of elements, by changing styles and component display

### How to create a custom theme

[To be done]

### How to customize styles

#### Using SASS variables

[to be done]

#### Using CSS variables

CSS variables are provided for some styles values.
You can find the full list of global CSS variables at the end of the file `src/themes/[your_theme]/_variables.scss`.

Variables provided:

- colors
- spacing
- typgraphy
- shadow

By default, these variables take values from the SASS variables. You can freely override them in a custom CSS file loaded after ECL one.

Note: we are using shorter aliases internally to limit the size of the compiled css file, but it is recommended to use the full variable name if you want to override them

### How to customize component display

[WIP]

Every component is now exposing a set of variables, managing different aspect of their display. These variables can be overriden to alter the look and feel of the component, by picking values defined in the styles.

There are two ways to customize values related to the components:

#### Using SASS variables

SASS variables are defined in the file `src/themes/[your_theme]/_variables.scss`. There are two theme available by default (EC and EU), which could act as example.

You can edit them in your custom theme, and recompile ECL css by running the command `yarn dist` at the root of the project. The compiled files are available in `/dist/packages/[your_theme]`

#### Using CSS variables

[To be done]
