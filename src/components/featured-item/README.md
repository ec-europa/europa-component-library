# ECL Featured item component

npm package: `@ecl/featured-item`

```shell
npm install --save @ecl/featured-item
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"id"** (string) (default: random)
- **"type"** (string) (default: ''): Featured item type (can be 'highlight'),
- **"title"** (string) (default: ''): Title of the content opposite the media container,
- **"micro_title"** (string) (default: ''): Small additional title
- **"description"** (string) (default: ''): Description of the content opposite the media container,
- **"link"** (object) (default: {}) Link displayed below the description, following ECL Link structure
- **"link_display"** (string) (default: '') Display style for the link; can be 'button' (all types) or 'highlighted' (highlight type only)
- **"horizontal_alignment"** (string) (default: 'left') Content alignment (horizontal); can be 'left', 'center'
- **"vertical_alignment"** (string) (default: 'top') Content alignment (vertical); can be 'top', 'center'
- **"media_container"** (object) (default: {}) Media displayed alongside the text, following ECL Media container structure
- **"media_behavior"** (string) (default: 'static') Fill behavior of the media; can be 'static', 'dynamic'
- **"position"** (string) (default: 'left') Media position relative to the text; can be 'left', 'right'
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Deprecated

- **"link_highlighted"** (bool) (default: false): display the link as highlighted

### Example for featured item:

<!-- prettier-ignore -->
```twig
{% include '@ecl/featured-item/featured-item.html.twig' with {
  title: 'title', 
  micro_title: 'about',
  description: 
    '<p class="ecl-u-type-paragraph-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>', 
  link: { 
    link: { 
      variant: 'standalone', 
      path: exampleLink, 
      label: 'Standalone link', 
      icon_position: 'after', 
    }, 
    icon: { 
      name: 'external', 
      size: 'xs', 
    }, 
  }, 
  media_container: {
    picture: {
      img: {
        alt: 'Lorem ipsum dolor sit amet', 
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      },
    }, 
    description: 
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
  },
} %} 
```
