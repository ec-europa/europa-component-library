# ECL Checkbox component

npm package: `@ecl/twig-component-checkbox`

```shell
npm install --save @ecl/twig-component-checkbox
```

### Parameters:

- **"items"** (array) (default: [])
  - "id" (string) (default: ''): id of the checkbox
  - "value" (string) (default: '')
  - "invalid" (boolean) (default: false)
  - "disabled" (boolean) (default: false)
  - "checked" (boolean) (default: false)
  - "helper_text" (block) (default: '')
  - "label" (block) (default: '')
  - "icon_path" (string) (default: ''): file containing the svg icons
  - "item_required_text" (string) (default: '')
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
  id: 'checkbox-default',
  name: 'checkbox-default', 
  invalid: false, 
  required: true, 
  items: [ 
    { 
      id: 'checkbox-default-1', 
      value: 'lu', 
      label: 'Luxembourg', 
      helper_text: 'Help text for option 1', 
      checked: true, 
    }, 
    { 
      id: 'checkbox-default-2', 
      value: 'be', 
      label: 'Belgium', 
      helper_text: 'Help text for option 2', 
    }, 
    { 
      id: 'checkbox-default-3', 
      value: 'fr', 
      label: 'France (disabled)', 
      helper_text: 'Help text for option 3', 
      disabled: true, 
    }, 
  ], 
} %}
```
