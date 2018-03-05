module.exports = {
  title: 'Labels',
  label: 'Labels',
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
  tags: ['atom'],
  default: 'upcoming',
  variants: [
    {
      name: 'upcoming',
      label: 'Upcoming',
      context: {
        variant: 'upcoming',
        body: 'Call status: upcoming',
      },
    },
    {
      name: 'open',
      label: 'Open / Highlight ',
      context: {
        variant: 'open',
        body: 'Call status: open',
      },
    },
    {
      name: 'close',
      label: 'Closed',
      context: {
        variant: 'close',
        body: 'Call status: closed',
      },
    },
  ],
};
