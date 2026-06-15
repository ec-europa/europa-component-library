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
  section_feedback: {
    description: 'Help us improve our website',
    action_button: {
      link: {
        label: 'Fill in survey',
        path: exampleLink,
        type: 'primary-highlight-inverted',
      },
      icon: {
        name: 'arrow-up-right',
        family: 'phosphor',
      },
    },
  },
  section_site_info: {
    logo: {
      picture: {
        img: {
          src: '/logo.svg#negative',
          alt: 'European Commission',
        },
      },
      path: exampleLink,
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
  },
  section_core: {
    links: [
      {
        link: {
          label: 'About us',
          path: 'https://commission.europa.eu/about-european-commission_en',
        },
      },
      {
        link: {
          label: 'Contact us',
          path: 'https://commission.europa.eu/about-european-commission/contact_en',
        },
      },
      {
        link: {
          label: 'Priorities',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Topics',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Funding and tenders',
          path: 'https://commission.europa.eu/funding-tenders_en',
        },
      },
      {
        link: {
          label: 'Jobs',
          path: 'https://commission.europa.eu/jobs-european-commission_en',
        },
      },
      {
        link: {
          label: 'Press corner',
          path: 'https://ec.europa.eu/commission/presscorner/home/en',
        },
      },
      {
        link: {
          label: 'Events',
          path: 'https://commission.europa.eu/events_en',
        },
      },
    ],
  },
  section_common: {
    social_media: {
      description: 'Follow us',
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
  },
};
