import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from './demo/data';
import pageSummary from './page-summary.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_icon: true,
    title: data.title,
    description: data.description,
    demo_list: false,
  };

  return args;
};

const getArgTypes = () => ({
  show_icon: {
    name: 'icon',
    type: { name: 'boolean' },
    description: 'Toggle icon visibility',
    table: {
      type: { summary: 'boolean' },
      category: 'Optional',
    },
  },
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'Summary title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  description: {
    name: 'description',
    type: { name: 'string' },
    description: 'Summary description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'demo_list', neq: true },
  },
  demo_list: {
    name: 'demo list',
    type: { name: 'boolean' },
    description: 'See an example with a list',
    table: {
      type: { summary: 'boolean' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  if (!args.show_icon) {
    delete clone.icon;
  }

  if (args.demo_list) {
    clone.description =
      "<ul class='ecl-unordered-list'><li class='ecl-unordered-list__item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li class='ecl-unordered-list__item'>Maecenas suscipit nisl porttitor nibh dictum, tempor aliquet quam porttitor. Suspendisse euismod aliquam lacinia. Vestibulum consequat auctor ante.</li><li class='ecl-unordered-list__item'>Integer eget feugiat quam, sed eleifend sapien</li></ul>";
  }

  return Object.assign(clone, args);
};

export default {
  title: 'Components/Page summary',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedPageSummary = await pageSummary(prepareData(defaultData, args));
  return renderedPageSummary;
};
Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: defaultData },
};
