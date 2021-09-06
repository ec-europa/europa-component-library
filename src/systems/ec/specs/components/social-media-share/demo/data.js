// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description: 'Share this page',
  links: [
    {
      href: exampleLink,
      label: 'Twitter',
      className: 'ecl-social-media-share__link--twitter',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'twitter',
          size: 'xl',
          className: '',
        },
        {
          shape: 'twitter_hover',
          size: 'xl',
          className: 'ecl-social-media-share__icon-hover',
        },
      ],
    },
    {
      href: exampleLink,
      label: 'Facebook',
      className: 'ecl-social-media-share__link--facebook',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'facebook',
          size: 'xl',
          className: '',
        },
        {
          shape: 'facebook_hover',
          size: 'xl',
          className: 'ecl-social-media-share__icon-hover',
        },
      ],
    },
    {
      href: exampleLink,
      label: 'Instagram',
      className: 'ecl-social-media-share__link--instagram',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'instagram',
          size: 'xl',
          className: '',
        },
        {
          shape: 'instagram_hover',
          size: 'xl',
          className: 'ecl-social-media-share__icon-hover',
        },
      ],
    },
    {
      href: exampleLink,
      label: 'Linkedin',
      className: 'ecl-social-media-share__link--linkedin',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'linkedin',
          size: 'xl',
          className: '',
        },
        {
          shape: 'linkedin_hover',
          size: 'xl',
          className: 'ecl-social-media-share__icon-hover',
        },
      ],
    },
    {
      href: exampleLink,
      label: 'E-mail',
      className: 'ecl-social-media-share__link--email',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'email',
          size: 'xl',
          className: '',
        },
        {
          shape: 'email_hover',
          size: 'xl',
          className: 'ecl-social-media-share__icon-hover',
        },
      ],
    },
    {
      href: exampleLink,
      label: 'Other social networks',
      variant: 'standalone',
    },
  ],
};
