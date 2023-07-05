import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import specs from '@ecl/specs-component-news-ticker/demo/data';
import newsTicker from './news-ticker.html.twig';
import notes from './README.md';

export default {
  title: 'Components/News ticker',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedNewsTicker = await newsTicker(correctPaths(specs));
  return renderedNewsTicker;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
