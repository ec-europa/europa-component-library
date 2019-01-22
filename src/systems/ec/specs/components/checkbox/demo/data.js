// Simple content for demo
module.exports = {
  default: {
    helperText: 'This is an help text',
    id: 'checkbox-default',
    label: 'A default checkbox',
  },
  disabled: {
    disabled: true,
    helperText: 'This is an help text',
    id: 'checkbox-disabled',
    label: 'A disabled checkbox',
  },
  invalid: {
    helperText: 'This is an help text',
    id: 'checkbox-invalid',
    invalid: true,
    invalidText: 'An error message',
    label: 'An invalid checkbox',
  },
  withoutLabel: {
    helperText: 'This is an help text',
    id: 'checkbox-no-label',
    label: 'An hidden label for a checkbox',
    hideLabel: true,
  },
};
