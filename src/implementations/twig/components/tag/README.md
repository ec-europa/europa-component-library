# ECL Tag component

npm package: `@ecl/twig-component-tag`

```shell
npm install --save @ecl/twig-component-tag
```

### Parameters

- **"tag"** (associative array) (default: 'predefined structure below')
  - type: string (default: 'link') can be 'link' or 'removable'
  - path: string (default: '') tag url if needed),
  - label: string (default: '') tag text as string,
  - external: boolean (default: false) External icon for a tag with link
  - aria_label: (string) (default: '') (optional) aria label for removable tag as a string
  - nowrap: boolean (default: false) force the tag to stay on one line
- **"icon_path"** (string ) (default: '') - path for the icon image (need to render Icon component if tag type is 'removable')
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
  icon_path: '/path-to-the-icon-file', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
