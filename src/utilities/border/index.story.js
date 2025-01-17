import withCode from '@ecl/storybook-addon-code';
import classnames from 'classnames';
import { styled } from '@ecl/dom-utils';

const styleBox = {
  height: '5rem',
  margin: '2rem auto',
  width: '10rem',
};

const getArgs = () => ({
  colour: 'ecl-u-border-color-dark',
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
      'ecl-u-border-color-dark',
      'ecl-u-border-color-primary',
      'ecl-u-border-color-secondary',
      'ecl-u-border-color-success',
      'ecl-u-border-color-error',
    ],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    control: {
      labels: {
        'ecl-u-border-color-dark': 'dark',
        'ecl-u-border-color-primary': 'primary',
        'ecl-u-border-color-secondary': 'secondary',
        'ecl-u-border-color-success': 'success',
        'ecl-u-border-color-error': 'error',
      },
    },
    mapping: {
      dark: 'ecl-u-border-color-dark',
      primary: 'ecl-u-border-color-primary',
      secondary: 'ecl-u-border-color-secondary',
      success: 'ecl-u-border-color-success',
      error: 'ecl-u-border-color-error',
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
    mapping: {
      '1px': 'ecl-u-border-width-1',
      '2px': 'ecl-u-border-width-2',
      '4px': 'ecl-u-border-width-4',
      '8px': 'ecl-u-border-width-8',
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
        'ecl-u-border-bottom': 'bottom',
        'ecl-u-border-left': 'left',
        'ecl-u-border-right': 'right',
        'ecl-u-border-top': 'top',
      },
    },
    mapping: {
      bottom: 'ecl-u-border-bottom',
      left: 'ecl-u-border-left',
      right: 'ecl-u-border-right',
      top: 'ecl-u-border-top',
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
    mapping: {
      '0px': 'none',
      '1px': 'ecl-u-border-radius-1',
      '2px': 'ecl-u-border-radius-2',
      '4px': 'ecl-u-border-radius-4',
      '8px': 'ecl-u-border-radius-8',
    },
  },
});

export default {
  title: 'Utilities/Border',
  decorators: [withCode],
  parameters: {
    EclNotes: { disable: true },
  },
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
    direction,
  )}" />`;
};

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
