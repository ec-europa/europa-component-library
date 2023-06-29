# ECL Text Field component

npm package: `@ecl/twig-component-text-input`

```shell
npm install --save @ecl/twig-component-text-input
```

### Parameters:

- **"id"** (string) (default: '')
- **"disabled"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"invalid_icon"** (object of type "icon") (default: {})
- **"required"** (boolean) (default: false)
- **"name"** (string) (default: '')
- **"type"** (string) (default: '')
- **"placeholder"** (string) (default: '')
- **"width"** (string) (default: 'm') Input width size (s, m or l)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
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
