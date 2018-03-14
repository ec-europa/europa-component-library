module.exports = {
  title: 'Messages',
  label: 'Messages',
  status: 'ready',
  collated: false,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'info',
  tags: ['atom'],
  context: {
    _demo: {
      scripts:
        "document.addEventListener('DOMContentLoaded', function () { ECL.initMessages(); });",
    },
  },
  variants: [
    {
      name: 'info',
      label: 'Info',
      context: {
        dismiss: true,
        srOnly: 'Informative message',
        title: 'Some info title',
        messages: [
          'Lorem ipsum lor sit amet, consectetur adipi',
          'Lorem ipsum lor sit amet, consectetur adipi',
          'Lorem ipsum lor sit amet, consectetur adipi',
        ],
      },
    },
    {
      name: 'warning',
      label: 'Warning',
      context: {
        modifier: 'warning',
        dismiss: true,
        srOnly: 'Warning message',
        title: 'Some warning title',
        messages: [
          'Lorem ipsum lor sit amet, consectetur adipi',
          'Lorem ipsum lor sit amet, consectetur adipi',
          'Lorem ipsum lor sit amet, consectetur adipi',
        ],
      },
    },
    {
      name: 'success',
      label: 'Success',
      context: {
        modifier: 'success',
        dismiss: true,
        srOnly: 'Success message',
        title: 'Some success title',
        messages: ['Lorem ipsum lor sit amet, consectetur adipi'],
      },
    },
    {
      name: 'error',
      label: 'Error',
      context: {
        modifier: 'error',
        dismiss: true,
        srOnly: 'Error message',
        title: 'Some error title',
        messages: ['Lorem ipsum lor sit amet, consectetur adipi'],
      },
    },
    {
      name: 'livestream',
      label: 'Livestream',
      context: {
        modifier: 'live',
        dismiss: true,
        srOnly: 'Livestream message',
        title: 'Some livestream title',
        messages: ['Lorem ipsum lor sit amet, consectetur adipi'],
      },
    },
  ],
};
