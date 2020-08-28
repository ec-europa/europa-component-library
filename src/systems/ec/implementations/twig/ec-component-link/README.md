# ECL-Twig Link component

npm package: `@ecl-twig/ec-component-link`

```shell
npm install --save @ecl-twig/ec-component-link
```

### Parameters

- **"link"** (associative array) (default: 'predefined structure below')
  - "type" (string) (default: '') - type of link. Available types are 'default' or standalone
  - "label" (string) (default: '') - Content of link
  - "path" (string) (default: '') - Link url (href attribute)
  - "aria_label" (string) Aria label attribute value
  - "icon_position" (string) (default: 'after') - Position of link icon (can be 'before' or 'after') if icon is available
- **"icon"** (optional) (associative array) OR (array) of associate arrays - Default structure of the icon component, but extra_classes is an internal key.
  The name has to be non empty for the icon to be printed.
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1',
- **_compliance_** (optional) (boolean) (default: false) Activates debug
- **_compliance_inner_check_** (optional) (boolean) (default: false) Inline compliance report

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-link/ecl-link.html.twig' with { 
  link: { 
    type: 'standalone', 
    label: 'Standalone link', 
    path: 'http://google.com', 
    icon_position: 'after' 
    aria_label: 'An aria label' 
  }, 
  icon: { 
    path: '/path-to-the-icon-file', 
    type: 'ui', 
    name: 'external', 
    extra_classes: 'my-extra-class-1 my-extra-class-2' 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
