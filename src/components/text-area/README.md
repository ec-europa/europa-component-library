# ECL Text Area component

npm package: `@ecl/text-area`

```shell
npm install --save @ecl/text-area
```

### Parameters:

- **"id"** (string) (default: random) Unique id for the textarea
- **"disabled"** (boolean) (default: false) Disables the textarea
- **"invalid"** (boolean) (default: false) Displays the textarea in invalid state
- **"required"** (boolean) (default: false) Marks the textarea as required
- **"name"** (string) (default: '') Name attribute for the textarea
- **"default_value"** (string) (default: '') Pre-filled value
- **"rows"** (integer) (default: 4) Number of visible text rows
- **"placeholder"** (string) (default: '') Placeholder text
- **"width"** (string) (default: 'm') Textarea width; can be 's', 'm', 'l'
- **"extra_label_classes"** (string) (default: '') Extra classes for the label
- **"extra_group_classes"** (string) (default: '') Extra classes for the textarea group wrapper
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
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
