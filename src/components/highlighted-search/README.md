# ECL Highlighted search component

npm package: `@ecl/highlighted-search`

```shell
npm install --save @ecl/highlighted-search
```

## Parameters

- **"id"** (string) (default: random) Unique id for the component
- **"color_mode"** (string) The color mode name
- **"title"** (string) (default: '') Title of highlighted search
- **"description"** (string) (default: '') Description of highlighted search
- **"search_input"** (object) (default: {}) Search field, following ECL Text Input structure
- **"search_helper"** (string) (default: '') Search helper, for additional information
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

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/highlighted-search/highlighted-search.html.twig' with {
title: 'Find your next role',
  description: 'Discover job opportunities in the EU institutions',
  search_input: {
    id: 'highlighted-search-input-id',
    name: 'highlighted-search-input-name',
    placeholder: 'Enter a search keyword',
  },
  search_helper: "Enter the job you're looking for",
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
