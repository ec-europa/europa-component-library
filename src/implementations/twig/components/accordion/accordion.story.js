import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from '@ecl/specs-component-accordion/demo/data';
import accordion from './accordion.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};
  data.items.forEach((item, i) => {
    args[`toggle${i + 1}`] = item.toggle.label;
    args[`content${i + 1}`] = item.content;
  });

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};
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
  const system = getSystem();
  if (system === 'eu') {
    data.icon.name = 'corner-arrow';
  }
  correctPaths(data);
  data.items.forEach((item, i) => {
    item.toggle.label = args[`toggle${i + 1}`];
    item.content = args[`content${i + 1}`];
  });

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
