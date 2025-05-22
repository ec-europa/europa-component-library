# ECL Site Footer component

npm package: `@ecl/site-footer`

```shell
npm install --save @ecl/site-footer
```

### EC footer parameters

- **"section_xx"** (object) (default: {}): Specific section of the footer, all using the same structure
  Available sections: "section_site_info", "section_core", "section_contact", "section_about", "section_more", "section_related" and "section_common"
  - **"title"** (optional) (string or object): Section title; can be a simple string or a link using the ECL Link structure
  - **"logo"** (optional) (object): Logo image
    - "picture" (object): Images(s) used for the logo, using the ECL Picture structure
    - "path" (string): Url for the logo link
  - **"description"** (optional) (string): Free text
  - **"links"** (optional) (array of objects): List of links, using the ECL Link structure
  - **"links_inline"** (optional) (boolean) (default: false): Should the links be displayed inline?
  - **"social_media"** (optional) (object): List of social media links, using the ECL Social Media Follow structure
  - **"extra_links"** (optional) (array of object): Extra links, at the end of the social media, using the ECL Link structure
- **"sections_custom"** (array) (default: []): Additional custom sections, following the structure ahead
- **"extra_classes"** (string) (default: '') Extra classes (space separated) for the footer
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes for the footer
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### EU footer parameters

- **"rows"** (array of objects) (default: [])
  - **"section_class_name"** (optional) (string) (default: '')
  - **"logo"**
    - "title": (string) (default: ''): Logo title attribute.
    - "alt" (string) alt attribute for the logo link
    - "path" (string) logo link path
    - "language" (string) Language code
    - "src_mobile" (string) Path the mobile logo
    - "src_desktop" (string) Path to the desktop logo
  - **"title"** (optional) (string) OR (object with Link component in property)
  - **"title_with_separator"** (optional) (bolean) (default: false)
  - **"description"** (optional) (string) (default: '')
  - **"content_before"** (optional) (string) (default: '')
  - **"links"** (optional) (array of objects) (default: []),
    - "link" (link object)
    - "content_before" (string) Optional text before the link
    - "content_after" (string) Optional text after the link
  - **"links_inline"** (optional) (boolean) (default: false) Optional inline style for the list
  - **"links_separator"** (optional) (boolean) (default: false) Optional separator for inline links
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/site-footer/site-footer.html.twig' with {
  section_site_info: {
    title: {
      link: {
        label: 'Site name',
        path: '#',
      },
      icon: {
        name: 'arrow-left',
        size: 'xs',
        style: 'inverted',
        transform: 'flip-horizontal',
      },
    },
    description:
      'This site is managed by:<br />[name of the manager of the site]',
    social_media: {
      links: [
        {
          link: {
            label: 'Instagram',
            path: '#',
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'instagram',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'X',
            path: '#',
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'x',
            family: 'networks',
            style: 'inverted',
          },
        },
      ],
    },
  },
  section_contact: {
    title: 'Contact us',
    links: [
      {
        link: {
          label: 'Contact information of the DG',
          path: '#',
        },
      },
    ],
  },
  section_about: {
    title: 'About us',
    links: [
      {
        link: {
          label: 'Information about the DG',
          path: '#',
        },
      },
      {
        link: {
          label: 'Information about the DG',
          path: '#',
        },
      },
    ],
  },
  section_more: {
    title: 'More information on',
    links: [
      {
        link: {
          label: 'Class name 1',
          path: '#',
        },
      },
      {
        link: {
          label: 'Class name 2',
          path: '#',
        },
      },
    ],
  },
  section_related: {
    title: 'Related links',
    links: [
      {
        link: {
          label: 'Related link 1',
          path: '#',
        },
      },
      {
        link: {
          label: 'Related link 2',
          path: '#',
        },
      },
    ],
  },
  section_common: {
    logo: {
      picture: {
        img: {
          src: 'path_to_logo.svg',
          alt: 'European Commission',
        },
      },
      path: '#',
    },
    social_media: {
      description: 'Follow the European Commission',
      description_inline: true,
      links: [
        {
          link: {
            label: 'Telegram',
            path: '#',
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'telegram',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'X',
            path: '#',
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'x',
            family: 'networks',
            style: 'inverted',
          },
        },
      ],
    },
    links_inline: true,
    links: [
      {
        link: {
          label: 'Report an IT vulnerability',
          path: '#',
        },
      },
      {
        link: {
          label: 'Languages on our websites',
          path: '#',
        },
      },
    ],
  },
%} 
```
