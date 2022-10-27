import { html } from 'lit-html';
import { withNotes } from '@ecl/storybook-addon-notes';
import iconPathEc from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import iconPathEu from '@ecl/resources-eu-icons/dist/sprites/icons.svg';

import dataDemo from '@ecl/specs-component-message/demo/data--info';
import message from './src/scripts/ecl-message';
import notes from './README.md';

const getArgs = (data) => ({
  system: 'ec',
  title: data.title,
  variant: data.variant,
  description: data.description,
  iconPath: data.system === 'eu' ? iconPathEu : iconPathEc,
  closeLabel: 'close',
  attributes: {},
  classes: [],
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
  variant: {
    name: 'data-variant',
    type: { name: 'select' },
    options: ['info', 'success', 'warning', 'error'],
    description: 'Variants of the message component',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Style',
    },
  },
  title: {
    name: 'data-title',
    type: { name: 'string' },
    description: 'Title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  description: {
    name: 'data-description',
    type: { name: 'string' },
    description: 'Description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  closeLabel: {
    name: 'data-close-label',
    type: { name: 'string' },
    description: 'Label of the close button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  iconPath: {
    name: 'data-icon-path',
    type: { name: 'select' },
    description: 'Path to the icon sprite',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  classes: {
    name: 'data-classes',
    type: { name: 'array' },
    description: 'classes for the root element',
    table: {
      type: { summary: 'array' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  attributes: {
    name: 'data-attributes',
    type: { name: 'object' },
    description: 'attributes for the root element',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  Object.assign(data, args);

  if (args.attributes) {
    data.attributes = JSON.stringify(args.attributes);
  }

  if (args.classes) {
    data.classes = JSON.stringify(args.classes);
  }

  return data;
};

export default {
  title: 'Components/Message',
  decorators: [withNotes],
};

export const Default = (args) => html`<ecl-message
  data-system="${prepareData(dataDemo, args).system}"
  data-attributes="${prepareData(dataDemo, args).attributes}"
  data-classes="${prepareData(dataDemo, args).classes}"
  data-variant="${prepareData(dataDemo, args).variant}"
  data-title="${prepareData(dataDemo, args).title}"
  data-description="${prepareData(dataDemo, args).description}"
  data-close-label="${prepareData(dataDemo, args).closeLabel}"
  data-icon-path="${prepareData(dataDemo, args).iconPath}"
  data-ecl-auto-init
  data-ecl-script
>
</ecl-message>`;

Default.args = getArgs(dataDemo);
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes },
};
