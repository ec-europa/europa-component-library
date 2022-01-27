# ECL Category filter

npm package: `@ecl/twig-component-category-filter`

```shell
npm install --save @ecl/twig-component-category-filter
```

### Parameters

- **"icon_path"** (string) (default: ''): Path to the icon sprite
- **"items"** (associative array) (default: {}): The menu items - format:
  "label": (string) (default: '')
  "path": (string) (default: '')
  "is_current": (boolean) (optional),
  - "children": (associative array) (optional)
    "label": (string) (default: '')
    "path": (string) (default: '')
    "is_current": (boolean) (optional),
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated) for the nav element
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes for the nav element
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/category-filter/category-filter.html.twig' with {
  icon_path: '/icons.svg',
  items: [
    {
      label: "Item 1",
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
  extra_classes: "ecl-category-filter-extra-class,
  extra_attributes: [
    {
      name:"data-ecl-category-filter",
    },
    ...
    ]
} %}
```
