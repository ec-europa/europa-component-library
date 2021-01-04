import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataImg from '@ecl/specs-component-media-container/demo/data--image';
import dataVideo from '@ecl/specs-component-media-container/demo/data--video';
import dataEmbed from '@ecl/specs-component-media-container/demo/data--embed-video';
import mediaContainer from './media-container.html.twig';
import notes from './README.md';

const getArgTypes = (data, media) => {
  const argTypes = {};

  if (media === 'video') {
    argTypes.description = {
      name: 'description',
      type: 'string',
      defaultValue: data.description,
      description: 'Media description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  } else if (media === 'image') {
    argTypes.image = {
      name: 'image',
      type: { name: 'string', required: true },
      defaultValue: data.image,
      description: 'Path or Url of the image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
    argTypes.description = {
      name: 'description',
      type: 'string',
      defaultValue: data.description,
      description: 'Media description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  } else {
    argTypes.description = {
      name: 'description',
      type: 'string',
      defaultValue: data.description,
      description: 'Media description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
    argTypes.ratio = {
      name: 'ratio',
      type: { name: 'select' },
      defaultValue: data.ratio,
      description: 'Media ratio',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
      control: {
        type: 'select',
        defaultValue: { summary: '16-9' },
        options: ['16-9', '4-3', '3-2', '1-1'],
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: 'Components/Media container',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Image = (args) => mediaContainer(prepareData(dataImg, args));

Image.storyName = 'image';
Image.argTypes = getArgTypes(dataImg, 'image');
Image.parameters = {
  notes: { markdown: notes, json: dataImg },
};

export const Video = (args) => mediaContainer(prepareData(dataVideo, args));

Video.storyName = 'video';
Video.argTypes = getArgTypes(dataVideo, 'video');
Video.parameters = {
  notes: { markdown: notes, json: dataVideo },
};

export const EmbeddedVideo = (args) =>
  mediaContainer(prepareData(dataEmbed, args));

EmbeddedVideo.storyName = 'embedded video';
EmbeddedVideo.argTypes = getArgTypes(dataEmbed, 'embed');
EmbeddedVideo.parameters = {
  notes: { markdown: notes, json: dataEmbed },
};
