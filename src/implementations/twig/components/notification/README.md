# ECL Notification component

npm package: `@ecl/twig-component-notification`

```shell
npm install --save @ecl/twig-component-notification
```

### Parameters:

- **"variant"** (string) (default: 'info'): could be 'info, 'success', 'warning' or 'error'
- **"icon"** (object of type "icon") (default: {})
- **"sr_icon"** (string) (default: ''): additional label for the icon; for screen readers
- **"title"** (string) (default: '')
- **"description"** (string) (default: '')
- **"links"** (array) (default: [])
- **"close"** (object of type "button") (default: {}): close button (optional)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- **"description"**: content of the notification

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/notification/notification.html.twig' with { 
  variant: 'info', 
  icon: { 
    path: 'path/to/icons.svg', 
    name: 'info', 
    size: 'l', 
  }, 
  sr_icon: 'Information',
  title: 'Information notification', 
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
  close: { 
    label: 'Close', 
    icon: { 
      path: 'path/to/icons.svg', 
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
