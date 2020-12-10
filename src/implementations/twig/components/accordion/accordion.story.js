import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import demoData from '@ecl/specs-component-accordion/demo/data';

import accordion from './accordion.html.twig';
import notes from './README.md';

const argTypes = {};
demoData.items.forEach((item, i) => {
  item.toggle.icon.path = defaultSprite;
  item.toggle.icon.type = 'general';
  item.toggle.icon.size = 's';
  if (i === 0) {
    item.toggle.icon.name = 'digital';
  } else if (i === 1) {
    item.toggle.icon.name = 'growth';
  } else {
    item.toggle.icon.name = 'regulation';
  }
  argTypes[`toggle${i + 1}`] = {
    name: `toggle ${i + 1}`,
    type: { name: 'string', required: true },
    defaultValue: demoData.items[i].toggle.label,
    description: `Text of the accordion toggler`,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Togglers',
    },
    control: {
      type: 'text',
    },
  };
  argTypes[`content${i + 1}`] = {
    name: `Content ${i + 1}`,
    type: { name: 'string', required: true },
    defaultValue: demoData.items[i].content,
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

const prepareDataWithArgs = (data, args) => {
  demoData.items.forEach((item, i) => {
    demoData.items[i].toggle.label = args[`toggle${i + 1}`];
    demoData.items[i].content = args[`content${i + 1}`];
  });

  return data;
};

export default {
  title: 'Components/Accordion',
};

export const Default = (args) => accordion(prepareDataWithArgs(demoData, args));
Default.argTypes = argTypes;
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withCode, withNotes];
