import withCode from '@ecl/storybook-addon-code';
import classnames from 'classnames';
import { styled } from '@ecl/dom-utils';
import getSystem from '@ecl/builder/utils/getSystem';
import { getColorModeControls } from '@ecl/story-utils';

const system = getSystem();

const styleBox = {
  height: '5rem',
  margin: '2rem auto',
  width: '10rem',
};

const getArgs = () => {
  const args = {};

  if (system === 'ec') {
    args.show_color_mode = false;
    args.color_mode = 'default';
    args.border_color_mode = 'border';
  }

  args.colour = 'ecl-u-border-color-primary';
  args.width = 'ecl-u-border-width-1';
  args.direction = [
    'ecl-u-border-bottom',
    'ecl-u-border-left',
    'ecl-u-border-right',
    'ecl-u-border-top',
  ];
  args.radius = 'none';

  return args;
};

const getArgTypes = () => {
  const argTypes = getColorModeControls({ arg: 'show_color_mode' });

  if (system === 'ec') {
    argTypes.show_color_mode = {
      name: 'use color modes',
      type: 'boolean',
      description: 'Switch to color mode colors',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    };

    argTypes.border_color_mode = {
      name: 'color mode border',
      type: 'select',
      description: 'Select a color mode border',
      options: ['border-low', 'border-medium', 'border', 'border-high'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      mapping: {
        'border-low': 'border-low',
        'border-medium': 'border-medium',
        border: 'border',
        'border-high': 'border-high',
      },
      if: { arg: 'show_color_mode' },
    };
  }

  argTypes.colour = {
    name: 'colour (sample)',
    type: 'select',
    description: 'Apply different colours',
    options:
      system === 'ec'
        ? [
            'ecl-u-border-color-primary',
            'ecl-u-border-color-secondary',
            'ecl-u-border-color-neutral',
            'ecl-u-border-color-grey',
            'ecl-u-border-color-success',
            'ecl-u-border-color-error',
          ]
        : [
            'ecl-u-border-color-primary',
            'ecl-u-border-color-secondary',
            'ecl-u-border-color-dark',
            'ecl-u-border-color-success',
            'ecl-u-border-color-error',
          ],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    control: {
      labels:
        system === 'ec'
          ? {
              'ecl-u-border-color-primary': 'primary',
              'ecl-u-border-color-secondary': 'secondary',
              'ecl-u-border-color-neutral': 'neutral',
              'ecl-u-border-color-grey': 'grey',
              'ecl-u-border-color-success': 'success',
              'ecl-u-border-color-error': 'error',
            }
          : {
              'ecl-u-border-color-primary': 'primary',
              'ecl-u-border-color-secondary': 'secondary',
              'ecl-u-border-color-dark': 'dark',
              'ecl-u-border-color-success': 'success',
              'ecl-u-border-color-error': 'error',
            },
    },
    mapping:
      system === 'ec'
        ? {
            primary: 'ecl-u-border-color-primary',
            secondary: 'ecl-u-border-color-secondary',
            neutral: 'ecl-u-border-color-neutral',
            grey: 'ecl-u-border-color-grey',
            success: 'ecl-u-border-color-success',
            error: 'ecl-u-border-color-error',
          }
        : {
            primary: 'ecl-u-border-color-primary',
            secondary: 'ecl-u-border-color-secondary',
            dark: 'ecl-u-border-color-dark',
            success: 'ecl-u-border-color-success',
            error: 'ecl-u-border-color-error',
          },
    if: { arg: 'show_color_mode', truthy: false },
  };

  argTypes.width = {
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
  };

  argTypes.direction = {
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
  };

  argTypes.radius = {
    type: 'select',
    description: 'Apply different border radius',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    options: [
      'none',
      'ecl-u-border-radius-2',
      'ecl-u-border-radius-4',
      'ecl-u-border-radius-8',
      'ecl-u-border-radius-12',
    ],
    control: {
      type: 'select',
      labels: {
        none: '0px',
        'ecl-u-border-radius-2': '2px',
        'ecl-u-border-radius-4': '4px',
        'ecl-u-border-radius-8': '8px',
        'ecl-u-border-radius-12': '12px',
      },
    },
    mapping: {
      '0px': 'none',
      '2px': 'ecl-u-border-radius-2',
      '4px': 'ecl-u-border-radius-4',
      '8px': 'ecl-u-border-radius-8',
      '12px': 'ecl-u-border-radius-12',
    },
  };

  return argTypes;
};

export default {
  title: 'Utilities/Border',
  decorators: [withCode],
  parameters: {
    EclNotes: { disable: true },
  },
};

export const Custom = (args) => {
  const direction =
    args.direction.length === 4 ? 'ecl-u-border-all' : args.direction;
  return `<div style="${styled(styleBox)}" class="${classnames(
    args.colour,
    args.width,
    direction,
    {
      [args.radius]: args.radius !== 'none',
      [`ecl-color-mode--${args.color_mode}`]:
        args.show_color_mode && args.color_mode !== 'default',
      [`ecl-u-border-color-${args.border_color_mode}`]: args.show_color_mode,
    },
  )}" />`;
};

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
