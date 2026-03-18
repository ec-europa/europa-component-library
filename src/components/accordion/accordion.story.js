import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';
import { userEvent, expect } from '@storybook/test';

import demoData from './demo/data';
import accordion from './accordion.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};
  args.use_name = false;
  data.items.forEach((item, i) => {
    args[`toggle${i + 1}`] = item.toggle.label;
    args[`content${i + 1}`] = item.content;
  });

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = getColorModeControls();

  argTypes.use_name = {
    name: 'use name',
    type: { name: 'boolean' },
    description: 'Use a name to link the items (only one item open)',
    table: {
      category: 'Optional',
    },
  };

  data.items.forEach((item, i) => {
    argTypes[`toggle${i + 1}`] = {
      name: `toggle ${i + 1}`,
      type: { name: 'string', required: true },
      description: 'Text of the accordion toggler',
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
  const clone = JSON.parse(JSON.stringify(data));
  correctPaths(clone);
  clone.items.forEach((item, i) => {
    item.toggle.label = args[`toggle${i + 1}`];
    item.content = args[`content${i + 1}`];
  });
  clone.color_mode = args.color_mode;

  if (args.use_name) {
    clone.name = 'accordion-name';
  }

  return clone;
};

export default {
  title: 'Components/Accordion',
  parameters: {
    chromatic: {
      modes: {
        xs: { disable: true },
        s: { disable: true },
        l: { disable: true },
        xl: { disable: true },
      },
    },
  },
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

export const Opened = (_, { loaded: { component } }) => component;

Opened.render = async () => {
  const renderedOpened = await accordion(demoData);
  return renderedOpened;
};

Opened.storyName = 'opened';
Opened.tags = ['!dev'];
Opened.play = async () => {
  ECL.autoInit();
  const item = document.querySelector('.is-first');
  const button = item.querySelector('.ecl-accordion__toggle');
  const content = item.querySelector('.ecl-accordion__content');
  await userEvent.click(button);
  expect(content).toBeVisible();
};
