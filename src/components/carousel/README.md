# ECL Carousel

npm package: `@ecl/carousel`

```shell
npm install --save @ecl/carousel
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"items"** (array) (default: []): List of banners compatible with ECL Banner component structure
- **"size"** (string) (default: 'm') Size of the carousel; can be 's', 'm', 'l'
- **"counter_label"** (string) (default: 'of') Label used between current and total count
- **"sr_description"** (string) (default: '') Screen reader description of the carousel
- **"sr_role"** (string) (default: 'carousel') Screen reader localized role for the carousel
- **"sr_slide_role"** (string) (default: 'slide') Screen reader localized role for each slide
- **"sr_play"** (string) (default: 'Play carousel') Screen reader label for the play button
- **"sr_pause"** (string) (default: 'Pause carousel') Screen reader label for the pause button
- **"full_width"** (boolean) (default: false) Full width carousel (inside the grid)
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig 
{% include '@ecl/carousel/carousel.html.twig' with { 
  sr_description: 'Carousel description here',
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
} %} 
```
