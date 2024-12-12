import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-accordion/demo/data';
import accordion from './accordion.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};
  args.color_mode = 'none';
  data.items.forEach((item, i) => {
    args[`toggle${i + 1}`] = item.toggle.label;
    args[`content${i + 1}`] = item.content;
  });

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};
  argTypes.color_mode = {
    name: 'color mode',
    description: 'Choose color mode',
    type: { name: 'select' },
    options: ['none', 'light', 'dark', 'carnival'],
  };
  data.items.forEach((item, i) => {
    argTypes[`toggle${i + 1}`] = {
      name: `toggle ${i + 1}`,
      type: { name: 'string', required: true },
      description: `Text of the accordion toggler`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Toggles',
      },
      control: {
        type: 'text',
      },
    };
    argTypes[`content${i + 1}`] = {
      name: `content ${i + 1}`,
      type: { name: 'string', required: true },
      description: 'Text of the hidden content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Hidden content',
      },
      control: {
        type: 'text',
      },
    };
  });

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  data.items.forEach((item, i) => {
    item.toggle.label = args[`toggle${i + 1}`];
    item.content = args[`content${i + 1}`];
  });

  if (args.color_mode === 'none') {
    data.color_mode = '';
  } else {
    data.color_mode = args.color_mode;
  }

  return data;
};

export default {
  title: 'Components/Accordion',
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedAccordion = await accordion(prepareData(demoData, args));
  return renderedAccordion;
};
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.storyName = 'default';
Default.parameters = {
  notes: {
    markdown: notes,
    json: demoData,
  },
};
Default.decorators = [withCode, withNotes];
