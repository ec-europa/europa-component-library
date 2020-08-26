import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import he from 'he';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';
import dropdown from './ecl-dropdown-legacy.html.twig';
import notes from './README.md';

const prepareDropdown = (data) => {
  data.button.label = text(
    'button.label',
    data.button.label,
    tabLabels.required
  );
  data.button.icon.path = optionsKnob(
    'button.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.list.items.forEach((item, i) => {
    item.label = he.decode(
      text(`list.items[${i}].label`, item.label, tabLabels.required)
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Dropdowns legacy',
};

export const Default = () => dropdown(prepareDropdown(demoData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withKnobs, withCode, withNotes];
