import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import specs from './demo/data';
import specsPoll from './demo/data-poll';
import quiz from './quiz.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = { withBackground: false };

  return args;
};

const getArgTypes = () => {
  return {
    withBackground: {
      name: 'with background',
      control: {
        type: 'boolean',
      },
    },
  };
};

const prepareData = (data, args) => {
  data.with_background = args.withBackground;

  return data;
};

export default {
  title: 'Components/Quiz',
  decorators: [
    withNotes,
    withCode,
    (Story) => `
      <div class="ecl-container">
        ${Story()}
      </div>
    `,
  ],
  parameters: {
    parameters: { layout: 'fullscreen' },
  },
};

export const Reveal = (_, { loaded: { component } }) => component;

Reveal.render = async (args) => {
  const renderedQuiz = await quiz(prepareData(correctPaths(specs), args));
  return renderedQuiz;
};
Reveal.args = getArgs();
Reveal.argTypes = getArgTypes();
Reveal.storyName = 'reveal';
Reveal.parameters = { notes: { markdown: notes, json: specs } };

export const Poll = (_, { loaded: { component } }) => component;

Poll.render = async (args) => {
  const renderedQuiz = await quiz(prepareData(correctPaths(specsPoll), args));
  return renderedQuiz;
};
Poll.args = getArgs();
Poll.argTypes = getArgTypes();
Poll.storyName = 'poll';
Poll.parameters = { notes: { markdown: notes, json: specsPoll } };
