import classnames from 'classnames';
import { withKnobs, select } from '@storybook/addon-knobs';
import { styled } from '@ecl/dom-utils';

const styleContainer = {
  backgroundColor: '#d9d9d9',
  height: '10rem',
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
  decorators: [withKnobs],
};

export const Custom = () => {
  const width = select(
    'Width',
    {
      Auto: 'ecl-u-width-auto',
      '100%': 'ecl-u-width-100',
    },
    'ecl-u-width-auto'
  );

  const height = select(
    'Height',
    {
      Auto: 'ecl-u-height-auto',
      '100%': 'ecl-u-height-100',
    },
    'ecl-u-height-auto'
  );

  return `
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBox)}" class="${classnames(width, height)}">
        Content box
      </div>
    </div> 
  `;
};

Custom.storyName = 'custom';
