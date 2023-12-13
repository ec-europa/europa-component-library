# ECL Button component

npm package: `@ecl/twig-component-button`

```shell
npm install --save @ecl/twig-component-button
```

### Parameters

- **"label"** (string) (default: '')
- **"variant"** (string) (default: 'primary'): variant of button (can be 'primary', 'secondary', 'cta', 'ghost', 'ghost-inverted', 'tertiary')
- **"type"** (string) (default: 'submit'): can be the same type as HTML button - 'submit', 'reset', 'button'
- **"disabled"** (bool) (default: false): define if button should be disabled (HTML disabled attribute)
- **"hide_label"** (bool) (default: false): hide button label, for screen reader only. Note: requires to have an icon defined
- **"icon_position"** (string, optional) (default: after): Define icon position, can be 'before' or 'after'
- **"icon"** (optional) (associative array) OR (array) of associate arrays - Default structure of the icon component with extra_classes as an internal key.
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example for primary button:

<!-- prettier-ignore -->
```twig
{% include '@ecl/button/button.html.twig' with { 
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
