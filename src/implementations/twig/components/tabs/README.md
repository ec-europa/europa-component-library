# ECL Tabs component

npm package: `@ecl/twig-component-tabs`

```shell
npm install --save @ecl/twig-component-tabs
```

### Parameters:

- **"items"** (associative array) (default: {}): The menu items - format:
  "label": (string) (default: '')
  "path": (string) (default: '')
  "is_current": (boolean) (optional)
- **"more_label"** (string) (default: 'More (%d)')
- **"icon_path"** (string) (default: ''): path to the icons svg
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/tabs/tabs.html.twig' with { 
  icon_path: '/icons.svg', 
  items: [ 
    { 
      label: 'Item 1 label', 
      path: exampleLink }, 
    { 
      label: 'Item 2 label', 
      path: exampleLink, 
    }, 
    { 
      label: 'Item 3 label', 
      path: exampleLink, 
      is_current: true, 
    }, 
    ... 
  ], 
} %}
```
