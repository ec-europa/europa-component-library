# ECL Video component

npm package: `@ecl/video`

```shell
npm install --save @ecl/video
```

## Parameters

- **"poster"** (string) (default: '') URL of the video poster image
- **"controls"** (boolean) (default: true) Show video controls
- **"autoplay"** (boolean) (default: false) Autoplay the video
- **"muted"** (boolean) (default: false) Mute the video
- **"loop"** (boolean) (default: false) Loop the video
- **"zoom"** (boolean) (default: false) Apply zoom animation on the poster picture
- **"sr_video_label"** (string) (default: '') Screen reader label for the video item
- **"sr_video_player"** (string) (default: '') Screen reader label for the video player
- **"sources"** (array) (default: []) Video source files; format:
  - "src" (string) (default: '') Source file URL
  - "type" (string) (default: '') MIME type, eg. 'video/mp4'
- **"tracks"** (array) (default: []) Caption/subtitle tracks; format:
  - "src" (string) (default: '') Track file URL
  - "kind" (string) (default: '') Track kind, eg. 'captions', 'subtitles'
  - "src_lang" (string) (default: '') Track language code, eg. 'en'
  - "label" (string) (default: '') Track label, eg. 'English'
- **"extra_classes"** (string) (default: '') Extra classes on the video element
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

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
