# ECL Carousel

npm package: `@ecl/twig-component-carousel`

```shell
npm install --save @ecl/twig-component-carousel
```

### Parameters

- **"items"** (array) (default: []): List of page-banner compatible with EC page-banner component structure
- **"counter_label"** (string) (default: 'of')
- **"sr_previous"** (string) (default: 'Previous slides') screen reader label for previous button
- **"sr_next"** (string) (default: 'Next slides') screen reader label for next button
- **"sr_navigation"** (string) (default: 'Go to slide %d') screen reader label for navigation buttons
- **"sr_autoplay"** (string) (default: 'Carousel auto play') screen reader label for autoplay button
- **"full_width"** (bools) (default: false) Extends the banner to whole viewport when used inside the grid
- **"icon_path"** (string) ) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig 
{% include '@ecl/carousel/carousel.html.twig' with { 
  items: [ 
    { 
      title: 'EU Budget for the future', 
      description: 'Innovation, economy, environment and geopolitics', 
      link: { 
        link: { 
          label: 'Subscribe', 
          path: exampleLink, 
          aria_label: 'Subscribe', 
          icon_position: 'after', 
        }, 
        icon: { 
          path: '/icons.svg', 
          name: 'corner-arrow', 
          size: 'xs', 
          transform: 'rotate-90', 
        }, 
      }, 
      image:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg', 
      variant: 'image', 
      centered: false, 
    }, 
    ...
  ], 
  counter_label: 'of', 
  icons_path: '/icons.svg', 
} %} 
```
