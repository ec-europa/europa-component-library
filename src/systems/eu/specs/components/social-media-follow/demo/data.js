// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description:
    'Follow the latest progress and learn more about getting involved.',
  links: [
    {
      href: exampleLink,
      label: 'Twitter',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'twitter',
          size: 'xl',
        },
        {
          shape: 'twitter_hover',
          size: 'xl',
        },
      ],
    },
    {
      href: exampleLink,
      label: 'Facebook',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'facebook',
          size: 'xl',
        },
        {
          shape: 'facebook_hover',
          size: 'xl',
        },
      ],
    },
    {
      href: exampleLink,
      label: 'Instagram',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'instagram',
          size: 'xl',
        },
        {
          shape: 'instagram_hover',
          size: 'xl',
        },
      ],
    },
    {
      href: exampleLink,
      label: 'Linkedin',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'linkedin',
          size: 'xl',
        },
        {
          shape: 'linkedin_hover',
          size: 'xl',
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
