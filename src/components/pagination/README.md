# ECL Pagination component

npm package: `@ecl/pagination`

```shell
npm install --save @ecl/pagination
```

### Parameters

- **"label"** (string) (default: ''): for screen reader
- **"items"** (array) (default: []):
  - "type" (string) (default: ''): could be 'previous', 'current', 'next', 'truncation' (previous and next are always visible)
  - "label" (string) (default: ''): label used when the item is not a link
  - "aria_label" (string) (default: '')
  - "link" (object) (default: ''): object of type Link (for next and previous set the item.link.link.hide_label to true in EC)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/pagination/pagination.html.twig' with { 
  label: 'Pagination', 
  items: [ 
    { 
      type: 'previous', 
      aria-label: 'Go to previous page', 
      link: { 
        link: { 
          path: '/example#previous', 
          label: 'Previous', 
          icon_position: 'before', 
        } 
        icon: { 
          name: 'corner-arrow', 
          size: 'xs', 
          transform: 'rotate-270', 
        }, 
      }, 
    }, 
    { 
      aria-label: 'Go to page 24', 
      link: { 
        link: { 
          path: '/example#page-24', 
          label: '24', 
        }, 
      }, 
    }, 
    ... 
    { 
      type: 'current', 
      aria-label: 'Page 26', 
      label: '26', 
    }, 
    ... 
    { 
      type: 'next', 
      aria-label: 'Go to next page', 
      link: { 
        link: { 
          path: '/example#next', 
          label: 'Next', 
          icon_position: 'after', 
        } 
        icon: { 
          type: 'ui', 
          name: 'corner-arrow', 
          size: 'xs', 
          transform: 'rotate-90', 
        }, 
      }, 
    }, 
  ], 
} %}
```
