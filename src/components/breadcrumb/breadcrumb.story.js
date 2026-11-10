import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from './demo/data--long';

import breadcrumb from './breadcrumb.html.twig';
import notes from './README.md?raw';

const getArgs = () => ({
  inverted: false,
});

const getArgTypes = () => ({
  inverted: {
    name: 'inverted',
    type: { name: 'boolean' },
    description: 'Inverted colors, to display on a dark background',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'Display',
    },
  },
});

const prepareData = (data, args) => ({ ...data, inverted: args.inverted });

// Dark background to preview the inverted variant
const withInverted = (story, { args }) => {
  const demo = story();

  return args.inverted
    ? `<div class="ecl-u-bg-grey ecl-u-bg-dark ecl-u-pa-m">${demo}</div>`
    : demo;
};

export default {
  title: 'Components/Navigation/Breadcrumb',
  decorators: [withNotes, withCode, withInverted],
  parameters: { layout: 'fullscreen' },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedBreadcrumb = await breadcrumb(
    prepareData(correctPaths(dataDefault), args),
  );
  return renderedBreadcrumb;
};

Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(dataDefault, args),
  },
};
