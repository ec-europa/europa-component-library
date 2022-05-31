# ECL Five stars component

npm package: `@ecl/twig-component-five-stars`

```shell
npm install --save @ecl/twig-component-five-stars
```

### Parameters:

- **"items"** (array) (default: [])
  - "id" (string) (default: '')
  - "name" (string) (default: '')
  - "value" (string) (default: '')
  - "disabled" (boolean) (default: false)
  - "checked" (boolean) (default: false)
  - "required" (boolean) (default: false)
  - "helper_id" (string) (default: '')
  - "helper_text" (block) (default: '')
  - "label" (block) (default: '')
- **"name"** (string) (default: '')
- **"helper_id"** (string) (default: '')
- **"invalid"** (boolean) (default: false)
- **"invalid_icon"** (object) default({})
- **"star_filled_icon"** (object) default({})
- **"star_outline_icon"** (object) default({})
- **"required"** (boolean) (default: false)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "label"
- "helper_text"
- "invalid_text"
- "label"
- "optional_text"
- "required_text"

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/five-stars/five-stars.html.twig' with { 
  label: 'Please rate', 
  helper_id: 'rating-default-helper', 
  helper_text: 'Helper text for the group', 
  invalid_text: 'Error message for the group', 
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
