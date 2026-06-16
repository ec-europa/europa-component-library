# ECL Page summary component

npm package: `@ecl/page-summary`

```shell
npm install --save @ecl/page-summary
```

## Parameters

- **"id"** (string) (default: random) Unique id for the section
- **"title"** (string) (default: '') Page summary title
- **"description"** (string) (default: '') Page summary description text
- **"icon"** (object) (default: {}) Icon for the title following ECL Icon structure
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

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
