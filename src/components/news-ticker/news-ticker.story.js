import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import specs from './demo/data';
import newsTicker from './news-ticker.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    single_news: false,
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    single_news: {
      name: 'single news',
      type: 'boolean',
      description: 'Show a single news instead of a slider',
      table: {
        type: 'boolean',
      },
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  if (args.single_news) {
    clone.items.splice(1);
  }

  return clone;
};

export default {
  title: 'Components/News ticker',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedNewsTicker = await newsTicker(prepareData(specs, args));
  return renderedNewsTicker;
};
Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: specs } };
