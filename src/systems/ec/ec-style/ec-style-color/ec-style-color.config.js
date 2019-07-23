const colors = require('./colors.json');

const variants = Object.keys(colors).map(k => ({
  name: k,
  context: {
    code: colors[k].code,
    name: k,
    category: colors[k].category,
  },
}));

module.exports = {
  title: 'Colour',
  label: 'Colour',
  status: 'ready',
  order: 2,
  preview: '@preview-palette',
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<li class="palette palette--${item.context.category}">\n${markup}\n</li>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'ecl-color-primary',
  variants,
};
