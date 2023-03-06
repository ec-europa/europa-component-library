# ECL Picture component

npm package: `@ecl/twig-component-picture`

```shell
npm install --save @ecl/twig-component-picture
```

## Parameters

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
- **"picture_class"** (optional) (string) (default: '')
- **"image_class"** (optional) (string) (default: '')

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/picture/picture.html.twig' with { 
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
