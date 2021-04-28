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
        defaultValue: { summary: 'auto' },
      },
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
        defaultValue: { summary: 'auto' },
      },
    },
    maxWidth: {
      name: 'max width',
      type: 'select',
      defaultValue: 'ecl-u-max-width-none',
      control: {
        type: 'select',
        options: {
          None: 'ecl-u-max-width-none',
          '100%': 'ecl-u-max-width-100',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    maxHeight: {
      name: 'max height',
      type: 'select',
      defaultValue: 'ecl-u-max-height-none',
      control: {
        type: 'select',
        options: {
          None: 'ecl-u-max-height-none',
          '100%': 'ecl-u-max-height-100',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
  };
};

const styleContainer = {
  backgroundColor: '#d9d9d9',
  border: '2px dashed #404040',
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

const styleImage = {
  width: '12rem',
  height: '12rem',
};

export default {
  title: 'Utilities/Dimension',
  decorators: [withCode],
  parameters: {
    a11y: { disable: true },
  },
};

export const Custom = (args) => `
  <div style="${styled(styleContainer)}">
    <div 
      style="${styled(styleBox)}"
      class="${classnames(args.height, args.width)}"
    >
      Content box
    </div>
  </div>
  <div style="${styled(styleContainer)}" class="ecl-u-mt-m">
    <img
      src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg"
      alt="example"
      style="${styled(styleImage)}"
      class="${classnames(args.maxHeight, args.maxWidth)}"
    />
  </div>
`;

Custom.storyName = 'custom';
Custom.argTypes = getArgTypes();
