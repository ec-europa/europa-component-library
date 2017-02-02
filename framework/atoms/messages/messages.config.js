module.exports = {
  title: 'Messages',
  label: 'Messages',
  status: 'wip',
  collated: true,
  preview: '@preview-center-transparent',
  variants: [{
    name: 'default',
    label: 'Default',
    context: {
      utility: '',
      messages_type: '',
      messages_sr_only: 'Info message',
      messages_title: 'Some title',
      messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
    },
  }, {
    name: 'info',
    label: 'Info',
    context: {
      utility: 'messages--icon-center',
      messages_type: 'info',
      messages_sr_only: 'Info message',
      messages_title: 'Some info title',
      messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
    },
  }, {
    name: 'warning',
    label: 'Warning',
    context: {
      utility: 'messages--icon-center',
      messages_type: 'warning',
      messages_sr_only: 'Warning message',
      messages_title: 'Some warning title',
      messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
    },
  }, {
    name: 'status',
    label: 'Status',
    context: {
      utility: 'messages--icon-center',
      messages_type: 'status',
      messages_sr_only: 'Status message',
      messages_title: 'Some status title',
      messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
    },
  }, {
    name: 'error',
    label: 'Error',
    context: {
      utility: 'messages--icon-center',
      messages_type: 'error',
      messages_sr_only: 'Error message',
      messages_title: 'Some error title',
      messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
    },
  }, {
    name: 'livestream',
    label: 'Livestream',
    context: {
      utility: 'messages--icon-center',
      messages_type: 'live',
      messages_sr_only: 'Livestream message',
      messages_title: 'Some livestream title',
      messages_data: 'Lorem ipsum lor sit amet, consectetur adipi',
    },
  }],
};
