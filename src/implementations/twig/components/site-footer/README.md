# ECL Site Footer component

npm package: `@ecl/twig-component-site-footer`

```shell
npm install --save @ecl/twig-component-site-footer
```

### Parameters

- **"rows"** (array of objects) (default: [])
  - "section_class_name" (optional) (string) (default: '')
  - "logo"
    - "alt" (string) alt attribute for the logo link
    - "path" (string) logo link path
    - "language" (string) Language code
    - "src_mobile" (string) Path the mobile logo
    - "src_desktop" (string) Path to the desktop logo
  - "title" (optional) (string) OR (object with Link component in property)
  - "title_with_separator" (optional) (bolean) (default: false)
  - "description" (optional) (string) (default: '')
  - "content_before" (optional) (string) (default: '')
  - "links" (optional) (array of objects) (default: []),
    - "link" (link object)
    - "content_before" (string) Optional text before the link
    - "content_after" (string) Optional text after the link
  - "links_inline" (optional) (bolean) (default: false) Optional inline style for the list
- **"split_columns"** (boolean) (optional) (default: false) Split columns in the footer, used for Core EC version
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/site-footer/site-footer.html.twig' with {
  variant: 'standardised', 
  rows: [ 
    [ 
      [ 
        { 
          title: { 
            link: { 
              label: 'Site name', 
              path: exampleLink, 
            }, 
          }, 
          description: 
            'This site is managed by the Directorate-General for "DG identification"', 
        }, 
      ], 
      [ 
        { 
          title: 'Contact us', 
          title_with_separator: true, 
          links: [ 
            { 
              link: { 
                label: 'Contact information of the DG', 
                path: exampleLink, 
                aria_label: 'Link to Contact information of the DG', 
              }, 
            }, 
            { 
              link: { 
                label: 'Accessibility', 
                path: exampleLink, 
                aria_label: 'Link to Accessibility', 
              }, 
            }, 
          ], 
        }, 
        { 
          title: 'Follow us on', 
          title_with_separator: true, 
          links: [ 
            { 
              link: { 
                label: 'Facebook', 
                path: exampleLink, 
                aria_label: 'Link to Facebook', 
                icon_position: 'before', 
              }, 
              icon: { 
                path: '/icon-social-media.svg', 
            }, 
            ... 
          ], 
          links_inline: true, 
        }, 
      ], 
      [ 
        { 
          title: 'About us', 
          title_with_separator: true, 
          links: [ 
            { 
              link: { 
                label: 'Information about the DG', 
                path: exampleLink, 
                aria_label: 'Link to Information about the DG', 
              }, 
            }, 
          ], 
        }, 
        { 
          title: 'Related sites', 
          title_with_separator: true, 
          links: [ 
            { 
              link: { 
                label: 'Related link 1', 
                path: exampleLink, 
                aria_label: 'Link to Related link 1', 
              }, 
            }, 
            ... 
          ], 
        }, 
      ], 
    ], 
    [ 
      [ 
        { 
          links: [ 
            { 
              link: { 
                label: 'Class name 1', 
                path: exampleLink, 
                aria_label: 'Link to Class name 1', 
              }, 
            }, 
            { 
              link: { 
                label: 'Class name 2', 
                path: exampleLink, 
                aria_label: 'Link to Class name 2', 
              }, 
            }, 
          ], 
          content_before: 'More information on:', 
          section_class_name: 'ecl-site-footer__section--condensed', 
        }, 
      ], 
    ], 
    [ 
      [ 
        { 
          title: { 
            link: { 
              label: 'European Commission', 
              path: 'https://ec.europa.eu/info/index_en', 
            }, 
          }, 
          logo: { 
            title: 'European Commission', 
            alt: 'European Commission logo', 
            language: 'en', 
            path: exampleLink, 
            src_desktop: '/logo-ec.svg', 
          }, 
        }, 
      ], 
      [ 
        { 
          links: [ 
            { 
              link: { 
                label: 'Contact the European Commission', 
                path: exampleLink, 
                aria_label: 'Link to Contact the European Commission', 
              }, 
            }, 
            ... 
          ], 
          section_class_name: 'ecl-site-footer__section--split-list', 
        }, 
      ], 
      [ 
        { 
          links: [ 
            { 
              link: { 
                label: 'Languages on our websites', 
                path: exampleLink, 
                aria_label: 'Link to Languages on our websites', 
              }, 
            }, 
            ... 
          ], 
          section_class_name: 'ecl-site-footer__section--split-list', 
        }, 
      ], 
    ], 
  ], 
%} 
```
