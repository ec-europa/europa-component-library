# ECL File Upload component

npm package: `@ecl/twig-component-file-upload`

```shell
npm install --save @ecl/twig-component-file-upload
```

### Parameters:

- **"id"** (string) (default: random) - Input id
- **"name"** (string) (default: '') - Input id
- **"invalid"** (boolean) (default: false) - When an error is found
- **"disabled"** (boolean) (default: false) - Disables the input field
- **"multiple"** (boolean) (default: false) - Multiple uploads
- **"required"** (boolean) (default: false) - Makes the input required
- **"button_choose_label"** (string) (default: '')
- **"button_replace_label"** (string) (default: '')
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
  required_text: '*',  
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
