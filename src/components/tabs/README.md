# ECL Tabs component

npm package: `@ecl/tabs`

```shell
npm install --save @ecl/tabs
```

### Parameters:

- **"color_mode"** (string) (default: '') Name of the color mode
- **"tab_behaviour"** (boolean) (default: false) Enables tab behaviour with content panels
- **"items"** (array) (default: []) Tab items; format:
  - "label" (string) (default: '') Tab label
  - "path" (string) (default: '') Tab link URL
  - "is_current" (boolean) (default: false) Whether this tab is active
  - "extra_classes" (string) (default: '') Extra classes for this tab item
- **"more_label"** (string) (default: 'Show %d more items') Label for the overflow "more" button; `%d` is replaced with the count
- **"previous_label"** (string) (default: 'Previous') Screen reader label for the previous button (mobile)
- **"next_label"** (string) (default: 'Next') Screen reader label for the next button (mobile)
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
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
