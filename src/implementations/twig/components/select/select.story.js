import { withKnobs, text, optionsKnob, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import {
  getExtraKnobs,
  getFormKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataSingle from '@ecl/specs-component-select/demo/data--single';
import dataMultiple from '@ecl/specs-component-select/demo/data--multiple';

import selectBox from './select.html.twig';
import notes from './README.md';

const prepareSelect = (data, multi) => {
  getFormKnobs(data);

  data.id = text('id', data.id, tabLabels.optional);
  data.icon_path = optionsKnob(
    'icon_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  if (multi) {
    data.multiple = boolean('multiple', data.multiple, tabLabels.optional);
  }
  if (data.multiple) {
    data.multiple_all_text = text(
      'multiple_all_text',
      data.multiple_all_text,
      tabLabels.required
    );
    data.multiple_search_text = text(
      'multiple_search_text',
      data.multiple_search_text,
      tabLabels.required
    );
    data.multiple_placeholder = text(
      'multiple_placeholder',
      data.multiple_placeholder,
      tabLabels.required
    );
  }

  data.options.forEach((option, i) => {
    option.label = text(
      `options[${i}].label`,
      option.label,
      tabLabels.required
    );
    option.value = text(
      `options[${i}].value`,
      option.value,
      tabLabels.required
    );
    if (option.selected) {
      option.selected = boolean(
        `options[${i}].selected (default value)`,
        option.selected,
        tabLabels.optional
      );
    }
    if (option.disabled) {
      option.disabled = boolean(
        `options[${i}].disabled`,
        option.disabled,
        tabLabels.optional
      );
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Forms/Select',
  decorators: [withKnobs, withNotes, withCode],
};

export const Single = () => selectBox(prepareSelect(dataSingle));

Single.storyName = 'default';
Single.parameters = { notes: { markdown: notes, json: dataSingle } };

export const Multiple = () => selectBox(prepareSelect(dataMultiple));

Multiple.storyName = 'Multiple';
Multiple.parameters = { notes: { markdown: notes, json: dataMultiple } };
