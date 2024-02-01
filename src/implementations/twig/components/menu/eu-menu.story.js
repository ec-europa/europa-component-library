import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataEu from '@ecl/specs-component-menu/demo/data--eu';
import dataEuLong from '@ecl/specs-component-menu/demo/data--eu-long';
import menu from './menu.html.twig';
import notes from './README.md';

const dataShort = dataEu;
const dataLong = dataEuLong;

const getArgs = (data) => ({
  max_lines: data.max_lines || 2,
});

const getArgTypes = () => ({
  max_lines: {
    name: 'max lines',
    control: { type: 'range', min: 0, max: 4, step: 1 },
    description:
      'Number of lines maximum for each first level item. This is for the item label, in any case there is only one row of items. Set it to zero to remove this behavior.',
    table: {
      type: { summary: 'int' },
      defaultValue: { summary: '2' },
    },
  },
});

const prepareData = (data, args) => {
  correctPaths(data);

  return Object.assign(data, args);
};

export default {
  title: 'Components/Navigation/Menu',
  decorators: [withNotes, withCode],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedMenu = await menu(prepareData(dataShort, args));
  return renderedMenu;
};
Default.storyName = 'default';
Default.args = getArgs(dataShort);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataShort } };

export const Long = (_, { loaded: { component } }) => component;

Long.render = async (args) => {
  const renderedMenuLong = await menu(prepareData(dataLong, args));
  return renderedMenuLong;
};
Long.storyName = 'long - with overlay';
Long.args = getArgs(dataLong);
Long.argTypes = getArgTypes();
Long.parameters = { notes: { markdown: notes, json: dataLong } };
