const languages = require('../lang.json');

const variants = languages.map(({ id, name }) => ({
  name,
  context: {
    global: {
      language: id,
    },
    to: '#top',
    title: 'Home',
    externalClass: '',
  },
}));

module.exports = {
  title: 'Logos - Logotype',
  label: 'Logotype',
  status: 'planned',
  preview: '@preview-center-transparent',
  order: 3,
  collated: true,
  collator(markup, item) {
    return `<!-- Start: @${item.handle} -->\n<div class="clearfix"><div class="language-${item.context.global.language}">\n${markup}</div></div>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'english',
  variants,
};
