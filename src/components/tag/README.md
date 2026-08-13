# ECL Tag component

npm package: `@ecl/tag`

```shell
npm install --save @ecl/tag
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"tag"** (object) (default: {}):
  - "type" (string) (default: 'link') Tag type; can be 'link', 'removable'
  - "path" (string) (default: '') Tag link URL
  - "label" (string) (default: '') Tag text
  - "external" (boolean) (default: false) Show external icon for link tags
  - "aria_label" (string) (default: '') Aria label for removable tags
  - "nowrap" (boolean) (default: false) Prevent the tag from wrapping
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/tag/tag.html.twig' with { 
  tag: { 
    type: 'removable', 
    path: '/example', 
    label: 'Tag 1' 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
