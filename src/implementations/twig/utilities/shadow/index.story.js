import withCode from '@ecl/storybook-addon-code';
import classnames from 'classnames';
import { styled } from '@ecl/dom-utils';

const styleBox = {
  backgroundColor: '#d9d9d9',
  height: '5rem',
  margin: '2rem auto',
  width: '10rem',
};

const getArgs = () => ({
  shadow: 'ecl-u-shadow-1',
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
    ],
    control: {
      labels: {
        'ecl-u-shadow-none': 'none',
        'ecl-u-shadow-1': 'elevation 1',
        'ecl-u-shadow-2': 'elevation 2',
        'ecl-u-shadow-3': 'elevation 3',
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
};

export const Custom = (args) =>
  `<div style="${styled(styleBox)}" class="${classnames(args.shadow)}" />`;

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
