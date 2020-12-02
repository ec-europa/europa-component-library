# ECL Tag component

npm package: `@ecl/twig-component-tag`

```shell
npm install --save @ecl/twig-component-tag
```

### Parameters

- **"tag"** (associative array) (default: 'predefined structure below')
  - "path" (string) (default: '') - path/url for tag (if needed - only for type 'link')
  - "type" (string) (default: '') - type of tag (can be 'link', 'removable', 'display', 'button' (deprecated))
  - "label" (string) (default: '') - tag label
- **"default_icon_path"** (string ) (default: '') - path for the icon image (need to render Icon component if tag type is 'removable')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
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
  default_icon_path: '/path-to-the-icon-file', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
