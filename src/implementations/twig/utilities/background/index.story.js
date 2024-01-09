import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

const system = getSystem();

export default {
  title: 'Utilities/Background',
  decorators: [withCode],
  parameters: {
    EclNotes: { disable: true },
  },
};

const getArgs = () => ({
  background: 'white',
});

const getArgTypes = () => ({
  background: {
    name: 'background colour (sample)',
    type: 'select',
    description: 'Select different background colours',
    options: [
      'white',
      'primary',
      'secondary',
      'dark',
      'success',
      'info',
      'warning',
      'error',
      'transparent',
    ],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    mapping: {
      white: 'white',
      primary: 'primary',
      secondary: 'secondary',
      dark: 'dark',
      success: 'success',
      error: 'error',
      transparent: 'transparent',
    },
  },
});

export const Custom = (args) => {
  let background = `ecl-u-bg-${args.background}`;
  const negative =
    system === 'eu'
      ? ['primary', 'dark', 'info', 'success', 'error', 'warning']
      : ['primary', 'dark', 'info', 'success', 'error'];
  if (negative.includes(args.background)) {
    background += ' ecl-u-type-color-white';
  }
  return `<p class='ecl-u-type-paragraph ${background}'>
      Sample text regular
      <br />
      <strong>Sample text bold</strong>
    </p>
  `;
};

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
