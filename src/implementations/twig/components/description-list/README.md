# ECL Description list component

npm package: `@ecl/twig-component-description-list`

```shell
npm install --save @ecl/twig-component-description-list
```

### Parameters

- **items** (array) (default: []): format: [
  {
  "term" (string or array of string)
  "definition" (block or array of string or array of ECL Link or array of ECL Tag)
  "type" (string): type of data, if not plain text; could be "link", "link-inline", "taxonomy", "tag"
  },
  ...
  ]
- **variant** (string) (default: ''): global variant of the list (horizontal, vertical)
- **visible_items** (optional) (integer) (default: 0) Number of visible items
- **more_label** (optional) (string) (default: '') Label for the more button, if requested
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/description-list/description-list.html.twig' with { 
  variant: 'horizontal',
  visible_items: 3,
  more_label: 'view all',
  items: [
    {
      term: 'Standard text',
      definition:
        'Lorem ipsum dolor sit amet, <a href="#" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis',
    },
    {
      term: 'Standalone links',
      type: 'link',
      definition: [
        {
          link: {
            label: 'Lorem ipsum dolor sit amet',
            path: exampleLink,
            icon_position: 'before',
          },
          icon: {
            name: 'copy',
            path: '/icons.svg',
            size: 's',
          },
        },
        {
          link: {
            label: 'Lorem ipsum dolor sit amet',
            path: exampleLink,
            icon_position: 'before',
          },
          icon: {
            name: 'download',
            path: '/icons.svg',
            size: 's',
          },
        },
      ],
    },
    {
      term: 'Links inline',
      type: 'link-inline',
      definition: [
        {
          link: {
            label: 'Lorem ipsum dolor sit amet',
            path: exampleLink,
          },
        },
        {
          link: {
            label: 'Lorem ipsum dolor sit amet',
            path: exampleLink,
          },
        },
      ],
    },
    {
      term: 'Taxonomy list',
      type: 'taxonomy',
      definition: ['Taxonomy item 1', 'Taxonomy item 2', 'Taxonomy item 3'],
    },
  ],
} %}
```
