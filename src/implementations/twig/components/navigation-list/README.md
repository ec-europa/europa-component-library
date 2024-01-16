# ECL Navigation List component

npm package: `@ecl/twig-component-navigation-list`

```shell
npm install --save @ecl/twig-component-navigation-list
```

### Parameters

- **"items"** (array) (default: []): array of list_illustration_item
  - **"variant"** (string) (default: '') - Can only be "illustration"
  - **"picture** (associative array) (default: {}): picture of the navigation list, following ECL Picture structure
  - **"title"** (associative array) (default: {}): Predefined structure compatible with Link component
  - **"description"** (string) (default: ''): Description of the navigation list
  - **"links"** (array) (default: []): Array or multi array of ECL Links
- **"border"** (boolean) (default: true): Is there an extra border and padding?
- **"column"** (number) (default: 2): number of columns (2 or 3)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

<!-- prettier-ignore -->
```twig
{% include '@ecl/navigation-list/navigation-list.html.twig' with { 
  items: [ 
    { 
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Alt text for the image',
        },
      },
      title: { 
        type: 'standalone', 
        label: 'Title 1', 
        path: exampleLink, 
      }, 
      description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis,  justo odio commodo tellus', 
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
          ... 
        ], 
        [ 
          { 
            link: { 
              label: 'Secondary link 1', 
              path: exampleLink, 
            }, 
          }, 
          ... 
        ], 
      ], 
    }, 
    ... 
} %}
```
