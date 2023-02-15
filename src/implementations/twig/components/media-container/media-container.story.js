import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataImg from '@ecl/specs-component-media-container/demo/data--image';
import dataVideo from '@ecl/specs-component-media-container/demo/data--video';
import dataEmbed from '@ecl/specs-component-media-container/demo/data--embed-video';
import mediaContainer from './media-container.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_description: true,
    description: data.description,
    ratio: '',
    width: 'outside',
  };
  if (data.image && !data.sources) {
    args.image = data.image;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    show_description: {
      name: 'description',
      type: { name: 'boolean' },
      description: 'Show the description',
      table: {
        category: 'Optional',
      },
    },
    description: {
      name: 'description',
      type: 'string',
      description: 'Media description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };

  if (data.image && !data.sources) {
    argTypes.image = {
      name: 'image',
      type: { name: 'string', required: true },
      description: 'Path or Url of the image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  argTypes.ratio = {
    name: 'ratio',
    type: { name: 'select' },
    description: 'Media ratio (if empty the ratio will be set by the js)',
    options: {
      auto: '',
      '16/9': '16-9',
      '4/3': '4-3',
      '3/2': '3-2',
      '1/1': '1-1',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Display',
    },
  };

  argTypes.width = {
    name: 'width',
    description: `The media container extends to the whole viewport by default when outside the grid,
      if it's inside it can still be extended by adding class .ecl-media-container--full-width`,
    table: {
      type: { summary: 'radio' },
      defaultValue: { summary: 'outside the grid container' },
      category: 'Display',
    },
    control: {
      type: 'radio',
      options: ['outside', 'container', 'inside'],
      control: {
        labels: {
          outside: 'large (landscape)',
          container: 'inside the grid container',
          inside: 'inside the grid container, with fullwidth class',
        },
      },
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.full_width = args.width === 'inside';

  if (!args.show_description) {
    args.description = '';
  }

  return Object.assign(data, args);
};

const renderStory = (data, args) => {
  let story = mediaContainer(prepareData(data, args));
  if (args.width === 'container' || args.width === 'inside') {
    story = `<div class="ecl-container">${story}</div>`;
  }

  return story;
};

export default {
  title: 'Components/Media container',
  decorators: [withNotes, withCode],
};

export const Image = (args) => renderStory(dataImg, args);

Image.storyName = 'image';
Image.args = getArgs(dataImg);
Image.argTypes = getArgTypes(dataImg);
Image.parameters = {
  notes: { markdown: notes, json: dataImg },
};

export const Video = (args) => renderStory(dataVideo, args);

Video.storyName = 'video';
Video.args = getArgs(dataVideo);
Video.argTypes = getArgTypes(dataVideo);
Video.parameters = {
  notes: { markdown: notes, json: dataVideo },
};

export const EmbeddedVideo = (args) => renderStory(dataEmbed, args);

EmbeddedVideo.storyName = 'embedded video';
EmbeddedVideo.args = getArgs(dataEmbed);
EmbeddedVideo.argTypes = getArgTypes(dataEmbed);
EmbeddedVideo.parameters = {
  notes: { markdown: notes, json: dataEmbed },
  a11y: {
    config: {
      rules: [{ id: 'frame-tested', enabled: false }],
    },
  },
};
