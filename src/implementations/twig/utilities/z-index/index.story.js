import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const styleContainer = {
  backgroundColor: '#d9d9d9',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
  height: '20rem',
  padding: '0.5rem',
  position: 'relative',
};

const styleBox = {
  alignItems: 'top',
  backgroundColor: '#ebebeb',
  boxSizing: 'border-box',
  border: '2px solid #000',
  display: 'flex',
  height: '4rem',
  padding: '0.5rem',
  position: 'absolute',
  width: '20rem',
};

const styleBox1 = {
  ...styleBox,

  left: '2rem',
  top: '2rem',
};

const styleBox2 = {
  ...styleBox,

  left: '4rem',
  top: '4rem',
};

const styleBox3 = {
  ...styleBox,

  left: '6rem',
  top: '6rem',
};

const styleBox4 = {
  ...styleBox,

  left: '8rem',
  top: '8rem',
};

const styleBox5 = {
  ...styleBox,

  left: '10rem',
  top: '10rem',
};

export default {
  title: 'Utilities/Z-index',
  decorators: [withCode],
  parameters: {
    controls: { disable: true },
    a11y: { disable: true },
    EclNotes: { disable: true },
  },
};

export const Custom = () => `
    <div style="${styled(styleContainer)}">
      Normal content
      <div style="${styled(styleBox1)}" class="ecl-u-z-highlight">
        Highlight z-index (.ecl-u-z-highlight)
      </div>
      <div style="${styled(styleBox2)}" class="ecl-u-z-navigation">
        Navigation z-index (.ecl-u-z-navigation)
      </div>
      <div style="${styled(styleBox3)}" class="ecl-u-z-dropdown">
        Dropdown z-index (.ecl-u-z-dropdown)
      </div>
      <div style="${styled(styleBox4)}" class="ecl-u-z-modal">
        Modal z-index (.ecl-u-z-modal)
      </div>
      <div style="${styled(styleBox5)}" class="ecl-u-z-max">
        Maximum z-index (.ecl-u-z-max)
      </div>
    </div>
  `;

Custom.storyName = 'custom';
