import withCode from '@ecl/storybook-addon-code';
import classnames from 'classnames';
import { styled } from '@ecl/dom-utils';

const styleBox = {
  height: '5rem',
  margin: '2rem auto',
  width: '10rem',
};

const getArgs = () => ({
  colour: 'ecl-u-border-color-black',
  width: 'ecl-u-border-width-1',
  direction: [
    'ecl-u-border-bottom',
    'ecl-u-border-left',
    'ecl-u-border-right',
    'ecl-u-border-top',
  ],
  radius: '',
});

const getArgTypes = () => ({
  colour: {
    name: 'colour (sample)',
    type: 'select',
    description: 'Apply different colours',
    options: [
      'ecl-u-border-color-black',
      'ecl-u-border-color-blue',
      'ecl-u-border-color-yellow',
      'ecl-u-border-color-grey',
      'ecl-u-border-color-grey-50',
      'ecl-u-border-color-grey-5',
      'ecl-u-border-color-blue-n',
      'ecl-u-border-color-red',
    ],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    control: {
      labels: {
        'ecl-u-border-color-black': 'Black',
        'ecl-u-border-color-blue': 'Blue',
        'ecl-u-border-color-yellow': 'Yellow',
        'ecl-u-border-color-grey': 'Grey',
        'ecl-u-border-color-grey-50': 'Grey 50',
        'ecl-u-border-color-grey-5': 'Grey 5',
        'ecl-u-border-color-blue-n': 'Blue N',
        'ecl-u-border-color-red': 'Red',
      },
    },
  },
  width: {
    type: 'select',
    description: 'Apply different widths',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    options: [
      'ecl-u-border-width-1',
      'ecl-u-border-width-2',
      'ecl-u-border-width-4',
      'ecl-u-border-width-8',
    ],
    control: {
      labels: {
        'ecl-u-border-width-1': '1px',
        'ecl-u-border-width-2': '2px',
        'ecl-u-border-width-4': '4px',
        'ecl-u-border-width-8': '8px',
      },
    },
  },
  direction: {
    description: 'Select the border to apply the style to',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    options: [
      'ecl-u-border-bottom',
      'ecl-u-border-left',
      'ecl-u-border-right',
      'ecl-u-border-top',
    ],
    control: {
      type: 'inline-check',
      labels: {
        'ecl-u-border-bottom': 'Bottom',
        'ecl-u-border-left': 'Left',
        'ecl-u-border-right': 'Right',
        'ecl-u-border-top': 'Top',
      },
    },
  },
  radius: {
    type: 'select',
    description: 'Apply different border radius',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    options: [
      '',
      'ecl-u-border-radius-1',
      'ecl-u-border-radius-2',
      'ecl-u-border-radius-4',
      'ecl-u-border-radius-8',
    ],
    control: {
      type: 'select',
      labels: {
        '': '0px',
        'ecl-u-border-radius-1': '1px',
        'ecl-u-border-radius-2': '2px',
        'ecl-u-border-radius-4': '4px',
        'ecl-u-border-radius-8': '8px',
      },
    },
  },
});

export default {
  title: 'Utilities/Border',
  decorators: [withCode],
};

export const Custom = (args) => {
  const direction =
    args.direction.length === 4 ? 'ecl-u-border-all' : args.direction;
  return `<div style="${styled(styleBox)}" class="${classnames(
    args.colour,
    args.width,
    args.radius,
    direction
  )}" />`;
};

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
