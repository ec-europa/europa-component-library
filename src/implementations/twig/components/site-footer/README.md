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
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/site-footer/site-footer.html.twig' with {
  rows: [
    [
      [
        {
          title: {
            link: {
              label: 'Site name',
              path: '/example',
            },
          },
          description:
            'This site is managed by the Directorate-General for "DG identification"',
        },
      ],
      [
        {
          title: 'Contact us',
          links: [
            {
              link: {
                label: 'Contact information of the DG',
                path: '/example',
                aria_label: 'Link to Contact information of the DG',
              },
            },
          ],
          title_class_name: 'ecl-footer-standardised__title--separator',
        },
        {
          title: 'Follow us on',
          links: [
            {
              link: {
                label: 'Facebook',
                path: '/example',
                aria_label: 'Link to Facebook',
                icon_position: 'before',
              },
              icon: {
                path: '/icons.svg',
                name: 'facebook',
                size: 'xs',
              },
            },
            ...
          ],
          list_class_name: 'ecl-footer-standardised__list--inline',
          title_class_name: 'ecl-footer-standardised__title--separator',
        },
      ],
      [
        {
          title: 'About us',
          links: [
            {
              link: {
                label: 'Information about the DG',
                path: '/example',
                aria_label: 'Link to Information about the DG',
              },
            },
          ],
          title_class_name: 'ecl-footer-standardised__title--separator',
        },
        ...
      ],
    ],
    ...
  ]
%}
```
