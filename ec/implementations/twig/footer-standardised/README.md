# ECL-Twig Footer Standardised component

npm package: `@ecl-twig/ec-component-footer-standardised`

```shell
npm install --save @ecl-twig/ec-component-footer-standardised
```

### Parameters

- **"sections"** (array of objects) (default: [])
  - "type" (optional) (string) Section type valid values are:
    (site_name, service_navigation, legal_navigation, corporate_name, dg_related_navigation,
    dg_services_navigation, class_names)
  - "section_id" (integer) (default: '') The id will be used to form the class name
  - "logo" (EU only)
    - "alt" (string) alt attribute for the logo link
    - "path" (string) logo link path
    - "language" (string) Language code
    - "src_mobile" (string) Path the mobile logo
    - "src_desktop" (string) Path to the desktop logo
  - "title" (optional) (string) OR (object with Link component in property)
  - "title_class_name" (optional) (string) (default: '')
  - "description" (optional) (string) (default: '')
  - "content_before" (optional) (string) (default: '')
  - "list_class_name" (optional) (string) (default: '')
  - "links" (optional) (array of Link components) (default: [])
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-footer-standardised/ecl-footer-standardised.html.twig' with { 
  sections: [ 
    { 
      type: 'site_name', 
      section_id: 1,
      title: { 
        link: { 
          label: "Site name", 
          path: "/example" 
        } 
      }, 
      description: 
        'This site is managed by the Directorate-General for "DG identification"', 
      }, 
      { 
        type: 'dg_services_navigation', 
        section_id: 2, 
        title: 'Contact us', 
        title_class_name: 'ecl-footer-standardised__title--separator', 
        links: [ 
          { 
            link: { 
              label: 'Contact information of the DG', 
              path: '/example', 
            }, 
          }, 
        ], 
      }, 
      { 
        type: 'dg_services_navigation', 
        section_id: 2, 
        title: 'Follow us on', 
        title_class_name: 'ecl-footer-standardised__title--separator', 
        links: [ 
          { 
            link: { 
              label: 'Facebook', 
              path: '/example', 
              icon_position: 'before', 
              icon: { 
                path: '/path-to-the-icon-file', 
                type: 'branded', 
                name: 'facebook', 
                size: 'xs', 
              }, 
            }, 
            ... 
          }, 
        ], 
        list_class_name: 'ecl-footer-standardised__list--inline', 
      }, 
      { 
        type: 'class_names', 
        section_id: 3,
        content_before: 'More information on:', 
        links: [ 
          { 
            link: { 
              label: 'Related link 1', 
              path: '/example', 
            }, 
            ... 
          }, 
        ], 
        list_class_name: 'ecl-footer-standardised__list--condensed', 
      }, 
      ... 
    ] 
  } 
%}
```
