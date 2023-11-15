# ECL Social Media Follow component

npm package: `@ecl/twig-component-social-media-follow`

```shell
npm install --save @ecl/twig-component-social-media-follow
```

### Parameters

- **"variant"** (string) (default: '') Can be 'vertical'
- **"description"** (string) (default: '')
- **"links"** (array) (default: {}) Array of links for social media, following ECL Link structure
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
        label: 'Twitter',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'twitter-color',
        size: 'm',
        extra_classes: 'ecl-social-media-share__icon',
      },
    },
    {
      link: {
        label: 'Facebook',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'facebook-color',
        size: 'm',
        extra_classes: 'ecl-social-media-share__icon',
      },
    },
  ],
} %}
```
