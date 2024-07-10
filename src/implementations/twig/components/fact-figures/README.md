# ECL Fact and figures component

npm package: `@ecl/twig-component-fact-figures`

```shell
npm install --save @ecl/twig-component-fact-figures
```

### Parameters:

- **"column"** (integer) (default: 3): Number of columns (1 to 4)
- **"centered"** (boolean) (default: false)
- **"font_size"** (string) (default: 'l') Size of the value (can be 'm', 'l')
- **"items"** (array) (default: []):
  - "icon" (associate array) (default: { size: 'm' })
  - "value" (string) (default: '')
  - "title" (string) (default: '')
  - "description" (string) (default:'')
- **"view_all"** (optional) (associative array) (default: {})
  - "link" (associative array)
    - "label" (string) (default: ''),
    - "path" (string) (default: '')
  - "visible" (boolean) (default: true)
- **"display_icons"** (boolean) (default: true)
- **"icon_size"** (string) (default: 'l') (l or 2xl)
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
  icon_size: 'l', 
  items: [ 
    { 
      icon: { 
        path: "/icons.svg",
        name: "digital", 
      }, 
      value: "00.0 million", 
      title: "Lorem ipsum", 
      description: "Nunc condimentum sapien ut nibh finibus suscipit vitae at justo." 
    }, 
    { 
      icon: { 
        path: "/icons.svg",
        name: "digital", 
      }, 
      value: "00.0 million", 
      title: "Sed hendrerit", 
      description: "Turpis varius congue venenatis, erat dui feugiat felis." 
    }, 
  ], 
  view_all: { 
    link: { 
      label: "View all", 
      path: "/example" 
    },
  } 
} %} 
```
