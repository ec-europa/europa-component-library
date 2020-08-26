import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import specs from '@ecl/ec-specs-description-list/demo/data';
import specsHorizontal from './demo/data--horizontal';
import descriptionList from './ecl-description-list.html.twig';
import notes from './README.md';

const prepareList = (data) => {
  if (data.variant) {
    data.variant = select(
      'variant',
      [data.variant],
      data.variant,
      tabLabels.required
    );
  }
  data.items.forEach((item, i) => {
    if (Array.isArray(item.term)) {
      item.term.forEach((termItem, j) => {
        data.items[i].term[j] = text(
          `items[${i}].term[${j}]`,
          termItem,
          tabLabels.required
        );
      });
    } else {
      item.term = text(`items[${i}].term`, item.term, tabLabels.required);
    }
    if (Array.isArray(item.definition)) {
      item.definition.forEach((definitionItem, k) => {
        data.items[i].definition[k] = text(
          `items[${i}].definition[${k}]`,
          definitionItem,
          tabLabels.required
        );
      });
    } else {
      item.definition = text(
        `items[${i}].definition`,
        item.definition,
        tabLabels.required
      );
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/List/Description list',
  decorators: [withNotes, withCode, withKnobs],
};

export const Vertical = () => descriptionList(prepareList(specs));

Vertical.storyName = 'vertical';
Vertical.parameters = { notes: { markdown: notes, json: specs } };

export const Horizontal = () => descriptionList(prepareList(specsHorizontal));

Horizontal.storyName = 'horizontal';
Horizontal.parameters = { notes: { markdown: notes, json: specsHorizontal } };
