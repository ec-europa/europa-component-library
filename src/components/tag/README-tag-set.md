# ECL Tag component (tag set)

npm package: `@ecl/tag`

```shell
npm install --save @ecl/tag
```

### Parameters

- **color_mode** (string) (default: '')
- **"items"** (array) (default: []): array of Tag
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/tag/tag-set.html.twig' with { 
  items: [
    {
      tag: {
        type: 'link',
        path: exampleLink,
        label: 'Link tag',
      },
    },
    {
      tag: {
        type: 'removable',
        label: 'Removable tag',
        aria_label: 'Dismiss',
      },
    },
    ...
  ],
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
