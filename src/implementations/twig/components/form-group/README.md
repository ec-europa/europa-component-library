# ECL Form group component

npm package: `@ecl/twig-component-form-group`

```shell
npm install --save @ecl/twig-component-form-group
```

### Parameters:

- **"label"** (string) (default: '') - Label for the form group
- **"input"** (object) (default: {
  ...,
  input_type: 'checkbox' || 'datepicker' || 'file' || 'radio' || 'range' || 'rating-field' || 'search' || 'select || 'text' || 'textarea'
  }) - Object of type input
- **"disabled"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"invalid_icon"** (object of type "icon") (default: {})
- **"required"** (boolean) (default: false)
- **"label_aria_required"** (string) (default: ''): aria text for the required field label
- **"label_aria_optional"** (string) (default: ''): aria text for the optional field label
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
  optional_text: '(optional)',
  label_aria_required: 'required',
  label_aria_optional: 'optional',
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
