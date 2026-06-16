# ECL Form group component

npm package: `@ecl/form-group`

```shell
npm install --save @ecl/form-group
```

### Parameters:

- **"input"** (object) (default: {}): Input component object; must include `input_type` set to one of: 'checkbox', 'datepicker', 'file', 'radio', 'range', 'rating-field', 'search', 'select', 'text', 'textarea'
- **"disabled"** (boolean) (default: false) Disables the form group
- **"hide_label"** (boolean) (default: false) Hides the label visually (kept for screen readers)
- **"invalid"** (boolean) (default: false) Displays the form group in invalid state
- **"invalid_icon"** (object) (default: {}) Icon displayed when invalid, following ECL Icon structure
- **"required"** (boolean) (default: false) Marks the field as required
- **"sr_invalid_icon"** (string) (default: '') Screen reader label for the invalid icon
- **"label_aria_required"** (string) (default: '') Aria text for the required indicator when it is not explicit text
- **"label_aria_optional"** (string) (default: '') Aria text for the optional indicator when it is not explicit text
- **"extra_label_classes"** (string) (default: '') Extra classes for the label element
- **"extra_classes"** (string) (default: '') Extra classes for the form group wrapper
- **"extra_attributes"** (array) (default: []) Extra attributes for the form group
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
