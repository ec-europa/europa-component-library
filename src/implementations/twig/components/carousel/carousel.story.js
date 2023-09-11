import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-carousel/demo/data';
import carousel from './carousel.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    width: 'container',
    size: 'm',
    gridContent: false,
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    width: {
      name: 'width',
      type: 'select',
      description: `The media container extends to the whole viewport by default when outside the grid,
        if it's inside it can still be extended by adding class .ecl-banner--full-width`,
      options: ['outside', 'container', 'inside'],
      control: {
        labels: {
          outside: 'outside the grid container',
          container: 'inside the grid container',
          inside: 'inside the grid container, with fullwidth class',
        },
      },
      mapping: {
        outside: 'outside the grid container',
        container: 'inside the grid container',
        inside: 'inside the grid container, with fullwidth class',
      },
      table: {
        defaultValue: '',
        category: 'Display',
      },
    },
    size: {
      name: 'carousel size',
      type: 'select',
      description: "Possible carousel sizes ('small', 'medium' or 'large')",
      options: ['s', 'm', 'l'],
      control: {
        labels: {
          s: 'small',
          m: 'medium',
          l: 'large',
        },
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'm' },
        category: 'Display',
      },
    },
    gridContent: {
      name: 'demo grid content',
      type: { name: 'boolean' },
      description:
        'Inject a test content block displayed on the grid, to see the alignment',
      table: {
        category: 'Test content',
      },
      control: {
        type: 'boolean',
      },
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.size = args.size;
  data.full_width =
    args.width === 'inside the grid container, with fullwidth class';

  return data;
};

const renderStory = (data, args) => {
  let story = carousel(prepareData(correctPaths(data), args));
  if (
    args.width === 'inside the grid container' ||
    args.width === 'inside the grid container, with fullwidth class'
  ) {
    story = `<div class="ecl-container">${story}</div>`;
  }
  if (args.gridContent) {
    story +=
      '<div class="ecl-container"><p class="ecl-u-type-paragraph">Content inside the grid</p></div>';
  }

  return story;
};

export default {
  title: 'Components/Carousel',
  decorators: [withNotes, withCode],
};

export const Default = (args) => renderStory(dataDefault, args);

Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
