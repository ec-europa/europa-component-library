# ECL Timeline

npm package: `@ecl/timeline`

```shell
npm install --save @ecl/timeline
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"toggle_collapsed"** (string) (default: '')
- **"toggle_expanded"** (string) (default: '')
- **"hide"** (object): (default: undefined)
  - "from": (integer) (default: items.length) Item index after which to start hiding timeline items
  - "to": (integer) (default: items.length) Item index after which to resume displaying timeline items
- **"items"** (array) (default: []):
  - "id": (string) (default: '')
  - "label": (string) (default: '')
  - "title": (string) (default: '')
  - "content": (block) (default: '')
- **"headline"** (object) (default: {}): Highlighted item at the top of the timeline
  - "label": (string) (default: '')
  - "title": (string) (default: '')
  - "content": (block) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/timeline/timeline.html.twig' with { 
  toggle_collapsed: 'Show 10 more items', 
  toggle_expanded: 'Hide 10 items', 
  hide: {from: 7, to: -2}, 
  items: [ 
    { 
      label: '13 September 2017', 
      title: 'Item title', 
      content: 
        '<a href="/example" class="ecl-link">President Juncker\'s State of the Union speech</a>', 
    } 
  ... 
  ] 
} %}
```
