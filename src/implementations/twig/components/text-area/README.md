# ECL Text Area component

npm package: `@ecl/twig-component-text-area`

```shell
npm install --save @ecl/twig-component-text-area
```

### Parameters:

- **"id"** (string) (default: '')
- **"disabled"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"invalid_icon"** (object of type "icon") (default: {})
- **"required"** (boolean) (default: false)
- **"name"** (string) (default: '')
- **"default_value"** (string) (default: '')
- **"rows"** (int) (default: 4)
- **"extra_label_classes"** (string) (default: '') Extra classes for the label (space separated)
- **"placeholder"** (string) (default: '')
- **"width"** (string) (default: 'm') Input width size (s, m or l)
- **"extra_group_classes"** (optional) (string) (default: '') Extra classes (space separated) for the text-area group
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/text-area/text-area.html.twig' with { 
  placeholder: 'Please enter your comment', 
  id: 'input-comment', 
  name: 'comment', 
  default_value: 'Hello world!',
  rows: 4, 
  width: 'm', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %}
```
