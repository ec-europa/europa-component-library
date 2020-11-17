# ECL Hero Banner

npm package: `@ecl/twig-component-hero-banner`

```shell
npm install --save @ecl/twig-component-hero-banner
```

### Parameters

- **"type"** (string) (default: 'default') Type of banner (can be 'default','image','image-shade','primary')
- **"title"** (string) (default: '') Title of banner
- **"image"** (string) (default: '') Image for banner (required for image banner type)
- **"description"** (string) (default: '') Description of banner
- **"centered"** (bool) (default: true) Define if banner should be centered
- [DEPRECATED] **"button"** (associative array) (default: predefined structure) predefined structure for EC Button component
- **"link"** (associative array) (default: predefined structure) predefined structure for EC Link component
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1',
- **"\_compliance\_"**: (optional) (boolean) (default: false) Activates debug
- **"\_compliance_inner_check\_"** (optional) (boolean) (default: false) Inline compliance report

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/hero-banner/hero-banner.html.twig' with {  
  title: 'EU Budget for the future',  
  description: 'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',  
  centered: true,  
  type: 'image',  
  image: 'url/path-to-image',  
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
