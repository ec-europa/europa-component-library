import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const getArgs = () => ({
  width: 'ecl-u-width-auto',
  height: 'ecl-u-height-auto',
  maxWidth: 'ecl-u-max-width-none',
  maxHeight: 'ecl-u-max-height-none',
});

const getArgTypes = () => ({
  width: {
    type: 'select',
    options: ['ecl-u-width-auto', 'ecl-u-width-100'],
    control: {
      labels: {
        'ecl-u-width-auto': 'auto',
        'ecl-u-width-100': '100%',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'auto' },
      category: 'width/height',
    },
    mapping: {
      auto: 'ecl-u-width-auto',
      '100%': 'ecl-u-width-100',
    },
  },
  height: {
    type: 'select',
    options: ['ecl-u-height-auto', 'ecl-u-height-100'],
    control: {
      labels: {
        'ecl-u-height-auto': 'auto',
        'ecl-u-height-100': '100%',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'auto' },
      category: 'width/height',
    },
    mapping: {
      auto: 'ecl-u-height-auto',
      '100%': 'ecl-u-height-100',
    },
  },
  maxWidth: {
    name: 'max width',
    type: 'select',
    options: ['ecl-u-max-width-none', 'ecl-u-max-width-100'],
    control: {
      labels: {
        'ecl-u-max-width-none': 'none',
        'ecl-u-max-width-100': '100%',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'none' },
      category: 'max-width/max-height',
    },
    mapping: {
      none: 'ecl-u-max-width-none',
      '100%': 'ecl-u-max-width-100',
    },
  },
  maxHeight: {
    name: 'max height',
    type: 'select',
    options: ['ecl-u-max-height-none', 'ecl-u-max-height-100'],
    control: {
      labels: {
        'ecl-u-max-height-none': 'none',
        'ecl-u-max-height-100': '100%',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'none' },
      category: 'max-width/max-height',
    },
    mapping: {
      none: 'ecl-u-max-height-none',
      '100%': 'ecl-u-max-height-100',
    },
  },
});

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
    EclNotes: { disable: true },
  },
};

export const Custom = (args) => `
  <h2 class="ecl-u-type-heading-2">Width/height demo</h2>
  <div style="${styled(styleContainer)}">
    <div
      style="${styled(styleBox)}"
      class="${classnames(args.height, args.width)}"
    >
      Content box
    </div>
  </div>
  <h2 class="ecl-u-type-heading-2">Max-width/max-height demo</h2>
  <div style="${styled(styleContainer)}">
    <img
      src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg"
      alt="example"
      style="${styled(styleImage)}"
      class="${classnames(args.maxHeight, args.maxWidth)}"
    />
  </div>
`;

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
