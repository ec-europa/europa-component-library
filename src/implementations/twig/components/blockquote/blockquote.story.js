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
      name: 'show_image',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Show image',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  if (args.show_image) {
    data.image = {
      path: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
    };
  } else {
    data.image = null;
  }
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
