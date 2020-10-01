# ECL-Twig Icon component

npm package: `@ecl-twig/ec-component-icon`

```shell
npm install --save @ecl-twig/ec-component-icon
```

### Parameters

- **"icon"** (associative array) (default: 'predefined structure below')
  - "path" (string) (default: '') - path/url to general icon file (eg. /path-to-icon/icon.svg)
  - "type" (string) (default: '') - type of icon. Available types are 'general', 'branded', 'notifications', 'ui'. A full list of icon types is available on the [ECL Iconography](https://v2--europa-component-library.netlify.com/ec/guidelines/iconography/)
  - "name" (string) (default: '') - name of icon, eg. 'facebook', 'twitter'. A full list of icon names is available on the [ECL Iconography](https://v2--europa-component-library.netlify.com/ec/guidelines/iconography/)
  - "size" (string) (default: 'm') size of icon. Available sizes are 'xs','s','m','l','xl','2xl','fluid'
  - "transform" (string) (default: '') Transformation of icon. Available transformations are 'rotate-0', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical')
  - "color" (string) (default: '') Color of icon. Available colors are 'default', 'inverted', 'primary'
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-icon/ecl-icon.html.twig' with { 
  icon: { 
    path: '/static/media/icons.svg', 
    type: 'branded', 
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
