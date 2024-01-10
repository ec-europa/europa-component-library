import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const styleContainer = {
  backgroundColor: '#d9d9d9',
  padding: '1rem',
  height: '3rem',
};

const styleBox = {
  backgroundColor: '#ebebeb',
  boxSizing: 'border-box',
  border: '2px solid #000',
  display: 'inline-block',
  height: '5rem',
  padding: '0.5rem',
  width: '110%',
};

export default {
  title: 'Utilities/Disable scroll',
  decorators: [withCode],
  parameters: {
    controls: { disable: true },
    a11y: { disable: true },
    EclNotes: { disable: true },
  },
};

export const Custom = () => `
    <h2 class="ecl-u-type-heading-2">Without disable scroll</h2>
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBox)}">
        Content
      </div>
    </div>
    <h2 class="ecl-u-type-heading-2">With disable scroll</h2>
    <div style="${styled(styleContainer)}" class="ecl-u-disablescroll">
      <div style="${styled(styleBox)}">
        Content
      </div>
    </div>
  `;

Custom.storyName = 'custom';
