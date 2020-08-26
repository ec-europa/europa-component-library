# ECL-Twig Select component

npm package: `@ecl-twig/ec-component-select`

```shell
npm install --save @ecl-twig/ec-component-select
```

### Parameters:

- **"id"** (string) (default: '')
- **"options"** (array) (default: []):
  - "value" (string) (default: '')
  - "label" (string) (default: '')
- **"disabled"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"required"** (boolean) (default: false)
- **"name"** (string) (default: '')
- **"width"** (string) (default: '') Input width size (s, m or l)
- **"icon_path"** (string) (default: ''): file containing the svg icons
- **"multiple"** (bolean) (default: false): For the multiple select
- **"multiple_placeholder"** (string) (default: '') Placeholder for the multiple select
- **"multiple_all_text"** (string) (default: '') Text for the select all option
- **"multiple_search_text"** (string) (default: '') Text for the search box inside the multiple select
- **"extra_group_classes"** (optional) (string) (default: '') Extra classes (space separated) for the select group
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"\_compliance"** (boolean) (default: false)

### Blocks:

- "helper_text"
- "invalid_text"
- "required_text"
- "optional_text"
- "label"

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-select/ecl-select.html.twig' with { 
  label: 'Select a country', 
  options: [ 
    { 
      value: 1, 
      label: 'Belgium' 
    }, 
    ... 
  ], 
  invalid: false, 
  invalid_text: 'Error message', 
  helper_text: 'Help message', 
  disabled: false, 
  id: 'example-id', 
  name: 'example-name', 
  width: 'm', 
  icon_path: '/static/icons.svg', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %}
```
