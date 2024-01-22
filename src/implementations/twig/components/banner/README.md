# ECL Banner

npm package: `@ecl/twig-component-banner`

```shell
npm install --save @ecl/twig-component-banner
```

### Parameters

- **"variant"** (string) (default: 'plain-background') Variant of the banner
  (can be 'plain-background', 'text-box', 'text-overlay')
- **"size"** (string) (default: 'm') Size of the banner (can be 's', 'm', 'l')
- **"title"** (string) (default: '') Title of banner
- **"picture"** (associative array) (default: {}): Image for the banner, following ECL Picture structure
- **"credit"** (string) (default: '') Credit for the image
- **"description"** (string) (default: '') Description of banner
- **"centered"** (bool) (default: false) Define if banner should be centered
- **"full_width"** (bools) (default: false) Extends the banner to whole viewport when used inside the grid
- **"link"** (associative array) (default: predefined structure) predefined structure for the Link component
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/banner/banner.html.twig' with {  
  title: 'EU Budget for the future',  
  description: 'Innovation, economy, environment and geopolitics',  
  centered: true,  
  variant: 'text-overlay',
  picture: {
    img: {
      src: 'url/path-to-image',
      alt: 'alternative text',
    },
  },
  credit: '© Copyright',
  link: {  
    link: {  
      label: 'Subscribe',  
      icon_position: 'after',  
    },  
    icon: {  
      path: 'path-to-the-icon-file',  
      ...  
    },  
  },  
} %}
```
