# ECL Picture component

npm package: `@ecl/picture`

```shell
npm install --save @ecl/picture
```

## Parameters

- **"picture"** (object) (default: {}):
  - "img" (object) (default: {}):
    - "src" (string) (default: '') Path to the image
    - "alt" (string) (default: '') Alt text of the image
  - "image_anchor" (string) (default: 'center') Initial position when the image is cropped; accepts any `object-position` value (e.g. 'top left', '30% 50%')
  - "sources" (array) (default: []) Responsive image sources; format:
    - "src" (string) (default: '') Path to the source image
    - "media" (string) (default: '') Media condition; a breakpoint name ('xs', 's', 'm', 'l', 'xl', 'xxl') or a CSS media string
    - "type" (string) (default: '') MIME type of the source
- **"lazy"** (boolean) (default: false) Load the picture using lazy loading
- **"zoom"** (boolean) (default: false) Apply a zoom animation on hover
- **"extra_classes"** (string) (default: '') Extra classes on the root `<picture>` tag
- **"extra_image_classes"** (string) (default: '') Extra classes on the `<img>` tag
- **"extra_attributes"** (array) (default: []) Extra attributes on the `<picture>` tag
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

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
