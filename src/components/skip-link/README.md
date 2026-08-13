# ECL Skip Link component

npm package: `@ecl/skip-link`

```shell
npm install --save @ecl/skip-link
```

### Parameters

- **"label"** (string) (default: '') Link text content
- **"href"** (string) (default: '') Link href attribute
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/skip-link/skip-link.html.twig' with { 
    label: 'Skip to main content', 
    href: '#top', 
} %}
```
