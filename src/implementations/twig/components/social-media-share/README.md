ECL Social Media Share component

npm package: `@ecl/twig-component-social-media-share`

```shell
npm install --save @ecl/twig-component-social-media-share
```

### Parameters

- **"description"** (string) (default: '')
- **"links"** (array) (default: {}) Array of links for social media, following ECL Link structure
- **"popover"** (associative array) (default: {}) Popover for other social media, following ECL Popover structure
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/social-media-share/social-media-share.html.twig' with { 
  description: 'Share this page',
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
  popover: {
    id: 'social-media-share-popover',
    toggle: {
      link: {
        label: 'Other social networks',
        path: exampleLink,
        aria_label: 'See other social media networks',
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'share',
        size: 'm',
      },
    },
    links: [
      {
        link: {
          label: 'Pinterest',
          path: exampleLink,
          icon_position: 'before',
        },
        icon: {
          path: '/icon-social-media.svg',
          name: 'pinterest-color',
          size: 'fluid',
          extra_classes: 'ecl-social-media-share__icon',
        },
      },
      {
        link: {
          label: 'Mastodon',
          path: exampleLink,
          icon_position: 'before',
        },
        icon: {
          path: '/icon-social-media.svg',
          name: 'mastodon-color',
          size: 'fluid',
          extra_classes: 'ecl-social-media-share__icon',
        },
      },
    ],
  }
} %}
```
