const languages = require('./lang.json');

const variants = [].concat(
  [],
  ...languages.map(({ id, name }) => [
    {
      name: `${name}-right`,
      context: {
        global: {
          language: id,
        },
        href: '../../example.html#top',
        title: 'Home',
        type: 'right',
      },
    },
    {
      name: `${name}-below`,
      context: {
        global: {
          language: id,
        },
        href: '../../example.html#top',
        title: 'Home',
        type: 'below',
      },
    },
  ])
);

module.exports = {
  title: 'Logos',
  label: 'Logos',
  status: 'ready',
  preview: '@preview-center-transparent',
  collated: true,
  hide: true,
  collator(markup, item) {
    return item.context.global
      ? `
      <!-- Start: @${item.handle} -->\n
      <div class="clearfix">
        <div class="language-${item.context.global.language}">\n
          <a href="${
            item.context.href
          }" class="ecl-logo ecl-logo--logotype" title="${item.context.title}">
            <span class="ecl-u-sr-only">${item.context.title}</span>
          </a>
          <a href="${
            item.context.href
          }" class="ecl-logo ecl-logo--logotypebelow" title="${
          item.context.title
        }">
            <span class="ecl-u-sr-only">${item.context.title}</span>
          </a>
        </div>
      </div>\n
      <!-- End: @${item.handle} -->\n
    `
      : '';
  },
  // default: 'english',
  variants,
};
