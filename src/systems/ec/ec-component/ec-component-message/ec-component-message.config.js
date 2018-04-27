const contextInfo = require('@ecl/generic-component-message/data/demo--info');
const contextWarning = require('@ecl/generic-component-message/data/demo--warning');
const contextSuccess = require('@ecl/generic-component-message/data/demo--success');
const contextError = require('@ecl/generic-component-message/data/demo--error');
const contextLivestream = require('@ecl/generic-component-message/data/demo--livestream');

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
      context: contextInfo,
    },
    {
      name: 'warning',
      label: 'Warning',
      context: contextWarning,
    },
    {
      name: 'success',
      label: 'Success',
      context: contextSuccess,
    },
    {
      name: 'error',
      label: 'Error',
      context: contextError,
    },
    {
      name: 'livestream',
      label: 'Livestream',
      context: contextLivestream,
    },
  ],
};
