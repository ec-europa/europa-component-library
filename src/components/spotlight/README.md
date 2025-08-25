# ECL Spotlight

npm package: `@ecl/spotlight`

```shell
npm install --save @ecl/spotlight
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"font_size"** (string) (default: 'l') Size of the title (can be 'm', 'l')
- **"title"** (string) (default: '') Title of the spotlight
- **"path"** (string) (default: '') Link url
- **"header"** (string) (default: '') Header over the spotlight
- **"picture"** (object) (default: {}): Image for the spotlight, following ECL Picture structure
- **"has_anchor"** (boolean) (default: true): Should the visual anchor be displayed?
- **"credit"** (string) (default: '') Credit for the image
- **"full_width"** (boolean) (default: false) Full width spotlight (extend outside the grid)
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

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
