# ECL Menu

npm package: `@ecl/mega-menu`

```shell
npm install --save @ecl/mega-menu
```

### Parameters

- **"id"** (string) (default: random): Unique id
- **"toggle"**: (associative array) (default: {}): Toggle (hamburger) button, using ECL button structure
- **"close"**: (associative array) (default: {}): Object, using ECL Button structure
- **"aria_label"** (string): (default: ''): Main list aria label
- **"second_level_aria_label"** (string): (default: ''): Second level list aria label
- **"third_level_aria_label"** (string): (default: ''): Third level list aria label
- **"back_label"** (string): (default: ''): Back button label
- **featured_priority"** (string) (default: secondary) Can be primary otherwise: determines which featured panel will be visible
- **"items"**: (array) (default: []): The menu items - format: [
  {
  "label": (string) (default: '')
  "path": (string) (default: '')
  "external": (boolean) (optional)
  "promotional" (boolean) (default: false) Promotional menu item, styles can be custommized defining:
  --ecl-mega-menu-item-promotional-bg
  --ecl-mega-menu-item-promotional-hover-bg
  --ecl-mega-menu-item-promotional-focus-bg
  --ecl-mega-menu-item-promotional-outline-color
  --ecl-mega-menu-item-promotional-text-color
  --ecl-mega-menu-item-promotional-hover-text-color
  --ecl-mega-menu-item-promotional-focus-text-color
  "sr_external" (string) (default: '') Additional label for the external icon
  "container": (string) Empty container to be filled in with content
  "info" (object) (default: {}) Info column
  "title" (string) Title of the info panel
  "content" (string) Content of the info panel
  "link" (object) Structure for the "discover more" link, following ECL Link
  "featured" (object) (optional) {
  "title": (string)
  "content": (string)
  "items": (associative array) Array of items with image, link and description
  },
  "children": (associative array) (optional): [
  {
  "label": (string) (default: '')
  "path": (string) (default: '')
  "external": (boolean)
  "sr_external" (string) (default: '') Additional label for the external icon
  "see_all": (boolean)
  "see_all_label": (string)
  "see_all_attributes": (associative array)
  }
  ]
  }
  ],
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated) for the nav element
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes for the nav element
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/mega-menu/mega-menu.html.twig' with {
  toggle: {
    link: {
      label: 'Menu',
      path: exampleLink,
    },
    icon:
      {
        name: 'hamburger',
        size: 'm',
      },
    }, 
  },
  close: { 
    label: 'Close', 
    icon: { 
      name: 'close', 
      size: 'm', 
    }, 
  }, 
  back_label: 'Back',
  items: [
    {
      label: "Menu item",
      path: "example",
      children: [
        {
          label: "Item 1.1",
          path: "/example"
        },
        ...
      ],
    },
    ...
  ],
  extra_classes: "ecl-menu-extra-class,
  extra_attributes: [
    {
      name:"data-ecl-mega-menu",
    },
    ...
    ]
} %}
```
