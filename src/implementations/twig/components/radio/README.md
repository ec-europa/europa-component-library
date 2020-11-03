# ECL Radio component

npm package: `@ecl/twig-component-radio`

```shell
npm install --save @ecl/twig-component-radio
```

### Parameters:

- **"items"** (array) (default: [])
  - "id" (string) (default: '')
  - "name" (string) (default: '')
  - "value" (string) (default: '')
  - "disabled" (boolean) (default: false)
  - "checked" (boolean) (default: false)
  - "required" (boolean) (default: false)
  - "helper_id" (string) (default: '')
  - "helper_text" (block) (default: '')
  - "label" (block) (default: '')
- **"name"** (string) (default: '')
- **"helper_id"** (string) (default: '')
- **"invalid"** (boolean) (default: false)
- **"binary"** (boolean) (default: false)
- **"required"** (boolean) (default: false)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **_compliance_"** (boolean) (default: false) Activates debug

### Blocks:

- "label"
- "helper_text"
- "invalid_text"
- "label"
- "optional_text"
- "required_text"

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/radio/radio-group.html.twig' with { 
  label: 'Select your country', 
  helper_id: 'radio-default-helper', 
  helper_text: 'Helper text for the group', 
  invalid_text: 'Error message for the group', 
  name: 'radio-default', 
  invalid: false, 
  binary: false, 
  items: [ 
    { 
      id: 'radio-default-1', 
      value: 'lu', 
      label: 'Luxembourg', 
      helper_id: 'helper-default-1', 
      helper_text: 'Help text for option 1', 
      checked: true, 
    }, 
    { 
      id: 'radio-default-2', 
      value: 'be', 
      label: 'Belgium', 
      helper_id: 'helper-default-2', 
      helper_text: 'Help text for option 2', 
    }, 
    { 
      id: 'radio-default-3', 
      value: 'fr', 
      label: 'France (disabled)', 
      helper_id: 'helper-default-3', 
      helper_text: 'Help text for option 3', 
      disabled: true, 
    }, 
  ], 
} %}
```
