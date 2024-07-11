# ECL Popover component

npm package: `@ecl/twig-component-popover`

```shell
npm install --save @ecl/twig-component-popover
```

### Parameters:

- **"id"** (string) (default: random)
- **toggle** (associative array) (default: {}): Popover toggle element, following ECL Link structure
- **links** (array) (default: []): Array of ECL Links
- **close** (object of type "button") (default: {}): close button (optional)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
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
      path: '/icons.svg',
      name: 'share',
      size: 'fluid',
    },
  }, 
  close: { 
    label: "Close", 
    icon: { 
      path: "/icons.svg", 
      name: "close", 
      size: "m" 
    }, 
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
        path: '/icons.svg',
        name: 'global',
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
        path: '/icons.svg',
        name: 'global',
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
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
  ],
} %}
```
