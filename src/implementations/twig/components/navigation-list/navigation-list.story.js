import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-navigation-list/demo/data';
import dataIllustration from '@ecl/specs-component-navigation-list/demo/data-illustration';

import navigationList from './navigation-list.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};
  args.show_image = true;
  args.show_description = true;
  if (data.items[0].links) {
    args.show_border = true;
    args.show_links = true;
  }
  args.column = 2;

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  // Optional elements
  argTypes.show_image = {
    name: 'image',
    type: 'boolean',
    description: 'Show image',
    table: {
      type: 'boolean',
      category: 'Optional',
    },
  };
  argTypes.show_description = {
    name: 'description',
    type: 'boolean',
    description: 'Show description',
    table: {
      type: 'boolean',
      category: 'Optional',
    },
  };

  if (data.items[0].links) {
    argTypes.show_border = {
      name: 'border',
      type: 'boolean',
      description: 'Show border',
      table: {
        type: 'boolean',
        defaultValue: { summary: false },
        category: 'Optional',
      },
    };
    argTypes.show_links = {
      name: 'links',
      type: 'boolean',
      description: 'Show links list',
      table: {
        type: 'boolean',
        category: 'Optional',
      },
    };
  }

  // Other controls
  argTypes.column = {
    name: 'number of columns',
    control: { type: 'range', min: 2, max: 3, step: 1 },
    description: 'The number of column for the list (between 2 and 3)',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 2 },
      category: 'Layout',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));
  // Optional elements
  for (let i = 0; i < clone.items.length; i += 1) {
    if (!args.show_image) {
      delete clone.items[i].picture;
    }
    if (!args.show_description) {
      delete clone.items[i].description;
    }
    if (!args.show_links) {
      delete clone.items[i].links;
    }
  }

  // Other controls
  clone.border = 'show_border' in args ? args.show_border : true;
  clone.column = args.column;

  return clone;
};

export default {
  title: 'Components/Navigation/Navigation list',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedNavigationList = await navigationList(
    prepareData(dataDefault, args),
  );
  return renderedNavigationList;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Illustration = (_, { loaded: { component } }) => component;

Illustration.render = async (args) => {
  const renderedNavigationList = await navigationList(
    prepareData(dataIllustration, args),
  );
  return renderedNavigationList;
};

Illustration.storyName = 'with illustration';
Illustration.args = getArgs(dataIllustration);
Illustration.argTypes = getArgTypes(dataIllustration);
Illustration.parameters = {
  notes: { markdown: notes, json: dataIllustration },
};
