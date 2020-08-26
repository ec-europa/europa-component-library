import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import enData from './demo/data--en';
import frData from './demo/data--fr';
import menu from './ecl-menu.html.twig';
import notes from './README.md';

const prepareMenu = (data) => {
  data.title = text('title', data.title, tabLabels.required);
  data.close = text('close', data.close, tabLabels.required);
  data.back = text('back', data.back, tabLabels.required);
  data.icon_path = optionsKnob(
    'icon_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.items.forEach((item, i) => {
    item.label = text(`items[${i}].label`, item.label, tabLabels.required);
    item.path = text(`items[${i}].path`, item.path, tabLabels.required);

    if (item.children) {
      item.children.forEach((subitem, j) => {
        subitem.label = text(
          `items[${i}].children[${j}].label`,
          subitem.label,
          tabLabels.optional
        );
        subitem.path = text(
          `items[${i}].children[${j}].path`,
          subitem.path,
          tabLabels.optional
        );
      });
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Navigation/Menu',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => menu(prepareMenu(enData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };

export const Translated = () => menu(prepareMenu(frData));

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
