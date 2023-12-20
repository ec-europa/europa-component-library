# ECL Accordion component

npm package: `@ecl/twig-component-accordion`

```shell
npm install --save @ecl/twig-component-accordion
```

### Parameters

- **"items"** (array) (default: []): format:
  - "id" (string) (default: '') Used for binding of togglable elements
  - "level" (string) (default: 3)
  - "toggle" (predefined structure): see Button component
    - "label" (string) (default: '')
  - "content" (string) (default: '')
- **"icon"** (associative array) (default: {}) A predefined structure compatible with Icon component.
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/accordion/accordion.html.twig' with { 
  items: [ 
    { 
      id: 'accordion-example', 
      level: 3, 
      toggle: { 
        label: 
          'Delivery of last pending proposals, a common Destiny of unity, the hour of European Democracy', 
      }, 
      content: 
        'The College of Commissioners held today the first weekly meeting of 2019 which was devoted to discussing the challenges of this new year. Commissioners used the opportunity to take stock and discuss the year ahead, including the European elections in May and other important milestones ahead.', 
    }, 
    ... 
  ], 
  icon: { 
    path: 'static/icons.svg', 
    name: 'plus', 
  }
} %} 
```
