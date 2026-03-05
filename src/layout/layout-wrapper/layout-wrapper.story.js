import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDemo from './demo/data';
import layoutWrapper from './layout-wrapper.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    configuration: 'col-2',
    nb_items: 6,
    direction: 'horizontal',
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    configuration: {
      name: 'layout configuration',
      type: 'select',
      description: 'Change layout',
      options: [
        'col-2',
        'col-3',
        'col-4',
        'highlight-col-2',
        'highlight-col-3',
      ],
      control: {
        labels: {
          'col-2': '2 columns',
          'col-3': '3 columns',
          'col-4': '4 columns',
          'highlight-col-2': 'highlight + 2 columns',
          'highlight-col-3': 'highlight + 3 columns',
        },
      },
      mapping: {
        '2 columns': 'col-2',
        '3 columns': 'col-3',
        '4 columns': 'col-4',
        'highlight + 2 columns': 'highlight-col-2',
        'highlight + 3 columns': 'highlight-col-3',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'col-2' },
      },
    },
    nb_items: {
      name: 'number of items',
      description: 'Number of items displayed',
      control: { type: 'range', min: 1, max: 8, step: 1 },
    },
    direction: {
      name: 'direction',
      type: 'select',
      description: 'Flow of items',
      options: ['horizontal', 'vertical'],
      control: {
        labels: {
          horizontal: 'horizontal',
          vertical: 'vertical',
        },
      },
      mapping: {
        horizontal: 'horizontal',
        vertical: 'vertical',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'horizontal' },
      },
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  clone.items.splice(
    -(clone.items.length - args.nb_items),
    clone.items.length - args.nb_items,
  );

  return Object.assign(clone, args);
};

export default {
  title: 'Layout/Layout Wrapper',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedLayout = await layoutWrapper(prepareData(dataDemo, args));
  return renderedLayout;
};
Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDemo } };
