const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description: 'Follow us',
  links: [
    {
      link: {
        label: 'Facebook',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'facebook',
        family: 'networks',
      },
    },
    {
      link: {
        label: 'Instagram',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'instagram',
        family: 'networks',
      },
    },
    {
      link: {
        label: 'Mastodon',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'mastodon',
        family: 'networks',
      },
    },
    {
      link: {
        label: 'Linkedin',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'linkedin',
        family: 'networks',
      },
    },
    {
      link: {
        label: 'Telegram',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        name: 'telegram',
        family: 'networks',
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
      },
    },
  ],
};
