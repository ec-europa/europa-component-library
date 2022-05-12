# ECL Footer Harmonised component

npm package: `@ecl/twig-component-footer-harmonised`

```shell
npm install --save @ecl/twig-component-footer-harmonised
```

### Parameters

- **"group"** (string) (default: 'group1'): 'group1' or 'group2'
- **"rows"** (array of objects) (default: [])
  - "section_class_name" (string) (default: '')
  - "title" (optional) (string) OR (object with Link component in property)
  - "title_with_separator" (optional) (bolean) (default: false)
  - "description" (optional) (string) (default: '')
  - "content_before" (optional) (string) (default: '')
  - "links" (optional) (array of objects) (default: []),
    - "link" (link object)
    - "content_before" (string) Optional text before the link
    - "content_after" (string) Optional text after the link
  - "links_inline" (optional) (bolean) (default: false) Optional inline style for the list
  - "logos" (optional) (array of images objects) (default: []):
    "title": (string) (default: '') Title attribute
    "alt": (string) (default: '') Alternative text
    "src": (string) (default: '') Url of the image
  - "logo"
    - "alt" (string) alt attribute for the logo link
    - "path" (string) logo link path
    - "language" (string) Language code
    - "src_mobile" (string) Path the mobile logo
    - "src_desktop" (string) Path to the desktop logo
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1',

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/footer-harmonised/footer-harmonised.html.twig' with {
  group: 'group1',
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
        section_id: 2,
        title: 'Contact us',
        title_class_name: 'ecl-footer-harmonised__title--separator',
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
        section_id: 2,
        title: 'Follow us on',
        title_class_name: 'ecl-footer-harmonised__title--separator',
        links: [
          {
            link: {
              label: 'Facebook',
              path: '/example',
              icon_position: 'before',
              icon: {
                path: '/path-to-the-icon-file',
                name: 'facebook',
                size: 'xs',
              },
            },
            ...
          },
        ],
        list_class_name: 'ecl-footer-harmonised__list--inline',
      },
      {
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
        list_class_name: 'ecl-footer-harmonised__list--condensed',
      },
      ...
    ]
  }
%}
```
