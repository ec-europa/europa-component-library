# ECL Content block component

npm package: `@ecl/twig-component-content-block`

```shell
npm install --save @ecl/twig-component-content-block
```

### Parameters

- **labels** (array) (default: []): Array of ECL Labels
- **labels_aria** (strings) (default: ''): Aria label for the labels area
- **primary_meta** (array of strings) (default: []): Primary meta of the content block
- **title** (associative array OR string) (default: {}): Title of the content block, following ECL Link structure
- **description** (string) (default: ''): Description of the content block
- **secondary_meta** (array) (default: []): format: [
  {
  "label" (string) (default: ''): Label of secondary meta item
  "icon" (array) (default: {}) Icon of the secondary meta, following ECL Icon structure
  },
  ...
  ]
- **links** (array) (default: []): Array or multi array of ECL Links
- **lists** (array) (default: []): Array of ECL Description list
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (array) (default: []): format: [
  {
  "name" (string) (default: ''),
  "value" (optional) (string)
  },
  ...
  ],

<!-- prettier-ignore -->
```twig
{% include '@ecl/content-block/content-block.html.twig' with { 
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  labels_aria: 'Labels',
  primary_meta: ['PRIMARY META', 'DD Month Year'],
  title: {
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
  links: [
    [
      {
        link: {
          label: 'Primary link 1',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Primary link 2',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Primary link 3',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Primary link 4',
          path: exampleLink,
        },
      },
    ],
    [
      {
        link: {
          label: 'Secondary link 1',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Secondary link 2',
          path: exampleLink,
        },
      },
    ],
  ],
  lists: [
    {
      items: [
        {
          term: 'European Commission',
          definition:
            'The executive body of the European Union formed in 1967, which initiates action in the EU and mediates between member governments. Former name (until 1993): Commission of the European Communities',
        },
        {
          term: 'European Union',
          definition:
            'An association of European nations formed in 1993 for the purpose of achieving political and economic integration.',
        },
        {
          term: 'Citizen',
          definition:
            'A native or naturalized member of a state or nation who owes allegiance to its government and is entitled to its protection',
        },
      ],
    },
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
    },
  ],
} %}
```
