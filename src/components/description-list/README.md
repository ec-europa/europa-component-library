# ECL Description list component

npm package: `@ecl/description-list`

```shell
npm install --save @ecl/description-list
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
- **"variant"** (string) (default: ''): Global display variant; can be 'horizontal', 'vertical'
- **"visible_items"** (integer) (default: 0) Number of initially visible items (0 to display all)
- **"more_label"** (string) (default: '') Label for the "show more" button when visible_items is set
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
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
