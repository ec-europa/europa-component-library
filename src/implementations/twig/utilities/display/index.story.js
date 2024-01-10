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
        'ecl-u-d-block': 'block',
        'ecl-u-d-inline': 'inline',
        'ecl-u-d-inline-block': 'inline-block',
        'ecl-u-d-flex': 'flex',
        'ecl-u-d-inline-flex': 'inline-flex',
        'ecl-u-d-table': 'table',
        'ecl-u-d-table-cell': 'table-cell',
        'ecl-u-d-none': 'none',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    mapping: {
      block: 'ecl-u-d-block',
      inline: 'ecl-u-d-inline',
      'inline-block': 'ecl-u-d-inline-block',
      flex: 'ecl-u-d-flex',
      'inline-flex': 'ecl-u-d-inline-flex',
      table: 'ecl-u-d-table',
      'table-cell': 'ecl-u-d-table-cell',
      none: 'ecl-u-d-none',
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
        'ecl-u-d-block': 'block',
        'ecl-u-d-inline': 'inline',
        'ecl-u-d-inline-block': 'inline-block',
        'ecl-u-d-flex': 'flex',
        'ecl-u-d-inline-flex': 'inline-flex',
        'ecl-u-d-table': 'table',
        'ecl-u-d-table-cell': 'table-cell',
        'ecl-u-d-none': 'none',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    mapping: {
      block: 'ecl-u-d-block',
      inline: 'ecl-u-d-inline',
      'inline-block': 'ecl-u-d-inline-block',
      flex: 'ecl-u-d-flex',
      'inline-flex': 'ecl-u-d-inline-flex',
      table: 'ecl-u-d-table',
      'table-cell': 'ecl-u-d-table-cell',
      none: 'ecl-u-d-none',
    },
  },
  boxSizing: {
    name: 'box sizing',
    type: 'select',
    description: 'Choose different box-sizing values',
    options: ['ecl-u-box-sizing-content', 'ecl-u-box-sizing-border'],
    control: {
      labels: {
        'ecl-u-box-sizing-content': 'content box',
        'ecl-u-box-sizing-border': 'border box',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    mapping: {
      'content box': 'ecl-u-box-sizing-content',
      'border box': 'ecl-u-box-sizing-border',
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
    EclNotes: { disable: true },
  },
};

export const Custom = (args) => `
    <div style="${styled(styleContainer)}" class="${args.displayContainer}">
      <div style="${styled(styleBox)}" class="${classnames(
        args.displayInner,
        args.boxSizing,
      )}">
        Box
      </div>
      <div style="${styled(styleBox)}" class="${classnames(
        args.displayInner,
        args.boxSizing,
      )}">
        Box
      </div>
      <div style="${styled(styleBox)}" class="${classnames(
        args.displayInner,
        args.boxSizing,
      )}">
        Box
      </div>
    </div>
  `;

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
