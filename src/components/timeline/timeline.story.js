import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoDataSet from './demo/data--set';
import timeline from './timeline.html.twig';
import timelineSet from './timeline-set.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_headline: true,
    items_before: data.hide.from,
    items_after: -1 * data.hide.to,
    nb_timeline: 1,
    headline_label: data.headline.label,
    headline_title: data.headline.title,
    headline_content: data.headline.content,
    label: data.items[0].label,
    title: data.items[0].title,
    content: data.items[0].content,
    showDummyContent: false,
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => ({
  ...getColorModeControls(),
  show_headline: {
    name: 'headline',
    type: { name: 'boolean' },
    description: 'Show the headline',
    table: {
      category: 'Optional',
    },
  },
  items_before: {
    name: 'items before',
    description:
      'Items before the toggle<br /> (toggle counter is not refreshed in the showcase)',
    control: { type: 'range', min: 0, max: 5, step: 1 },
    table: {
      type: { summary: 'string' },
      category: 'Display',
    },
  },
  items_after: {
    name: 'items after',
    description:
      'Items after the toggle<br /> (toggle counter is not refreshed in the showcase)',
    control: { type: 'range', min: 0, max: 5, step: 1 },
    table: {
      type: { summary: 'string' },
      category: 'Display',
    },
  },
  nb_timeline: {
    name: 'number of timelines',
    description:
      'Number of timeline displayed<br /> (grouped with timeline set)',
    control: { type: 'range', min: 1, max: 3, step: 1 },
    table: {
      type: { summary: 'string' },
      category: 'Display',
    },
  },
  headline_label: {
    type: { name: 'string' },
    description: 'Label of the timeline headline',
    table: {
      category: 'Headline content',
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    if: { arg: 'show_headline' },
  },
  headline_title: {
    type: { name: 'string' },
    description: 'Title of the timeline headline',
    table: {
      category: 'Headline content',
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    if: { arg: 'show_headline' },
  },
  headline_content: {
    type: { name: 'string' },
    description: 'Content of the timeline headline',
    table: {
      category: 'Headline content',
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
    if: { arg: 'show_headline' },
  },
  label: {
    type: { name: 'string' },
    description: 'Label of the timeline item',
    table: {
      category: 'First item content',
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  title: {
    type: { name: 'string' },
    description: 'Title of the timeline item',
    table: {
      category: 'First item content',
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  content: {
    type: { name: 'string' },
    description: 'Content of the timeline item',
    table: {
      category: 'First item content',
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  showDummyContent: {
    name: 'Add dummy content',
    type: { name: 'boolean' },
    description: 'Add dummy content at the bottom of the timeline.',
    table: {
      category: 'Test content',
    },
    control: {
      type: 'boolean',
    },
  },
});

// Prepare data for the navigation.
const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  if (!args.show_headline) {
    delete clone.headline;
  } else {
    clone.headline.title = args.headline_title;
    clone.headline.label = args.headline_label;
    clone.headline.content = args.headline_content;
  }

  clone.items[0].title = args.title;
  clone.items[0].label = args.label;
  clone.items[0].content = args.content;

  const { from, to } = clone.hide;
  let hiddenCount = 0;
  if (to > 0) {
    hiddenCount = to - from;
  } else {
    hiddenCount = clone.items.length + to - from;
  }
  clone.toggle_collapsed = `Show ${hiddenCount} more items`;
  clone.toggle_expanded = 'Show less';

  clone.hide.from = args.items_before;
  clone.hide.to = -1 * args.items_after;

  return Object.assign(clone, args);
};

const prepareDataSet = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  // Duplicate timeline to showcase a set
  for (let i = 1; i < args.nb_timeline; i += 1) {
    clone.items.push(clone.items[0]);
  }

  for (let i = 0; i < clone.items.length; i += 1) {
    clone.items[i] = prepareData(clone.items[i], args);
  }

  return clone;
};

// Prepare dummy Html for the main content.
const prepareHtmlContent = async (args) => {
  let story =
    args.nb_timeline > 1
      ? await timelineSet(prepareDataSet(demoDataSet, args))
      : await timeline(prepareData(demoDataSet.items[0], args));

  if (args.showDummyContent) {
    story += `<p class="ecl-u-type-paragraph-m ecl-u-mt-none">${loremIpsum({
      count: 25,
    })}</p>`;
  }

  return story;
};

export default {
  title: 'Components/Timeline',
  parameters: {
    chromatic: {
      modes: {
        m: { disable: true },
        xl: { disable: true },
      },
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedTimeline = await prepareHtmlContent(args);
  return renderedTimeline;
};
Default.storyName = 'default';
Default.args = getArgs(demoDataSet.items[0]);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: demoDataSet } };
Default.decorators = [withCode, withNotes];
