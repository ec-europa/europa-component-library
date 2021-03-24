import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-accordion/demo/data';
import accordion from './accordion.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  const argTypes = {};
  data.items.forEach((item, i) => {
    argTypes[`toggle${i + 1}`] = {
      name: `toggle ${i + 1}`,
      type: { name: 'string', required: true },
      defaultValue: item.toggle.label,
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
      defaultValue: item.content,
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
  correctSvgPath(data);
  data.items.forEach((item, i) => {
    item.toggle.label = args[`toggle${i + 1}`];
    item.content = args[`content${i + 1}`];
  });

  return data;
};

export default {
  title: 'Components/Accordion',
};

export const Default = (args) => accordion(prepareData(demoData, args));
Default.argTypes = getArgTypes(demoData);
Default.storyName = 'default';
Default.parameters = {
  notes: {
    markdown: notes,
    json: demoData,
  },
};
Default.decorators = [withCode, withNotes];
