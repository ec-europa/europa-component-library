# ECL Highlight box component

npm package: `@ecl/highlight-box`

```shell
npm install --save @ecl/highlight-box
```

## Parameters

- **"color_mode"** (string) (default: '') name of the color mode
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
  title: 'What are the next steps?',
  description:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  icon: {
    name: 'arrow-right',
    size: 'xs',
    family: 'phosphor',
  },
  link: {
    link: {
      label: 'Read more',
      path: exampleLink,
    },
    icon: {
      name: 'arrow-right',
      size: 'xs',
      family: 'phosphor',
    },
  },
} %}
```
