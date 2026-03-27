import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import specs from './demo/data';
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

  if (args.withBackground) {
    data.full_width = true;
  }

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

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedQuiz = await quiz(prepareData(correctPaths(specs), args));
  return renderedQuiz;
};
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.storyName = 'reveal';
Default.parameters = { notes: { markdown: notes, json: specs } };
