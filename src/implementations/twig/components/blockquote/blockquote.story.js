import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from '@ecl/specs-component-blockquote/demo/data';
import blockquote from './blockquote.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  return {
    citation: data.citation,
    author: data.author,
  };
};

const getArgTypes = (data) => {
  return {
    citation: {
      name: 'citation',
      defaultValue: data.citation,
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
    },
    author: {
      name: 'author',
      defaultValue: data.author,
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
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: 'Components/Blockquote',
  decorators: [withCode, withNotes],
};

export const Default = (args) => blockquote(prepareData(defaultData, args));

Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes(defaultData);
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: defaultData },
};
