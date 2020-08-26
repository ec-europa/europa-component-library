# ECL-Twig Label component

npm package: `@ecl-twig/ec-component-label`

```shell
npm install --save @ecl-twig/ec-component-label
```

### Parameters

- **"variant"** (string) (default: low) (Allowed values: low, medium, high) - Variant name
- **"label"** (string) (default: '') Text of the label
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **_compliance_** (optional) (boolean) (default: false) Activates debug

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-icon/ecl-label.html.twig' with { 
 label: 'A label', 
 variant: 'medium', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %} 
```
