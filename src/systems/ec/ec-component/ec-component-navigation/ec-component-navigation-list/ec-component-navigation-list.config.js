const links = [
  {
    href: 'https://example.com/',
    label: 'Home',
  },
  {
    href: 'https://example.com/',
    label: 'About Us',
    is_active: true,
  },
  {
    href: 'https://example.com/',
    label: 'More Information',
  },
  {
    href: 'https://example.com/',
    label: 'Contact Us',
  },
];

module.exports = {
  title: 'Navigation lists',
  label: 'Lists',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  tags: ['organism'],
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        variant: 'default',
        title: 'Default Navigation Menu',
        links,
      },
    },
    {
      name: 'tabs',
      label: 'Tabs',
      context: {
        variant: 'tabs',
        title: 'Tabs Navigation Menu',
        links,
      },
    },
    {
      name: 'small',
      label: 'Small',
      context: {
        variant: 'small',
        title: 'Small Navigation Menu',
        links,
      },
    },
  ],
};
