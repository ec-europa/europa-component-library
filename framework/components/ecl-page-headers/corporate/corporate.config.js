module.exports = {
  title: 'Corporate',
  label: 'Corporate',
  status: 'ready',
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<h3 class="ecl-heading ecl-heading--h3">${item.label}</h3>\n${markup}\n<!-- End: @${item.handle} -->\n`;
  },
  collated: true,
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Informational/Political page header',
      context: {
        paragraph_class: 'ecl-paragraph ecl-paragraph--m',
      },
    },
    {
      name: 'l',
      label: 'Large corporate page header',
      context: {
        modifier_class: 'ecl-page-header--image',
        paragraph_class: 'ecl-paragraph ecl-paragraph--l',
      },
    },
    {
      name: 'xl',
      label: 'Extra large corporate page header',
      context: {
        paragraph_class: 'ecl-paragraph ecl-paragraph--l ecl-u-fs-xl',
      },
    },
  ],
};
