const languages = require('./lang.json');

const variants = languages.map(({ id, name }) => ({
  name,
  context: {
    global: {
      language: id,
    },
    to: '#top',
    title: 'Home',
  },
}));

module.exports = {
  title: 'Logos',
  label: 'Logos',
  status: 'ready',
  preview: '@preview-center-transparent',
  collated: true,
  hide: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div class="clearfix">
        <div class="language-${item.context.global.language}">\n
          <a href="${item.context
            .to}" class="ecl-logo ecl-logo--logotype" title="${item.context
      .title}">
            <span class="ecl-sr-only">${item.context.title}</span>
          </a>
          <a href="${item.context
            .to}" class="ecl-logo ecl-logo--logotypebelow" title="${item.context
      .title}">
            <span class="ecl-sr-only">${item.context.title}</span>
          </a>
        </div>
      </div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'english',
  variants,
};
