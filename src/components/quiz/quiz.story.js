import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import specs from './demo/data';
import specsPoll from './demo/data-poll';
import quiz from './quiz.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    withBackground: false,
    fullWidth: false,
    image: 'none',
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  return {
    ...getColorModeControls(),
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
    image: {
      control: {
        type: 'select',
        labels: {
          '': 'none',
          always: 'front and back',
          reveal: 'only back',
        },
      },
      options: ['none', 'always', 'reveal'],
      mapping: {
        none: '',
        'front and back': 'always',
        'only back': 'reveal',
      },
    },
  };
};

const prepareData = (data, args) => {
  data.with_background = args.withBackground;
  data.full_width = args.fullWidth;
  data.color_mode = args.color_mode;

  if (data.full_width) {
    data.with_background = true;
  }

  data.items.forEach((item, i) => {
    item.picture = {};
    item.picture.img = {};
    if (args.image === 'always') {
      item.picture.img.src = `https://inno-ecl.s3.amazonaws.com/media/examples/example-image${i === 0 ? '' : i + 1}.jpg`;
      item.image = 'always';
    } else if (args.image === 'reveal') {
      item.picture.img.src = `https://inno-ecl.s3.amazonaws.com/media/examples/example-image${i === 0 ? '' : i + 1}.jpg`;
      item.image = 'reveal';
    } else {
      item.picture.img.src = '';
      item.image = '';
    }
  });

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
Reveal.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(specs, args),
  },
};
Reveal.decorators = [
  (Story) => `
    <div class="ecl-container">
      ${Story()}
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
Poll.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(specsPoll, args),
  },
};
Poll.decorators = [
  (Story) => `
    <div class="ecl-container">
      ${Story()}
    </div>
  `,
];
