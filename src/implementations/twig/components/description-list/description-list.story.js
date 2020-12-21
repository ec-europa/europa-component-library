import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDescriptionListDefault from '@ecl/specs-component-description-list/demo/data--default';
import dataDescriptionListHorizontal from '@ecl/specs-component-description-list/demo/data--horizontal';

import descriptionList from './description-list.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    term: {
      name: 'term (first item)',
      type: { name: 'string', required: true },
      defaultValue: data.items[0].term,
      description: 'The heading of the description list item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    description: {
      name: 'definition (first item)',
      type: { name: 'string', required: true },
      defaultValue: data.items[0].definition,
      description: 'The content of the description list item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  data.items[0].term = args.term;
  data.items[0].definition = args.definition;
  return data;
};

export default {
  title: 'Components/List/Description list',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Vertical = (args) =>
  descriptionList(prepareData(dataDescriptionListDefault, args));

Vertical.storyName = 'vertical';
Vertical.argTypes = getArgTypes(dataDescriptionListDefault);
Vertical.parameters = {
  notes: { markdown: notes, json: dataDescriptionListDefault },
};

export const Horizontal = (args) =>
  descriptionList(prepareData(dataDescriptionListHorizontal, args));

Horizontal.storyName = 'horizontal';
Horizontal.argTypes = getArgTypes(dataDescriptionListHorizontal);
Horizontal.parameters = {
  notes: { markdown: notes, json: dataDescriptionListHorizontal },
};
