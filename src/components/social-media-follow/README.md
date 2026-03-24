# ECL Social Media Follow component

npm package: `@ecl/social-media-follow`

```shell
npm install --save @ecl/social-media-follow
```

### Parameters

- **"variant"** (string) (default: '') Can be 'vertical'
- **"description"** (string) (default: '')
- **"description_inline"** (boolean) (default: false) Should the description be displayed inline?
- **"position"** (string) (default: 'left') Position (can be 'left', 'right')
- **"links"** (array) (default: []) Array of links for social media, following ECL Link structure
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/social-media-follow/social-media-follow.html.twig' with { 
  description:
    'Follow the latest progress and learn more about getting involved.', 
  links: [
    {
      link: {
        label: 'X',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'twitter',
        size: 'm',
      },
    },
    {
      link: {
        label: 'Facebook',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'facebook',
        size: 'm',
      },
    },
  ],
} %}
```
