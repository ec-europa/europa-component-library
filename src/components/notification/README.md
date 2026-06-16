# ECL Notification component

npm package: `@ecl/notification`

```shell
npm install --save @ecl/notification
```

### Parameters:

- **"variant"** (string) (default: 'info') Notification type; can be 'info', 'success', 'warning', 'error'
- **"icon"** (object) (default: {}) Icon following ECL Icon structure
- **"sr_icon"** (string) (default: '') Screen reader label for the icon
- **"title"** (string) (default: '') Notification title
- **"description"** (string) (default: '') Notification body text
- **"links"** (array) (default: []) Array of ECL Link objects shown below the description
- **"close"** (object) (default: {}) Close button following ECL Button structure
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
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
    name: 'info', 
    size: 'l', 
  }, 
  sr_icon: 'Information',
  title: 'Information notification', 
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
  close: { 
    label: 'Close', 
    icon: { 
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
