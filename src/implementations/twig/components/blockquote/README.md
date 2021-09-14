# ECL Blockquote component

npm package: `@ecl/twig-component-blockquote`

```shell
npm install --save @ecl/twig-component-blockquote
```

## Parameters

- **"citation"** (string) (default: '')
- **"author"** (string) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"image"** (optional) (object) (default: {}) Blockquote image
  - "path" (string) Image src, eg. 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg'
  - "alt" (string) Image alt, eg: 'blockquote-image'
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/blockquote/blockquote.html.twig' with { 
  citation: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 
  author: 'Mark Twain',
  image: {
    path: "https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg",
  },
} %}
```
