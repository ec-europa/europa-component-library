const linksDefault = [
  {
    link: {
      href: '../../example.html#',
      label: 'Facebook',
    },
    variant: 'facebook',
    extra_attributes: [{ name: 'title', value: 'Facebook' }],
  },
  {
    link: {
      href: '../../example.html#',
      label: 'Twitter',
    },
    variant: 'twitter',
    extra_attributes: [{ name: 'title', value: 'Twitter' }],
  },
  {
    link: {
      href: '../../example.html#',
      label: 'Instagram',
    },
    title: 'Instagram',
    variant: 'instagram',
    extra_attributes: [{ name: 'title', value: 'Instagram' }],
  },
];

const linksSpecific = [
  {
    link: {
      href: '../../example.html#',
      label: 'Jean-Claude Junker',
    },
    variant: 'facebook',
    extra_attributes: [
      { name: 'title', value: 'See Jean-Claude Junker on Facebook' },
    ],
  },
  {
    link: {
      href: '../../example.html#',
      label: 'European Commission',
    },
    variant: 'facebook',
    extra_attributes: [
      { name: 'title', value: 'See European Commission on Facebook' },
    ],
  },
  {
    link: {
      href: '../../example.html#',
      label: 'European Commission',
    },
    variant: 'twitter',
    extra_attributes: [
      { name: 'title', value: 'See European Commission on Twitter' },
    ],
  },
];

module.exports = {
  title: 'Social Media Links',
  label: 'Social Media Links',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants: [
    {
      name: 'default',
      label: 'Default list with default display',
      context: {
        social_icons: linksDefault,
        text: 'View European Commission on:',
      },
    },
    {
      name: 'default-specific',
      label: 'Specific list with default display',
      context: {
        social_icons: linksSpecific,
      },
    },
    {
      name: ' horizontal',
      label: ' Default list with horizontal display',
      context: {
        variant: 'horizontal',
        social_icons: linksDefault,
        text: 'View European Commission on:',
      },
    },
    {
      name: 'horizontal-specific',
      label: 'Specific list with horizontal display',
      context: {
        variant: 'horizontal',
        social_icons: linksSpecific,
      },
    },
  ],
};
