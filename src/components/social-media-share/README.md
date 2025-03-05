ECL Social Media Share component

npm package: `@ecl/social-media-share`

```shell
npm install --save @ecl/social-media-share
```

### Parameters

- **"variant"** (string) (default: '') Can be 'vertical'
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
        label: 'X',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'twitter',
        size: 'm',
        family: 'networks',
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
        family: 'networks',
      },
    },
    {
      link: {
        label: 'Linkedin',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'linkedin',
        size: 'm',
        family: 'networks',
      },
    },
    {
      link: {
        label: 'Telegram',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'telegram',
        size: 'm',
        family: 'networks',
      },
    },
  ],
  popover: {
    id: 'social-media-share-popover',
    toggle: {
      link: {
        label: 'Other social networks',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'share',
        size: 'm',
        family: 'networks',
      },
    },
    content: `Nulla est ad excepteur sint officia fugiat aute commodo ullamco amet culpa eiusmod labore.
      Esse nostrud aliqua pariatur pariatur officia non laboris cillum velit dolore in sit laboris fugiat.`,
  }
} %}
```
