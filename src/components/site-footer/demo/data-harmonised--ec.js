const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  co_owner: {
    title: 'This page is managed by:',
    links: [
      {
        link: {
          label: 'Directorate-General for [DG role]',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Directorate-General for [DG role]',
          path: exampleLink,
        },
      },
    ],
  },
  section_site_info: {
    title: {
      link: {
        label: 'Site name',
        path: exampleLink,
      },
    },
    description:
      'This site is managed by:<span class="ecl-site-footer__description-name">[name of the manager of the site]</span>',
    action_button: {
      link: {
        label: 'Subscribe for updates',
        path: exampleLink,
      },
      icon: {
        name: 'envelope-simple',
        family: 'phosphor',
        style: 'inverted',
      },
    },
    social_media: {
      links: [
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
            label: 'LinkedIn',
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
            label: 'Bluesky',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'bluesky',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Facebook',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'facebook',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'YouTube',
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
  sections_custom: [
    {
      title: 'Custom links',
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
    {
      title: 'Custom links',
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
    {
      title: 'Custom links',
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
  ],
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
            label: 'LinkedIn',
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
            label: 'Bluesky',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'bluesky',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'Facebook',
            path: exampleLink,
            hide_label: true,
            icon_position: 'before',
            inverted: true,
          },
          icon: {
            name: 'facebook',
            family: 'networks',
            style: 'inverted',
          },
        },
        {
          link: {
            label: 'YouTube',
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
