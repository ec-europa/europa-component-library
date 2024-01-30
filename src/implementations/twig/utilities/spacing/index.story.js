import withCode from '@ecl/storybook-addon-code';
import { styled } from '@ecl/dom-utils';
import getSystem from '@ecl/builder/utils/getSystem';

const system = getSystem();

const styleLine = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
  marginTop: '0.5rem',
};
const styleContainer = {
  backgroundColor: '#dbdbdb',
  display: 'flex',
};
const styleContent = {
  backgroundColor: '#bfbfbf',
  border: '2px solid #404040',
  display: 'flex',
};
const styleItem = {
  color: '#000',
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
    controls: { disable: true },
    a11y: { disable: true },
    viewport: {
      defaultViewport: 'responsive',
    },
    EclNotes: { disable: true },
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
  ${system === 'ec' ? Spacing('a', '5xl') : ''}
  ${system === 'ec' ? Spacing('a', '6xl') : ''}

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
  ${system === 'ec' ? Spacing('v', '5xl') : ''}
  ${system === 'ec' ? Spacing('v', '6xl') : ''}

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
  ${system === 'ec' ? Spacing('h', '5xl') : ''}
  ${system === 'ec' ? Spacing('h', '6xl') : ''}
`;

Default.storyName = 'default';
