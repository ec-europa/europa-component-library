# ECL Blockquote component

npm package: `@ecl/blockquote`

```shell
npm install --save @ecl/blockquote
```

## Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"citation"** (string) (default: '') The quote text
- **"author"** (string) (default: '') The author of the quote
- **"lang"** (string) (default: 'en') Language code for the citation text (ISO 639-1)
- **"picture"** (associative array) (default: {}): Image for the blockquote, following ECL Picture structure
- **"sources_label"** (string) (default: '') Label displayed before the sources list
- **"sources"** (array) (default: []) Array of source references (ECL link objects or plain strings)
  - "link" (object) ECL link object:
    - "label" (string) (default: '') Link label
    - "path" (string) (default: '') Link URL
      or
  - "name" (string) (default: '') Plain text source
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/blockquote/blockquote.html.twig' with { 
  citation: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 
  author: 'Mark Twain',
  lang: 'el',
  sources_label: 'Sources:',
  sources: [
    { link: { label: 'Eurostat', path: exampleLink } },
    { name: 'European Commission' },
  ],
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
