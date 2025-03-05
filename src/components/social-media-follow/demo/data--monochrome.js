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
      },
    },
  ],
};
