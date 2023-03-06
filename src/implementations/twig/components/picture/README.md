# ECL Picture component

npm package: `@ecl/twig-component-picture`

```shell
npm install --save @ecl/twig-component-picture
```

## Parameters

- **"picture"** (associative array) (default: {}):
  - **"img"** (associative array) (default: {}):
    - "src" (string) (default: ''): Path to the image
    - "alt" (string) (default: ''): Alt text of the image
  - **"sources"** (array) (default: []): format: [
    {
    "src" (string) (default: ''): Path to the source image
    "media" (string) (default: ''): Media condition to use this source. Could be a breakpoint ('s', 'm', 'l', 'xl') or a free string.
    "type" (string) (default: ''): Type of this source
    },
    ...
    ]
  - **"extra_classes"** (optional) (string) (default: ''): Extra css classes, added to the root picture tag
  - **"extra_image_classes"** (optional) (string) (default: ''): Extra css classes, added to to the img tag
  - **"extra_attributes"** (optional) (array) (default: [])
    - "name" (string) Attribute name, eg. 'data-test'
    - "value" (optional) (string) Attribute value, eg: 'data-test-1'

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
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
        media: '(min-width: 90rem)'
      },
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
