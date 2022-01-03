import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-label/demo/data';
import label from './label.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  return {
    label: data.label,
  };
};

const getArgTypes = () => {
  return {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      description: 'The content of the label',
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
  title: 'Components/Label',
  decorators: [withNotes, withCode],
};

export const Low = (args) =>
  label(prepareData({ ...dataDefault, variant: 'low' }, args));

Low.storyName = 'low importance';
Low.args = getArgs(dataDefault);
Low.argTypes = getArgTypes();
Low.parameters = {
  notes: { markdown: notes, json: { ...dataDefault, variant: 'low' } },
};

export const Medium = (args) =>
  label(prepareData({ ...dataDefault, variant: 'medium' }, args));

Medium.storyName = 'medium importance';
Medium.args = getArgs(dataDefault);
Medium.argTypes = getArgTypes();
Medium.parameters = {
  notes: { markdown: notes, json: { ...dataDefault, variant: 'medium' } },
};

export const High = (args) =>
  label(prepareData({ ...dataDefault, variant: 'high' }, args));

High.storyName = 'high importance';
High.args = getArgs(dataDefault);
High.argTypes = getArgTypes();
High.parameters = {
  notes: { markdown: notes, json: { ...dataDefault, variant: 'high' } },
};

export const Highlight = (args) =>
  label(prepareData({ ...dataDefault, variant: 'highlight' }, args));

Highlight.storyName = 'highlight';
Highlight.args = getArgs(dataDefault);
Highlight.argTypes = getArgTypes();
Highlight.parameters = {
  notes: { markdown: notes, json: { ...dataDefault, variant: 'highlight' } },
};
