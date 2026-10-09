# ECL Indicator component

npm package: `@ecl/indicator`

```shell
npm install --save @ecl/indicator
```

### Parameters

- **"value"** (string) (default: '') Indicator value
- **"sr_label"** (string) (default: '') Additional label for screen readers
- **"variant"** (string) (default: '') Variant, can be success, warning, info
- **"shape"** (string) (default: '') Shape of the indicator, can be oval
- **"position"** (string) (default: '') Position of the indicator, can be left or standalone
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example

<!-- prettier-ignore -->
```twig
{% include '@ecl/indicator/indicator.html.twig' with {
  value: '22',
  sr_label: 'new items',
  extra_classes: 'my-extra-class-1 my-extra-class-2',
  extra_attributes: [
    { name: 'data-test', value: 'data-test-value' },
    { name: 'data-test-1', value: 'data-test-value-1' }
  ]
} %}
```
