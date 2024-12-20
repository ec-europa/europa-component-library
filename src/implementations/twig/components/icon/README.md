# ECL Icon component

npm package: `@ecl/twig-component-icon`

```shell
npm install --save @ecl/twig-component-icon
```

### Parameters

- **"icon"** (associative array) (default: predefined structure):
  {
  path (string) (default: ''): path to the icon file,
  name (string) (default: ''): name of the icon,
  size (string) (default: 'm'): icon size (available options: '2xs', 'xs','s','m','l','xl','2xl','fluid'),
  transform (string) (default: ''): icon transformation (available options: 'rotate-0', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical'),
  color (string) (default: ''): icon color (available options: 'default', 'inverted', 'primary')
  title (string) (default: ''): additional title for the icon; shortcut for extra accessibility title parameter
  category (string) (default: ''): icon category; only used for webtools markup
  wt_markup (boolean) (default: false): should the icon use the Webtools markup?
  }
- **"as_image"** (boolean) (default: false): should the icon be displayed as an image?
- **"extra_accessibility"** (associative array) (default: {}):
  {
  description (string) (default: ''): additional description
  description_id (string) (default: ''): unique id for the description
  title (string) (default: ''): additional title
  title_id (string) (default: ''): unique id for the title
  role (string) (default: ''): role attribute
  }
- **"extra_classes"** (string) (default: ''): additional classes (space separated)
- **"extra_attributes"** (array) (default: []):
  [
  {
  name (string) (default: ''),
  value (string) (default: ''),
  }
  ...
  ],

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
