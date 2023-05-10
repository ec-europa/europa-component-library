const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description:
    'Follow the latest progress and learn more about getting involved.',
  links: [
    {
      link: {
        label: 'Twitter',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'twitter-color',
        size: 'm',
      },
    },
    {
      link: {
        label: 'Facebook',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'facebook-color',
        size: 'm',
      },
    },
    {
      link: {
        label: 'Linkedin',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'linkedin-color',
        size: 'm',
      },
    },
    {
      link: {
        label: 'Instagram',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'instagram-color',
        size: 'm',
      },
    },
    {
      link: {
        label: 'Telegram',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'telegram-color',
        size: 'm',
      },
    },
  ],
  popover: {
    id: 'social-media-share-popover',
    toggle: {
      link: {
        label: 'Other social networks',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'share',
        size: 'm',
      },
    },
    links: [
      {
        link: {
          label: 'Pinterest',
          path: exampleLink,
          icon_position: 'before',
        },
        icon: {
          path: '/icon-social-media.svg',
          name: 'pinterest-color',
          size: 's',
        },
      },
      {
        link: {
          label: 'Mastodon',
          path: exampleLink,
          icon_position: 'before',
        },
        icon: {
          path: '/icon-social-media.svg',
          name: 'mastodon-color',
          size: 's',
        },
      },
      {
        link: {
          label: 'Reddit',
          path: exampleLink,
          icon_position: 'before',
        },
        icon: {
          path: '/icon-social-media.svg',
          name: 'reddit-color',
          size: 's',
        },
      },
      {
        link: {
          label: 'Youtube',
          path: exampleLink,
          icon_position: 'before',
        },
        icon: {
          path: '/icon-social-media.svg',
          name: 'youtube-color',
          size: 's',
        },
      },
      {
        link: {
          label: 'Flickr',
          path: exampleLink,
          icon_position: 'before',
        },
        icon: {
          path: '/icon-social-media.svg',
          name: 'flickr-color',
          size: 's',
        },
      },
      {
        link: {
          label: 'Skype',
          path: exampleLink,
          icon_position: 'before',
        },
        icon: {
          path: '/icon-social-media.svg',
          name: 'skype-color',
          size: 's',
        },
      },
      {
        link: {
          label: 'Spotify',
          path: exampleLink,
          icon_position: 'before',
        },
        icon: {
          path: '/icon-social-media.svg',
          name: 'spotify-color',
          size: 's',
        },
      },
    ],
  },
};
