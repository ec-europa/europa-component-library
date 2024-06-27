# ECL Icon component

npm package: `@ecl/twig-component-icon`

```shell
npm install --save @ecl/twig-component-icon
```

### Parameters

- **"icon"** (associative array) (default: 'predefined structure below')
  - "path" (string) (default: '') - path/url to general icon file (eg. /path-to-icon/icon.svg)
  - "name" (string) (default: '') - name of icon, eg. 'facebook', 'twitter'.
  - "size" (string) (default: 'm') size of icon. Available sizes are 'xs','s','m','l','xl','2xl','fluid'
  - "transform" (string) (default: '') Transformation of icon. Available transformations are 'rotate-0', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical')
  - "color" (string) (default: '') Color of icon. Available colors are 'default', 'inverted', 'primary'
  - "title": '' (string) (default: '') Additional title for the icon; shortcut for extra accessibility title
- **"as_image"**: (boolean) (default: false) Whether the icon is used as an image
- **"extra_accessibility"** (optional) (object) Extra tags for accessibility when used as an image
  - description: '' (desc tag)
  - description_id: '' (desc tag id)
  - title: '' (title tag)
  - title_id: '' (title tag id)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/icon/icon.html.twig' with { 
  icon: { 
    path: '/static/media/icons.svg', 
    name: 'facebook', 
    size: 'm', 
    transform: 'rotate-90', 
    color: 'primary' 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %} 
```
