import classnames from 'classnames';
import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const getArgTypes = () => {
  return {
    displayContainer: {
      name: 'display (container)',
      type: 'select',
      description: 'Choose different display values',
      defaultValue: 'ecl-u-d-block',
      control: {
        type: 'select',
        options: {
          Block: 'ecl-u-d-block',
          Inline: 'ecl-u-d-inline',
          'Inline block': 'ecl-u-d-inline-block',
          Flex: 'ecl-u-d-flex',
          'inline-flex': 'ecl-u-d-inline-flex',
          Table: 'ecl-u-d-table',
          'Table cell': 'ecl-u-d-table-cell',
          None: 'ecl-u-d-none',
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
      defaultValue: 'ecl-u-d-block',
      control: {
        type: 'select',
        options: {
          Block: 'ecl-u-d-block',
          Inline: 'ecl-u-d-inline',
          'Inline block': 'ecl-u-d-inline-block',
          Flex: 'ecl-u-d-flex',
          'inline-flex': 'ecl-u-d-inline-flex',
          Table: 'ecl-u-d-table',
          'Table cell': 'ecl-u-d-table-cell',
          None: 'ecl-u-d-none',
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
      defaultValue: 'ecl-u-box-sizing-content',
      control: {
        type: 'select',
        options: {
          'Content box': 'ecl-u-box-sizing-content',
          'Border box': 'ecl-u-box-sizing-border',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  };
};

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
    knobs: { disable: true },
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
Custom.argTypes = getArgTypes();
