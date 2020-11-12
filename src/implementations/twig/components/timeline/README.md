# ECL Timeline

npm package: `@ecl/twig-component-timeline`

```shell
npm install --save @ecl/twig-component-timeline
```

### Parameters

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
- **"icon_path"** (string) (default: ''): file containing the svg icons
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (boolean) (default: false) Activates debug

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/timeline/timeline.html.twig' with { 
  toggle_collapsed: 'Show 10 more items', 
  toggle_expanded: 'Hide 10 items', 
  hide: {from: 7, to: -2}, 
  items: [ 
    { 
      id: '1', 
      label: '13 September 2017', 
      title: 'Item title', 
      content: 
        '<a href="/example" class="ecl-link">President Juncker\'s State of the Union speech</a>', 
    } 
  ... 
  ] 
} %}
```
