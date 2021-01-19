import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const getArgTypes = () => {
  return {
    width: {
      type: 'select',
      defaultValue: 'ecl-u-width-auto',
      control: {
        type: 'select',
        options: {
          Auto: 'ecl-u-width-auto',
          '100%': 'ecl-u-width-100',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      height: {
        type: 'select',
        defaultValue: 'ecl-u-height-auto',
        control: {
          type: 'select',
          options: {
            Auto: 'ecl-u-height-auto',
            '100%': 'ecl-u-height-100',
          },
        },
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: '' },
        },
      },
    },
  };
};

const styleContainer = {
  backgroundColor: '#d9d9d9',
  height: '10rem',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
  width: '10rem',
};

const styleBox = {
  backgroundColor: '#ebebeb',
  boxSizing: 'border-box',
  border: '2px solid #000',
  display: 'inline-block',
};

export default {
  title: 'Utilities/Dimension',
  decorators: [withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Custom = (args) => `
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBox)}" class="${classnames(
  Object.values(args)
)}">
        Content box
      </div>
    </div>
  `;

Custom.storyName = 'custom';
Custom.argTypes = getArgTypes();
