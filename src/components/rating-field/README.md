# ECL Rating field component

npm package: `@ecl/rating-field`

```shell
npm install --save @ecl/rating-field
```

### Parameters:

- **"id"** (string) (default: random): unique id for the rating field
- **"items"** (array) (default: []): array of radio_button
- **"name"** (string) (default: '')
- **"invalid"** (boolean) (default: false)
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
  star_filled_icon: { 
    name: 'star-filled', 
    size: 'm', 
  }, 
  star_outline_icon: { 
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
