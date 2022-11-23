# ECL Range component

npm package: `@ecl/twig-component-range`

```shell
npm install --save @ecl/twig-component-range
```

### Parameters:

- **"id"** (string) (default: '')
- **"min"** (integer) (default: '') Minimum value of the range
- **"max"** (integer) (default: '') Maxium value of the range
- **"step"** (integer) (default: '') Granularity of the range
- **"value"** (integer) (default: '') Default value of the range
- **"disabled"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"invalid_icon"** (object of type "icon") (default: {})
- **"required"** (boolean) (default: false)
- **"name"** (string) (default: '')
- **"width"** (string) (default: 'm') Input width size (s, m or l)
- **"extra_label_classes"** (string) (default: '') Extra classes (space separated) for the range label
- **"extra_group_classes"** (optional) (string) (default: '') Extra classes (space separated) for the range group
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "helper_text"
- "invalid_text"
- "required_text"
- "optional_text"
- "value_text"
- "label"

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/range/range.html.twig' with { 
  id: 'example-range-id',
  min: 0,
  max: 30,
  value: 15,
  label: 'Label',
  width: 'm',
  invalid_text: 'This is the error message',
  invalid_icon: {
    path: '/icons.svg',
    name: 'error',
    size: 'm',
  },
  helper_text: "This is the input's helper text.",
  value_text: 'Value: ',
  optional_text: '(optional)',
  required: false,
  required_text: '*',
  extra_group_classes: 'my-extra-group-class-1 my-extra-group-class-2', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %}
```
