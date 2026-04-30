# ECL animated numbers component

npm package: `@ecl/animated-numbers`

```shell
npm install --save @ecl/animated-numbers
```

### Parameters

- **"with_background"** (boolean) (default: false)
- **"counter_color"** (boolean) (default: true)
- **"border"** (boolean) (default: false)
- **"sources_label"** (string) (default: '')
- **"items"** (array) (default: []): format:
  - "category" (string) (default: '')
  - "prefix" (string) (default: '')
  - "value" (string) (default: '')
  - "suffix" (string) (default: '')
  - "description" (string) (default: '')
  - "icon" (string) (default: {}) Object of type ECL icon
- **"sources"** (array) Array of items of type ECL link or string
  - "link"
    - "label" (string) (default: '')
    - "path" (string) (default: '')
      or
  - "name" (string) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
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
