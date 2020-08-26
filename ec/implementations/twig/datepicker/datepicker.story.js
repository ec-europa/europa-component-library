import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getFormKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataDefault from './demo/data';
import datepicker from './ecl-datepicker.html.twig';
import notes from './README.md';

const prepareDatePicker = (data) => {
  getFormKnobs(data);

  data.label = text('label', data.label, tabLabels.required);
  data.icons_path = optionsKnob(
    'icons_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );

  data.placeholder = text('placeholder', data.placeholder, tabLabels.required);

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Forms/Datepicker',
};

export const Default = () => {
  return datepicker(prepareDatePicker(dataDefault));
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withNotes, withCode, withKnobs];
