import { withNotes } from '@ecl/storybook-addon-notes';
import { withKnobs, text } from '@storybook/addon-knobs';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import dataOrderedList from '@ecl/specs-component-ordered-list/demo/data';

import orderedList from './ordered-list.html.twig';
import notes from './README.md';

const prepareOrderedList = (data) => {
  data.items.forEach((item, i) => {
    item.label = text(`items[${i}].label`, item.label, tabLabels.required);

    if (item.nested) {
      item.nested.forEach((n, ind) => {
        n.label = text(
          `items[${i}].nested[${ind}].label`,
          n.label,
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
  title: 'Components/List/Ordered list',
};

export const Default = () => orderedList(prepareOrderedList(dataOrderedList));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataOrderedList } };
Default.decorators = [withNotes, withCode, withKnobs];
