import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import enData from '@ecl/specs-component-menu/demo/data--en';
import frData from '@ecl/specs-component-menu/demo/data--fr';
import menu from './menu.html.twig';
import notes from './README.md';

const prepareData = (data) => {
  data.icon_path = defaultSprite;

  return data;
};

export default {
  title: 'Components/Navigation/Menu',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => menu(prepareData(enData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };

export const Translated = () => menu(prepareData(frData));

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
