# ECL Add to calendar component

npm package: `@ecl/add-to-calendar`

```shell
npm install --save @ecl/add-to-calendar
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"picture"** (associative array) (default: {}): Image for the event, following ECL Picture structure
- **"title"** (string) (default: ''): Event title
- **"meta"** (array) (default: []): format: [
  {
  "label" (string) (default: ''): Label of meta item
  "icon" (array) (default: {}) Icon of the meta, following ECL Icon structure
  },
  ...
  ]
- **"button_add"** (string) (default: '') Markup of the button to add to calendar (managed by Webtools)
- **"full_width"**: (bool) (default: false) Full width display (inside the grid)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'.

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/add-to-calendar/add-to-calendar.html.twig' with { 
  title: 'Event title', 
  picture: {
    img: {
      src: '/path/to/your/image',
      alt: 'An alternate text',
    },
  },
  meta: [
    {
      icon: {
        name: 'calendar',
        size: 'xs',
      },
      label: '2018/10/22',
    },
    {
      icon: {
        name: 'location',
        size: 'xs',
      },
      label: 'Luxembourg',
    },
  ],
} %} 
```
