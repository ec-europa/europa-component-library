import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-label/demo/data';
import label from './label.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  label: data.label,
});

const getArgTypes = () => ({
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
});

const prepareData = (data, args) => Object.assign(data, args);

export default {
  title: 'Components/Label',
  decorators: [withNotes, withCode],
};

export const Low = (_, { loaded: { component } }) => component;

Low.render = async (args) => {
  const renderedLabel = await label(
    prepareData({ ...dataDefault, variant: 'low' }, args)
  );
  return renderedLabel;
};
Low.storyName = 'low importance';
Low.args = getArgs(dataDefault);
Low.argTypes = getArgTypes();
Low.parameters = {
  notes: { markdown: notes, json: { ...dataDefault, variant: 'low' } },
};

export const Medium = (_, { loaded: { component } }) => component;

Medium.render = async (args) => {
  const renderedLabelMedium = await label(
    prepareData({ ...dataDefault, variant: 'medium' }, args)
  );
  return renderedLabelMedium;
};
Medium.storyName = 'medium importance';
Medium.args = getArgs(dataDefault);
Medium.argTypes = getArgTypes();
Medium.parameters = {
  notes: { markdown: notes, json: { ...dataDefault, variant: 'medium' } },
};

export const High = (_, { loaded: { component } }) => component;

High.render = async (args) => {
  const renderedLabelHigh = await label(
    prepareData({ ...dataDefault, variant: 'high' }, args)
  );
  return renderedLabelHigh;
};
High.storyName = 'high importance';
High.args = getArgs(dataDefault);
High.argTypes = getArgTypes();
High.parameters = {
  notes: { markdown: notes, json: { ...dataDefault, variant: 'high' } },
};

export const Highlight = (_, { loaded: { component } }) => component;

Highlight.render = async (args) => {
  const renderedLabelHighlight = await label(
    prepareData({ ...dataDefault, variant: 'highlight' }, args)
  );
  return renderedLabelHighlight;
};
Highlight.storyName = 'highlight';
Highlight.args = getArgs(dataDefault);
Highlight.argTypes = getArgTypes();
Highlight.parameters = {
  notes: { markdown: notes, json: { ...dataDefault, variant: 'highlight' } },
};
