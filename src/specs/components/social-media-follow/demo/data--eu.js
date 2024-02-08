const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description: 'Follow us',
  links: [
    {
      link: {
        label: 'Twitter',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'twitter',
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
        name: 'facebook',
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
        name: 'linkedin',
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
        name: 'instagram',
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
        name: 'telegram',
        size: 'm',
      },
    },
    {
      link: {
        label: 'Other social networks',
        path: exampleLink,
        icon_position: 'before',
      },
      icon: {
        path: '/icon-social-media.svg',
        name: 'chain',
        size: 'm',
      },
    },
  ],
};
