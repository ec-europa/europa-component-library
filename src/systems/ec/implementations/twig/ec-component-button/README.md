# ECL-Twig Button component

npm package: `@ecl-twig/ec-component-button`

```shell
npm install --save @ecl-twig/ec-component-button
```

### Parameters

- **"label"** (string) (default: '')
- **"variant"** (string) (default: 'primary'): variant of button (can be 'primary', 'secondary', 'call', 'ghost', 'search')
- **"type"** (string) (default: 'submit'): can be the same type as HTML button - 'submit', 'reset', 'button'
- **"disabled"** (bool) (default: false): define if button should be disabled (HTML disabled attribute)
- **"icon_position"** (string, optional) (default: after): Define icon position, can be 'before' or 'after'
- **"icon"** (associative array, optional) default: A predefined structure such as in the Icon component.
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (optional) (boolean) (default: false) Activates debug
- **"_compliance_inner_check_"** (optional) (boolean) (default: false) Inline compliance report

### Example for primary button:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-button/ecl-button.html.twig' with { 
  variant: 'primary', 
  label: 'Example button', 
  disabled: false, 
  icon: { 
    path: '/path-to-the-icon-file', 
    type: 'ui', 
    name: 'corner-arrow', 
    size: 'xs,' 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
