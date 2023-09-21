# ECL Form group component

npm package: `@ecl/twig-component-form-group`

```shell
npm install --save @ecl/twig-component-form-group
```

### Parameters:

- **"label"** (string) (default: '') - Label for the form group
- **"input"** (object) (default: {
  ...,
  input_type: 'text' || 'search' || 'file' || 'range' || 'rating-field' || 'datepicker' || 'select' || 'radio'
  }) - Object of type input
- **"disabled"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"invalid_icon"** (object of type "icon") (default: {})
- **"required"** (boolean) (default: false)
- **"extra_label_classes"** (optional) (string) (default: '') Extra classes for the label
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
{% include '@ecl/form-group/form-group.html.twig' with { 
  label: 'my file upload label', 
  helper_text: 'this is a helper text', 
  invalid_text: 'this is an invalid text', 
  required_text: '*', 
  optional_text: 'this is an optional text', 
  input: {
    input_type: 'file',
    multiple: false, 
    button_choose_label: "Choose file", 
    button_replace_label: "Replace file",
    extra_attributes: [ 
      { 
          name: 'data-test', 
          value : 'data-test-1' 
      }, 
    ],
  }
} %}
```