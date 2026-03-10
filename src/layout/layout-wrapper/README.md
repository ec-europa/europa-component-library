# ECL Layout wrapper

npm package: `@ecl/layout-wrapper`

```shell
npm install --save @ecl/layout-wrapper
```

### Parameters

- **"configuration"** (string) (default: 'col-3'): Layout configuration. Possible options:
  - col-2
  - col-3
  - col-4
  - highlight-col-2
  - highlight-col-3
- **"items"** (array) (default: []): Items to be displayed in the wrapper.
  Each item can be either:
  - a string (rendered as-is)
  - an object with a defining component key, e.g. { card: { ... } }, { heading: { level: 2, content: 'my heading' } }
    Supported component keys: heading, card, navigation_list, content_item
- **"direction"** (string) (default: "horizontal"): Flow of items; can be "horizontal" or "vertical"
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (array) (default: []): format: [
  {
  "name" (string) (default: ''),
  "value" (optional) (string)
  },
  ...
  ],

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/layout-wrapper/layout-wrapper.html.twig' with { 
  items: [
    heading: { level: 2, content: 'My heading' }',
    card: {
      // Card content, following the component structure 
      ... 
    },
    navigation_list: { 
      // Navigation list content, following the component structure 
      ... 
    },
  ]
} %}
```
