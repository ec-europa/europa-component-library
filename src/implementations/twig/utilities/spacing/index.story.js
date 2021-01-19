import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';

const styleLine = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
  marginTop: '0.5rem',
};
const styleContainer = {
  backgroundColor: '#ebebeb',
  display: 'flex',
};
const styleContent = {
  backgroundColor: '#9f9f9f',
  border: '2px solid #404040',
  display: 'flex',
};
const styleItem = {
  backgroundColor: '#fff',
  display: 'block',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
  textAlign: 'center',
  width: '7rem',
};

const Spacing = (type, token) => `
  <div style="${styled(styleLine)}">
    <div style="${styled(styleContainer)}">
      <div style="${styled(styleContent)}" class="${`ecl-u-m${type}-${token}`}">
        <span style="${styled(styleItem)}">${`ecl-u-m${type}-${token}`}</span>
      </div>
    </div>

    <div style="${styled(styleContainer)}">
      <div style="${styled(styleContent)}" class=${`ecl-u-p${type}-${token}`}>
        <span style="${styled(styleItem)}">${`ecl-u-p${type}-${token}`}</span>
      </div>
    </div>
  </div>
`;

export default {
  title: 'Utilities/Spacing',
  decorators: [withCode],
  parameters: {
    knobs: { disable: true },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export const Default = () => `
  <h2 class="ecl-u-type-heading-2">All around spacing</h2>
  ${Spacing('a', '2xs')}
  ${Spacing('a', 'xs')}
  ${Spacing('a', 's')}
  ${Spacing('a', 'm')}
  ${Spacing('a', 'l')}
  ${Spacing('a', 'xl')}
  ${Spacing('a', '2xl')}
  ${Spacing('a', '3xl')}
  ${Spacing('a', '4xl')}

  <h2 class="ecl-u-type-heading-2">Vertical spacing</h2>
  ${Spacing('v', '2xs')}
  ${Spacing('v', 'xs')}
  ${Spacing('v', 's')}
  ${Spacing('v', 'm')}
  ${Spacing('v', 'l')}
  ${Spacing('v', 'xl')}
  ${Spacing('v', '2xl')}
  ${Spacing('v', '3xl')}
  ${Spacing('v', '4xl')}

  <h2 class="ecl-u-type-heading-2">Horizontal spacing</h2>
  ${Spacing('h', '2xs')}
  ${Spacing('h', 'xs')}
  ${Spacing('h', 's')}
  ${Spacing('h', 'm')}
  ${Spacing('h', 'l')}
  ${Spacing('h', 'xl')}
  ${Spacing('h', '2xl')}
  ${Spacing('h', '3xl')}
  ${Spacing('h', '4xl')}
`;

Default.storyName = 'default';
