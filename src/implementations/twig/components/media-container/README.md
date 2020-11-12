# ECL Media container component

npm package: `@ecl/twig-component-media-container`

```shell
npm install --save @ecl/twig-component-media-container
```

### Parameters

- **"description"** (string) (default: '') - A caption to be shown under the media,
- **"image"** (string) (default: '') The path to the image,
- **"sources"** (array) (default: []) Array of Video sources with this structure:
  - "src" (string) (default: ''),
  - "type" (string) (default: ''),
- **"tracks"** (array) (default: []): Array of Video tracks with this structure:
  - "src" (string) (default: ''),
  - "kind" (string) (default: ''),
  - "src_lang" (string) (default: ''),
  - "label" (string) (default: ''),
  - "description" (string) (default: ''),
- **"alt"** (string) (default: '') The alternate text foher the image,
- **"ratio"** (string) (default: 16-9) The ratio of the embedded media, if any,
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'.
- **"\_compliance\_"** (optional) (boolean) (default: false) Activates debug


### Blocks:

- **"embedded_media"** (optional) (string) (default: '') A block where to set an embed code

### Example for media container image:

<!-- prettier-ignore -->
```twig
{% include '@ecl/media-container/media-container.html.twig' with { 
  description: 'A description for this image', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  image: '/path/to/your/image', 
  alt: 'An alternate text', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %} 
```
