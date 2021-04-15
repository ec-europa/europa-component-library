# ECL Fact and figures component

npm package: `@ecl/twig-component-fact-figures`

```shell
npm install --save @ecl/twig-component-fact-figures
```

### Parameters:

- **"column"** (integer) (default: 3): Number of columns to divide the items with
- **"items"** (array) (default: []):
  - "icon" (associate array) (default: { size: 'm' })
  - "value" (string) (default: '')
  - "title" (string) (default: '')
  - "description" (string) (default:'')
- **"view_all"** (optional) (associative array) (default: {})
  - "link" (associative array) {
    - "label" (string) (default: ''),
    - "path" (string) (default: '')
  - "visible" (boolean) (default: true)
- **"display_icons"** (boolean) (default: true)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/fact-figures/fact-figures.html.twig' with { 
  column: 3, 
  display_icons, true, 
  items: [ 
    { 
      icon: { 
        path: "static/media/icons.1dbe9812.svg",
        name: "digital", 
        size: "m" 
      }, 
      value: "00.0 million", 
      title: "Lorem ipsum", 
      description: "Nunc condimentum sapien ut nibh finibus suscipit vitae at justo." 
    }, 
    { 
      icon: { 
        path: "static/media/icons.1dbe9812.svg",
        name: "digital", 
        size: "m" 
      }, 
      value: "00.0 million", 
      title: "Sed hendrerit", 
      description: "Turpis varius congue venenatis, erat dui feugiat felis." 
    }, 
  ], 
  view_all: { 
    link: { 
      label: "View all metrics", 
      path: "/example" 
    },
  } 
} %} 
```
