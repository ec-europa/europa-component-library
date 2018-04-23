const contextDefault = require('@ecl/generic-component-link/data/data--default');
const contextExternal = require('@ecl/generic-component-link/data/data--external');
const contextStandalone = require('@ecl/generic-component-link/data/data--standalone');
const contextInverted = require('@ecl/generic-component-link/data/data--inverted');
const contextAll = require('@ecl/generic-component-link/data/data--all');
const contextMore = require('@ecl/generic-component-link/data/data--more');

module.exports = {
  title: 'Links',
  label: 'Links',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div>Lorem ipsum, ${markup} consectetur adipiscing elit</div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: contextDefault,
    },
    {
      name: 'external',
      label: 'External',
      context: contextExternal,
    },
    {
      name: 'standalone',
      label: 'Standalone',
      context: contextStandalone,
    },
    {
      name: 'inverted',
      label: 'Inverted',
      context: contextInverted,
    },
    {
      name: 'all',
      label: 'All',
      context: contextAll,
    },
    {
      name: 'more',
      label: 'More',
      context: contextMore,
    },
  ],
};
