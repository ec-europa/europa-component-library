import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// Import data for demos
import bannerDataImage from './demo/data--image';
import bannerDataVideo from './demo/data--video';
import bannerInpage from './banner-inpage.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_title: true,
    show_credit: true,
    credit: data.credit || '',
    font_size: 'm',
    title: data.title.link.label,
    full_width: true,
    gridContent: false,
  };
  if (data.picture) {
    args.image = data.picture.img.src || '';
  }
  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    ...getColorModeControls(),
    show_title: {
      name: 'title',
      type: { name: 'boolean' },
      description: 'Show the title',
      table: {
        category: 'Optional',
      },
    },
    show_credit: {
      name: 'credit',
      type: { name: 'boolean' },
      description: 'Show the credit',
      table: {
        category: 'Optional',
      },
    },
    font_size: {
      name: 'font size',
      type: 'select',
      description: 'Change font size',
      options: ['s', 'm', 'l'],
      control: {
        labels: {
          s: 'small',
          m: 'medium',
          l: 'large',
        },
      },
      mapping: {
        small: 's',
        medium: 'm',
        large: 'l',
      },
      table: {
        type: 'string',
        defaultValue: { summary: 'm' },
        category: 'Display',
      },
    },
    full_width: {
      name: 'full width',
      type: 'boolean',
      description: 'Take the full width of the viewport when in a container',
      mapping: {
        0: false,
        1: true,
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Display',
      },
    },
    title: {
      type: 'string',
      description: 'Heading of the banner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_title' },
    },
    credit: {
      type: 'string',
      description: 'Credit of the image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_credit' },
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

  if (data.picture) {
    argTypes.image = {
      type: 'string',
      description: 'Path or Url of the background image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  const { show_title: showTitle, show_credit: showCredit } = args;

  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));
  Object.assign(clone, args);

  if (!showTitle) delete clone.title;
  if (!showCredit) delete clone.credit;

  if (clone.picture) {
    clone.picture.img.src = args.image;
  }

  return clone;
};

const renderStory = async (data, args) => {
  let story = await bannerInpage(prepareData(data, args));
  story = `<div class="ecl-container">${story}</div>`;

  if (args.gridContent) {
    story +=
      '<div class="ecl-container"><p class="ecl-u-type-paragraph">Content inside the grid</p></div>';
  }

  return story;
};

export default {
  title: 'Components/Banner inpage',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Image = (_, { loaded: { component } }) => component;

Image.render = async (args) => {
  const renderedBannerImage = await renderStory(bannerDataImage, args);
  return renderedBannerImage;
};
Image.storyName = 'image';
Image.args = getArgs(bannerDataImage);
Image.argTypes = getArgTypes(bannerDataImage);
Image.parameters = { notes: { markdown: notes, json: bannerDataImage } };

export const Video = (_, { loaded: { component } }) => component;

Video.render = async (args) => {
  const renderedBannerVideo = await renderStory(bannerDataVideo, args);
  return renderedBannerVideo;
};
Video.storyName = 'video';
Video.args = getArgs(bannerDataVideo);
Video.argTypes = getArgTypes(bannerDataVideo);
Video.parameters = { notes: { markdown: notes, json: bannerDataVideo } };
