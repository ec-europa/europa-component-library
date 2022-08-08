import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import enSpecs from '@ecl/specs-component-menu/demo/data--en';
import frSpecs from '@ecl/specs-component-menu/demo/data--fr';
import menu from './menu.html.twig';
import notes from './README.md';

const enData = { ...enSpecs };
const frData = { ...frSpecs };

console.log(enData);

const prepareData = (data) => {
  correctPaths(data);

  return data;
};

export default {
  title: 'Components/Navigation/Menu',
  decorators: [withNotes, withCode],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
  },
};

export const Default = () => menu(prepareData(enData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };

export const Translated = () => menu(prepareData(frData));

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
