import { withKnobs, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getFormGroupKnobs,
  tabLabels,
  getFormItemKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataDefault from './demo/data--default';
import checkboxGroup from './ecl-checkbox-group.html.twig';
import notes from './README.md';

const prepareCheckbox = (data) => {
  getFormGroupKnobs(data);

  getFormItemKnobs(data, true);

  data.items.forEach((item, i) => {
    item.icon_path = select(
      `items[${i}].icon_path`,
      [defaultSprite],
      defaultSprite,
      tabLabels.required
    );
  });

  getExtraKnobs(data, true);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Forms/Checkbox',
};

export const Default = () => {
  const data = prepareCheckbox(dataDefault);

  return checkboxGroup(data);
};

Default.storName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withKnobs, withNotes, withCode];
