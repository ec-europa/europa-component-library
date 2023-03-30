import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import enSpecs from '@ecl/specs-component-menu/demo/data--en';
import frSpecs from '@ecl/specs-component-menu/demo/data--fr';
import menu from './menu.html.twig';
import notes from './README.md';

const enData = { ...enSpecs };
const frData = { ...frSpecs };

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

export const Default = (args) => menu(prepareData(enData, args));

Default.storyName = 'default';
Default.args = getArgs(enData);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: enData } };

export const Translated = (args) => menu(prepareData(frData, args));

Translated.storyName = 'translated';
Translated.args = getArgs(frData);
Translated.argTypes = getArgTypes();
Translated.parameters = { notes: { markdown: notes, json: frData } };
