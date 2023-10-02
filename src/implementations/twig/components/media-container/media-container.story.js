import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataImg from '@ecl/specs-component-media-container/demo/data--image';
import dataVideo from '@ecl/specs-component-media-container/demo/data--video';
import dataEmbed from '@ecl/specs-component-media-container/demo/data--embed-video';
import dataInfographic from '@ecl/specs-component-media-container/demo/data--infographic';
import mediaContainer from './media-container.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_description: true,
    description: data.description,
    full_width: false,
  };
  if (data.image && !data.sources) {
    args.image = data.image;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    show_description: {
      name: 'caption',
      type: { name: 'boolean' },
      description: 'Show the caption',
      table: {
        category: 'Optional',
      },
    },
    description: {
      name: 'caption content',
      type: 'string',
      description: 'Media caption',
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

  argTypes.full_width = {
    name: 'full width',
    type: 'boolean',
    description: `Extend the component to the full viewport width`,
    table: {
      defaultValue: { summary: 'false' },
      category: 'Display',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  data.full_width = args.width === 'inside';

  if (!args.show_description) {
    args.description = '';
  }

  return Object.assign(data, args);
};

const renderStory = async (data, args) => {
  let story = await mediaContainer(prepareData(data, args));
  story = `<div class="ecl-container">${story}</div>`;

  return story;
};

export default {
  title: 'Components/Media container',
  decorators: [withNotes, withCode],
  parameters: {
    viewport: {
      defaultViewport: 'pixelxl',
    },
  },
};

export const Image = (_, { loaded: { component } }) => component;

Image.render = async (args) => {
  const renderedImage = await renderStory(dataImg, args);
  return renderedImage;
};
Image.storyName = 'image';
Image.args = getArgs(dataImg);
Image.argTypes = getArgTypes(dataImg);
Image.parameters = {
  notes: { markdown: notes, json: dataImg },
};

export const Video = (_, { loaded: { component } }) => component;

Video.render = async (args) => {
  const renderedVideo = await renderStory(dataVideo, args);
  return renderedVideo;
};
Video.storyName = 'video';
Video.args = getArgs(dataVideo);
Video.argTypes = getArgTypes(dataVideo);
Video.parameters = {
  notes: { markdown: notes, json: dataVideo },
};

export const EmbeddedVideo = (_, { loaded: { component } }) => component;

EmbeddedVideo.render = async (args) => {
  const renderedEmbeddedVideo = await renderStory(dataEmbed, args);
  return renderedEmbeddedVideo;
};
EmbeddedVideo.storyName = 'embedded video';
EmbeddedVideo.args = {
  ...getArgs(dataEmbed),
  ratio: '',
};

EmbeddedVideo.argTypes = {
  ...getArgTypes(dataEmbed),
  ratio: {
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
    mapping: {
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
  },
};
EmbeddedVideo.parameters = {
  notes: { markdown: notes, json: dataEmbed },
  a11y: {
    config: {
      rules: [{ id: 'frame-tested', enabled: false }],
    },
  },
};

export const Infographic = (_, { loaded: { component } }) => component;

Infographic.render = async (args) => {
  const renderedInfographic = await renderStory(dataInfographic, args);
  return renderedInfographic;
};
Infographic.storyName = 'infographic';
Infographic.args = getArgs(dataInfographic);
Infographic.argTypes = getArgTypes(dataInfographic);
Infographic.parameters = {
  notes: { markdown: notes, json: dataInfographic },
};
