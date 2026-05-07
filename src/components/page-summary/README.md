# ECL Page summary component

npm package: `@ecl/page-summary`

```shell
npm install --save @ecl/page-summary
```

## Parameters

- **"id"** (string) (default: random): page summary id
- **"title"** (string) (default: ''): page summary title
- **"description"** (string) (default: ''): page summary description
- **"icon"** (object) (default: ''): icon for the title; follows the ECL Icon structure
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/page-summary/page-summary.html.twig' with { 
  title: 'Summary',
  description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  icon: {
    name: 'book-open',
    family: 'phosphor',
  },
} %}
```
