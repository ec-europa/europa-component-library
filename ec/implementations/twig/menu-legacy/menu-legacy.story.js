import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import he from 'he';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';
import menuLegacy from './ecl-menu-legacy.html.twig';
import notes from './README.md';

const prepareMenuLegacy = (data) => {
  data.label = text('label', data.label, tabLabels.required);
  data.icon_path = optionsKnob(
    'icon_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.items.forEach((item, i) => {
    item.label = he.decode(
      text(`items[${i}].label`, item.label, tabLabels.required)
    );
    item.href = text(`items[${i}].href`, item.href, tabLabels.required);

    if (item.children) {
      item.children.forEach((column, j) => {
        column.items.forEach((subItem, k) => {
          subItem.label = text(
            `items[${i}].children[${j}].items[${k}].label`,
            subItem.label,
            tabLabels.optional
          );
          subItem.href = text(
            `items[${i}].children[${j}].items[${k}].href`,
            subItem.href,
            tabLabels.optional
          );
        });
      });
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Navigation/Menu Legacy',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () => menuLegacy(prepareMenuLegacy(demoData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withKnobs, withNotes, withCode];
