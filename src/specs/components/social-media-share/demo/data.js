// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description: 'Share this page',
  links: [
    {
      path: exampleLink,
      label: 'Twitter',
      extra_classes: 'ecl-social-media-share__link--twitter',
      variant: 'standalone',
      icon_position: 'before',
      icon: [
        {
          name: 'twitter',
          size: 'xl',
          path: '/icons-social.svg',
          extra_classes: 'ecl-social-media-share__icon',
        },
        {
          name: 'twitter_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-share__icon-hover',
          path: '/icons-social.svg',
        },
      ],
    },
    {
      path: exampleLink,
      label: 'Facebook',
      extra_classes: 'ecl-social-media-share__link--facebook',
      variant: 'standalone',
      icon_position: 'before',
      icon: [
        {
          name: 'facebook',
          size: 'xl',
          path: '/icons-social.svg',
          extra_classes: 'ecl-social-media-share__icon',
        },
        {
          name: 'facebook_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-share__icon-hover',
          path: '/icons-social.svg',
        },
      ],
    },
    {
      path: exampleLink,
      label: 'Instagram',
      extra_classes: 'ecl-social-media-share__link--instagram',
      variant: 'standalone',
      icon_position: 'before',
      icon: [
        {
          name: 'instagram',
          size: 'xl',
          path: '/icons-social.svg',
          extra_classes: 'ecl-social-media-share__icon',
        },
        {
          name: 'instagram_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-share__icon-hover',
        },
      ],
    },
    {
      path: exampleLink,
      label: 'Linkedin',
      extra_classes: 'ecl-social-media-share__link--linkedin',
      variant: 'standalone',
      icon_position: 'before',
      icon: [
        {
          name: 'linkedin',
          size: 'xl',
          path: '/icons-social.svg',
          extra_classes: 'ecl-social-media-share__icon',
        },
        {
          name: 'linkedin_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-share__icon-hover',
          path: '/icons-social.svg',
        },
      ],
    },
    {
      path: exampleLink,
      label: 'E-mail',
      extra_classes: 'ecl-social-media-share__link--email',
      variant: 'standalone',
      icon_position: 'before',
      icon: [
        {
          name: 'email',
          size: 'xl',
          path: '/icons-social.svg',
          extra_classes: 'ecl-social-media-share__icon',
        },
        {
          name: 'email_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-share__icon-hover',
          path: '/icons-social.svg',
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
