import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from '@ecl/specs-component-blockquote/demo/data';
import blockquote from './blockquote.html.twig';
import notes from './README.md';

const prepareControls = (data, args) => {
  data.author = args.author;
  data.citation = args.citation;

  return data;
};

export default {
  title: 'Components/Blockquote',
  argTypes: {
    author: {
      name: 'Author',
      type: { name: 'string', required: true },
      defaultValue: '',
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
    citation: {
      name: 'Citation',
      type: { name: 'string', required: true },
      defaultValue: '',
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
  },
  decorators: [withCode, withNotes],
};

export const Default = (args) => blockquote(prepareControls(defaultData, args));

Default.args = {
  author: defaultData.author,
  citation: defaultData.citation,
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: defaultData } };
