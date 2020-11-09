# ECL Card component

npm package: `@ecl/twig-component-card`

```shell
npm install --save @ecl/twig-component-card
```

### Parameters

- **"card"** (associative array) (default: predefined structure below)
  - "type" (string) (default: '') - Card type ('tile')
  - "description" (string) (default: '') - Description of card
  - "meta" (array) (default: []) - Meta's for the Card
  - "title" (associative array) (default: {}) - Predefined structure compatible with Link component. If Card type is a 'tile', only label property is required.
  - "image" (associative array) (default: ''): - Url/path and alternate text of the background image (non required if Card type is a 'tile')
  - "tags" (array) (default: []): List of tags compatible with EC Tag component structure
  - "infos" (array) (default: []): List of infos. The format of each element in the array:
    - "label" (string) (default: ''): Label of info
    - "icon" (associative array) (default: {}): Predefined structure compatible with EC Icon
  - "links" (array) (default: []): List of links (required if Card type is a 'tile'). The format of each element in the array
    - "label" (string) (default: ''): Label of link
    - "path" (string) (default: ''): Link url (href attribute)
- **"icon_path"** (string) (default: '') Path to icons file
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (optional) (boolean) (default: false) Activates debug
- **"_compliance_inner_check_"** (optional) (boolean) (default: false) Inline compliance report

<!-- prettier-ignore -->
```twig
{% include '@ecl/card/card.html.twig' with { 
  card: { 
    type: 'tile', 
    description: 'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.', 
    image: { 
      src: 'https://v2--europa-component-library.netlify.com/example-image.jpg', 
      alt: 'Better regulation', 
    }, 
    title: { 
      type: 'standalone', 
      path: '/example', 
      label: 'Better regulation', 
    }, 
    meta: [ 'Meta 1', 'Meta 2', 'Meta 3' ], 
    infos: [ 
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
