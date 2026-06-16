# ECL Label component

npm package: `@ecl/label`

```shell
npm install --save @ecl/label
```

### Parameters

- **"variant"** (string) (default: 'low') Relevance level; can be 'low', 'medium', 'high', 'highlight'
- **"label"** (string) (default: '') Text of the label
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/label/label.html.twig' with { 
 label: 'A label', 
 variant: 'medium', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %} 
```
