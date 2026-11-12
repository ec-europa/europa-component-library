# ECL specific Site header compact

Site-specific component, not part of ECL: it is only styled by the presets that include it (e.g. `@ecl/specific-preset-ep`).

npm package: `@ecl/specific-site-header-compact`

```shell
npm install --save @ecl/specific-site-header-compact
```

### Parameters

- **"title"** (string) (default: '') Site name
- **"url"** (string) (default: '/') Link of the site name
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/specific-site-header-compact/site-header-compact.html.twig' with {
  title: 'Site name',
  url: '/example',
} %}
```
