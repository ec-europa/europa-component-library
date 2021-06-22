import withCode from '@ecl/storybook-addon-code';

export default {
  title: 'Utilities/Background',
  decorators: [withCode],
};

const getArgTypes = () => {
  return {
    background: {
      name: 'background colour (sample)',
      type: 'select',
      defaultValue: 'ecl-u-bg-white',
      description: 'Select different background colours',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'select',
        options: {
          White: 'ecl-u-bg-white',
          Blue: 'ecl-u-bg-blue ecl-u-type-color-white',
          Yellow: 'ecl-u-bg-yellow',
          Grey: 'ecl-u-bg-grey ecl-u-type-color-white',
          'Grey-25': 'ecl-u-bg-grey-25',
          Transparent: 'ecl-u-bg-transparent',
        },
      },
    },
  };
};

export const Custom = (args) => {
  return `
    <p class='ecl-u-type-paragraph ${args.background}'>
      Sample text regular
      <br />
      <strong>Sample text bold</strong>
    </p>
  `;
};

Custom.storyName = 'custom';
Custom.argTypes = getArgTypes();
