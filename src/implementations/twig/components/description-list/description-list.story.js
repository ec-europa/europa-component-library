import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDescriptionListDefault from '@ecl/specs-component-description-list/demo/data--default';
import dataDescriptionListHorizontal from '@ecl/specs-component-description-list/demo/data--horizontal';

import descriptionList from './description-list.html.twig';
import notes from './README.md';

export default {
  title: 'Components/List/Description list',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
    controls: { disable: true },
  },
};

export const Vertical = () => descriptionList(dataDescriptionListDefault);

Vertical.storyName = 'vertical';
Vertical.parameters = {
  notes: { markdown: notes, json: dataDescriptionListDefault },
};

export const Horizontal = () => descriptionList(dataDescriptionListHorizontal);

Horizontal.storyName = 'horizontal';
Horizontal.parameters = {
  notes: { markdown: notes, json: dataDescriptionListHorizontal },
};
