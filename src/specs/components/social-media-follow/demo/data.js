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
      icon: [
        {
          path: '/icon-social.svg',
          name: 'twitter',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon',
        },
        {
          path: '/icon-social.svg',
          name: 'twitter_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon-hover',
        },
      ],
    },
    {
      path: exampleLink,
      label: 'Facebook',
      variant: 'standalone',
      icon_position: 'before',
      icon: [
        {
          path: '/icon-social.svg',
          name: 'facebook',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon',
        },
        {
          path: '/icon-social.svg',
          name: 'facebook_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon-hover',
        },
      ],
    },
    {
      path: exampleLink,
      label: 'Instagram',
      variant: 'standalone',
      icon_position: 'before',
      icon: [
        {
          path: '/icon-social.svg',
          name: 'instagram',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon',
        },
        {
          path: '/icon-social.svg',
          name: 'instagram_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon-hover',
        },
      ],
    },
    {
      path: exampleLink,
      label: 'Linkedin',
      variant: 'standalone',
      icon_position: 'before',
      icon: [
        {
          path: '/icon-social.svg',
          name: 'linkedin',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon',
        },
        {
          path: '/icon-social.svg',
          name: 'linkedin_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon-hover',
        },
      ],
    },
    {
      path: exampleLink,
      label: 'Other social networks',
      variant: 'standalone',
    },
  ],
};
