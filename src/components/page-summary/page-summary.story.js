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
  },
});

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  if (!args.show_icon) {
    delete clone.icon;
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
