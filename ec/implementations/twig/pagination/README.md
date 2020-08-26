# ECL-Twig Pagination component

npm package: `@ecl-twig/ec-component-pagination`

```shell
npm install --save @ecl-twig/ec-component-pagination
```

### Parameters

- **"label"** (string) (default: ''): for screen reader
- **"items"** (array) (default: []):
  - "type" (string) (default: ''): could be 'previous', 'current' or 'next'
  - "label" (string) (default: ''): label used when the item is not a link
  - "aria_label" (string) (default: '')
  - "link" (object) (default: ''): object of type Link
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (optional) (boolean) (default: false): Activates the debug
- **"_compliance_inner_check_"** (optional) (boolean) (default: false): Activates the debug

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-pagination/ecl-pagination.html.twig' with { 
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
          path: 'path/to/icons.svg', 
          type: 'ui', 
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
          path: 'path/to/icons.svg', 
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
