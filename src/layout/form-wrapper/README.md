# ECL Form wrapper

npm package: `@ecl/form-wrapper`

```shell
npm install --save @ecl/form-wrapper
```

### Parameters

- **"tag"** (string) (default: 'form'): Wrapper element; 'form' or 'div' (when the form element is rendered elsewhere)
- **"id"** (string) (default: ''): Id of the wrapper, also used to link the title
- **"title"** (object) (default: {}): Title of the form wrapper
  - "level" (int) (default: 2): Heading level, up to h4
  - "label" (string) (default: ''): Title content
- **"description"** (string) (default: ''): Description of the form wrapper
- **"rows"** (array) (default: []): Rows of form elements
  - "items" (array) (default: []): Up to 3 items per row. Each item can be either:
    - a string (rendered as-is)
    - an object with a "form_group" key, following ECL Form group structure
- **"actions"** (array) (default: []): Buttons displayed below the rows, following ECL Button structure
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (array) (default: []): Extra attributes
  - "name" (string) (default: '')
  - "value" (string) (default: '')

### Example:

```twig
{% include '@ecl/form-wrapper/form-wrapper.html.twig' with {
  id: 'search-filters',
  title: { label: 'Filter results' },
  rows: [
    { items: [
      { form_group: { label: 'Search keywords', input: { input_type: 'search', id: 'keywords' } } },
      { form_group: { label: 'Country', input: { input_type: 'select', id: 'country', options: [...] } } },
    ] },
  ],
  actions: [
    { label: 'Search', type: 'submit' },
    { label: 'Clear filters', variant: 'secondary', type: 'reset' },
  ],
} %}
```
