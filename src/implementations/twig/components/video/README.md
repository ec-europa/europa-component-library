# ECL Video component

npm package: `@ecl/twig-component-video`

```shell
npm install --save @ecl/twig-component-video
```

## Parameters

- **"poster"** (associative array) (default: {}):
- **"controls"** (boolean) (default: true)
- **"autoplay"** (boolean) (default: false)
- **"muted"** (boolean) (default: false)
- **"loop"** (boolean) (default: false)
- **"sr_video_label"** (string) (default: '')
- **"sr_video_player"** (string) (default: '')
- **"tracks"** (associative array) (default: {}):
  - "src" (string) (default: '')
  - "type" (string) (default: '')
- **"sources"** (array) (default: []): format: [
  {
  - "src" (string) (default: ''),
  - "kind" (string) (default: ''),
  - "src_lang" (string) (default: ''),
  - "label" (string) (default: ''),
    },
    ...
    ]
  - **"extra_classes"** (optional) (string) (default: ''): Extra css classes, added to the video tag
  - **"extra_attributes"** (optional) (array) (default: [])
    - "name" (string) Attribute name, eg. 'data-test'
    - "value" (optional) (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/video/video.html.twig' with { 
    poster:  
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',  
    sources: [ 
      { 
        src: 'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4', 
        type: 'video/mp4', 
      }, 
      { 
        src: 'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm', 
        type: 'video/webm', 
      }, 
    ], 
    tracks: [ 
      { 
        src: '/captions/bunny-en.vtt', 
        kind: 'captions', 
        src_lang: 'en', 
        label: 'English', 
      }, 
      {
        src: '/captions/bunny-fr.vtt', 
        kind: 'captions', 
        src_lang: 'fr', 
        label: 'French', 
      }, 
    ], 
} %} 
```
