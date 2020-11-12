# ECL Social Media Follow component

npm package: `@ecl/twig-component-social-media-follow`

```shell
npm install --save @ecl/twig-component-social-media-follow
```

### Parameters

- **"description"** (string) (default: '')
- **"variant"** (string) (default: '') - Can be 'vertical'
- **"links"** (array) (default: []) - List of links to external social media. Each link consists of the following:
  - "path" (string) - Namely the same attribute
  - "label" (string) - Human-readable name of the link
  - "icon_position" (string) - Whether the icon is expected to be "before" or "after"
  - "variant" (string) - Link variant, usually "standalone" is default.
  - "icon" (array) - List of icons used for normal and hover states. Each icon consists of the following:
    - "name" (string) - Icon name
    - "size" (string) - Size such as "xl"
    - "path" (string) - Path in terms of an SVG icon
    - "extra_classes" (string) - Class to toggle between normal and hover effects
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (optional) (boolean) (default: false) Activates debug

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/social-media-follow/social-media-follow.html.twig' with { 
  description:
    'Follow the latest progress and learn more about getting involved.', 
  links: [ 
    { 
      path: '/example', 
      label: 'Twitter', 
      variant: 'standalone', 
      icon_position: 'before', 
      icon: [ 
        { 
          name: 'twitter', 
          size: 'xl', 
        }, 
        { 
          name: 'twitter_hover', 
          size: 'xl', 
        }, 
      ], 
    }, 
    { 
      path: '/example', 
      label: 'Other social networks', 
    }, 
  ], 
} %}
```
