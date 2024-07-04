# ECL Banner

npm package: `@ecl/twig-component-banner`

```shell
npm install --save @ecl/twig-component-banner
```

### Parameters

- **"variant"** (string) (default: 'plain-background') Variant of the banner
  (can be 'plain-background', 'text-box', 'text-overlay')
- **"size"** (string) (default: 'm') Size of the banner (can be 's', 'm', 'l')
- **"font_size"** (string) (default: 'm') Size of the title and description (can be 'm', 'l')
- **"font_color"** (string) (default: 'dark') Color of the title and description (can be 'dark', 'light')
- **"background"** (string) (default: 'light') Color of the box background (can be 'dark', 'light', 'none')
- **"title"** (string or Link) (default: '') Title of banner
- **"picture"** (object) (default: {}): Image for the banner, following ECL Picture structure
- **"video"** (object) (default: {}): Video for the banner
  - "poster" (string) (default: ''): Image to be used as the video placeholder
  - "sources" (array) (default: []): format: [
    {
    "src" (string) (default: ''),
    "type" (string) (default: ''),
    },
    ...
    ],
  - "tracks" (array) (default: []): format: [
    {
    "src" (string) (default: ''),
    "kind" (string) (default: ''),
    "src_lang" (string) (default: ''),
    "label" (string) (default: ''),
    },
    ...
    ],
- **"sr_play"** (string) (default: '') screen reader label for the play button
- **"sr_pause"** (string) (default: '') screen reader label for the pause button
- **"credit"** (string) (default: '') Credit for the image
- **"description"** (string) (default: '') Description of banner
- **"horizontal"** (string) (default: 'left') Horizontal box alignment (can be 'left', 'center', 'right')
- **"vertical"** (string) (default: 'center') Vertical box alignment (can be 'top', 'center', 'bottom')
- **"full_width"** (bools) (default: false) Extends the banner to whole viewport when used inside the grid
- **"link"** (object) (default: predefined structure) predefined structure for the Link component
- **"icon_path"** (string) (default: '') Path to the icons file
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/banner/banner.html.twig' with {  
  title: 'EU Budget for the future',  
  description: 'Innovation, economy, environment and geopolitics',  
  centered: true,  
  variant: 'text-overlay',
  picture: {
    img: {
      src: 'url/path-to-image',
      alt: 'alternative text',
    },
  },
  credit: '© Copyright',
  link: {  
    link: {  
      label: 'Subscribe',  
      icon_position: 'after',  
    },  
    icon: {  
      path: 'path-to-the-icon-file',  
      ...  
    },  
  },  
} %}
```
