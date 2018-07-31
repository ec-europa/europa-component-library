const context = require('@ecl/generic-component-dialog/data/demo')('eu');

module.exports = {
  title: 'Dialogs',
  label: 'Dialogs',
  collated: false,
  preview: '@preview-icons-center-transparent',
  status: 'ready',
  tags: ['molecule'],
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Normal',
      context,
    },
    {
      name: 'wide',
      label: 'Wide',
      context: Object.assign({}, context, {
        theme: 'wide',
      }),
    },
  ],
};
