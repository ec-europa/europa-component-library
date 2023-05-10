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
      'ecl-u-border-color-primary',
      'ecl-u-border-color-secondary',
      'ecl-u-border-color-dark',
      'ecl-u-border-color-success',
      'ecl-u-border-color-danger',
    ],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    control: {
      labels: {
        'ecl-u-border-color-black': 'Black',
        'ecl-u-border-color-primary': 'Primary',
        'ecl-u-border-color-secondary': 'Secondary',
        'ecl-u-border-color-dark': 'Dark',
        'ecl-u-border-color-success': 'Success',
        'ecl-u-border-color-danger': 'Danger',
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
      'none',
      'ecl-u-border-radius-1',
      'ecl-u-border-radius-2',
      'ecl-u-border-radius-4',
      'ecl-u-border-radius-8',
    ],
    control: {
      type: 'select',
      labels: {
        none: '0px',
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
  if (args.radius === 'none') {
    args.radius = '';
  }
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
