const linksDefault = [
  {
    href: 'https://example.com/',
    label: 'Facebook',
    title: 'Facebook',
    variant: 'facebook',
  },
  {
    href: 'https://example.com/',
    label: 'Twitter',
    title: 'Twitter',
    variant: 'twitter',
  },
  {
    href: 'https://example.com/',
    label: 'Instagram',
    title: 'Instagram',
    variant: 'instagram',
  },
];

const linksSpecific = [
  {
    href: 'https://example.com/',
    label: 'Jean-Claude Junker',
    title: 'See Jean-Claude Junker on Facebook',
    variant: 'facebook',
  },
  {
    href: 'https://example.com/',
    label: 'European Commission',
    title: 'See European Commission on Facebook',
    variant: 'facebook',
  },
  {
    href: 'https://example.com/',
    label: 'European Commission',
    title: 'See European Commission on Twitter',
    variant: 'twitter',
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
        links: linksDefault,
        has_text: true,
      },
    },
    {
      name: 'default-specific',
      label: 'Specific list with default display',
      context: {
        links: linksSpecific,
      },
    },
    {
      name: ' horizontal',
      label: ' Default list with horizontal display',
      context: {
        variant: 'horizontal',
        links: linksDefault,
        has_text: true,
      },
    },
    {
      name: 'horizontal-specific',
      label: 'Specific list with horizontal display',
      context: {
        variant: 'horizontal',
        links: linksSpecific,
      },
    },
  ],
};
