const languages = require('./lang.json');

const variants = [
  {
    name: 'default',
    label: 'Default (no language)',
    context: {
      href: '../../example.html#top',
      title: 'Home',
    },
  },
].concat(
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
    return `
      <!-- Start: @${item.handle} -->\n
      ${
        item.context.global && item.context.global.language
          ? `<div class="language-${item.context.global.language}">\n`
          : `<div>\n`
      }
        ${markup}
      </div>
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants,
};
