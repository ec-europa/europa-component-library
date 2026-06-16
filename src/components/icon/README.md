# ECL Icon component

npm package: `@ecl/icon`

```shell
npm install --save @ecl/icon
```

### Parameters

- **"icon"** (associative array) (default: {}):
  - "name" (string) (default: '') Icon name, eg. 'facebook', 'twitter'
  - "size" (string) (default: 'm') Icon size; can be 'xs', 's', 'm', 'l', 'xl', '2xl', 'fluid'
  - "transform" (string) (default: '') Icon transformation; can be 'rotate-0', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical'
  - "color" (string) (default: '') Icon color; can be 'default', 'inverted', 'primary'
  - "title" (string) (default: '') Accessible title for the icon (shortcut for extra_accessibility.title)
  - "family" (string) (default: '') Icon family (e.g. 'phosphor')
  - "style" (string) (default: '') Icon style; mostly for social network icons; can be 'primary', 'monochrome', 'inverted'
- **"as_image"** (boolean) (default: false) Whether the icon should be treated as an image for accessibility
- **"extra_accessibility"** (object) (default: {}) Accessibility tags when used as an image:
  - "description" (string) (default: '') Content for the `<desc>` tag
  - "description_id" (string) (default: '') Id for the `<desc>` tag
  - "title" (string) (default: '') Content for the `<title>` tag
  - "title_id" (string) (default: '') Id for the `<title>` tag
  - "role" (string) (default: '') Role attribute value
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/icon/icon.html.twig' with { 
  icon: { 
    name: 'audio', 
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
