import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const styleContainer = {
  backgroundColor: '#d9d9d9',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
  padding: '0.5rem',
};

const styleBoxLeft = {
  backgroundColor: '#BFD0E4',
  boxSizing: 'border-box',
  border: '2px solid #000',
  display: 'inline-block',
  float: 'left',
  padding: '0.5rem',
};

const styleBoxRight = {
  backgroundColor: '#FFF4BB',
  boxSizing: 'border-box',
  border: '2px solid #000',
  display: 'inline-block',
  float: 'right',
  padding: '0.5rem',
};

export default {
  title: 'Utilities/Clearfix',
  decorators: [withCode],
  parameters: {
    controls: { disable: true },
    EclNotes: { disable: true },
    a11y: { disable: true },
  },
};

export const Custom = () => `
    <h2 class="ecl-u-type-heading-2">Without clearfix</h2>
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleBoxLeft)}">
        Float left box
      </div>
      <div style="${styled(styleBoxRight)}">
        Float right box
      </div>
    </div>
    <p class="ecl-u-type-paragraph">Text after</p>

    <h2 class="ecl-u-type-heading-2">With clearfix</h2>
    <div style="${styled(styleContainer)}" class="ecl-u-clearfix">
      <div style="${styled(styleBoxLeft)}">
        Float left box
      </div>
      <div style="${styled(styleBoxRight)}">
        Float right box
      </div>
    </div>
    <p class="ecl-u-type-paragraph">Text after</p>
  `;

Custom.storyName = 'custom';
