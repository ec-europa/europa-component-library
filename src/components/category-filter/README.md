# ECL Category filter

npm package: `@ecl/category-filter`

```shell
npm install --save @ecl/category-filter
```

### Parameters

- **color_mode** (string) (default: '') Name of the color mode
- **"label"**: (string) (default: ''): Aria label provided for accessibility
- **"id"**: (string) (default: randomized string): Unique id for the category filter
- **"name"** (string) (default: '') Optional name attribute to link the first level items. Ignored if `expand_all` or `collapse_all` is displayed
- **"items"** (associative array) (default: {}): The tree items - format:
  "label": (string) (default: '')
  "path": (string) (default: '')
  "current" (boolean) (default: false)
  "extra_attributes" (array) (default: [])
  - "children": (associative array) (optional)
    "label": (string) (default: '')
    "path": (string) (default: '')
    "current" (boolean) (default: false)
    "extra_attributes" (array) (default: [])
- **"expand_all"** (associative array) (default: {}): Button for expanding all the items; following ECL button structure
- **"collapse_all"** (associative array) (default: {}): Button for collapsing all the items; following ECL button structure
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated) for the nav element
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes for the nav element
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/category-filter/category-filter.html.twig' with {
  label: 'Category filter',
  id: 'unique-id',
  expand_all: {
    label: 'Expand all',
  },
  collapse_all: {
    label: 'Collapse all',
  },
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
