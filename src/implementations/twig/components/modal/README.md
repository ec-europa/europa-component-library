# ECL Modal component

npm package: `@ecl/twig-component-modal`

```shell
npm install --save @ecl/twig-component-modal
```

### Parameters:

- **"id"** (string) (default: '')
- **toggle** (associative array) (default: {}): Modal toggle element, following ECL Link structure
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
