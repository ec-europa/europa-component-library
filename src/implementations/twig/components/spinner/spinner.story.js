import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-spinner/demo/data';
import spinner from './spinner.html.twig';
import notes from './README.md';

const dataNegative = { ...dataDefault, variant: 'negative' };

const getArgs = (data, variant) => {
  return {
    text: data.text,
    size: data.size || 'medium',
    variant,
    visible: true,
    centered: true,
    overlay: false,
  };
};

const getArgTypes = (variant) => {
  return {
    text: {
      type: { name: 'string' },
      description: 'Text below the loading indicator',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    variant: {
      type: { name: 'select' },
      options: [variant],
      description: 'Style of the loading indicator',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
        category: 'Style',
      },
    },
    size: {
      type: { name: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Variant of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
        category: 'Style',
      },
    },
    visible: {
      type: { name: 'boolean' },
      description: 'Visibility of the element',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Style',
      },
    },
    centered: {
      type: { name: 'boolean' },
      description: 'Center the element in a container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Style',
      },
    },
    overlay: {
      type: { name: 'boolean' },
      description: 'Toggle overlay',
      table: {
        disable: variant === 'primary',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Overlay',
      },
    },
  };
};

const withNegative = (story) => {
  const demo = story();

  return `<div class="ecl-u-bg-blue ecl-u-pa-xs ecl-u-width-100 ecl-u-height-100" style="position: absolute;">${demo}</div>`;
};

const prepareData = (data, args) => {
  if (args.overlay) {
    args.variant = 'primary';
  }

  return Object.assign(data, args);
};

export default {
  title: 'Components/Spinner',
  decorators: [withNotes, withCode],
};

export const Default = (args) => spinner(prepareData(dataDefault, args));

Default.storyName = 'primary';
Default.args = getArgs(dataDefault, 'primary');
Default.argTypes = getArgTypes('primary');
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Negative = (args) => spinner(prepareData(dataNegative, args));

Negative.storyName = 'negative';
Negative.args = getArgs(dataNegative, 'negative');
Negative.argTypes = getArgTypes('negative');
Negative.parameters = { notes: { markdown: notes, json: dataNegative } };
Negative.decorators = [withNotes, withCode, withNegative];
