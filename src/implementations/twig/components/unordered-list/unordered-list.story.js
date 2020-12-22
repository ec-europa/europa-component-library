import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataUnorderedListText from '@ecl/specs-component-unordered-list/demo/data--text';
import dataUnorderedListLink from '@ecl/specs-component-unordered-list/demo/data--link';
import dataUnorderedListDivider from '@ecl/specs-component-unordered-list/demo/data--with-divider';
import dataUnorderedListNoBullet from '@ecl/specs-component-unordered-list/demo/data--no-bullet';

import unorderedList from './unordered-list.html.twig';
import notes from './README.md';

export default {
  title: 'Components/List/Unordered list',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
    controls: { disable: true },
  },
};

export const Text = () => unorderedList(dataUnorderedListText);

Text.storyName = 'text';
Text.parameters = {
  notes: { markdown: notes, json: dataUnorderedListText },
};

export const Link = () => unorderedList(dataUnorderedListLink);

Link.storyName = 'links';
Link.parameters = {
  notes: { markdown: notes, json: dataUnorderedListLink },
};

export const Divider = () => unorderedList(dataUnorderedListDivider);

Divider.storyName = 'with divider';
Divider.parameters = {
  notes: { markdown: notes, json: dataUnorderedListDivider },
};

export const NoBullet = () => unorderedList(dataUnorderedListNoBullet);

NoBullet.storyName = 'no bullet';
NoBullet.parameters = {
  notes: { markdown: notes, json: dataUnorderedListNoBullet },
};
