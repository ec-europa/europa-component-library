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
        name: 'mastodon-color',
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
        name: 'bluesky-color',
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
