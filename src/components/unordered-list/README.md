# ECL Unordered list component

npm package: `@ecl/unordered-list`

```shell
npm install --save @ecl/unordered-list
```

### Parameters

- **"items"** (array) (default: []) List items; format:
  - "label" (string) Item text
  - "nested" (array) (default: []) Nested unordered list items (same structure)
- **"variant"** (string) (default: '') List variant; can be 'no-marker', 'divider'
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/unordered-list/unordered-list.html.twig' with { 
  items: [ 
    { 
      label: 'Jobs, growth and investment', 
      nested: [ 
        { 
          label: 'Investment Plan for Europe: the Juncker Plan', 
        }, 
        { 
          label: 'European Semester', 
        } 
      ] 
    }, 
    { 
      label: 'Digital single market', 
    }, 
    { 
      label: 'Energy union and climate', 
      nested: [ 
        { 
          label: 'Security, solidarity and trust', 
        }, 
        { 
          label: 'A fully-integrated internal energy market', 
        }, 
        { 
          label: 'Energy efficiency', 
        } 
      ] 
    } 
  ],
  variant: 'no-marker' 
} %}
```
