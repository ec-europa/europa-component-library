# ECL Text Field component

npm package: `@ecl/text-input`

```shell
npm install --save @ecl/text-input
```

### Parameters:

- **"id"** (string) (default: random) Unique id for the input
- **"disabled"** (boolean) (default: false) Disables the input
- **"invalid"** (boolean) (default: false) Displays the input in invalid state
- **"required"** (boolean) (default: false) Marks the input as required
- **"name"** (string) (default: '') Name attribute for the input
- **"type"** (string) (default: 'text') Input type attribute (e.g. 'text', 'email', 'search')
- **"placeholder"** (string) (default: '') Placeholder text
- **"width"** (string) (default: 'm') Input width; can be 's', 'm', 'l'
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/text-input/text-input.html.twig' with { 
  id: 'input-email', 
  name: 'email', 
  width: 'm', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %}
```
