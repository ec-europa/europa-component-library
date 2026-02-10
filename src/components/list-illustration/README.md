# ECL List with illustration component

npm package: `@ecl/list-illustration`

```shell
npm install --save @ecl/list-illustration
```

### Parameters

- **color_mode** (string) (default: '') Name of the color mode
- **"items"** (array) (default: [])
  - "title" (string) (default: '')
  - "description" (string) (default: '')
  - "value" (string) (default: ''): Optional metrics
  - "picture" (associative array) (default: {}): Image, following ECL Picture structure
  - "square" (boolean) (default: false): Squared image (100x100px)
  - "icon" (associative array) (default: {}): predefined structure for Icon component
  - "media_size" (string) (default: 'm'): size of the media (square picture or icon). Could be 's', 'm' or 'l'
- **"column"** (number) (default: 1): number of columns (1 column means vertical display)
- **"icon_inline"** (boolean) (default: false) Renders the icon on the left of the item
- **"icon_list"** (boolean) (default: false) Renders as icon list
- **"number_list"** (boolean) (default: false) Renders as number list
- **"counter_reset"** (boolean) (default: true) Resets the counter so that it starts from zero
- **"counter_start"** (number) (default: 0) Number to start the counter from, if counter_reset is true
- **"divider"** (boolean) (default: false) Separator for items of an icon list
- **"zebra"** (optional) (boolean) (default: false) use alternate background display for vertical list
- **"centered"** (bool) (default: false) Define if the items should be centered
- **"font_size"** (string) (default: 'l') Size of the value (can be 'm', 'l')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

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
      value: '3.2 million',
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
