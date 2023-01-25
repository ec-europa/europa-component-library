# ECL Page Banner

npm package: `@ecl/twig-component-page-banner`

```shell
npm install --save @ecl/twig-component-page-banner
```

### Parameters

- **"variant"** (string) (default: 'primary') Variant of banner (can be 'primary', 'seconary, 'white', image','image-shade','image-gradient')
- **"title"** (string) (default: '') Title of banner
- **"image"** (string) (default: '') Image for banner (required for image banner type)
- **credit** (string) (default: '') Credit for the image
- **"description"** (string) (default: '') Description of banner
- **"centered"** (bool) (default: true) Define if banner should be centered
- **"full_width"** (bools) (default: false) Extends the banner to whole viewport when used inside the grid
- **"link"** (associative array) (default: predefined structure) predefined structure for the Link component
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/page-banner/page-banner.html.twig' with {  
  title: 'EU Budget for the future',  
  description: 'Innovation, economy, environment and geopolitics',  
  centered: true,  
  variant: 'image',  
  image: 'url/path-to-image',  
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
