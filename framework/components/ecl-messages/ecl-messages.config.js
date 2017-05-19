module.exports = {
  title: 'Messages',
  label: 'Messages',
  status: 'planned',
  collated: true,
  default: 'info',
  preview: '@preview-center-transparent',
  tags: ['atom'],
  variants: [
    {
      name: 'info',
      label: 'Info',
      context: {
        messages_type: '',
        messages_sr_only: 'Informative message',
        messages_title: 'Some info title',
        messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
      },
    },
    {
      name: 'warning',
      label: 'Warning',
      context: {
        messages_type: 'warning',
        messages_sr_only: 'Warning message',
        messages_title: 'Some warning title',
        messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
      },
    },
    {
      name: 'status',
      label: 'Success',
      context: {
        messages_type: 'status',
        messages_sr_only: 'Success message',
        messages_title: 'Some status title',
        messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
      },
    },
    {
      name: 'error',
      label: 'Error',
      context: {
        messages_type: 'error',
        messages_sr_only: 'Error message',
        messages_title: 'Some error title',
        messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
      },
    },
    {
      name: 'livestream',
      label: 'Livestream',
      context: {
        messages_type: 'live',
        messages_sr_only: 'Livestream message',
        messages_title: 'Some livestream title',
        messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
      },
    },
  ],
};
