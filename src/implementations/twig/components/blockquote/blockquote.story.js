import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from '@ecl/specs-component-blockquote/demo/data';
import blockquote from './blockquote.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  const argTypes = {};
  argTypes.citation = {
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
  };
  argTypes.author = {
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
  };
  argTypes.show_image = {
    name: 'show_image',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'Show image',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '{}' },
      category: 'Content',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  if (args.show_image) {
    data.image = {
      path: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',
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

Default.argTypes = getArgTypes(defaultData);
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: defaultData },
};
