# ECL Breadcrumb component

npm package: `@ecl/breadcrumb`

```shell
npm install --save @ecl/breadcrumb
```

### Parameters

- **"links"** (array) (default: []): format:
  - "label" (string) (default: '') Label of link
  - "path" (string) (default: '') URL of link
- **"navigation_text"** (string) (default: ''): Text of navigation in breadcrumb
- **"ellipsis_label"** (string) (default: ''): Label of the ellipsis, e.g. "Click to expand"
- **"ellipsis_text"** (string) (default: '...'): Text of the ellipsis
- **"min_items_left"** (integer) (default: 1): Minimum number of breadcrumb items to display on the left side before ellipsis
- **"min_items_right"** (integer) (default: 2): Minimum number of breadcrumb items to display on the right side after ellipsis
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/breadcrumb/breadcrumb.html.twig' with { 
  links: [ 
    { 
      label: 'Link 1', 
      path: '/example' 
    }, 
    { 
      label: 'Link 2', 
      path: '/example' 
    }, 
    { 
      label: 'Link 3', 
      path: '/example' 
    }, 
    { 
      label: 'Link 4', 
      path: '/example' 
    }, 
    { 
      label: 'Link 5', 
      path: '/example' 
    }, 
    { 
      label: 'Link 6', 
      path: '/example' 
    }, 
  ], 
  navigation_text: 'You are here:',  
  ellipsis_label: 'Click to expand' 
} %}  
```
