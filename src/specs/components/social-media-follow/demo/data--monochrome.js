const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description: 'Follow us',
  links: [
    {
      link: {
        label: 'Mastodon',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'mastodon',
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
        name: 'linkedin',
      },
    },
    {
      link: {
        label: 'Bluesky',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'bluesky',
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
        name: 'facebook',
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
        name: 'youtube',
      },
    },
    {
      link: {
        label: 'Other',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'chain',
      },
    },
  ],
};
