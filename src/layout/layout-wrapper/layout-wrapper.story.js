import { useArgs } from '@storybook/preview-api';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDemo from './demo/data';
import layoutWrapper from './layout-wrapper.html.twig';
import notes from './README.md';

const configurations = {
  columns: {
    'col-2': '2 columns',
    'col-3': '3 columns',
    'col-4': '4 columns',
  },
  highlight: {
    'highlight-col-2': 'highlight + 2 columns',
    'highlight-col-3': 'highlight + 3 columns',
  },
};

const getArgs = (defaultConfig, defaultNbItems = 6, firstItemType = 'card') => {
  const args = {
    configuration: defaultConfig,
    nb_items: defaultNbItems,
    direction: 'horizontal',
    item_1: firstItemType,
    item_2: 'card',
    item_3: 'card',
    item_4: 'card',
    item_5: 'card',
    item_6: 'card',
    item_7: 'card',
    item_8: 'card',
  };

  for (let i = 1; i <= 8; i++) {
    args[`show_item_${i}`] = i <= defaultNbItems;
  }

  return args;
};

const getArgTypes = (configGroup) => {
  const configOptions = Object.keys(configGroup);
  const configMapping = {};
  for (const [key, label] of Object.entries(configGroup)) {
    configMapping[label] = key;
  }

  const argTypes = {
    configuration: {
      name: 'layout configuration',
      type: 'select',
      description: 'Change layout',
      options: configOptions,
      control: { labels: { ...configGroup } },
      mapping: configMapping,
      table: {
        type: 'string',
        defaultValue: { summary: configOptions[0] },
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

  const contentTypeOptions = Object.keys(dataDemo.contentTypes);
  const contentTypeLabels = {};
  const contentTypeMapping = {};
  for (const key of contentTypeOptions) {
    contentTypeLabels[key] = key;
    contentTypeMapping[key] = key;
  }

  for (let i = 1; i <= 8; i++) {
    argTypes[`show_item_${i}`] = { table: { disable: true } };
    argTypes[`item_${i}`] = {
      name: `item ${i} content`,
      type: 'select',
      description: `Demo content for item ${i}`,
      options: contentTypeOptions,
      control: { labels: contentTypeLabels },
      mapping: contentTypeMapping,
      if: { arg: `show_item_${i}` },
      table: {
        category: 'Items content',
        type: 'string',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  clone.items = [];
  for (let i = 1; i <= args.nb_items; i++) {
    clone.items.push(data.contentTypes[args[`item_${i}`]]);
  }

  return Object.assign(clone, args);
};

const syncItemVisibility = (Story) => {
  const [args, updateArgs] = useArgs();
  const updates = {};
  let needsUpdate = false;
  for (let i = 1; i <= 8; i++) {
    const shouldShow = i <= args.nb_items;
    if (Boolean(args[`show_item_${i}`]) !== shouldShow) {
      updates[`show_item_${i}`] = shouldShow;
      needsUpdate = true;
    }
  }
  if (needsUpdate) {
    Promise.resolve().then(() => updateArgs(updates));
  }
  return Story();
};

export default {
  title: 'Layout/Layout Wrapper',
  decorators: [withNotes, withCode],
};

export const Columns = (_, { loaded: { component } }) => component;

Columns.render = async (args) => {
  const renderedLayout = await layoutWrapper(prepareData(dataDemo, args));
  return renderedLayout;
};
Columns.storyName = 'columns';
Columns.args = getArgs('col-3');
Columns.argTypes = getArgTypes(configurations.columns);
Columns.parameters = { notes: { markdown: notes, json: dataDemo } };
Columns.decorators = [syncItemVisibility];

export const Highlight = (_, { loaded: { component } }) => component;

Highlight.render = async (args) => {
  const renderedLayout = await layoutWrapper(prepareData(dataDemo, args));
  return renderedLayout;
};
Highlight.storyName = 'highlight';
Highlight.args = getArgs('highlight-col-2', 6, 'heading');
Highlight.argTypes = getArgTypes(configurations.highlight);
Highlight.parameters = { notes: { markdown: notes, json: dataDemo } };
Highlight.decorators = [syncItemVisibility];
