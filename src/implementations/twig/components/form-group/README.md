# ECL Form group component

npm package: `@ecl/twig-component-form-group`

```shell
npm install --save @ecl/twig-component-form-group
```

### Parameters:

- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "label" (string) (default: '')
- "helper_text" (string) (default: '')

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/file-upload/file-upload.html.twig' with { 
  id: 'my-file-upload', 
  label: 'my file upload label', 
  helper_text: 'this is a helper text', 
  invalid_text: 'this is an invalid text', 
  required_text: '*', 
  optional_text: 'this is an optional text', 
  disabled: false, 
  required: false, 
  invalid: false, 
  multiple: false, 
  button_choose_label: "Choose file", 
  button_replace_label: "Replace file", 
  extra_attributes: [ 
    { 
        name: 'data-test', 
        value : 'data-test-1' 
    }, 
  ], 
} %}
```
