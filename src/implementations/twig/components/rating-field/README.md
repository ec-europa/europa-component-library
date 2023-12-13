# ECL Rating field component

npm package: `@ecl/twig-component-rating-field`

```shell
npm install --save @ecl/twig-component-rating-field
```

### Parameters:

- **"id"** (string) (default: 'rating'): unique id for the rating field
- **"items"** (array) (default: []): array of radio_button
- **"name"** (string) (default: '')
- **"invalid"** (boolean) (default: false)
- **"invalid_icon"** (object) default({})
- **"star_filled_icon"** (object) default({})
- **"star_outline_icon"** (object) default({})
- **"required"** (boolean) (default: false)
- **"extra_classes"** (optional) (string) (default: '')
- **"extra_attributes"** (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/rating-field/rating-field.html.twig' with { 
  id: 'rating-id',
  name: 'rating-default', 
  invalid: false, 
  invalid_icon: { 
    path: '/icons.svg', 
    name: 'error', 
    size: 'm', 
  }, 
  star_filled_icon: { 
    path: '/icons.svg', 
    name: 'star-filled', 
    size: 'm', 
  }, 
  star_outline_icon: { 
    path: '/icons.svg', 
    name: 'star-outline', 
    size: 'm', 
  }, 
  items: [ 
    { 
      value: '1', 
      label: 'star 1', 
      checked: true, 
    }, 
    { 
      value: '2', 
      label: 'star 2', 
    }, 
    { 
      value: '3', 
      label: 'star 3', 
    }, 
    ... 
  ], 
} %}
```
