# ECL-Twig Menu

npm package: `@ecl-twig/ec-component-menu`

```shell
npm install --save @ecl-twig/ec-component-menu
```

### Parameters

- **title:** (string) (default: ''): Title
- **close:** (string) (default: ''): Close button label
- **back:** (string): (default: ''): Back button label
- **menu_link:** (string): (default: ''): Href attribute of the menu toggler
- **"icon_path"** (string) (default: ''): Path to the icon sprite
- **"items"** (associative array) (default: {}): The menu items - format:
  "label": (string) (default: '')
  "path": (string) (default: '')
  "is_current": (boolean) (optional),
  - "children": (associative array) (optional)
    "label": (string) (default: '')
    "path": (string) (default: '')
    "is_current": (boolean) (optional),
- **"site_name"** (string) (default: ''): Name of the website
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated) for the nav element
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes for the nav element
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (boolean) (default: false) Activates debug

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-menu/ecl-menu.html.twig' with { 
  title: 'Menu', 
  close: 'Close', 
  back: 'Back', 
  icon_path: '/icons.svg', 
  site_name: 'Site name', 
  menu_link: './example.com', 
  items: [ 
    { 
      label: "Menu item", 
      path: "example", 
      is_current: false, 
      children: [ 
        {
          label: "Item 1.1",
          path: "/example"
        },
        ...
        ] 
      } 
      ... 
      ], 
    } 
  ], 
  extra_classes: "ecl-menu-extra-class, 
  extra_attributes: [ 
    { 
      name:"data-ecl-menu", 
    }, 
    ... 
    ] 
} %} 
```
