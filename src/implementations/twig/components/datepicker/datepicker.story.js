import { withNotes } from '@ecl/storybook-addon-notes';
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels, getFormKnobs } from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataDefault from '@ecl/specs-component-datepicker/demo/data';
import datepicker from './datepicker.html.twig';
import notes from './README.md';

const prepareDatePicker = (data) => {
  getFormKnobs(data);
  data.autoinit = boolean('autoinit', data.autoinit, tabLabels.states);
  data.default_value = text(
    'default_value',
    data.default_value,
    tabLabels.optional
  );
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
