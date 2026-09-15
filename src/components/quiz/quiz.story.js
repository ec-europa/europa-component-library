import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import specs from './demo/data';
import specsPoll from './demo/data-poll';
import quiz from './quiz.html.twig';
import notes from './README.md';

const icon = specs.items[0].icon;
const picture = specs.items[0].picture;

const getArgs = () => {
  let args = {};

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  args = {
    ...args,
    fullWidth: false,
    withBackground: false,
    image_display: 'none',
  };

  return args;
};

const getArgTypes = () => {
  return {
    ...getColorModeControls(),
    fullWidth: {
      name: 'full width',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    withBackground: {
      name: 'with background',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      if: { arg: 'fullWidth', eq: false },
    },
    icon: {
      description: 'Name of the icon (sample list)',
      type: 'select',
      options: [
        'none',
        'sparkle',
        'aperture',
        'avocado',
        'at',
        'barcode',
        'baseball',
        'bank',
        'bell',
        'question-mark',
      ],
      mapping: {
        none: 'none',
        sparkle: 'sparkle',
        aperture: 'aperture',
        avocado: 'avocado',
        at: 'at',
        barcode: 'barcode',
        baseball: 'baseball',
        bank: 'bank',
        bell: 'bell',
        'question-mark': 'question-mark',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'First card',
      },
    },
    image_display: {
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
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  };
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  clone.with_background = args.withBackground;
  clone.full_width = args.fullWidth;
  clone.color_mode = args.color_mode;

  if (clone.full_width) {
    clone.with_background = true;
  }

  if (args.icon !== 'none') {
    clone.items[0].icon = icon;
    clone.items[0].icon.icon.name = args.icon;
  } else {
    delete clone.items[0].icon;
  }

  clone.items.forEach((item, i) => {
    if (args.image_display === 'always') {
      item.picture = JSON.parse(JSON.stringify(picture));
      item.picture.img.src = `https://inno-ecl.s3.amazonaws.com/media/examples/example-image${i === 0 ? '' : i + 1}.jpg`;
      item.image_display = 'always';
    } else if (args.image_display === 'reveal') {
      item.picture = JSON.parse(JSON.stringify(picture));
      item.picture.img.src = `https://inno-ecl.s3.amazonaws.com/media/examples/example-image${i === 0 ? '' : i + 1}.jpg`;
      item.image_display = 'reveal';
    } else {
      delete item.picture;
      item.image_display = '';
    }
  });

  return clone;
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
Reveal.args = {
  ...getArgs(),
  icon: 'sparkle',
};
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
Poll.args = {
  ...getArgs(),
  icon: 'question-mark',
};
Poll.argTypes = getArgTypes();
Poll.argTypes.icon.if = {
  arg: 'image',
  neq: 'reveal',
};
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
