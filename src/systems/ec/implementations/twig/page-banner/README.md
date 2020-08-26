# ECL-Twig Page Banner

npm package: `@ecl-twig/ec-component-page-banner`

```shell
npm install --save @ecl-twig/ec-component-page-banner
```

### Parameters

- **"type"** (string) (default: 'default') Type of banner (can be 'default','image','image-shade','primary')
- **"title"** (string) (default: '') Title of banner
- **"image"** (string) (default: '') Image for banner (required for image banner type)
- **"baseline"** (string) (default: '') Baseline of banner
- **"centered"** (bool) (default: true) Define if banner should be centered
- [DEPRECATED] **"button"** (associative array) (default: predefined structure) predefined structure for EC Button component
- **"link"** (associative array) (default: predefined structure) predefined structure for EC Link component
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **_compliance_** (boolean) (default: false) Activates debug
- **"_compliance_inner_check_"** (boolean) (default: false) inline compliance report

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-page-banner/ecl-page-banner.html.twig' with {  
  title: 'EU Budget for the future',  
  baseline: 'Innovation, economy, environment and geopolitics',  
  centered: true,  
  type: 'image',  
  image: 'url/path-to-image',  
  button: {  
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
