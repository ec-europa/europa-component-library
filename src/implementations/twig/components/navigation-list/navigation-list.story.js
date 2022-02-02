import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-navigation-list/demo/data';

import navigationList from './navigation-list.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {};

  args.show_border = true;
  args.column = 2;

  return args;
};

const getArgTypes = () => {
  const argTypes = {};

  // Optional elements
  argTypes.show_border = {
    name: 'border',
    type: 'boolean',
    description: 'Show border',
    table: {
      type: 'boolean',
      defaultValue: { summary: true },
      category: 'Optional',
    },
  };

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
  correctSvgPath(data);

  // Optional elements
  for (let i = 0; i < data.items.length; i += 1) {
    data.items[i].border = args.show_border;
  }

  // Other controls
  data.column = args.column;

  return data;
};

export default {
  title: 'Components/Navigation/Navigation list',
  decorators: [withCode, withNotes],
};

export const Default = (args) => navigationList(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
