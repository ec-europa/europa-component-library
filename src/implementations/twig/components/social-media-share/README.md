ECL Social Media Share component

npm package: `@ecl/twig-component-social-media-share`

```shell
npm install --save @ecl/twig-component-social-media-share
```

### Parameters

- **"description"** (string) (default: '')
- **"links"** (array) (default: []) - List of links to external social media. Each link consists of the following:
  - "path" (string) - The "href" attribute of the link
  - "label" (string) - Human-readable name of the link
  - "extra_classes" (string) - Add specific CSS class for the background of the given social network, i.e. "ecl-social-media-share\_\_link--twitter" for blue background of Twitter
  - "icon" (array) - List of icons used for normal and hover states. Each icon consists of the following:
    - "name" (string) - Icon name
    - "size" (string) - Size such as "xl"
    - "path" (string) - Path in terms of an SVG icon
    - "extra_classes" (string) - Class to toggle between normal and hover states
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
      path: '/example', 
      label: 'Twitter', 
      extra_classes: 'ecl-social-media-share__link--twitter', 
      variant: 'standalone', 
      icon_position: 'before', 
      icon: [ 
        { 
          name: 'twitter', 
          size: 'xl', 
          extra_classes: '', 
        }, 
        { 
          name: 'twitter_hover', 
          size: 'xl', 
          extra_classes: 'ecl-social-media-share__icon-hover', 
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
