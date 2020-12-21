import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDescriptionListDefault from '@ecl/specs-component-description-list/demo/data--default';
import dataDescriptionListHorizontal from '@ecl/specs-component-description-list/demo/data--horizontal';

import descriptionList from './description-list.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    term: {
      name: 'first item term',
      type: { name: 'string', required: true },
      defaultValue: data.items[0].term,
      description: 'Test the content for the first item term',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    description: {
      name: 'first item definition',
      type: { name: 'string', required: true },
      defaultValue: data.items[0].definition,
      description: 'Test the content for the first item definition',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: 'Components/List/Description list',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Vertical = (args) =>
  descriptionList(dataDescriptionListDefault, args);

Vertical.storyName = 'vertical';
Vertical.argTypes = getArgTypes(prepareData(dataDescriptionListDefault));
Vertical.parameters = {
  notes: { markdown: notes, json: dataDescriptionListDefault },
};

export const Horizontal = (args) =>
  descriptionList(dataDescriptionListHorizontal, args);

Horizontal.storyName = 'horizontal';
Horizontal.argTypes = getArgTypes(prepareData(dataDescriptionListHorizontal));
Horizontal.parameters = {
  notes: { markdown: notes, json: dataDescriptionListHorizontal },
};
