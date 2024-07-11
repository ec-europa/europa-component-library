# ECL Select component

npm package: `@ecl/twig-component-select`

```shell
npm install --save @ecl/twig-component-select
```

### Parameters:

- **"id"** (string) (default: random)
- **"options"** (array) (default: []):
  - "value" (string) (default: '')
  - "label" (string) (default: '')
  - "selected" (boolean) (default: false)
  - "disabled" (boolean) (default: false)
- **"disabled"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"invalid_icon"** (object of type "icon") (default: {})
- **"required"** (boolean) (default: false)
- **"name"** (string) (default: '')
- **"icon_size"** (string) (default: 'xs')
- **"toggle_label"** (string) (default: 'Toggle dropdown')
- **"width"** (string) (default: '') Input width size (s, m or l)
- **"icon_path"** (string) (default: ''): file containing the svg icons
- **"multiple"** (bolean) (default: false): For the multiple select
- **"multiple_placeholder"** (string) (default: '') Placeholder for the multiple select
- **"multiple_all_text"** (string) (default: '') Text for the select all option
- **"multiple_select_all"** (boolean) (default: true) Show the select all checkbox in the multiple select
- **"multiple_search"** (boolean) (default: true) Show the text filter in the multiple select
- **"multiple_search_text"** (string) (default: '') Text for the search box inside the multiple select
- **"multiple_search_no_results_text"** (string) (default: '') Label label when there is no result by searching for an option
- **"extra_group_classes"** (optional) (string) (default: '') Extra classes (space separated) for the select group
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/select/select.html.twig' with { 
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
