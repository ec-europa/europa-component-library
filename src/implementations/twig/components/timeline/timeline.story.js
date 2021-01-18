import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-timeline/demo/data';
import timeline from './timeline.html.twig';
import notes from './README.md';

const getArgTypes = () => {
  const argTypes = {};
  argTypes.showDummyContent = {
    name: 'Add dummy content',
    type: { name: 'boolean' },
    defaultValue: false,
    description: 'Add dummy content at the bottom of the timeline.',
    table: {
      category: 'Test content',
    },
    control: {
      type: 'boolean',
    },
  };

  return argTypes;
};

// Prepare data for the navigation.
const prepareData = (data) => {
  const { from, to } = data.hide;
  let hiddenCount = 0;
  if (to > 0) {
    hiddenCount = to - from;
  } else {
    hiddenCount = data.items.length + to - from;
  }
  data.toggle_collapsed = `Show ${hiddenCount} more items`;
  data.toggle_expanded = `Hide ${hiddenCount} items`;

  correctSvgPath(data);

  return data;
};

// Prepare dummy Html for the main content.
const prepareHtmlContent = (state) => {
  let story = timeline(prepareData(demoData));
  if (state) {
    story += `<p class="ecl-u-type-paragraph-m">${loremIpsum({
      count: 25,
    })}</p>`;
  }

  return story;
};

export default {
  title: 'Components/Timeline',
  parameters: {
    knobs: {
      disable: true,
    },
  },
};

export const Default = (arg) => prepareHtmlContent(arg.showDummyContent);

Default.storyName = 'default';
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withCode, withNotes];
