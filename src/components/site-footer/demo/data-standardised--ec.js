const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  section_site_info: {
    title: {
      link: {
        label: 'Site name',
        path: exampleLink,
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
            path: exampleLink,
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
            path: exampleLink,
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
        {
          link: {
            label: 'Linkedin',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'linkedin',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Telegram',
            path: exampleLink,
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
            label: 'Other',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'chain',
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
          path: exampleLink,
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
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Information about the DG',
          path: exampleLink,
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
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Class name 2',
          path: exampleLink,
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
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Related link 2',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Related link 3',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Related link 4',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Related link 5',
          path: exampleLink,
        },
      },
    ],
  },
  section_custom1: {
    title: 'Custom links 1',
    links: [
      {
        link: {
          label: 'Custom link',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Custom link',
          path: exampleLink,
        },
      },
    ],
  },
  section_custom2: {
    title: 'Custom links 2',
    links: [
      {
        link: {
          label: 'Custom link',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Custom link',
          path: exampleLink,
        },
      },
    ],
  },
  section_common: {
    logo: {
      picture: {
        img: {
          src: '/logo.svg#negative',
          alt: 'European Commission',
        },
      },
      path: exampleLink,
    },
    social_media: {
      description: 'Follow the European Commission',
      description_inline: true,
      links: [
        {
          link: {
            label: 'Telegram',
            path: exampleLink,
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
            path: exampleLink,
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
        {
          link: {
            label: 'Mastodon',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'mastodon',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Youtube',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'youtube',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Other',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'chain',
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
          path: 'https://commission.europa.eu/languages-our-websites_en',
        },
      },
      {
        link: {
          label: 'Cookies',
          path: 'https://commission.europa.eu/cookies_en',
        },
      },
      {
        link: {
          label: 'Privacy policy',
          path: 'https://commission.europa.eu/privacy-policy_en',
        },
      },
      {
        link: {
          label: 'Legal notice',
          path: 'https://commission.europa.eu/legal-notice_en',
        },
      },
      {
        link: {
          label: 'Accessibility',
          path: exampleLink,
        },
      },
    ],
    extra_links: [
      {
        link: {
          label: 'Contact',
          path: 'https://commission.europa.eu/about-european-commission/contact_en',
        },
      },
    ],
  },
};
