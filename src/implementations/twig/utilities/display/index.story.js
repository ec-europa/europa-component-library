import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const getArgs = () => ({
  displayContainer: 'ecl-u-d-block',
  displayInner: 'ecl-u-d-block',
  boxSizing: 'ecl-u-box-sizing-content',
});

const getArgTypes = () => ({
  displayContainer: {
    name: 'display (container)',
    type: 'select',
    description: 'Choose different display values',
    options: [
      'ecl-u-d-block',
      'ecl-u-d-inline',
      'ecl-u-d-inline-block',
      'ecl-u-d-flex',
      'ecl-u-d-inline-flex',
      'ecl-u-d-table',
      'ecl-u-d-table-cell',
      'ecl-u-d-none',
    ],
    control: {
      labels: {
        'ecl-u-d-block': 'Block',
        'ecl-u-d-inline': 'Inline',
        'ecl-u-d-inline-block': 'Inline block',
        'ecl-u-d-flex': 'Flex',
        'ecl-u-d-inline-flex': 'inline-flex',
        'ecl-u-d-table': 'Table',
        'ecl-u-d-table-cell': 'Table cell',
        'ecl-u-d-none': 'None',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  displayInner: {
    name: 'display (inner box)',
    description: 'Choose different display values',
    type: 'select',
    options: [
      'ecl-u-d-block',
      'ecl-u-d-inline',
      'ecl-u-d-inline-block',
      'ecl-u-d-flex',
      'ecl-u-d-inline-flex',
      'ecl-u-d-table',
      'ecl-u-d-table-cell',
      'ecl-u-d-none',
    ],
    control: {
      labels: {
        'ecl-u-d-block': 'Block',
        'ecl-u-d-inline': 'Inline',
        'ecl-u-d-inline-block': 'Inline block',
        'ecl-u-d-flex': 'Flex',
        'ecl-u-d-inline-flex': 'inline-flex',
        'ecl-u-d-table': 'Table',
        'ecl-u-d-table-cell': 'Table cell',
        'ecl-u-d-none': 'None',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  boxSizing: {
    name: 'box sizing',
    type: 'select',
    description: 'Choose different box-sizing values',
    options: ['ecl-u-box-sizing-content', 'ecl-u-box-sizing-border'],
    control: {
      labels: {
        'ecl-u-box-sizing-content': 'Content box',
        'ecl-u-box-sizing-border': 'Border box',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
});

const styleContainer = {
  backgroundColor: '#d9d9d9',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
  padding: '0.5rem',
};

const styleBox = {
  backgroundColor: '#ebebeb',
  border: '2px solid #000',
  height: '5rem',
  margin: '0.5rem',
  padding: '0.5rem',
  width: '5rem',
};

export default {
  title: 'Utilities/Display',
  decorators: [withCode],
  parameters: {
    a11y: { disable: true },
  },
};

export const Custom = (args) => `
    <div style="${styled(styleContainer)}" class="${args.displayContainer}">
      <div style="${styled(styleBox)}" class="${classnames(
  args.displayInner,
  args.boxSizing
)}">
        Box
      </div>
      <div style="${styled(styleBox)}" class="${classnames(
  args.displayInner,
  args.boxSizing
)}">
        Box
      </div>
      <div style="${styled(styleBox)}" class="${classnames(
  args.displayInner,
  args.boxSizing
)}">
        Box
      </div>
    </div>
  `;

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
