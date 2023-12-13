# ECL Menu

npm package: `@ecl/twig-component-menu`

```shell
npm install --save @ecl/twig-component-menu
```

### Parameters

- **"id"** (string) (default: random): Unique id
- **"title"** (string) (default: ''): Title of the menu (displayed on mobile)
- **"toggle"**: (associative array) (default: {}): Toggle (hambrger) link, using ECL Link structure
- **"close"**: (associative array) (default: {}): Close button, using ECL Button structure
- **"back_label"** (string): (default: ''): Back button label
- **"icon_path"** (string) (default: ''): Path to the icon sprite
- **"items"**: (array) (default: []): The menu items - format: [
  {
  "label": (string) (default: '')
  "path": (string) (default: '')
  "is_current": (boolean) (optional),
  "trigger_aria_label" (string),
  "children": (associative array) (optional): [
  {
  "label": (string) (default: '')
  "path": (string) (default: '')
  "is_current": (boolean) (optional),
  "external": (boolean)
  }
  ]
  }
  ],
- **"max_lines"**: (int) (default: 2): Number of lines for each first level item label. Set it to zero to remove this behavior
- **"site_name"** (string) (default: ''): Name of the website (used only on mobile)
- **"cta_link"** (optional) (default: {}): Call to action link compatible with ECL Link component structure (used only on mobile)
- **"menu_link"** (string) (default: ''): Href attribute of the menu toggler
- **"button_previous_label"** (string) (default: ''): Label for the button to display previous items, in case of overflow (for screen readers)
- **"button_next_label"** (string) (default: ''): Label for the button to display next items, in case of overflow (for screen readers)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated) for the nav element
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes for the nav element
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/menu/menu.html.twig' with {
  title: 'Menu',
  toggle: {
    link: {
      label: 'Menu',
      path: exampleLink,
    },
    icon: {
      path: '/icons.svg',
      name: 'hamburger',
      size: 'm',
    },
  },
  close: {
    label: 'Close',
    icon: {
      path: '/icons.svg',
      name: 'close',
      size: 'm',
    },
    hide_label: true,
  },
  back_label: 'Back',
  icon_path: '/icons.svg',
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
      ],
    },
    ...
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
