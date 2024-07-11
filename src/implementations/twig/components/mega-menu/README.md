# ECL Menu

npm package: `@ecl/twig-component-mega-menu`

```shell
npm install --save @ecl/twig-component-mega-menu
```

### Parameters

- **"id"** (string) (default: random): Unique id
- **"toggle"**: (associative array) (default: {}): Toggle (hambrger) link, using ECL Link structure
- **"title"** (string) (default: ''): Used as the inner container aria-label value
- **"close"**: (associative array) (default: {}): Object, using ECL Button structure
- **"back_label"** (string): (default: ''): Back button label
- **"icon_path"** (string) (default: ''): Path to the icon sprite
- **"items"**: (array) (default: []): The menu items - format: [
  {
  "label": (string) (default: '')
  "path": (string) (default: '')
  "external": (boolean) (optional)
  "sr_external" (string) (default: '') Additional label for the external icon
  "link_aria_label" (string)
  "container": (string) Empty container to be filled in with content
  "info" (object) (default: {}) Info column
  "title" (string) Title of the info panel
  "content" (string) Content of the info panel
  "link" (object) Structure for the "discover more" link, following ECL Link
  "featured" (object) (optional) {
  "title": (string)
  "content": (string)
  "items": (associative array)
  }
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
  title: 'Menu',
  toggle: {
    link: {
      label: 'Menu',
      path: exampleLink,
    },
    icon:
      {
        path: '/icons.svg',
        name: 'hamburger',
        size: 'm',
      },
    }, 
  },
  close: { 
    label: 'Close', 
    icon: { 
      path: '/icons.svg', 
      name: 'close', 
      size: 'm', 
    }, 
  }, 
  back_label: 'Back',
  icon_path: '/icons.svg',
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
