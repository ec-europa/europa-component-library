# ECL Featured item component

npm package: `@ecl/twig-component-featured-item`

```shell
npm install --save @ecl/twig-component-featured-item
```

### Parameters

- **"type"** (string) (default: '') - Featured item type ('highlight'),
- **"title"** (string) (default: '') - Title of the content opposite the media container,
- **"description"** (string) (default: '') - Description of the content opposite the media container,
- **"link"** (associative array) (default: predefined structure) predefined structure for the Link component
- **"media_container"** (associative array) (default: predefined structure) predefined structure for the Media container component
- **"position"** (string) (default: 'left') - Media position
- **"footer_description"** (string) (default: ''): short description in the footer
- **"footer_link"** (object) (default: {}): call to action link in the footer; type Link
- **"footer_picture"** (object) (default: {}): picture in the footer; type Picture
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'.

### Example for featured item:

<!-- prettier-ignore -->
```twig
{% include '@ecl/featured-item/featured-item.html.twig' with {
  title: 'title', 
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
      path: '/icons.svg', 
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
  footer_description: 'Suspendisse a nisi elit. Integer vulputate egestas ipsum quis dapibus. In hac habitasse platea dictumst.',
  footer_link: {
    link: { 
      type: 'cta', 
      path: exampleLink, 
      label: 'See more', 
      icon_position: 'after', 
    }, 
    icon: {
      path: '/icons.svg',
      name: 'corner-arrow',
      size: 'xs',
      transform: 'rotate-90',
    },
  },
  footer_picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'Image alt text',
    },
  }
} %} 
```
