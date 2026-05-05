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
        name: 'mastodon',
        family: 'networks',
        style: 'monochrome',
      },
    },
    {
      link: {
        label: 'LinkedIn',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'linkedin',
        family: 'networks',
        style: 'monochrome',
      },
    },
    {
      link: {
        label: 'Bluesky',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'bluesky',
        family: 'networks',
        style: 'monochrome',
      },
    },
    {
      link: {
        label: 'Facebook',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'facebook',
        family: 'networks',
        style: 'monochrome',
      },
    },
    {
      link: {
        label: 'YouTube',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'youtube',
        family: 'networks',
        style: 'monochrome',
      },
    },
    {
      link: {
        label: 'Other',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'chain',
        family: 'networks',
        style: 'monochrome',
      },
    },
  ],
};
