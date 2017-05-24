module.exports = {
  title: 'Paragraphs',
  label: 'Paragraphs',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<h3 class="ecl-heading ecl-heading--h3">${item.label}</h3>\n${markup}\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'l',
  variants: [
    {
      name: 'l',
      label: 'Leading paragraph',
      context: {
        modifier: 'ecl-p ecl-p--l',
      },
    },
    {
      name: 'm',
      label: 'Medium paragraph',
      context: {
        modifier: 'ecl-p ecl-p--m',
      },
    },
    {
      name: 's',
      label: 'Small paragraph',
      context: {
        modifier: 'ecl-p ecl-p--s',
      },
    },
    {
      name: 'xs',
      label: 'Extra small paragraph',
      context: {
        modifier: 'ecl-p ecl-p--xs',
      },
    },
    {
      name: 'xxs',
      label: 'Extra extra small paragraph',
      context: {
        modifier: 'ecl-p ecl-p--xxs',
      },
    },
  ],
};
