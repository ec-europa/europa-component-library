# ECL Radio component

npm package: `@ecl/radio`

```shell
npm install --save @ecl/radio
```

### Parameters:

- **"items"** (array) (default: []) Radio button items; format:
  - "id" (string) (default: random) Id of the radio button
  - "name" (string) (default: '') Name attribute for the radio input
  - "value" (string) (default: '') Value attribute for the radio input
  - "disabled" (boolean) (default: false) Disables this radio button
  - "checked" (boolean) (default: false) Pre-checks this radio button
  - "required" (boolean) (default: false) Marks this radio button as required
  - "helper_text" (string) (default: '') Helper text displayed below the label
  - "label" (string) (default: '') Label for this radio button
- **"name"** (string) (default: '') Name attribute shared across all radio buttons
- **"invalid"** (boolean) (default: false) Displays the radio group in invalid state
- **"binary"** (boolean) (default: false) Use binary (yes/no) display style
- **"required"** (boolean) (default: false) Marks the group as required
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
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
