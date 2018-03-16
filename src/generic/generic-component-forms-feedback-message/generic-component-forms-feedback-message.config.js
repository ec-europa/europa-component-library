module.exports = {
  title: 'Feedback messages',
  label: 'Feedback messages',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <div class="ecl-u-mb-s">\n
        ${markup}\n
      </div>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  context: {
    title: 'Some feedback message',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam urna, elementum eget ultrices non, efficitur quis lectus. Donec mollis felis ac felis tempus mattis',
  },
  variants: [
    {
      name: 'default',
    },
    {
      name: 'error',
      context: {
        has_error: true,
      },
    },
  ],
};
