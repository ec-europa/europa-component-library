const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description:
    'Follow the latest progress and learn more about getting involved.',
  links: [
    {
      path: exampleLink,
      label: 'Twitter',
      variant: 'standalone',
      icon_position: 'before',
      icon: {
        path: '/icon-social-media.svg',
        name: 'twitter-color',
        size: 'xl',
        extra_classes: 'ecl-social-media-follow__icon',
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
        size: 'xl',
        extra_classes: 'ecl-social-media-follow__icon',
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
        size: 'xl',
        extra_classes: 'ecl-social-media-follow__icon',
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
        size: 'xl',
        extra_classes: 'ecl-social-media-follow__icon',
      },
    },
    {
      path: exampleLink,
      label: 'Mastodon',
      variant: 'standalone',
      icon_position: 'before',
      icon: {
        path: '/icon-social-media.svg',
        name: 'mastodon-color',
        size: 'xl',
        extra_classes: 'ecl-social-media-follow__icon',
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
        size: 'xl',
        extra_classes: 'ecl-social-media-follow__icon',
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
        size: 'xl',
        extra_classes: 'ecl-social-media-follow__icon',
      },
    },
  ],
};
