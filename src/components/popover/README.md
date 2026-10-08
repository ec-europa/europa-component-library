# ECL Popover component

npm package: `@ecl/popover`

```shell
npm install --save @ecl/popover
```

### Parameters:

- **"id"** (string) (default: random) Unique id for the popover
- **"toggle"** (object) (default: {}) Toggle element following ECL Link or ECL Button structure
- **"close"** (object) (default: phosphor 'x' icon) Close button following ECL Button structure
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "content"

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/popover/popover.html.twig' with { 
  id: 'popover-example',
  toggle: {
    link: {
      label: 'Popover',
      path: exampleLink,
      type: 'standalone',
      aria_label: 'Popover toggle',
      icon_position: 'before',
    },
    icon: {
      name: 'share-network',
      family: 'phosphor',
      size: 'fluid',
    },
  }, 
  close: { 
    label: "Close", 
    hide_label: true
  },
  links: [
    {
      link: {
        label: 'item 1',
        path: exampleLink,
        aria_label: 'Link to item 1',
      },
      icon: {
        name: 'globe',
        family: 'phosphor',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'item 2',
        path: exampleLink,
        aria_label: 'Link to item 2',
      },
      icon: {
        name: 'globe',
        family: 'phosphor',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'item 3',
        path: exampleLink,
        aria_label: 'Link to item 3',
      },
      icon: {
        name: 'globe',
        family: 'phosphor',
        size: 'fluid',
      },
    },
  ],
} %}
```
