# ECL Radio component

npm package: `@ecl/twig-component-radio`

```shell
npm install --save @ecl/twig-component-radio
```

### Parameters:

- **"items"** (array) (default: [])
  - "id" (string) (default: ''): id of the radio
  - "name" (string) (default: '')
  - "value" (string) (default: '')
  - "disabled" (boolean) (default: false)
  - "checked" (boolean) (default: false)
  - "required" (boolean) (default: false)
  - "helper_text" (block) (default: '')
  - "label" (block) (default: '')
- **"name"** (string) (default: '')
- **"invalid"** (boolean) (default: false)
- **"binary"** (boolean) (default: false)
- **"required"** (boolean) (default: false)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/radio/radio-group.html.twig' with { 
  name: 'radio-default', 
  invalid: false, 
  binary: false, 
  items: [ 
    { 
      id: 'radio-default-1', 
      value: 'lu', 
      label: 'Luxembourg', 
      helper_text: 'Help text for option 1', 
      checked: true, 
    }, 
    { 
      id: 'radio-default-2', 
      value: 'be', 
      label: 'Belgium', 
      helper_text: 'Help text for option 2', 
    }, 
    { 
      id: 'radio-default-3', 
      value: 'fr', 
      label: 'France (disabled)', 
      helper_text: 'Help text for option 3', 
      disabled: true, 
    }, 
  ], 
} %}
```
