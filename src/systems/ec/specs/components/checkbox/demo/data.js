// Simple content for demo
module.exports = {
  default: {
    helperText: 'This is an help text',
    id: 'checkbox-default',
    invalidText: 'An error message',
    label: 'A default checkbox',
    name: 'checkbox-default',
  },
  disabled: {
    disabled: true,
    helperText: 'This is an help text',
    id: 'checkbox-disabled',
    invalidText: 'An error message',
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
    hideLabel: true,
    id: 'checkbox-no-label',
    invalidText: 'An error message',
    label: 'An hidden label for a checkbox',
    name: 'checkbox-no-label',
  },
};
