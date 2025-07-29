import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// Import data for demos
import spotlightDataImage from './demo/data--image';
import spotlight from './spotlight.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_header: true,
    show_anchor: true,
    show_credit: true,
    font_size: 'l',
    header: data.header,
    title: data.title,
    credit: data.credit,
    full_width: true,
    sidebarContent: false,
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
    show_header: {
      name: 'header',
      type: { name: 'boolean' },
      description: 'Show the header',
      table: {
        category: 'Optional',
      },
    },
    show_anchor: {
      name: 'anchor',
      type: { name: 'boolean' },
      description: 'Show the visual anchor',
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
      options: ['m', 'l'],
      control: {
        labels: {
          m: 'medium',
          l: 'large',
        },
      },
      mapping: {
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
    header: {
      type: 'string',
      description: 'Header of the spotlight',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_header' },
    },
    title: {
      type: 'string',
      description: 'Title of the spotlight',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
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
    sidebarContent: {
      name: 'demo sidebar content',
      type: { name: 'boolean' },
      description:
        'Inject a test content block in the sidebar, to see the display',
      table: {
        category: 'Test content',
      },
      control: {
        type: 'boolean',
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
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));
  Object.assign(clone, args);

  if (!args.show_header) delete clone.header;
  if (!args.show_anchor) clone.has_anchor = 0;
  if (!args.show_credit) delete clone.credit;

  if (clone.picture) {
    clone.picture.img.src = args.image;
  }

  if (args.sidebarContent) {
    clone.full_width = false;
  }

  return clone;
};

const renderStory = async (data, args) => {
  let story = await spotlight(prepareData(data, args));

  if (args.gridContent) {
    story += '<p class="ecl-u-type-paragraph">Content inside the grid</p>';
  }

  if (args.sidebarContent) {
    story = `<div class="ecl-container"><div class="ecl-row"><div class="ecl-col-12 ecl-col-m-3"><p class="ecl-u-type-paragraph">Sidebar</p></div><div class="ecl-col-12 ecl-col-m-9">${story}</div></div></div>`;
  } else {
    story = `<div class="ecl-container">${story}</div>`;
  }

  return story;
};

export default {
  title: 'Components/Spotlight',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedSpotlight = await renderStory(spotlightDataImage, args);
  return renderedSpotlight;
};
Default.storyName = 'default';
Default.args = getArgs(spotlightDataImage);
Default.argTypes = getArgTypes(spotlightDataImage);
Default.parameters = { notes: { markdown: notes, json: spotlightDataImage } };
