# ECL Accordion component

npm package: `@ecl/accordion`

```shell
npm install --save @ecl/accordion
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"items"** (array) (default: []): format:
  - "toggle" (object): Toggle button for the accordion item
    - "label" (string) (default: '') Label of the toggle button
    - "extra_classes" (string) (default: '') Extra classes for the toggle button
  - "content" (string) (default: '') Content inside the accordion item
- **"sidebar"** (boolean) (default: false) If true, the accordion will be styled for use in a sidebar
- **"icon"** (array) OR (object) (default: []) Two icons in an array that will be toggled (open/close)
- **"name"** (string) (default: '') Optional name attribute to link multiple accordion items (HTML `name` on `<details>`)
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/accordion/accordion.html.twig' with {
  items: [
    {
      id: 'accordion-example',
      toggle: {
        label:
          'Delivery of last pending proposals, a common Destiny of unity, the hour of European Democracy',
      },
      content:
        'The College of Commissioners held today the first weekly meeting of 2019 which was devoted to discussing the challenges of this new year. Commissioners used the opportunity to take stock and discuss the year ahead, including the European elections in May and other important milestones ahead.',
    },
    ...
  ],
  icon: [{
    path: 'static/icons.svg',
    name: 'plus',
  },
  {
    path: 'static/icons.svg',
    name: 'minus',
  }]
} %}
```
