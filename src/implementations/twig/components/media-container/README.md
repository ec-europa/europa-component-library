# ECL Media container component

npm package: `@ecl/twig-component-media-container`

```shell
npm install --save @ecl/twig-component-media-container
```

### Parameters

- **"title"** (string) (default: ''): Media title
- **"description"** (string) (default: '') - A caption to be shown under the media,
- **"sr_video_player"** (string) (default: ''): additional label for the video player; for screen readers
- **"sr_video_audio"** (string) (default: ''): additional text to indicate if there is an audio description; for screen readers
- **"picture"** (associative array) (default: {}): Image for the media container, following ECL Picture structure
- **"video"** (associative array) (default: {}) An ECL video object
- **"autoplay"**: (bool) (default: false) If the media is a video, makes it autoplay, with no sound and in a loop.
- **"sr_play"** (string) (default: ''): Label for the play button (for the autoplay video)
- **"sr_pause"** (string) (default: ''): Label for the pause button (for the autoplay video)
- **"icon_path"**: (string) (default: '') Path or url to the icons sprite (for autoplay video)
- **"full_width"**: (bool) (default: false) Full width media container (inside the grid container)
- **"ratio"** (string) ('') Ratio of the embedded media, if empty the ratio will be set by the js
- **"expandable"** (associative array) (default: {}): Optional expandable block, following ECL Expandable structure
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'.

### Blocks:

- **"embedded_media"** (optional) (string) (default: '') A block where to set an embed code

### Deprecated:

- **"sources"** (array) (default: []) Array of Video sources with this structure:
  - "src" (string) (default: ''),
  - "type" (string) (default: ''),
- **"tracks"** (array) (default: []): Array of Video tracks with this structure:
  - "src" (string) (default: ''),
  - "kind" (string) (default: ''),
  - "src_lang" (string) (default: ''),
  - "label" (string) (default: ''),
  - "description" (string) (default: ''),
- **"image"** (string) (default: ''): Image to be used as the video placeholder
- **"sr_video_label"** (string) (default: ''): additional label for the video items; for screen readers

### Example for media container image:

<!-- prettier-ignore -->
```twig
{% include '@ecl/media-container/media-container.html.twig' with { 
  description: 'A description for this image', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  picture: {
    img: {
      src: '/path/to/your/image',
      alt: 'An alternate text',
    },
  },
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %} 
```
