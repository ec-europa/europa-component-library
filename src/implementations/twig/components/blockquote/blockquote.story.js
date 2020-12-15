import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from '@ecl/specs-component-blockquote/demo/data';
import blockquote from './blockquote.html.twig';
import notes from './README.md';

const getArgTypes = () => {
  const argTypes = {};
  argTypes.citation = {
    name: 'citation',
    type: { name: 'string', required: true },
    description: 'Blockquote citation',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };
  argTypes.author = {
    name: 'author',
    type: { name: 'string', required: true },
    description: 'Author of the citation',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.citation = args.citation;
  data.author = args.author;

  return data;
};

export default {
  title: 'Components/Blockquote',
  argTypes: getArgTypes(),
  decorators: [withCode, withNotes],
};

export const Default = (args) => blockquote(prepareData(defaultData, args));

Default.args = {
  citation: defaultData.citation,
  author: defaultData.author,
};

Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: defaultData },
  knobs: { disable: true },
};
