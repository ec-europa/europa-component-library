# ECL Blockquote component

npm package: `@ecl/blockquote`

```shell
npm install --save @ecl/blockquote
```

## Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"citation"** (string) (default: '')
- **"author"** (string) (default: '')
- **"lang"** (string) (default: 'en')
- **"picture"** (associative array) (default: {}): Image for the blockquote, following ECL Picture structure
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/blockquote/blockquote.html.twig' with { 
  citation: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 
  author: 'Mark Twain',
  lang: 'el',
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
