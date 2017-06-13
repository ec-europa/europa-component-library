module.exports = {
  title: 'Tables',
  label: 'Tables',
  status: 'ready',
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<h3 class="ecl-heading ecl-heading--h3">${item.label}</h3>\n${markup}\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'default',
      label: 'Default table',
      context: {
        _demo: {
          scripts: 'ECL.eclTables();',
        },
      },
    },
    {
      name: 'empty',
      label: 'Table with empty heading',
      context: {
        _demo: {
          scripts: 'ECL.eclTables();',
        },
      },
    },
    {
      name: 'colspan',
      label: 'Table with colspan',
      context: {
        _demo: {
          scripts: 'ECL.eclTables();',
        },
      },
    },
    {
      name: 'colspan-empty',
      label: 'Table with colspan and empty heading',
      context: {
        _demo: {
          scripts: 'ECL.eclTables();',
        },
      },
    },
  ],
  default: 'default',
};
