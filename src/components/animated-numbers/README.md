# ECL animated numbers component

npm package: `@ecl/animated-numbers`

```shell
npm install --save @ecl/animated-numbers
```

### Parameters

- **"with_background"** (boolean) (default: false) Display with a colored background
- **"full_width"** (boolean) (default: false) Full width display with background (inside the grid)
- **"counter_color"** (boolean) (default: true) Apply color to the counter value
- **"border"** (boolean) (default: false) Display with a border around each item
- **"sources_label"** (string) (default: '') Label displayed before the global sources list
- **"sources"** (array) (default: []) Array of global source references (ECL link objects or plain strings)
  - "link" (object): ECL link object
    - "label" (string) (default: '') Link label
    - "path" (string) (default: '') Link URL
      or
  - "name" (string) (default: '') Plain text source
- **"items"** (array) (default: []): format:
  - "category" (string) (default: '') Category label above the value
  - "icon" (object) (default: {}) Object of type ECL icon
  - "prefix" (string) (default: '') Text displayed before the value
  - "prefix_label" (string) (default: '') Screen reader text for the prefix
  - "value" (string) (default: '') The main numeric value to display
  - "suffix" (string) (default: '') Text displayed after the value
  - "suffix_label" (string) (default: '') Screen reader text for the suffix
  - "description" (string) (default: '') Description below the value
  - "sources_label" (string) (default: '') Label displayed before the individual sources list; uses global sources label if not provided
  - "sources" (array) (default: []) Array of individual source references (ECL link objects or plain strings)
    - "link" (object): ECL link object
      - "label" (string) (default: '') Link label
      - "path" (string) (default: '') Link URL
        or
    - "name" (string) (default: '') Plain text source
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/animated-numbers/animated-numbers.html.twig' with {
  counter_color: false,
  sources_label: 'Sources:',
  sources: [
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'DG CNECT',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
  ],
  items: [
    {
      category: 'Revenue',
      icon: {
        name: 'users',
        family: 'phosphor',
      },
      prefix: '',
      value: '213',
      suffix: '€',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      category: 'Revenue',
      icon: {
        name: 'suffix-eur',
        family: 'phosphor',
      },
      prefix: 'billion',
      value: '888.2',
      suffix: '€',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
} %}
```
