import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDemo from './demo/data';
import layoutWrapper from './layout-wrapper.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    info_position: 'top',
    nb_columns: 3,
    nb_items: 6,
    direction: 'horizontal',
    grid_content: false,
    show_view_all: true,
    title_level: data.title.level,
    title_label: data.title.label,
    description: data.description,
    item_1: 'card',
    item_2: 'card',
    item_3: 'card',
    item_4: 'card',
    item_5: 'card',
    item_6: 'card',
    item_7: 'card',
    item_8: 'card',
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    info_position: {
      name: 'info position',
      type: 'select',
      description: 'Position of the title/description block',
      options: ['top', 'side'],
      control: {
        labels: { top: 'top', side: 'side' },
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'top' },
        category: 'Configuration',
      },
    },
    nb_columns: {
      name: 'number of columns',
      description:
        'Number of item columns (max 3 when info position is "side")',
      control: { type: 'range', min: 1, max: 4, step: 1 },
      table: {
        category: 'Configuration',
        defaultValue: { summary: 3 },
      },
    },
    nb_items: {
      name: 'number of items',
      description: 'Number of items displayed',
      control: { type: 'range', min: 1, max: 8, step: 1 },
      table: {
        category: 'Configuration',
      },
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
        category: 'Display',
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

  argTypes.show_view_all = {
    name: 'view all',
    type: { name: 'boolean' },
    description: 'Display the "view all" link"',
    control: { type: 'boolean' },
    table: {
      category: 'Display',
    },
  };
  argTypes.title_level = {
    name: 'heading level',
    type: 'select',
    description: 'Heading level in the hieararchy',
    options: [2, 3, 4],
    control: {
      labels: {
        2: 'heading 2',
        3: 'heading 3',
        4: 'heading 4',
      },
    },
    mapping: {
      'heading 2': 2,
      'heading 3': 3,
      'heading 4': 4,
    },
    table: {
      type: 'int',
      defaultValue: { summary: '2' },
      category: 'Content',
    },
  };
  argTypes.title_label = {
    name: 'title',
    type: 'string',
    description: 'Title of the layout wrapper',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  argTypes.description = {
    name: 'description',
    type: 'string',
    description: 'Description of the layout wrapper',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.grid_content = {
    name: 'demo sidebar layout',
    type: { name: 'boolean' },
    description:
      'Display the layout wrapper inside a sidebar layout, to test container-query responsiveness',
    table: {
      category: 'Test content',
    },
    control: { type: 'boolean' },
  };

  for (let i = 1; i <= 8; i++) {
    argTypes[`item_${i}`] = {
      name: `item ${i} content`,
      type: 'select',
      description: `Demo content for item ${i}`,
      options: contentTypeOptions,
      control: { labels: contentTypeLabels },
      mapping: contentTypeMapping,
      table: {
        category: 'Content',
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

  if (!args.show_view_all) {
    delete clone.view_all;
  }

  clone.title = {
    label: args.title_label,
    level: args.title_level,
  };

  return Object.assign(clone, args);
};

const renderStory = async (data, args) => {
  const renderedLayout = await layoutWrapper(prepareData(data, args));

  if (args.grid_content) {
    return `<div class="ecl-container">
      <div class="ecl-row ecl-u-mt-l">
        <aside class="ecl-col-l-3 ecl-u-mb-l ecl-u-mb-l-none">
          <div class="ecl-u-bg-dark-20 ecl-u-bg-grey-75 ecl-u-pa-m ecl-u-height-100 ecl-u-box-sizing-border">Sidebar</div>
        </aside>
        <div class="ecl-col-l-9">${renderedLayout}</div>
      </div>
    </div>`;
  }

  return `<div class="ecl-container">${renderedLayout}</div>`;
};

export default {
  title: 'Layout/Layout Wrapper',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => renderStory(dataDemo, args);
Default.storyName = 'default';
Default.args = getArgs(dataDemo);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDemo } };
