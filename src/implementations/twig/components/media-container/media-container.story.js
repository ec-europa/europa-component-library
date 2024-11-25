import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataImg from '@ecl/specs-component-media-container/demo/data--image';
import dataVideo from '@ecl/specs-component-media-container/demo/data--video';
import dataEmbed from '@ecl/specs-component-media-container/demo/data--embed-video';
import dataInfographic from '@ecl/specs-component-media-container/demo/data--infographic';
import dataExpandable from '@ecl/specs-component-expandable/demo/data';
import mediaContainer from './media-container.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  let args = {
    show_description: true,
    description: data.description,
    show_expandable: false,
    full_width: false,
  };
  if (data.video) {
    args = {
      ...args,
      autoplay: false,
    };
  }
  if (data.image && !data.sources) {
    args.image = data.image;
  }
  if (data.embedded_media) {
    args.video_audio = '';
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
    show_expandable: {
      name: 'expandable',
      type: { name: 'boolean' },
      description: 'Show an expandable button',
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
      if: { arg: 'show_description' },
    },
  };

  if (data.image && !data.video) {
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

  if (data.video) {
    argTypes.autoplay = {
      name: 'auto play',
      type: 'boolean',
      description:
        'Video will start playing once rendered, muted, in a loop and without controls',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Display',
      },
    };
  }

  if (data.embedded_media) {
    argTypes.video_audio = {
      name: 'audio description',
      type: { name: 'select' },
      description:
        'Verbal depiction of any key information presented only visually in a video (specific alternative sound track reachable by screen readers only)',
      options: ['not needed', 'not yet', 'available in video'],
      control: {
        labels: {
          'not needed': 'not needed: no information in visuals only',
          'not yet': 'not available yet',
          'available in video': '',
        },
      },
      mapping: {
        'not needed: no information in visuals only': 'not needed',
        'not available yet': 'not yet',
        '': 'available in video',
      },
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
  if (args.show_expandable) {
    data.expandable = dataExpandable;
  } else {
    data.expandable = '';
  }
  if (args.video_audio) {
    switch (args.video_audio) {
      case 'not needed':
        data.sr_video_audio =
          'In the video below, there is no audiodescription available because all the content is in the captions and default audio track';
        break;

      case 'not yet':
        data.sr_video_audio =
          'In the video below, there is no audiodescription available yet';
        break;

      default:
        data.sr_video_audio = '';
        break;
    }
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
