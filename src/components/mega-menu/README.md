# ECL Menu

npm package: `@ecl/mega-menu`

```shell
npm install --save @ecl/mega-menu
```

### Parameters

- **"id"** (string) (default: random) Unique id for the menu
- **"toggle"** (object) (default: {}) Toggle (hamburger) button following ECL Button structure
- **"close"** (object) (default: {}) Close button following ECL Button structure
- **"aria_label"** (string) (default: '') Aria label for the main nav element
- **"second_level_aria_label"** (string) (default: '') Aria label for second-level sub-lists
- **"third_level_aria_label"** (string) (default: '') Aria label for third-level sub-lists
- **"back_label"** (string) (default: '') Back button label (mobile navigation)
- **"see_all_label"** (string) (default: '') Label for the "View all" link in sub-menus
- **"featured_priority"** (string) (default: 'secondary') Which featured panel is visible; can be 'primary', 'secondary'
- **"items"** (array) (default: []) Menu items; format: [
  {
  "label" (string) (default: '') Item label
  "path" (string) (default: '') Item link URL
  "external" (boolean) (default: false) Is the link external?
  "sr_external" (string) (default: '') Screen reader label for the external icon
  "one_level_only" (boolean) (default: false) Disable sub-level navigation for this item
  "promotional" (boolean) (default: false) Promotional item with custom CSS variable styling
  "container" (string) (default: '') Raw HTML container filled with content
  "info" (object) (default: {}) Info column: - "title" (string) Info panel title - "content" (string) Info panel content - "link" (object) "Discover more" link following ECL Link structure
  "featured" (object) (default: {}) Featured panel: - "title" (string) Featured panel title - "content" (string) Featured panel top content - "items" (array) Items with image, link and description
  "children" (array) (default: []) Second-level items:
  {
  "label" (string) (default: '') Item label
  "path" (string) (default: '') Item link URL
  "external" (boolean) (default: false) Is the link external?
  "sr_external" (string) (default: '') Screen reader label for the external icon
  "see_all" (boolean) Show "View All" button for this child
  "see_all_label" (string) "View All" button label
  "see_all_attributes" (array) Extra attributes for the "View All" button
  "extra_attributes" (array) Extra attributes for the link
  }
  }
  ]
- **"extra_classes"** (string) (default: '') Extra classes (space separated) for the nav element
- **"extra_attributes"** (array) (default: []) Extra attributes for the nav element
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

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
