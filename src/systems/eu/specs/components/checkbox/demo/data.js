// Simple content for demo
module.exports = {
  default: {
    helperText: 'This is an help text',
    id: 'checkbox-default',
    label: 'A default checkbox',
    name: 'checkbox-default',
  },
  disabled: {
    disabled: true,
    helperText: 'This is an help text',
    id: 'checkbox-disabled',
    label: 'A disabled checkbox',
    name: 'checkbox-disabled',
  },
  invalid: {
    helperText: 'This is an help text',
    id: 'checkbox-invalid',
    invalid: true,
    invalidText: 'An error message',
    label: 'An invalid checkbox',
    name: 'checkbox-invalid',
  },
  withoutLabel: {
    helperText: 'This is an help text',
    id: 'checkbox-no-label',
    label: 'An hidden label for a checkbox',
    hideLabel: true,
    name: 'checkbox-no-label',
  },
};
