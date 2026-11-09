# ECL Highlighted search component

npm package: `@ecl/highlighted-search`

```shell
npm install --save @ecl/highlighted-search
```

## Parameters

- **"id"** (string) (default: random) Unique id for the component
- **"color_mode"** (string) The color mode name
- **"background_color"** (string) (default: 'dark') Background color; can be 'dark', 'light'
- **"horizontal_alignment"** (string) (default: 'center') Content alignment (horizontal); can be 'center', 'left'
- **"full_width"** (boolean) (default: false) Full width highlighted search (inside the grid)
- **"title"** (string) (default: '') Title of highlighted search
- **"description"** (string) (default: '') Description of highlighted search
- **"search_fields"** (array) (default: []) Fields of the search form, following ECL Form group structure
  - "label" (string) Label of the field
  - "hide_label" (boolean) (default: false) Hide the label visually (kept for screen readers)
  - "helper_text" (string) (default: '') Helper text of the field
  - "relative_width" (number) (default: 1) Width of the field, relative to the other ones (eg. 2 for twice as large); desktop only
  - "input" (object) Field, following ECL Text input, ECL Select or ECL Datepicker structure
    - "input_type" (string) Type of the field; can be 'text', 'select', 'datepicker'
- **"search_button"** (object) (default: {}) Search button, following ECL Button structure
- **"suggestion_label"** (string) (default: '') Label for the suggestions
- **"suggestion"** (object) (default: {}) List of tags, following the ECL Tag Set structure
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'
- **"form_extra_attributes"** (optional) (array) (default: []): extra attributes, added at the form level.
  The form defaults to `method="GET"`; pass a `method` attribute here to override it.
  - "name" (string) Attribute name, eg. 'action'
  - "value" (optional) (string) Attribute value, eg: 'action-url'

### Deprecated parameters

- **"search_input"** (object) (default: {}) Search field, following ECL Text Input structure. Replaced by `search_fields`
- **"search_helper"** (string) (default: '') Search helper, for additional information. Replaced by `helper_text` in `search_fields`

These parameters are only used when `search_fields` is empty.

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/highlighted-search/highlighted-search.html.twig' with {
  title: 'Find your next role',
  description: 'Discover job opportunities in the EU institutions',
  search_fields: [
    {
      label: 'Search keywords',
      helper_text: "Enter the job you're looking for",
      input: {
        input_type: 'text',
        id: 'highlighted-search-input-id',
        name: 'highlighted-search-input-name',
        placeholder: 'Enter a search keyword',
      },
    },
    {
      label: 'Select country',
      input: {
        input_type: 'select',
        id: 'highlighted-search-select-id',
        name: 'highlighted-search-select-name',
        options: [
          { value: '', label: '', disabled: true, selected: true },
          { value: 'be', label: 'Belgium' },
          { value: 'fr', label: 'France' },
        ],
      },
    },
  ],
  search_button: {
    label: 'Search',
  },
  form_extra_attributes: [
    { name: 'action', value: '/search-results?category=jobs&lang=en' },
  ],
  suggestion_label: 'Or explore:',
  suggestion: {
    items: [
      {
        tag: {
          type: 'link',
          path: '#',
          label: 'Traineeships',
        },
      },
      {
        tag: {
          type: 'link',
          path: '#',
          label: 'IT & Digital',
        },
      },
    ],
  },
} %}
```
