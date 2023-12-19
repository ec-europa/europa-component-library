# ECL Tag component (tag set)

npm package: `@ecl/twig-component-tag-set`

```shell
npm install --save @ecl/twig-component-tag-set
```

### Parameters

- **"items"** (array) (default: []): array of Tag
- **"icon_path"** (string) Path to the icons sprite. If provided here, it will be used for every tag in the set
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/tag/tag-set.html.twig' with { 
  icon_path: '/icons.svg',
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
