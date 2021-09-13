import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from '@ecl/specs-component-blockquote/demo/data';
import blockquote from './blockquote.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  return {
    citation: data.citation,
    author: data.author,
    show_image: false,
  };
};

const getArgTypes = () => {
  return {
    citation: {
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
    },
    author: {
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
    },
    show_image: {
      name: 'show image',
      type: { name: 'boolean' },
      description: 'Toggle image visibility',
      table: {
        type: { summary: 'boolean' },
        category: 'Content',
      },
    },
  };
};

const demoImage = defaultData.image;

const prepareData = (data, args) => {
  data.image = args.show_image ? demoImage : null;
  return Object.assign(data, args);
};

export default {
  title: 'Components/Blockquote',
  decorators: [withCode, withNotes],
};

export const Default = (args) => blockquote(prepareData(defaultData, args));

Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: defaultData },
};
