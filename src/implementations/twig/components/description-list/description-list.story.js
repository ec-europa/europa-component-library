import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDescriptionListDefault from '@ecl/specs-component-description-list/demo/data--default';
import dataDescriptionListHorizontal from '@ecl/specs-component-description-list/demo/data--horizontal';
import dataDescriptionListTaxonomy from '@ecl/specs-component-description-list/demo/data--taxonomy';

import descriptionList from './description-list.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    term: data.items[0].term,
  };
  if (!Array.isArray(data.items[0].definition)) {
    args.definition = data.items[0].definition;
  } else {
    args.label = data.items[0].definition[0].label;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    term: {
      name: 'term (first item)',
      type: { name: 'string', required: true },
      description: 'The heading of the description list item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };
  if (!Array.isArray(data.items[0].definition)) {
    argTypes.definition = {
      name: 'definition (first item)',
      type: { name: 'string', required: true },
      description: 'The content of the description list item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  } else {
    argTypes.label = {
      name: 'tag label (first item)',
      type: { name: 'string', required: true },
      description: 'The tag label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  data.items[0].term = args.term;
  if (!Array.isArray(data.items[0].definition)) {
    data.items[0].definition = args.definition;
  } else {
    data.items[0].definition[0].label = args.label;
  }
  return data;
};

export default {
  title: 'Components/List/Description list',
  decorators: [withNotes, withCode],
};

export const Vertical = (args) =>
  descriptionList(prepareData(dataDescriptionListDefault, args));

Vertical.storyName = 'description';
Vertical.args = getArgs(dataDescriptionListDefault);
Vertical.argTypes = getArgTypes(dataDescriptionListDefault);
Vertical.parameters = {
  notes: { markdown: notes, json: dataDescriptionListDefault },
};

export const Horizontal = (args) =>
  descriptionList(prepareData(dataDescriptionListHorizontal, args));

Horizontal.storyName = 'description (horizontal)';
Horizontal.args = getArgs(dataDescriptionListHorizontal);
Horizontal.argTypes = getArgTypes(dataDescriptionListHorizontal);
Horizontal.parameters = {
  notes: { markdown: notes, json: dataDescriptionListHorizontal },
};

export const Taxonomy = (args) =>
  descriptionList(prepareData(dataDescriptionListTaxonomy, args));

Taxonomy.storyName = 'description (taxonomy)';
Taxonomy.args = getArgs(dataDescriptionListTaxonomy);
Taxonomy.argTypes = getArgTypes(dataDescriptionListTaxonomy);
Taxonomy.parameters = {
  notes: { markdown: notes, json: dataDescriptionListTaxonomy },
};
