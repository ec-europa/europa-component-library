# ECL Content item component

npm package: `@ecl/twig-component-content-item`

```shell
npm install --save @ecl/twig-component-content-item
```

### Parameters

- **picture** (associative array) (default: {}):
  - **size** (string) (default: 'large'): Size of the picture (can be 'small' or 'large'). Small pictures should be square
  - **position** (string) (default: 'left'): Position of the picture (can be 'left', 'right' or 'top')
  - **img** (associative array) (default: {}):
    - **src** (string) (default: ''): Path to the default image
    - **alt** (string) (default: ''): Alt text of the default image
  - **sources** (array) (default: []): format: [
    {
    **src** (string) (default: ''): Path to the source image
    **media** (string) (default: ''): Media condition to use this source
    **type** (string) (default: ''): Type of this source
    },
    ...
    ]
- **date** (associative array) (default: {}): Predefined structure compatible with ECL Date block component
- **labels** (array) (default: []): Array of ECL Labels
- **labels_aria** (strings) (default: ''): Aria label for the labels area
- **primary_meta** (array of strings) (default: []): Primary meta of the content item
- **title** (associative array) (default: {}): Title of the content item, following ECL Link structure
- **description** (string) (default: ''): Description of the content item
- **secondary_meta** (array) (default: []): format: [
  {
  **label** (string) (default: ''): Label of secondary meta item
  **icon** (array) (default: {}) Icon of the secondary meta, following ECL Icon structure
  },
  ...
  ]
- **divider** (boolean) (default: false): Optional divider below the content item
- **lists** (array) (default: []): Array of ECL Description list
- **extra_classes** (string) (default: '')
- **extra_attributes** (array) (default: []): format: [
  {
  **name** (string) (default: ''),
  **value** (optional) (string)
  ...
  ],

<!-- prettier-ignore -->
```twig
{% include '@ecl/content-item/content-item.html.twig' with { 
  divider: true,
  picture: {
    position: 'left',
    size: 'large',
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'Alt text of the image',
    },
  },
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  labels_aria: 'Labels',
  primary_meta: ['PRIMARY META', 'DD Month Year'],
  title: {
    type: 'standalone',
    label: 'Title',
    path: exampleLink,
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
  secondary_meta: [
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
          term: 'Standard text',
          definition:
            'Lorem ipsum dolor sit amet, <a href="#" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis',
        },
        {
          term: 'Standalone links',
          type: 'link',
          definition: [
            {
              link: {
                label: 'Lorem ipsum dolor sit amet',
                path: exampleLink,
                icon_position: 'before',
              },
              icon: {
                name: 'copy',
                path: '/icons.svg',
                size: 's',
              },
            },
            {
              link: {
                label: 'Lorem ipsum dolor sit amet',
                path: exampleLink,
                icon_position: 'before',
              },
              icon: {
                name: 'download',
                path: '/icons.svg',
                size: 's',
              },
            },
          ],
        },
        {
          term: 'Links inline',
          type: 'link-inline',
          definition: [
            {
              link: {
                label: 'Lorem ipsum dolor sit amet',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Lorem ipsum dolor sit amet',
                path: exampleLink,
              },
            },
          ],
        },
        {
          term: 'Taxonomy list',
          type: 'taxonomy',
          definition: ['Taxonomy item 1', 'Taxonomy item 2', 'Taxonomy item 3'],
        },
      ],
    },
  ],
} %}
```
