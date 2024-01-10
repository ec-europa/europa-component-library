import withCode from '@ecl/storybook-addon-code';
import classnames from 'classnames';
import { styled } from '@ecl/dom-utils';

const styleContainer = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 0',
};
const styleContainerNegative = {
  alignItems: 'center',
  backgroundColor: '#808080',
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 0',
};
const styleBox = {
  border: '1px solid #000',
  height: '5rem',
  width: '10rem',
};
const styleInner = {
  backgroundColor: '#ebebeb',
  height: '100%',
  width: '100%',
};
const styleInnerNegative = {
  backgroundColor: '#404040',
  height: '100%',
  width: '100%',
};

const getArgs = () => ({
  shadow: 'ecl-u-shadow-1',
  shadowInner: 'ecl-u-shadow-none',
});

const getArgTypes = () => ({
  shadow: {
    name: 'box shadow',
    type: 'select',
    description: 'Possible shadow elevation',
    options: [
      'ecl-u-shadow-none',
      'ecl-u-shadow-1',
      'ecl-u-shadow-2',
      'ecl-u-shadow-3',
      'ecl-u-shadow-negative-1',
      'ecl-u-shadow-negative-2',
      'ecl-u-shadow-negative-3',
    ],
    control: {
      labels: {
        'ecl-u-shadow-none': 'none',
        'ecl-u-shadow-1': 'elevation 1',
        'ecl-u-shadow-2': 'elevation 2',
        'ecl-u-shadow-3': 'elevation 3',
        'ecl-u-shadow-negative-1': 'negative, elevation 1',
        'ecl-u-shadow-negative-2': 'negative, elevation 2',
        'ecl-u-shadow-negative-3': 'negative, elevation 3',
      },
    },
    table: {
      type: 'string',
      defaultValue: { summary: '' },
    },
  },
  shadowInner: {
    name: 'inner shadow',
    type: 'select',
    description: 'Possible inner shadow',
    options: [
      'ecl-u-shadow-none',
      'ecl-u-shadow-inner-1',
      'ecl-u-shadow-inner-2',
      'ecl-u-shadow-negative-inner-1',
      'ecl-u-shadow-negative-inner-2',
    ],
    control: {
      labels: {
        'ecl-u-shadow-none': 'none',
        'ecl-u-shadow-inner-1': 'depth 1',
        'ecl-u-shadow-inner-2': 'depth 2',
        'ecl-u-shadow-negative-inner-1': 'negative, depth 1',
        'ecl-u-shadow-negative-inner-2': 'negative, depth 2',
      },
    },
    table: {
      type: 'string',
      defaultValue: { summary: '' },
    },
  },
});

export default {
  title: 'Utilities/Shadow',
  decorators: [withCode],
  parameters: {
    EclNotes: { disable: true },
  },
};

export const Custom = (args) => {
  const container = args.shadow.includes('negative')
    ? styled(styleContainerNegative)
    : styled(styleContainer);
  const inner = args.shadowInner.includes('negative')
    ? styled(styleInnerNegative)
    : styled(styleInner);

  return `
  <div style="${container}">
    <div style="${styled(styleBox)}" class="${classnames(args.shadow)}">
      <div style="${inner}" class="${classnames(args.shadowInner)}" />
    </div>
  </div>
  `;
};

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
