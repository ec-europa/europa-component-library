# ECL Checkbox component

npm package: `@ecl/twig-component-checkbox`

```shell
npm install --save @ecl/twig-component-checkbox
```

### Parameters:

- **"items"** (array) (default: [])
  - "id" (string) (default: '')
  - "name" (string) (default: '')
  - "value" (string) (default: '')
  - "invalid" (boolean) (default: false)
  - "disabled" (boolean) (default: false)
  - "checked" (boolean) (default: false)
  - "helper_id" (string) (default: '')
  - "helper_text" (block) (default: '')
  - "label" (block) (default: '')
  - "icon_path" (string) (default: ''): file containing the svg icons
- **"name"** (string) (default: '')
- **"invalid"** (boolean) (default: false)
- **"required"** (boolean) (default: false)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- **"invalid_text"**

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/checkbox/checkbox-group.html.twig' with { 
  helper_id: 'checkbox-default-helper', 
  invalid_text: 'Error message for the group', 
  name: 'checkbox-default', 
  invalid: false, 
  required: true, 
  items: [ 
    { 
      id: 'checkbox-default-1', 
      value: 'lu', 
      label: 'Luxembourg', 
      helper_id: 'helper-default-1', 
      helper_text: 'Help text for option 1', 
      checked: true, 
    }, 
    { 
      id: 'checkbox-default-2', 
      value: 'be', 
      label: 'Belgium', 
      helper_id: 'helper-default-2', 
      helper_text: 'Help text for option 2', 
    }, 
    { 
      id: 'checkbox-default-3', 
      value: 'fr', 
      label: 'France (disabled)', 
      helper_id: 'helper-default-3', 
      helper_text: 'Help text for option 3', 
      disabled: true, 
    }, 
  ], 
} %}
```
