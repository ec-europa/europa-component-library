import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import specs from './demo/data';
import orderedList from './ecl-ordered-list.html.twig';
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

export const Default = () => orderedList(prepareOrderedList(specs));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
Default.decorators = [withNotes, withCode, withKnobs];
