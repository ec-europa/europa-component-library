# ECL Tabs component

npm package: `@ecl/tabs`

```shell
npm install --save @ecl/tabs
```

### Parameters:

- **"items"** (associative array) (default: []): The tabs items - format:
  "label": (string) (default: '')
  "path": (string) (default: '')
  "is_current": (boolean) (optional)
  "extra_classes": (string) (optional)
- **"more_label"** (string) (default: 'More (%d)')
- **"previous_label"** (string) (default: 'Previous') Label for the previous button (mobile only); this is for screen readers
- **"next_label"** (string) (default: 'Next') Label for the next button (mobile only); this is for screen readers
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/tabs/tabs.html.twig' with { 
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
