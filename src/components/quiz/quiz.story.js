import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import specs from './demo/data';
import quiz from './quiz.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Quiz',
  decorators: [withNotes, withCode],
  parameters: {
    parameters: { layout: 'fullscreen' },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedQuiz = await quiz(correctPaths(specs));
  return renderedQuiz;
};
Default.storyName = 'reveal';
Default.parameters = { notes: { markdown: notes, json: specs } };
