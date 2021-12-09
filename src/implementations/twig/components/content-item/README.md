# ECL Content item component

npm package: `@ecl/twig-component-content-item`

```shell
npm install --save @ecl/twig-component-content-item
```

### Parameters

- **"variant"** (string) (default: ''): Variant of the content item (can be 'image-right' or 'event')
- **"image"** (associative array) (default: {}):
  - "src" (string) (default: ''): Path to the image
  - "size" (string) (default: 'm'): Size of the image (can be 's' or 'l')
- **"date"** (associative array) (default: {}): Predefined structure compatible with Date block component
- **"labels"** (array) (default: []): List of labels compatible with EC Label component structure
- **"meta"** (array) (default: []): Meta's for the Content item
- **"title"** (associative array) (default: {}): Predefined structure compatible with Link component
- **"description"** (string) (default: ''): Description of the Content item
- **"infos"** (array) (default: []): format: [
  {
  "label" (string) (default: ''): Label of info item
  "icon" (associative array) (default: {}) A predefined structure compatible with Icon component
  },
  ...
  ]
- **"lists"** (array) (default: []) Array of objects of type "description list". Used for taxonomy
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (array) (default: []): format: [
  {
  "name" (string) (default: ''),
  "value" (optional) (string)
  ...
  ],

<!-- prettier-ignore -->
```twig
{% include '@ecl/content-item/content-item.html.twig' with { 
  image: {
    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    size: 'l',
  },
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  meta: ['PRIMARY META', 'DD Month Year'],
  title: {
    type: 'standalone',
    label: 'Title',
    path: exampleLink,
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
  infos: [
    {
      icon: {
        name: 'calendar',
        size: 'xs',
        path: '/icons.svg',
      },
      label: '2018/10/22',
    },
    {
      icon: {
        name: 'location',
        size: 'xs',
        path: '/icons.svg',
      },
      label: 'Luxembourg',
    },
  ],
  lists: [
    {
      items: [
        {
          term: 'Science areas',
          definition: [
            {
              label: 'Energy and transport',
              variant: 'display',
            },
            {
              label: 'Standards',
              variant: 'display',
            },
          ],
        },
        {
          term: 'Keywords',
          definition: [
            {
              label: 'Electricity',
              variant: 'display',
            },
            {
              label: 'Electromobility',
              variant: 'display',
            },
            {
              label: 'Energy',
              variant: 'display',
            },
            {
              label: 'Energy storage',
              variant: 'display',
            },
            {
              label: 'Security',
              variant: 'display',
            },
            {
              label: 'Transport',
              variant: 'display',
            },
            {
              label: 'Low carbon',
              variant: 'display',
            },
          ],
        },
      ],
      variant: 'taxonomy',
    },
  ],
} %}
```
