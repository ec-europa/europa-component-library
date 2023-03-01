# ECL Blockquote component

npm package: `@ecl/twig-component-blockquote`

```shell
npm install --save @ecl/twig-component-blockquote
```

## Parameters

- **"citation"** (string) (default: '')
- **"author"** (string) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"picture"** (associative array) (default: {}):
  - "img" (associative array) (default: {}):
    - "src" (string) (default: ''): Path to the image
    - "alt" (string) (default: ''): Alt text of the image
  - "sources" (array) (default: []): format: [
    {
    "src" (string) (default: ''): Path to the source image
    "media" (string) (default: ''): Media condition to use this source. Could be a breakpoint ('s', 'm', 'l', 'xl') or a free string.
    "type" (string) (default: ''): Type of this source
    },
    ...
    ]
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

Deprecated

- **"image"** (optional) (object) (default: {}) Blockquote image
  - "path" (string) Image src
  - "alt" (string) Image alt

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/blockquote/blockquote.html.twig' with { 
  citation: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 
  author: 'Mark Twain',
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'Image alternative text',
    },
    sources: [
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',
        media: 'xl',
      },
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
        media: 'l',
      },
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
        media: 'm',
      },
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
        media: 's',
      },
    ],
  },
} %}
```
