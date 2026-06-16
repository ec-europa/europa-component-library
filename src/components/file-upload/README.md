# ECL File Upload component

npm package: `@ecl/file-upload`

```shell
npm install --save @ecl/file-upload
```

### Parameters:

- **"id"** (string) (default: random) Unique id for the input field
- **"name"** (string) (default: '') Name attribute for the file input
- **"invalid"** (boolean) (default: false) Displays the field in invalid state
- **"disabled"** (boolean) (default: false) Disables the input field
- **"multiple"** (boolean) (default: false) Allows selecting multiple files
- **"required"** (boolean) (default: false) Makes the field required
- **"button_choose_label"** (string) (default: '') Label for the initial "choose file" button
- **"button_replace_label"** (string) (default: '') Label for the "replace file" button shown after selection
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/file-upload/file-upload.html.twig' with { 
  id: 'my-file-upload', 
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
