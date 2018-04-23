const links = [
  {
    href: '../../example.html#',
    label: 'Home',
  },
  {
    href: '../../example.html#',
    label: 'About Us',
    is_active: true,
  },
  {
    href: '../../example.html#',
    label: 'More Information',
  },
  {
    href: '../../example.html#',
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
        display: 'default',
        title: 'Default Navigation Menu',
        links,
      },
    },
    {
      name: 'tabs',
      label: 'Tabs',
      context: {
        display: 'tabs',
        title: 'Tabs Navigation Menu',
        links,
      },
    },
    {
      name: 'small',
      label: 'Small',
      context: {
        display: 'small',
        title: 'Small Navigation Menu',
        links,
      },
    },
  ],
};
