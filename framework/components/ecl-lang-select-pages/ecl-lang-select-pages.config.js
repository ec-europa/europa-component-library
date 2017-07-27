const data = {
  unavailable: 'français',
  current: 'Nederlands',
  options: [
    {
      href: '/en',
      hreflang: 'en',
      label: 'English',
      lang: 'en',
    },
    {
      href: '/hr',
      hreflang: 'hr',
      label: 'hrvatski',
      lang: 'hr',
    },
    {
      href: '/it',
      hreflang: 'it',
      label: 'italiano',
      lang: 'it',
    },
    {
      href: '/lv',
      hreflang: 'lv',
      label: 'latviesu',
      lang: 'lv',
    },
    {
      href: '/hu',
      hreflang: 'hu',
      label: 'magyar',
      lang: 'hu',
    },
  ],
};

module.exports = {
  title: 'Language select (Page)',
  label: 'Language select (Page)',
  tags: ['molecule'],
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
  variants: [
    {
      name: 'default',
      title: 'Language select (Page) - Default',
      label: 'Default',
      context: data,
    },
    {
      name: 'primary',
      title: 'Language select (Page) - Primary',
      label: 'Primary',
      context: Object.assign({}, data, {
        theme: 'primary',
      }),
    },
  ],
};
