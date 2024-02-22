# ECL Category filter

npm package: `@ecl/twig-component-category-filter`

```shell
npm install --save @ecl/twig-component-category-filter
```

### Parameters

- **"icon_path"** (string) (default: ''): Path to the icon sprite
- **"label"**: (string) (default: ''): Aria label provided for accessibility
- **"id"**: (string) (default: randomized string): Unique id for the category filter
- **"items"** (associative array) (default: {}): The tree items - format:
  "label": (string) (default: '')
  "path": (string) (default: '')
  - "children": (associative array) (optional)
    "label": (string) (default: '')
    "path": (string) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated) for the nav element
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes for the nav element
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/category-filter/category-filter.html.twig' with {
  icon_path: '/icons.svg',
  label: 'Category filter',
  id: 'unique-id',
  items: [
    {
      label: "Item 1",
      path: "example",
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
