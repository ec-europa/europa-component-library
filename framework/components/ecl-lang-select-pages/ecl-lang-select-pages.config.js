const data = {
  unavailable: 'français',
  options: [
    {
      href: '/en',
      hreflang: 'en',
      label: 'English',
      lang: 'en',
    },
    {
      href: '/nl',
      hreflang: 'nl',
      label: 'Nederlands',
      lang: 'nl',
      is_selected: true,
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
      context: Object.assign({}, data, {
        variant: 'default',
      }),
    },
    {
      name: 'default-primary',
      title: 'Language select (Page) - Default primary',
      label: 'Default primary',
      context: Object.assign({}, data, {
        variant: 'default',
        theme: 'primary',
      }),
    },
    {
      name: 'dropdown',
      title: 'Language select (Page) - Dropdown',
      label: 'Dropdown',
      context: Object.assign({}, data, {
        variant: 'dropdown',
      }),
    },
    {
      name: 'dropdown-primary',
      title: 'Language select (Page) - Dropdown primary',
      label: 'Dropdown primary',
      context: Object.assign({}, data, {
        variant: 'dropdown',
        theme: 'primary',
      }),
    },
  ],
};
