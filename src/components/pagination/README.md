# ECL Pagination component

npm package: `@ecl/pagination`

```shell
npm install --save @ecl/pagination
```

### Parameters

- **"label"** (string) (default: '') Screen reader label for the navigation element
- **"items"** (array) (default: []) Pagination items; format:
  - "type" (string) (default: '') Item type; can be 'previous', 'current', 'next', 'truncation'
  - "label" (string) (default: '') Item label when it is not a link (e.g. current page number)
  - "aria_label" (string) (default: '') Aria label for the item
  - "link" (object) (default: {}) ECL Link structure; for prev/next, set `link.link.hide_label` to true in EC
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
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
