import withCode from '@ecl/storybook-addon-code';
import classnames from 'classnames';
import { styled } from '@ecl/dom-utils';

const styleBox = {
  height: '5rem',
  margin: '2rem auto',
  width: '10rem',
};

const getArgTypes = () => {
  return {
    colour: {
      name: 'colour (sample)',
      type: 'select',
      defaultValue: 'ecl-u-border-color-black',
      description: 'Apply different colours',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'select',
        options: {
          Black: 'ecl-u-border-color-black',
          Blue: 'ecl-u-border-color-blue',
          Yellow: 'ecl-u-border-color-yellow',
          Grey: 'ecl-u-border-color-grey',
          'Grey 50': 'ecl-u-border-color-grey-50',
          'Grey 5': 'ecl-u-border-color-grey-5',
          'Blue N': 'ecl-u-border-color-blue-n',
          Red: 'ecl-u-border-color-red',
        },
      },
    },
    width: {
      type: 'select',
      description: 'Apply different widths',
      defaultValue: 'ecl-u-border-width-1',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'select',
        options: {
          '1px': 'ecl-u-border-width-1',
          '2px': 'ecl-u-border-width-2',
          '4px': 'ecl-u-border-width-4',
          '8px': 'ecl-u-border-width-8',
        },
      },
    },
    direction: {
      type: 'inline-check',
      defaultValue: [
        'ecl-u-border-bottom',
        'ecl-u-border-left',
        'ecl-u-border-right',
        'ecl-u-border-top',
      ],
      description: 'Select the border to apply the style to',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'inline-check',
        options: {
          Bottom: 'ecl-u-border-bottom',
          Left: 'ecl-u-border-left',
          Right: 'ecl-u-border-right',
          Top: 'ecl-u-border-top',
        },
      },
    },
    radius: {
      type: 'select',
      description: 'Apply different border radius',
      defaultValue: 'ecl-u-border-radius-0',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'select',
        options: {
          '0px': 'ecl-u-border-radius-1',
          '1px': 'ecl-u-border-radius-1',
          '2px': 'ecl-u-border-radius-2',
          '4px': 'ecl-u-border-radius-4',
          '8px': 'ecl-u-border-radius-8',
        },
      },
    },
  };
};

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
    direction
  )}" />`;
};

Custom.storyName = 'custom';
Custom.argTypes = getArgTypes();
