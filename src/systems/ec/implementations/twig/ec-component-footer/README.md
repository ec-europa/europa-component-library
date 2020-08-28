# ECL-Twig Footer component

npm package: `@ecl-twig/ec-component-footer`

```shell
npm install --save @ecl-twig/ec-component-footer
```

### Parameters

- **"identity"** (object) (default: {}):
  - "title" (string) (default: '')
  - "follow" (object) (default: {}):
    - "label" (string) (defaul: '')
    - "links" (array of link objects) (default: [])
  - "info" (array of link objects) (default: [])
- **"sections"** (array) (default: []):
  - "title" (string) (default: '')
  - "links" (array of link objects) (default: [])
- **"common"** (array of link objects) (default: [])
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (boolean) (default: false) Activates debug

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-footer/ecl-footer.html.twig' with { 
  identity: { 
    title: 'Site identification', 
    follow: { 
      label: 'Follow us:', 
      links: [ 
        { 
          link: { 
            label: 'Facebook', 
            path: '/example', 
            icon_position: 'before', 
          }, 
          icon: { 
            path: defaultSprite, 
            type: 'branded', 
            name: 'facebook', 
          }, 
        }, 
        ... 
      ] 
    }, 
    info: [ 
      { 
        link: { 
          label: 'Contact', 
          path: '/example', 
        }, 
      }, 
      ... 
    ], 
  }, 
  sections: [ 
    { 
      title: 'European Commission', 
      links: [ 
        { 
          link: { 
            label: 'Commission and its priorities', 
            path: '/example', 
          }, 
        }, 
        ... 
      ], 
    }, 
    ... 
  ], 
  common: [ 
  { 
    link: { 
      label: "About the Commission's new web presence", 
      path: '/example', 
    }, 
  }, 
  ... 
  ] 
} %}
```
