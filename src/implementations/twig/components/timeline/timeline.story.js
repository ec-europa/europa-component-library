import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoDataEc from '@ecl/specs-component-timeline/demo/data--ec';
import demoDataEu from '@ecl/specs-component-timeline/demo/data--eu';
import timeline from './timeline.html.twig';
import notes from './README.md';

const system = getSystem();
const demoData = system === 'eu' ? demoDataEu : demoDataEc;

const getArgs = (data) => ({
  title: data.items[0].title,
  label: data.items[0].label,
  content: data.items[0].content,
  showDummyContent: false,
});

const getArgTypes = () => ({
  title: {
    type: { name: 'string' },
    description: 'Title of the timeline item',
    table: {
      category: 'First item content',
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
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
  data.items[0].title = args.title;
  data.items[0].label = args.label;
  data.items[0].content = args.content;

  const { from, to } = data.hide;
  let hiddenCount = 0;
  if (to > 0) {
    hiddenCount = to - from;
  } else {
    hiddenCount = data.items.length + to - from;
  }
  data.toggle_collapsed = `Show ${hiddenCount} more items`;
  data.toggle_expanded = `Hide ${hiddenCount} items`;

  correctPaths(data);

  return data;
};

// Prepare dummy Html for the main content.
const prepareHtmlContent = async (args) => {
  let story = await timeline(prepareData(demoData, args));
  if (args.showDummyContent) {
    story += `<p class="ecl-u-type-paragraph-m ecl-u-mt-none">${loremIpsum({
      count: 25,
    })}</p>`;
  }

  return story;
};

export default {
  title: 'Components/Timeline',
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedTimeline = await prepareHtmlContent(args);
  return renderedTimeline;
};
Default.storyName = 'default';
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withCode, withNotes];
