import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import he from 'he';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from './demo/data';
import dataLinkDivider from './demo/data--with-divider';
import dataLinkNoBullet from './demo/data--without-bullet';
import unorderedList from './ecl-unordered-list.html.twig';
import notes from './README.md';

const prepareUnorderedList = (data) => {
  if (data.variant) {
    data.variant = select(
      'variant',
      [data.variant],
      data.variant,
      tabLabels.required
    );
  }
  data.items.forEach((item, i) => {
    item.label = he.decode(
      text(`items[${i}].label`, item.label, tabLabels.required)
    );

    if (item.nested) {
      item.nested.forEach((n, ind) => {
        n.label = he.decode(
          text(`items[${i}].nested[${ind}].label`, n.label, tabLabels.optional)
        );
      });
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/List/Unordered list',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () => unorderedList(prepareUnorderedList(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Divider = () =>
  unorderedList(prepareUnorderedList(dataLinkDivider));

Divider.storyName = 'with divider';
Divider.parameters = { notes: { markdown: notes, json: dataLinkDivider } };

export const NoBullet = () =>
  unorderedList(prepareUnorderedList(dataLinkNoBullet));

NoBullet.storyName = 'no bullet';
NoBullet.parameters = { notes: { markdown: notes } };
