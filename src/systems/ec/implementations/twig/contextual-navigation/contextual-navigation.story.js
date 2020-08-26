import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import demoData from './demo/data';
import contextualNavigation from './ecl-contextual-navigation.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Navigation/Contextual Navigation',
};

export const Default = () => {
  demoData.item_more.icon.path = defaultSprite;

  demoData.items_limit = number('Number of items:', demoData.items_limit);
  demoData.label = text('Label:', demoData.label);

  // This needs to be in the scope of this function.
  // Called on knob's change of value.
  demoData.items.forEach((item, key) => {
    item.label = text(`Item ${key} label:`, item.label);
  });

  return contextualNavigation(demoData);
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
Default.decorators = [withKnobs, withCode, withNotes];
