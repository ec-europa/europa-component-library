import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from './demo/data';
import addToCalendar from './add-to-calendar.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_title: true,
    show_meta: true,
    show_button: false,
    full_width: false,
    title: data.title,
    meta: data.meta,
    gridContent: false,
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    ...getColorModeControls(),
    show_title: {
      name: 'title',
      type: { name: 'boolean' },
      description: 'Show the title',
      table: {
        category: 'Optional',
      },
    },
    show_meta: {
      name: 'meta',
      type: { name: 'boolean' },
      description: 'Show the meta',
      table: {
        category: 'Optional',
      },
    },
    show_button: {
      name: 'button placeholder',
      type: { name: 'boolean' },
      description:
        'Show the button placeholder (this button is managed by Webtools)',
      table: {
        category: 'Optional',
      },
    },
    full_width: {
      name: 'full width',
      type: { name: 'boolean' },
      description: 'Take the full width of the viewport when in a container',
      table: {
        category: 'Display',
      },
    },
    title: {
      name: 'title',
      type: 'string',
      description: 'Event title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_title' },
    },
    meta: {
      name: 'meta',
      type: 'array',
      description: 'Meta content',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: [] },
        category: 'Content',
      },
      if: { arg: 'show_meta' },
    },
    gridContent: {
      name: 'demo grid content',
      type: { name: 'boolean' },
      description:
        'Inject a test content block displayed on the grid, to see the alignment',
      table: {
        category: 'Test content',
      },
      control: {
        type: 'boolean',
      },
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  if (!args.show_title) delete clone.title;
  if (!args.show_meta) delete clone.meta;

  if (args.show_button) {
    clone.button_add =
      "<div class='ecl-u-bg-white ecl-u-type-m ecl-u-type-color-black ecl-u-border-all ecl-u-border-color-error ecl-u-border-width-4 ecl-u-border-style-dashed ecl-u-pv-xs ecl-u-ph-s ecl-u-width-100'>Button placeholder</div>";
  }

  return Object.assign(clone, args);
};

const renderStory = async (data, args) => {
  let story = await addToCalendar(prepareData(data, args));
  story = `<div class="ecl-container">${story}</div>`;

  if (args.gridContent) {
    story +=
      '<div class="ecl-container"><p class="ecl-u-type-paragraph">Content inside the grid</p></div>';
  }

  return story;
};

export default {
  title: 'Components/Add to calendar',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedEvent = await renderStory(demoData, args);
  return renderedEvent;
};
Default.storyName = 'default';
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: { markdown: notes, json: demoData },
};
