# ECL List with illustration component

npm package: `@ecl/list-illustration`

```shell
npm install --save @ecl/list-illustration
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"items"** (array) (default: []):
  - "title" (string) (default: '') Item title
  - "description" (string) (default: '') Item description text
  - "value" (string) (default: '') Optional metric value displayed prominently
  - "picture" (object) (default: {}) Image following ECL Picture structure
  - "square" (boolean) (default: false) Use a squared image (100x100px)
  - "icon" (object) (default: {}) Icon following ECL Icon structure
  - "media_size" (string) (default: 'm') Size of the media element (picture or icon); can be 's', 'm', 'l'
- **"column"** (number) (default: 1) Number of columns; 1 means vertical single-column display
- **"icon_inline"** (boolean) (default: false) Render the icon on the left of the item
- **"icon_list"** (boolean) (default: false) Render as icon list
- **"number_list"** (boolean) (default: false) Render as numbered list
- **"counter_reset"** (boolean) (default: true) Reset the counter to start from `counter_start`
- **"counter_start"** (number) (default: 0) Number to start the counter from when `counter_reset` is true
- **"divider"** (boolean) (default: false) Show separator between items in an icon list
- **"zebra"** (boolean) (default: false) Alternate background color for items in vertical list
- **"centered"** (boolean) (default: false) Center-align item content
- **"font_size"** (string) (default: 'l') Size of the value text; can be 'm', 'l'
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
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
