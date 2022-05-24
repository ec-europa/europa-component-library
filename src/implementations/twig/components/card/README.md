# ECL Card component

npm package: `@ecl/twig-component-card`

```shell
npm install --save @ecl/twig-component-card
```

### Parameters

- **image** (associative array) (default: {}):
  - **src**: Url of the image
  - **alt**: alternative text for the image
- **labels** (array) (default: []): Array of ECL Labels
- **primary_meta** (array of strings) (default: []): Primary meta of the card
- **title** (associative array OR string) (default: {}): Title of the card, following ECL Link structure
- **description** (string) (default: ''): Description of the card
- **secondary_meta** (array) (default: []): format: [
  {
  **label** (string) (default: ''): Label of secondary meta item
  **icon** (array) (default: {}) Icon of the secondary meta, following ECL Icon structure
  },
  ...
  ]
- **tags** (array) (default: []): Array of ECL Tags
- **lists** (array) (default: []): Array of ECL Description list
- **extra_classes** (string) (default: '')
- **extra_attributes** (array) (default: []): format: [
  {
  **name** (string) (default: ''),
  **value** (optional) (string)
  ...
  ],

#### Deprecated

- **card.type**: no longer used (tile variant has been removed)
- **card.meta**: renamed to primary_meta
- **card.infos**: renamed to secondary_meta

### Example

<!-- prettier-ignore -->
```twig
{% include '@ecl/card/card.html.twig' with { 
  card: { 
    image: { 
      src: 'https://v2--europa-component-library.netlify.com/example-image.jpg', 
      alt: 'Better regulation', 
    }, 
    primary_meta: [ 'Meta 1', 'Meta 2', 'Meta 3' ], 
    title: { 
      path: '/example', 
      label: 'Better regulation', 
    }, 
    description: 'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.', 
    secondary_meta: [ 
      { 
        label: '2018/10/22', 
        icon: { 
          type: 'general', 
          name: 'calendar', 
          path: '/path-to-the-icon-file', 
        }, 
      }, 
      { 
        label: 'Luxembourg', 
        icon: { 
          type: 'general', 
          name: 'location', 
          path: '/path-to-the-icon-file', 
        }, 
      }, 
    ], 
    tags: [ 
      { 
        label: 'Tag 1', 
        path: '/example-1', 
      }, 
      { 
        label: 'Tag 2', 
        path: '/example-2', 
      }, 
      { 
        label: 'Tag 3', 
        path: '/example-3', 
      }, 
    ], 
  } 
} %}
```
