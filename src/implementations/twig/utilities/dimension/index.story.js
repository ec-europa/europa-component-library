import classnames from 'classnames';
import { withKnobs, select } from '@storybook/addon-knobs';
import { styled } from '@ecl/dom-utils';

const styleContainer = {
  backgroundColor: '#d9d9d9',
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
  decorators: [withKnobs],
};

export const Custom = () => {
  const displayContainer = select(
    'Display (container)',
    {
      Block: 'ecl-u-d-block',
      Inline: 'ecl-u-d-inline',
      'Inline block': 'ecl-u-d-inline-block',
      Flex: 'ecl-u-d-flex',
      'inline-flex': 'ecl-u-d-inline-flex',
      Table: 'ecl-u-d-table',
      'Table cell': 'ecl-u-d-table-cell',
      None: 'ecl-u-d-none',
    },
    'ecl-u-d-block'
  );

  const displayInner = select(
    'Display (inner box)',
    {
      Block: 'ecl-u-d-block',
      Inline: 'ecl-u-d-inline',
      'Inline block': 'ecl-u-d-inline-block',
      Flex: 'ecl-u-d-flex',
      'inline-flex': 'ecl-u-d-inline-flex',
      Table: 'ecl-u-d-table',
      'Table cell': 'ecl-u-d-table-cell',
      None: 'ecl-u-d-none',
    },
    'ecl-u-d-block'
  );

  const boxSizing = select(
    'Box sizing',
    {
      'Content box': 'ecl-u-box-sizing-content',
      'Border box': 'ecl-u-box-sizing-border',
    },
    'ecl-u-box-sizing-content'
  );

  return `
    <div style="${styled(styleContainer)}" class="${displayContainer}">
      <div style="${styled(styleBox)}" class="${classnames(
    displayInner,
    boxSizing
  )}">
        Box
      </div>
      <div style="${styled(styleBox)}" class="${classnames(
    displayInner,
    boxSizing
  )}">
        Box
      </div>
      <div style="${styled(styleBox)}" class="${classnames(
    displayInner,
    boxSizing
  )}">
        Box
      </div>
    </div> 
  `;
};

Custom.storyName = 'custom';
