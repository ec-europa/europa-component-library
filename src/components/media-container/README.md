# ECL Media container component

npm package: `@ecl/media-container`

```shell
npm install --save @ecl/media-container
```

### Parameters

- **"title"** (string) (default: ''): Media title
- **"description"** (string) (default: ''): Description of the media
- **"credit"** (string) (default: ''): Credit for the media
- **"caption_position"** (string) (default: 'bottom'): Position of the description and credit; can be 'bottom', 'over'
- **"sr_video_player"** (string) (default: ''): additional label for the video player; for screen readers
- **"sr_video_audio"** (string) (default: ''): additional text to indicate if there is an audio description; for screen readers
- **"picture"** (object) (default: {}) Image following ECL Picture structure
- **"video"** (object) (default: {}) Video following ECL Video structure
- **"autoplay"** (boolean) (default: false) Autoplay the video muted and looping (hides controls)
- **"sr_play"** (string) (default: '') Screen reader label for the play button (autoplay video)
- **"sr_pause"** (string) (default: '') Screen reader label for the pause button (autoplay video)
- **"full_width"** (boolean) (default: false) Full width media container (inside the grid container)
- **"ratio"** (string) (default: '') Ratio of the embedded media; if empty, set by JS
- **"expandable"** (object) (default: {}) Optional expandable block following ECL Expandable structure
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

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
- **"image"** (string) (default: ''): Image to be used as the video placeholder.
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
