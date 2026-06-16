# ECL Spotlight

npm package: `@ecl/spotlight`

```shell
npm install --save @ecl/spotlight
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"font_size"** (string) (default: 'm') Size of the title; can be 'm', 'l'
- **"title"** (string) (default: '') Title of the spotlight
- **"path"** (string) (default: '') Link URL for the title
- **"header"** (string) (default: '') Header text above the spotlight title
- **"picture"** (object) (default: {}) Image following ECL Picture structure
- **"has_anchor"** (boolean) (default: true) Show the visual anchor indicator
- **"credit"** (string) (default: '') Credit text for the image
- **"full_width"** (boolean) (default: false) Full width spotlight (extends outside the grid)
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/spotlight/spotlight.html.twig' with {
  header: 'In focus',
  title: 'Lorem ipsum dolor sit amet, adipiscing justo',
  path: #example,
  picture: {
    img: {
      src: 'url/path-to-image',
      alt: 'alternative text',
    },
  },
  credit: '© Copyright',
} %}
```
