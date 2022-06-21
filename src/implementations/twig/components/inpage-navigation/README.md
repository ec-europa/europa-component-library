# ECL Inpage navigation

npm package: `@ecl/twig-component-inpage-navigation`

```shell
npm install --save @ecl/twig-component-inpage-navigation
```

### Parameters

Parameters:

- **"id"** (string) (default: 'ecl-inpage-navigation-default')
- **"title"** (string) (default: '')
- **"links"** (associative array) (default: predefined structure):
  - href: (string) (default: '')
  - label: (string) (default: '')
- **"icon_path"** (string) (default: ''): path to the icons svg
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/inpage-navigation/inpage-navigation.html.twig' with {  
  title: 'Page contents', 
  links: [ 
    { 
      href: "#inline-nav-1", 
      label: "Heading 1" 
    }, 
    { 
      href: "#inline-nav-2", 
      label: "Heading 2" 
    }, 
    { 
      href: "#inline-nav-3", 
      label: "Heading 3" 
    }, 
    { 
      href: "#inline-nav-4", 
      label: "Heading 4" 
    }, 
  ], 
  icon_path: '/static/media/icons.svg' 
} %}
```
