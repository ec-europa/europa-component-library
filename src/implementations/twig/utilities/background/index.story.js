import withCode from '@ecl/storybook-addon-code';

export default {
  title: 'Utilities/Background',
  decorators: [withCode],
};

const getArgs = () => ({
  background: 'ecl-u-bg-white',
});

const getArgTypes = () => ({
  background: {
    name: 'background colour (sample)',
    type: 'select',
    description: 'Select different background colours',
    options: [
      'ecl-u-bg-white',
      'ecl-u-bg-primary ecl-u-type-color-white',
      'ecl-u-bg-secondary',
      'ecl-u-bg-text ecl-u-type-color-white',
      'ecl-u-bg-success ecl-u-type-color-white',
      'ecl-u-bg-error ecl-u-type-color-white',
      'ecl-u-bg-transparent',
    ],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    control: {
      labels: {
        'ecl-u-bg-white': 'White',
        'ecl-u-bg-primary ecl-u-type-color-white': 'Primary',
        'ecl-u-bg-secondary': 'Secondary',
        'ecl-u-bg-text ecl-u-type-color-white': 'Grey',
        'ecl-u-bg-success ecl-u-type-color-white': 'Success',
        'ecl-u-bg-error ecl-u-type-color-white': 'Error',
        'ecl-u-bg-transparent': 'Transparent',
      },
    },
  },
});

export const Custom = (args) => `
    <p class='ecl-u-type-paragraph ${args.background}'>
      Sample text regular
      <br />
      <strong>Sample text bold</strong>
    </p>
  `;

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
