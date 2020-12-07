# ECL Text Area component

npm package: `@ecl/twig-component-text-area`

```shell
npm install --save @ecl/twig-component-text-area
```

### Parameters:

- **"id"** (string) (default: '')
- **"disabled"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"required"** (boolean) (default: false)
- **"name"** (string) (default: '')
- **"default_value"** (string) (default: '')
- **"rows"** (int) (default: 4)
- **"extra_label_classes"** (string) (default: '') Extra classes for the label (space separated)
- **"width"** (string) (default: '') Input width size (s, m or l)
- **"extra_group_classes"** (optional) (string) (default: '') Extra classes (space separated) for the text-area group
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "helper_text"
- "invalid_text"
- "required_text"
- "optional_text"
- "label"

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/text-area/text-area.html.twig' with { 
  label: 'Comment', 
  placeholder: 'Please enter your comment', 
  invalid_text: "Comment have been locked on this article", 
  helper_text: 'Your comment may be 255 characters long maximum', 
  id: 'input-comment', 
  name: 'comment', 
  default_value: 'Hello world!',
  rows: 4, 
  width: 'm', 
  extra_group_classes: 'my-extra-group-class-1 my-extra-group-class-2', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %}
```
