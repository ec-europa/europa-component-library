# ECL Navigation List component

npm package: `@ecl/navigation-list`

```shell
npm install --save @ecl/navigation-list
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"items"** (array) (default: []) Navigation list items; format:
  - "color_mode" (string) (default: '') Color mode for this item
  - "variant" (string) (default: '') Item variant; can be 'illustration', 'image-as-illustration'
  - "picture" (object) (default: {}) Item image following ECL Picture structure
  - "title" (object) (default: {}) Item title link following ECL Link structure
  - "description" (string) (default: '') Item description text
  - "links" (array) (default: []) Array of ECL Link groups (each group is an array of ECL Links)
- **"border"** (boolean) (default: true) Show extra border and padding around items
- **"column"** (number) (default: 2) Number of columns; can be 2 or 3
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
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
