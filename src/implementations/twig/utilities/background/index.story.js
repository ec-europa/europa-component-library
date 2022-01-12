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
    options: [
      'ecl-u-bg-white',
      'ecl-u-bg-blue ecl-u-type-color-white',
      'ecl-u-bg-yellow',
      'ecl-u-bg-grey ecl-u-type-color-white',
      'ecl-u-bg-grey-25',
      'ecl-u-bg-transparent',
    ],
    description: 'Select different background colours',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    control: {
      labels: {
        'ecl-u-bg-white': 'White',
        'ecl-u-bg-blue ecl-u-type-color-white': 'Blue',
        'ecl-u-bg-yellow': 'Yellow',
        'ecl-u-bg-grey ecl-u-type-color-white': 'Grey',
        'ecl-u-bg-grey-25': 'Grey-25',
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
