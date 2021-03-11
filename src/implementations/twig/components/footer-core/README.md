# ECL Footer Core component

npm package: `@ecl/twig-component-footer-core`

```shell
npm install --save @ecl/twig-component-footer-core
```

### Parameters

- **"rows"** (array of objects) (default: [])
  - "section_class_name" (optional) (string) (default: '')
  - "logo" (EU only)
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
  - "links_column" (optional) (bolean) (default: false) Optional split display list into 2 columns
  - "section_with_separator" (optional) (bolean) (default: false) Optinal bottom separator for the section
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/footer-core/footer-core.html.twig' with { 
  sections: [ 
    { 
      title: { 
        link: { 
          label: 'European Commission website', 
          path: '#', 
        }, 
      }, 
      description: 
        'This site is managed by the Directorate-General for Communication', 
    }, 
    { 
      section_class_name: 'ecl-footer-core__section--separator', 
      links: [ 
        { 
          link: { 
            label: 'Standalone link', 
            path: 'http://google.com', 
          }, 
        }, 
        ... 
      ], 
      list_class_name: 'ecl-footer-core__list--columns', 
    }, 
    {  
      links: [ 
        { 
          link: { 
            label: 'Follow the European Commission on social media', 
            path: '/example', 
            icon_position: 'after', 
            }, 
            icon: { 
              path: '/path-to-the-icon-file', 
              type: 'ui', 
              name: 'external', 
            }, 
          }, 
        }, 
        ... 
      ], 
    }, 
    { 
      links: [ 
        { 
          link: { 
            label: 'Language policy', 
            path: '/example', 
          }, 
        }, 
        ... 
      ], 
    }, 
  ], 
} %}
```
