# ECL Text and media component

npm package: `@ecl/text-media`

```shell
npm install --save @ecl/text-media
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"id"** (string) (default: random): Unique id
- **"variant"** (string) (default: ''): Display variant; can be '', 'primary'
- **"media_position"** (string) (default: 'right'): Media position relative to the text; can be 'left', 'right'
- **"title"** (string) (default: ''): Content title
- **"micro_title"** (string) (default: ''): Small additional title
- **"description"** (string) (default: ''): Content description
- **"link"** (object) (default: {}): Content link, following ECL Link structure
- **"media_container"** (object) (default: {}): Media used (picture or video), following ECL Media container structure
- **"full_width"** (boolean) (default: false): Full width display (inside the grid)
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example

<!-- prettier-ignore -->
```twig
{% include '@ecl/text-media/text-media.html.twig' with {
  micro_title: 'About',
  title: 'Non per curiositatem opinionum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  link: {
    link: {
      type: 'standalone',
      path: exampleLink,
      label: 'Read more',
    },
    icon: {
      name: 'arrow-left',
      transform: 'flip-horizontal',
      size: 'm',
    },
  },
  media_container: {
    picture: {
      img: {
        alt: 'Lorem ipsum dolor sit amet',
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
      },
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elite tempored incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet consectetur adipiscing',
    credit: '@Copyright',
  },
} %} 
```
