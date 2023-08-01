import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-breadcrumb/demo/data--long';

import breadcrumb from './breadcrumb.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};
  data.links.forEach((item, i) => {
    args[`item${i + 1}`] = item.label;
  });

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};
  data.links.forEach((i) => {
    argTypes[`item${i + 1}`] = {
      name: `Item ${i + 1}`,
      type: { name: 'string' },
      description: `Label of breadcrumb item ${i + 1}`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    };
  });

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  data.links.forEach((item, i) => {
    item.label = args[`item${i + 1}`];
    item.negative = false;
  });

  return data;
};

export default {
  title: 'Components/Navigation/Breadcrumb',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedBreadcrumb = await breadcrumb(prepareData(dataDefault, args));
  return renderedBreadcrumb;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
