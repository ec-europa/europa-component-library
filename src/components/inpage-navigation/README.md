# ECL Inpage navigation

npm package: `@ecl/inpage-navigation`

```shell
npm install --save @ecl/inpage-navigation
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"id"** (string) (default: random) Unique id for the component
- **"title"** (string) (default: '') Navigation section title
- **"trigger_aria_label"** (string) (default: '') Aria label for the mobile trigger button
- **"links"** (array) (default: []):
  - "href" (string) (default: '') Link target
  - "label" (string) (default: '') Link label
- **"icon_size"** (string) (default: 'xs') Size of the toggle icon
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
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
} %}
```
