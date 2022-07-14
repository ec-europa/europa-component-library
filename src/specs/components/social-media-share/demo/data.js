const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description: 'Share this page',
  links: [
    {
      path: exampleLink,
      label: 'Twitter',
      variant: 'standalone',
      icon_position: 'before',
      icon: {
        path: '/icon-social-media.svg',
        name: 'twitter-color',
        size: 'm',
        extra_classes: 'ecl-social-media-share__icon',
      },
    },
    {
      path: exampleLink,
      label: 'Facebook',
      variant: 'standalone',
      icon_position: 'before',
      icon: {
        path: '/icon-social-media.svg',
        name: 'facebook-color',
        size: 'm',
        extra_classes: 'ecl-social-media-share__icon',
      },
    },
    {
      path: exampleLink,
      label: 'Instagram',
      variant: 'standalone',
      icon_position: 'before',
      icon: {
        path: '/icon-social-media.svg',
        name: 'instagram-color',
        size: 'm',
        extra_classes: 'ecl-social-media-share__icon',
      },
    },
    {
      path: exampleLink,
      label: 'Linkedin',
      variant: 'standalone',
      icon_position: 'before',
      icon: {
        path: '/icon-social-media.svg',
        name: 'linkedin-color',
        size: 'm',
        extra_classes: 'ecl-social-media-share__icon',
      },
    },
    {
      path: exampleLink,
      label: 'Telegram',
      variant: 'standalone',
      icon_position: 'before',
      icon: {
        path: '/icon-social-media.svg',
        name: 'telegram-color',
        size: 'm',
        extra_classes: 'ecl-social-media-share__icon',
      },
    },
    {
      path: exampleLink,
      label: 'Other social networks',
      variant: 'standalone',
      icon_position: 'before',
      icon: {
        path: '/icons.svg',
        name: 'share',
        size: 'm',
        extra_classes: 'ecl-social-media-share__icon',
      },
    },
  ],
};
