# ECL List with illustration component

npm package: `@ecl/twig-component-list-illustration`

```shell
npm install --save @ecl/twig-component-list-illustration
```

### Parameters

- **"items"** (array) (default: [])
  - "title" (string) (default: '')
  - "description" (string) (default: '')
  - "picture" (associative array) (default: {}): Image, following ECL Picture structure
  - "square" (boolean) (default: false): Squared image (100x100px)
  - "icon" (associative array) (default: {}): predefined structure for Icon component
- **"column"** (number) (default: 1): number of columns (1 column means vertical display)
- **"zebra"** (optional) (boolean) (default: false) use alternate background display for vertical list
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

Deprecated

- **"image"** (optional) (object) (default: {}) image
  - "src" (string) Image src
  - "alt" (string) Image alt
  - "square" (boolean) Squared image

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/list-illustration/list-illustration.html.twig' with {
  zebra: true,
  items: [
    {
      title: 'Display list item 1',
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Image alternative text',
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.',
    },
    {
      title: 'Display list item 2',
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Image alternative text',
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.',
    },
    {
      title: 'Display list item 3',
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Image alternative text',
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.',
    },
    {
      title: 'Display list item 4',
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Image alternative text',
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.',
    },
  ],
} %}
```
