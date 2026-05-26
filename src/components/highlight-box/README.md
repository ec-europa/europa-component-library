# ECL Highlight box component

npm package: `@ecl/highlight-box`

```shell
npm install --save @ecl/highlight-box
```

## Parameters

- **"id"** (string) (default: random): highlight box id
- **"title"** (string) (default: ''): highlight box title
- **"description"** (string) (default: ''): highlight box description
- **"icon"** (object) (default: ''): icon for the title; follows the ECL Icon structure
- **"link"** (object) (default: {}): optional link; follows the ECL Link structure
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/highlight-box/highlight-box.html.twig' with { 
  title: 'Summary',
  description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  icon: {
    name: 'book-open',
    family: 'phosphor',
  },
  link: {
    link: {
      label: 'Read more',
      path: '#example,
    },
    icon: {
      name: 'arrow-right',
      size: 'xs',
      family: 'phosphor',
    },
  }
} %}
```
