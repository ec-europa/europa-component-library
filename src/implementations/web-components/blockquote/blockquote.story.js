import { html } from 'lit-html';

import dataDemo from '@ecl/specs-component-blockquote/demo/data';
import blockquote from './ecl-blockquote';

const img =
  'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg';

const getArgs = (data) => ({
  system: 'ec',
  citation: data.citation,
  author: data.author,
  image: '',
  aria_label: '',
});

const getArgTypes = () => ({
  system: {
    name: 'data-system',
    type: { name: 'select' },
    options: ['ec', 'eu'],
    description: 'EC or EU',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Style',
    },
  },
  citation: {
    name: 'data-citation',
    type: { name: 'string', required: true },
    description: 'Blockquote citation',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  author: {
    name: 'data-author',
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
  image: {
    name: 'data-image',
    type: { name: 'boolean' },
    description: 'Optional image',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  aria_label: {
    name: 'data-aria-label',
    type: { name: 'string' },
    description: 'Aria label for the image',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  },
});

const prepareData = (data, args) => {
  Object.assign(data, args);

  if (args.image) {
    data.image = img;
  } else {
    data.image = '';
  }

  return data;
};

export default {
  title: 'Components/Blockquote',
};

export const Default = (args) => html`<ecl-blockquote
  data-author="${prepareData(dataDemo, args).author}"
  data-citation="${prepareData(dataDemo, args).citation}"
  data-system="${prepareData(dataDemo, args).system}"
  data-image="${prepareData(dataDemo, args).image}"
  data-aria-label="${prepareData(dataDemo, args).aria_label}"
>
</ecl-blockquote>`;

Default.args = getArgs(dataDemo);
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = {
  notes: { json: dataDemo },
};
