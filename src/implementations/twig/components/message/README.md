# ECL Message component

npm package: `@ecl/twig-component-message`

```shell
npm install --save @ecl/twig-component-message
```

### Parameters:

- **"variant"** (string) (default: ''): could be 'info, 'success', 'warning' or 'error'
- **"icon"** (object of type "icon") (default: {})
- **"title"** (string) (default: '')
- **"close"** (object of type "button") (default: {}): close button
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"\_compliance\_"** (optional) (boolean) (default: false) Activates debug
- **"\_compliance_inner_check\_"** (optional) (boolean) (default: false) Inline compliance report

### Blocks:

- **"description"**: content of the message

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/message/message.html.twig' with { 
  variant: 'info', 
  icon: { 
    path: 'path/to/icons.svg', 
    type: 'notifications', 
    name: 'info', 
    size: 'l', 
  }, 
  title: 'Information message', 
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
  close: { 
    label: 'Close', 
    icon: { 
      path: 'path/to/icons.svg', 
      type: 'ui', 
      name: 'close', 
      size: 's', 
    }, 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %}
```
