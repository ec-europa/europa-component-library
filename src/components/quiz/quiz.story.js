import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import specs from './demo/data';
import specsPoll from './demo/data-poll';
import quiz from './quiz.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    withBackground: false,
    fullWidth: false,
  };

  return args;
};

const getArgTypes = () => {
  return {
    withBackground: {
      name: 'with background',
      control: {
        type: 'boolean',
      },
      if: { arg: 'fullWidth', eq: false },
    },
    fullWidth: {
      name: 'full width',
      control: {
        type: 'boolean',
      },
    },
  };
};

const prepareData = (data, args) => {
  data.with_background = args.withBackground;
  data.full_width = args.fullWidth;

  return data;
};

export default {
  title: 'Components/Quiz',
  decorators: [withNotes, withCode],
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
Reveal.decorators = [
  (Story) => `
    <div class="ecl-container">
      ${Story()}
    </div>
  `,
];
export const RevealSidebar = (_, { loaded: { component } }) => component;

RevealSidebar.render = async (args) => {
  const renderedQuiz = `${await quiz(prepareData(correctPaths(specs), args))}`;
  return renderedQuiz;
};
RevealSidebar.args = {
  ...getArgs(),
  withBackground: true,
};
RevealSidebar.argTypes = {
  ...getArgTypes(),
  fullWidth: {
    table: {
      disable: true,
    },
  },
};

RevealSidebar.storyName = 'reveal-sidebar';
RevealSidebar.parameters = { notes: { markdown: notes, json: specs } };
RevealSidebar.decorators = [
  (Story) => `
    <div class="ecl-container">
      <div class="ecl-row">
        <div class="ecl-col-l-3">
          <div style="height: 250px; width: 100%; border: 1px solid grey;">
          </div>
        </div>
        <div class="ecl-col-l-9">
          ${Story()}
        </div>
      </div>
    </div>
  `,
];

export const Poll = (_, { loaded: { component } }) => component;

Poll.render = async (args) => {
  const renderedQuiz = await quiz(prepareData(correctPaths(specsPoll), args));
  return renderedQuiz;
};
Poll.args = getArgs();
Poll.argTypes = getArgTypes();
Poll.storyName = 'poll';
Poll.parameters = { notes: { markdown: notes, json: specsPoll } };
Poll.decorators = [
  (Story) => `
    <div class="ecl-container">
      ${Story()}
    </div>
  `,
];
