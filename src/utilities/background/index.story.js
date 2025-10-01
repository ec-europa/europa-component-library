import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';
import { getColorModeControls } from '@ecl/story-utils';

const system = getSystem();

export default {
  title: 'Utilities/Background',
  decorators: [withCode],
  parameters: {
    EclNotes: { disable: true },
  },
};

const getArgs = () => {
  const args = {};

  if (system === 'ec') {
    args.show_color_mode = false;
    args.color_mode = 'default';
    args.background_color_mode = 'surface';
  }

  args.background = 'white';

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

    argTypes.background_color_mode = {
      name: 'color mode background',
      type: 'select',
      description: 'Select a color mode background',
      options: [
        'surface-lowest',
        'surface-lowest-variant',
        'surface-low-1',
        'surface-low-2',
        'surface-medium',
        'surface',
        'surface-variant-1',
        'surface-variant-2',
        'on-surface-highlight',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      mapping: {
        'surface-lowest': 'surface-lowest',
        'surface-lowest-variant': 'surface-lowest-variant',
        'surface-low-1': 'surface-low-1',
        'surface-low-2': 'surface-low-2',
        'surface-medium': 'surface-medium',
        surface: 'surface',
        'surface-variant-1': 'surface-variant-1',
        'surface-variant-2': 'surface-variant-2',
        'on-surface-highlight': 'on-surface-highlight',
      },
      if: { arg: 'show_color_mode' },
    };
  }

  argTypes.background = {
    name: 'background color (sample)',
    type: 'select',
    description: 'Select different background colors',
    options:
      system === 'ec'
        ? [
            'white',
            'primary',
            'secondary',
            'neutral',
            'grey',
            'success',
            'info',
            'warning',
            'error',
          ]
        : [
            'white',
            'primary',
            'secondary',
            'dark',
            'success',
            'info',
            'warning',
            'error',
          ],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    mapping:
      system === 'ec'
        ? {
            white: 'white',
            primary: 'primary',
            secondary: 'secondary',
            neutral: 'neutral',
            grey: 'grey',
            success: 'success',
            error: 'error',
          }
        : {
            white: 'white',
            primary: 'primary',
            secondary: 'secondary',
            dark: 'dark',
            success: 'success',
            error: 'error',
          },
    if: { arg: 'show_color_mode', truthy: false },
  };

  return argTypes;
};

export const Custom = (args) => {
  let classes = '';
  if (args.show_color_mode) {
    classes = `ecl-u-bg-${args.background_color_mode}`;

    if (args.color_mode !== '') {
      classes += ` ecl-color-mode--${args.color_mode}`;
    }
  } else {
    classes = `ecl-u-bg-${args.background}`;
  }

  return `<div class='ecl-u-pa-xl ecl-u-border-all ${classes}'></div>`;
};

Custom.storyName = 'custom';
Custom.args = getArgs();
Custom.argTypes = getArgTypes();
