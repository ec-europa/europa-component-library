import { withNotes } from '@ecl/storybook-addon-notes';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { getExtraKnobs, tabLabels } from '@ecl/story-utils';
import he from 'he';
import withCode from '@ecl/storybook-addon-code';

import dataUnorderedListText from '@ecl/specs-component-unordered-list/demo/data--text';
import dataUnorderedListLink from '@ecl/specs-component-unordered-list/demo/data--link';
import dataUnorderedListDivider from '@ecl/specs-component-unordered-list/demo/data--with-divider';
import dataUnorderedListNoBullet from '@ecl/specs-component-unordered-list/demo/data--no-bullet';

import unorderedList from './unordered-list.html.twig';
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

  return data;
};

export default {
  title: 'Components/List/Unordered list',
  decorators: [withNotes, withCode, withKnobs],
};

export const Text = () =>
  unorderedList(prepareUnorderedList(dataUnorderedListText));

Text.storyName = 'text';
Text.parameters = {
  notes: { markdown: notes, json: dataUnorderedListText },
};

export const Link = () =>
  unorderedList(prepareUnorderedList(dataUnorderedListLink));

Link.storyName = 'links';
Link.parameters = {
  notes: { markdown: notes, json: dataUnorderedListLink },
};

export const Divider = () =>
  unorderedList(prepareUnorderedList(dataUnorderedListDivider));

Divider.storyName = 'with divider';
Divider.parameters = {
  notes: { markdown: notes, json: dataUnorderedListDivider },
};

export const NoBullet = () =>
  unorderedList(prepareUnorderedList(dataUnorderedListNoBullet));

NoBullet.storyName = 'no bullet';
NoBullet.parameters = {
  notes: { markdown: notes, json: dataUnorderedListNoBullet },
};
